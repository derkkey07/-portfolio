#!/bin/bash

# 本環境用ビルドスクリプト
echo "🚀 本環境用ビルドを開始します..."

# 依存関係のインストール
echo "📦 依存関係をインストール中..."
npm install

# 本環境用ビルド
echo "🔨 本環境用ビルド中..."
npm run build:prod

# ビルド結果の確認
if [ -d "dist" ]; then
    echo "✅ ビルドが完了しました！"
    echo "📁 出力ディレクトリ: dist/"
    echo "📊 ファイルサイズ:"
    du -sh dist/*
    
    echo ""
    echo "🌐 プレビューを開始します..."
    npm run preview:prod
else
    echo "❌ ビルドに失敗しました"
    exit 1
fi
