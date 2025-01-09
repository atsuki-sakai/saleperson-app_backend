# ==== ビルドステージ ====
FROM node:18-slim AS builder

WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# パッケージファイルをコピーしてインストール
COPY package*.json ./
RUN npm ci

# TypeScriptのソースとPrismaスキーマをコピー
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

# Prisma Clientの生成とTypeScriptのビルド
RUN npx prisma generate
RUN npm run build

# ==== 実行ステージ ====
FROM node:18-slim

WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# 本番環境の依存関係のみをインストール
COPY package*.json ./
RUN npm ci --only=production

# ビルド成果物をコピー
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/prisma ./prisma

# 本番環境設定
ENV NODE_ENV=production

# Cloud Run は自動で $PORT を注入するため、EXPOSE 8080 にしておく
EXPOSE 8080

CMD ["node", "dist/app.js"]
