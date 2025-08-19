// 本環境用設定
export const productionConfig = {
  // アプリケーション設定
  app: {
    title: '飲食店向けWebサイト制作',
    description: 'カフェ、レストラン、ピザ屋など飲食店向けのWebサイト制作サービス',
    version: '1.0.0'
  },
  
  // API設定
  api: {
    baseUrl: 'https://api.your-domain.com',
    timeout: 30000
  },
  
  // アナリティクス設定
  analytics: {
    googleAnalyticsId: 'GA_MEASUREMENT_ID',
    enableTracking: true
  },
  
  // パフォーマンス設定
  performance: {
    enableServiceWorker: true,
    enablePWA: true,
    cacheStrategy: 'network-first'
  },
  
  // セキュリティ設定
  security: {
    enableHTTPS: true,
    enableCSP: true,
    enableHSTS: true
  }
}

export default productionConfig;
