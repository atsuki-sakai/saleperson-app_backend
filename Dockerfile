# ==== ビルドステージ ====
FROM node:18-slim AS builder

WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# パッケージファイルをコピーしてインストール
COPY package*.json ./
RUN npm install

# Prisma Schemaをコピーして生成
COPY prisma ./prisma/
RUN npx prisma generate

# ソースコードをコピーしてビルド
COPY . .
RUN npm run build

# ==== 実行ステージ ====
FROM node:18-slim

WORKDIR /app

# 本番環境の依存関係のみをインストール
COPY package*.json ./
RUN npm install --production

# ビルド成果物をコピー
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/prisma ./prisma

# ポート公開（Cloud Runでは8080がデフォルト）
EXPOSE 8080

# アプリケーションを起動
CMD ["node", "dist/app.js"]
