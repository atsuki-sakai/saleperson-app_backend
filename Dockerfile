FROM node:18-slim as builder

WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# パッケージファイルをコピーしてインストール
COPY package*.json ./
RUN npm install

# Prisma関連のファイルをコピーして生成
COPY prisma ./prisma/
RUN npx prisma generate

# ソースコードをコピーしてビルド
COPY . .
RUN npm run build

# 実行用の軽量イメージ
FROM node:18-slim

WORKDIR /app

# Cloud SQL Auth Proxyのインストール
RUN apt-get update -y && \
    apt-get install -y ca-certificates wget && \
    wget https://dl.google.com/cloudsql/cloud-sql-proxy.linux.amd64 -O /usr/local/bin/cloud-sql-proxy && \
    chmod +x /usr/local/bin/cloud-sql-proxy && \
    apt-get remove -y wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 本番環境の依存関係のみをインストール
COPY package*.json ./
RUN npm install --production

# ビルド成果物をコピー
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# 起動スクリプトをコピー
COPY start.sh ./
RUN chmod +x start.sh

EXPOSE 3000

# ヘルスチェックの設定
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/v1/health || exit 1

# アプリケーション起動
CMD ["./start.sh"]
