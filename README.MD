# Saleperson Backend

バックエンドAPIサーバー for Saleperson Application

## 1. 技術スタック
- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Docker
- Cloud Run
- Cloud SQL

## 2. プロジェクト構造
```
src/
  ├─ services/
  │   ├─ dify/
  │   │   ├─ DifyService.ts          # Difyサービスのメインクラス
  │   │   ├─ errors/
  │   │   │   └─ DifyError.ts        # Dify専用のエラークラス
  │   │   ├─ types/                  # 型定義ディレクトリ
  │   │   │   ├─ index.ts
  │   │   │   ├─ DifyCommonTypes.ts  # 共通の型定義
  │   │   │   ├─ DatasetTypes.ts     # データセット関連
  │   │   │   ├─ DocumentTypes.ts    # ドキュメント関連
  │   │   │   ├─ SegmentTypes.ts     # セグメント関連
  │   │   │   └─ RetrievalTypes.ts   # 検索・取得関連
  │   │   ├─ repositories/           # API実装ディレクトリ
  │   │   │   ├─ DatasetRepository.ts
  │   │   │   ├─ DocumentRepository.ts
  │   │   │   └─ ...Repository.ts
  │   │   └─ index.ts
  │   └─ ... 他のService
```

## 3. 開発環境のセットアップ手順

### Step 1: 依存関係のインストール
```bash
npm install
```

### Step 2: 環境変数の設定
```bash
cp .env.example .env
# .envファイルを編集
```

### Step 3: Cloud SQL Proxyの起動
```bash
./cloud-sql-proxy --port 5432 saleperson-app:asia-northeast1:saleperson-app-db
```

### Step 4: Dockerの起動
```bash
docker compose up
```

### Step 5: データベースマイグレーション
```bash
npx prisma migrate dev
```

## 4. データベース接続設定

### 開発環境
```
DATABASE_URL=postgresql://{DB_USER_NAME}:{DB_PASSWORD}@localhost:{DB_PORT}/${DB_NAME}
```

### 本番環境
```
DATABASE_URL=postgresql://{DB_USER_NAME}:{DB_PASSWORD}@local/{DB_NAME}?host=/cloudsql/{DB_CONNECTION_NAME}
```

## 5. 本番環境の設定

### Cloud Run環境変数
| 変数名 | 値 |
|--------|-----|
| NODE_ENV | production |
| DATABASE_URL | postgresql://postgres:xxxxx@local/saleperson-app-db?host=/cloudsql/saleperson-app:asia-northeast1:saleperson-app-db |
| DB_USER | postgres |
| DB_NAME | saleperson-app-db |
| CLOUD_SQL_CONNECTION_NAME | saleperson-app:asia-northeast1:saleperson-app-db |
| PROJECT_ID | saleperson-app |

### Secret Manager設定
以下の変数をSecret Managerで管理:
- cloud-sql-connection-name
- database-url
- db-name
- db-password
- db-user
- node-env
- product-id

## 6. デプロイ前の準備

### GCPプロジェクトの設定
1. 必要なAPIの有効化:
   - Cloud Run API
   - Cloud Build API
   - Container Registry API
   - Cloud SQL Admin API
2. サービスアカウントの設定
3. Cloud SQLインスタンスの作成


```bash
./cloud-sql-proxy --port 5432 saleperson-app:asia-northeast1:saleperson-app-db

 docker compose up
```

