#!/bin/sh

# Cloud SQL Proxyを起動（バックグラウンド）
cloud-sql-proxy --unix-socket /cloudsql &

# Prismaマイグレーションを実行
npx prisma migrate deploy

# アプリケーションを起動
node dist/app.js 