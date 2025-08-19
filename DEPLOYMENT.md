# 🚀 本環境デプロイガイド

## 📋 概要

このガイドでは、飲食店向けWebサイト制作のデモサイトを本環境で動作させる方法を説明します。

## 🛠️ 必要な環境

- Node.js 16.0.0以上
- npm 8.0.0以上
- モダンブラウザ（Chrome、Firefox、Safari、Edge）

## 📦 インストール

### **1. 依存関係のインストール**
```bash
npm install
```

### **2. 開発環境での動作確認**
```bash
npm run dev
```

## 🔨 本環境用ビルド

### **方法1: スクリプトを使用（推奨）**
```bash
./build-prod.sh
```

### **方法2: 手動でビルド**
```bash
npm run build:prod
```

## 🌐 デプロイ方法

### **1. 静的ファイルホスティング**

#### **Netlify**
1. `dist`フォルダをNetlifyにドラッグ&ドロップ
2. カスタムドメインを設定
3. HTTPSを有効化

#### **Vercel**
1. GitHubリポジトリを連携
2. ビルドコマンド: `npm run build:prod`
3. 出力ディレクトリ: `dist`

#### **GitHub Pages**
1. `dist`フォルダの内容を`gh-pages`ブランチにプッシュ
2. GitHub Pagesを有効化

### **2. レンタルサーバー**

#### **ファイルアップロード**
1. `dist`フォルダの内容をFTPでアップロード
2. `public_html`または`www`フォルダに配置

#### **.htaccess設定（Apache）**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]

# セキュリティヘッダー
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
```

### **3. クラウドサービス**

#### **AWS S3 + CloudFront**
1. S3バケットに`dist`フォルダの内容をアップロード
2. CloudFrontでCDNを設定
3. カスタムドメインとSSL証明書を設定

#### **Google Cloud Storage**
1. バケットに`dist`フォルダの内容をアップロード
2. カスタムドメインを設定
3. HTTPSを有効化

## 🔧 環境設定

### **1. 環境変数の設定**
本環境では以下の設定を推奨します：

```bash
NODE_ENV=production
VITE_APP_TITLE=飲食店向けWebサイト制作
VITE_APP_URL=https://your-domain.com
```

### **2. ドメイン設定**
- カスタムドメインを設定
- SSL証明書を有効化
- wwwとnon-wwwのリダイレクト設定

### **3. アナリティクス設定**
Google Analyticsやその他の分析ツールを設定：

```javascript
// Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');
```

## 📱 パフォーマンス最適化

### **1. 画像最適化**
- WebP形式の使用
- 適切なサイズでの提供
- 遅延読み込みの実装

### **2. キャッシュ設定**
```apache
# Apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### **3. 圧縮設定**
```apache
# Apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

## 🔒 セキュリティ設定

### **1. HTTPS強制**
```apache
# Apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### **2. セキュリティヘッダー**
```apache
# Apache
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

### **3. CSP（Content Security Policy）**
```apache
# Apache
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'"
```

## 📊 監視・メンテナンス

### **1. パフォーマンス監視**
- Google PageSpeed Insights
- WebPageTest
- Lighthouse

### **2. エラー監視**
- Sentry
- LogRocket
- カスタムエラーログ

### **3. 定期メンテナンス**
- 依存関係の更新
- セキュリティパッチの適用
- パフォーマンスの最適化

## 🚨 トラブルシューティング

### **よくある問題**

#### **1. 画像が表示されない**
- パスの確認
- ファイルの存在確認
- 権限の確認

#### **2. スタイルが適用されない**
- CSSファイルの読み込み確認
- キャッシュのクリア
- ブラウザの開発者ツールで確認

#### **3. JavaScriptが動作しない**
- コンソールエラーの確認
- ファイルの読み込み確認
- ブラウザの互換性確認

## 📞 サポート

問題が発生した場合は、以下を確認してください：

1. ブラウザの開発者ツールでエラーを確認
2. サーバーのログを確認
3. ネットワークタブでリクエストを確認

---

**作成日**: 2024年  
**目的**: 本環境デプロイガイド  
**対象**: システム管理者・開発者
