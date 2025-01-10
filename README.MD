# Saleperson Backend

バックエンドAPIサーバー for Saleperson Application

##開発中はCloud SQL Proxyでトンネルを立ち上げてからコンテナ起動して下さい。

```bash
./cloud-sql-proxy --port 5432 saleperson-app:asia-northeast1:saleperson-app-db

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

## プロジェクト構造

```
src/
  ├─ services/
  │   ├─ dify/
  │   │   ├─ DifyService.ts          # Difyサービスのメインクラス
  │   │   ├─ errors/
  │   │   │   └─ DifyDrror.ts        # Dify専用のエラークラス
  │   │   ├─ types/
  │   │   │   ├─ index.ts            # 型定義のエクスポート
  │   │   │   ├─ DifyCommonTypes.ts  # 共通の型定義
  │   │   │   ├─ DatasetTypes.ts     # データセット関連の型
  │   │   │   ├─ DocumentTypes.ts    # ドキュメント関連の型
  │   │   │   ├─ SegmentTypes.ts     # セグメント関連の型
  │   │   │   └─ RetrievalTypes.ts   # 検索・取得関連の型
  │   │   ├─ repositories/
  │   │   │   ├─ DatasetRepository.ts    # データセットAPI
  │   │   │   ├─ DocumentRepository.ts   # ドキュメントAPI
  │   │   │   └─ ...Repository.ts
  │   │   └─ index.ts                # 公開用エントリーポイント
  │   └─ ... 他のService
  └─ ...
```

### サービス構造の説明

#### 1. 型定義 (`types/`)
- `DifyCommonTypes.ts`: エラーなど共通の型定義
- `DatasetTypes.ts`: データセット（ナレッジベース）のリクエスト/レスポンス型
- `DocumentTypes.ts`: ドキュメント操作の型定義
- `SegmentTypes.ts`: セグメント（チャンク）関連の型
- `RetrievalTypes.ts`: 検索・取得機能の型定義

#### 2. リポジトリ (`repositories/`)
各APIエンドポイントごとに分割された実装:
- `DatasetRepository.ts`: データセット操作
- `DocumentRepository.ts`: ドキュメント操作
- 他のリポジトリ

#### 3. サービス層
`DifyService.ts`: 各リポジトリを統合し、外部向けのインターフェースを提供

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