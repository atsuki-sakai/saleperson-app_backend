#!/bin/sh

# Cloud SQL Proxyを起動（バックグラウンド）
cloud-sql-proxy --credentials-file=./credentials.json --unix-socket /cloudsql saleperson-app:asia-northeast1:saleperson-app-db &

# Prismaマイグレーションを実行
npx prisma migrate deploy

# アプリケーションを起動
node dist/app.js 