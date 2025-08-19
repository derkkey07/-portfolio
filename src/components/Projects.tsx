import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Play, Code } from 'lucide-react'

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'バックパッカー向け位置共有アプリ',
      description: 'Flutter、React、Pythonを使用したバックパッカー向けの位置共有アプリケーション。リアルタイム位置追跡、スポット投稿、旅行記録機能を統合したクロスプラットフォームアプリ。',
      longDescription: 'このプロジェクトは、私が初めてフルスタック開発に挑戦した作品です。Flutterでモバイルアプリ、ReactでWebアプリ、PythonでバックエンドAPIを構築しました。特に地図表示の実装では、座標計算やユーザーの位置情報の扱いに苦労しましたが、最終的にはスムーズな地図操作を実現できました。リアルタイム位置追跡機能では、WebSocketを使用して複数ユーザーの位置を同時に表示し、旅行仲間との位置共有を可能にしました。',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      technologies: ['Flutter', 'React', 'Python', 'Firebase', 'Google Maps API', 'WebSocket', 'PostgreSQL'],
      github: 'https://github.com/derkkey07/backpacker-map',
      live: 'https://backpacker-map.vercel.app',
      features: ['リアルタイム位置追跡', 'スポット投稿・レビュー', '旅行記録・写真共有', 'オフライン地図', 'プッシュ通知', 'グループ機能'],
      stats: { users: '500+', downloads: '1K+', rating: '4.5' },
      developmentPeriod: '2023年6月 - 2023年12月',
      role: 'フルスタック開発（設計・開発・デプロイ・運用）',
      challenges: ['リアルタイム位置追跡の実装', 'オフライン対応とデータ同期', 'モバイル・Web間の統一UX', '位置情報のプライバシー保護'],
      solutions: ['WebSocket + Firebase Realtime Database', 'SQLite + バックグラウンド同期', '統一デザインシステムの構築', '位置情報の暗号化と権限管理'],
      learnings: ['リアルタイムアプリケーションの設計', 'クロスプラットフォーム開発の課題', '位置情報サービスの実装', 'ユーザープライバシーの重要性'],
      improvements: ['パフォーマンス最適化（位置更新頻度調整）', 'セキュリティ強化（JWT認証）', 'ユーザー体験向上（直感的なUI/UX）', 'バッテリー消費の最適化']
    },
    {
      id: 2,
      title: 'Flutter学習アプリ',
      description: 'Flutterを使用した学習管理アプリ。ユーザーが学習進捗を記録し、目標設定と達成度を可視化できるアプリケーション。',
      longDescription: 'Flutterの学習を始めた頃に作成したアプリで、ProviderパターンとSQLiteの使い方を学ぶことができました。特に状態管理の実装では、データの流れを理解するのに時間がかかりましたが、最終的には効率的なアーキテクチャを構築できました。',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
      github: 'https://github.com/derkkey07/learning-app',
      live: null,
      features: ['学習記録', '進捗管理', '目標設定', '統計表示'],
      stats: { users: '200+', downloads: '500+', rating: '4.3' },
      developmentPeriod: '2022年9月 - 2022年12月',
      role: 'モバイルアプリ開発（設計・開発・テスト）',
      challenges: ['Providerパターンの理解', 'SQLiteの効率的な操作', 'UI/UXの設計'],
      solutions: ['Providerの公式ドキュメント学習', 'Repositoryパターンの実装', 'Material Designガイドラインの活用'],
      learnings: ['Flutterの状態管理', 'ローカルデータベースの扱い', 'モバイルアプリの設計思想'],
      improvements: ['Blocパターンへの移行', 'テストコードの追加', 'パフォーマンス最適化']
    },
    {
      id: 3,
      title: 'Firebaseリアルタイムチャットアプリ',
      description: 'FlutterとFirebaseを使用したリアルタイムチャットアプリケーション。Firestore、Authentication、Cloud Functionsを活用し、リアルタイムでのメッセージ共有とユーザー管理を実装。',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Firestore', 'Authentication', 'Cloud Functions'],
      github: 'https://github.com/derkkey07/firebase-chat-app',
      live: null,
      features: ['リアルタイムチャット', 'ユーザー認証', 'プッシュ通知', 'オフライン対応'],
      stats: { users: '300+', downloads: '800+', rating: '4.6' }
    },
    {
      id: 4,
      title: 'Reactポートフォリオサイト',
      description: 'React、TypeScript、Tailwind CSSを使用したポートフォリオサイト。レスポンシブデザイン、ダークモード、アニメーション機能を実装。',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/derkkey07/portfolio-site',
      live: 'https://portfolio-site.vercel.app',
      features: ['レスポンシブデザイン', 'ダークモード', 'アニメーション', 'SEO最適化'],
      stats: { users: '1K+', downloads: '2K+', rating: '4.8' }
    },
    {
      id: 5,
      title: 'Ruby Webアプリ',
      description: 'Ruby、Sinatra、SQLiteを使用したシンプルなWebアプリケーション。ユーザー管理、データベース操作、基本的なCRUD機能を実装。',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['Ruby', 'Sinatra', 'SQLite', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/derkkey07/ruby-web-app',
      live: 'https://ruby-web-app.herokuapp.com',
      features: ['ユーザー管理', 'CRUD操作', 'データベース', 'レスポンシブデザイン'],
      stats: { users: '150+', downloads: '400+', rating: '4.1' }
    },
          {
        id: 6,
        title: 'Google Maps統合アプリ',
        description: 'ReactとGoogle Maps APIを使用した位置情報ベースのアプリケーション。Google Places API、Geocoding APIを活用し、場所の検索、ルート表示、レビュー機能を実装。',
        image: '/api/placeholder/400/250',
        category: 'web',
        technologies: ['React', 'Google Maps API', 'Google Places API', 'JavaScript', 'Tailwind CSS'],
        github: 'https://github.com/derkkey07/google-maps-app',
        live: 'https://google-maps-app.vercel.app',
        features: ['地図表示', '場所検索', 'ルート表示', 'レビュー機能'],
        stats: { users: '500+', downloads: '1.2K+', rating: '4.7' }
      },
      {
        id: 7,
        title: 'サイトデザインギャラリー',
        description: '16種類の異なるデザインテーマで作成された企業サイトのコレクション。様々な業界向けのWebサイトデザインを実装し、各業界の特性に合わせたUI/UX設計を実践。',
        image: '/api/placeholder/400/250',
        category: 'web',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Design'],
        github: 'https://github.com/derkkey07/web-sites-gallery',
        live: '/website-gallery/',
        features: ['16種類のデザインテーマ', '業界別サイト設計', 'レスポンシブデザイン', 'モダンなUI/UX'],
        stats: { users: '800+', downloads: '1.5K+', rating: '4.6' },
        longDescription: 'Web開発の学習過程で、様々なデザインテーマと業界向けのWebサイトを制作。Apple、Google、Microsoft、Spotifyなどの有名企業のデザインスタイルを参考に、モダンでプロフェッショナルなサイトを実装。各サイトは完全にレスポンシブ対応し、異なるデバイスでの表示を最適化。',
        developmentPeriod: '2022年 - 現在',
        role: 'Webデザイン・フロントエンド開発（全16サイト）',
        challenges: ['様々なデザインテーマの実装', '業界別の適切なUI/UX設計', 'レスポンシブデザインの統一'],
        solutions: ['デザインシステムの構築', '業界特性に合わせたカラーパレット', 'モバイルファーストの設計思想'],
        learnings: ['デザインの多様性', '業界別のユーザー心理', 'レスポンタイムデザインの実装'],
        improvements: ['アニメーションの追加', 'パフォーマンス最適化', 'アクセシビリティの向上']
      }
    ]

  const filters = [
    { id: 'all', label: 'すべて' },
    { id: 'web', label: 'Webアプリ' },
    { id: 'mobile', label: 'モバイルアプリ' },
    { id: 'data', label: 'データ分析' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            プロジェクト
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            これまでに開発した主要なプロジェクトとアプリケーションをご紹介します
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => {
                if (project.title === 'サイトデザインギャラリー') {
                  window.open('/website-gallery/', '_blank');
                } else if (project.live) {
                  window.open(project.live, '_blank');
                }
              }}
            >
              {/* Project Icon */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-600 dark:to-dark-700 flex items-center justify-center">
                  <Code className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">主要機能</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-50 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex justify-center space-x-2 pt-4 border-t border-gray-100 dark:border-dark-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Play className="w-4 h-4" />
                    </a>
                  )}
                  {project.title === 'サイトデザインギャラリー' && (
                    <a
                      href="/website-gallery/"
                      target="_blank"
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                      title="ギャラリーを見る"
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/derkkey07"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHubで他のプロジェクトを見る
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
