# Salesperson Backend

バックエンドAPIサーバー for Salesperson Application

##開発中はCloud SQL Proxyでトンネルを立ち上げてからコンテナ起動

```bash
./cloud-sql-proxy --port 5432 saleperson-app:asia-northeast1:saleperson-app-db

./cloud-sql-proxy \
  --address 0.0.0.0 \
  --port 5432 \
  --credentials-file=credentials.json \
  saleperson-app:asia-northeast1:saleperson-app-db

 docker compose up
```


## 技術スタック

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Docker
- Cloud Run
- Cloud SQL

## 開発環境のセットアップ

1. 必要な依存関係をインストール:
```bash
npm install
```

2. 環境変数の設定:
```bash
cp .env.example .env
# .envファイルを編集して必要な値を設定
```

3. データベースのマイグレーション:
```bash
npx prisma migrate dev
```

4. アプリケーションの起動:
```bash
# 開発モード
npm run dev

# 本番モード
npm run build
npm start
```

## Docker Composeでの実行

```bash
# コンテナのビルドと起動
docker compose up -d

# ログの確認
docker compose logs -f
```

## デプロイ

このアプリケーションはCloud RunとCloud SQLを使用してデプロイされます。

### 必要な準備

1. GCPプロジェクトの設定
2. 必要なAPIの有効化:
   - Cloud Run API
   - Cloud Build API
   - Container Registry API
   - Cloud SQL Admin API
3. サービスアカウントの設定
4. Cloud SQLインスタンスの作成

### デプロイ手順

```bash
# Cloud Buildでビルドとデプロイを実行
gcloud builds submit
```

## API エンドポイント

- `GET /api/v1/health`: ヘルスチェック
- `POST /api/v1/stores`: ストアの作成
- `GET /api/v1/stores`: ストア一覧の取得
- `GET /api/v1/stores/:storeId`: 特定のストアの取得
- `PUT /api/v1/stores/:storeId`: ストアの更新
- `DELETE /api/v1/stores/:storeId`: ストアの削除

## ライセンス

MIT