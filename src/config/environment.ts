export const environment = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  
  // データベース設定
  DATABASE: {
    // ローカル開発用DB設定
    development: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'development_db',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    },
    // Cloud SQL用設定
    production: {
      host: process.env.CLOUD_SQL_HOST,
      port: parseInt(process.env.CLOUD_SQL_PORT || '5432'),
      database: process.env.CLOUD_SQL_DATABASE,
      user: process.env.CLOUD_SQL_USER,
      password: process.env.CLOUD_SQL_PASSWORD,
      // Cloud SQL固有の設定
      socketPath: process.env.CLOUD_SQL_CONNECTION_NAME
    }
  }
}; 