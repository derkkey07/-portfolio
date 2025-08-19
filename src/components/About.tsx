import React from 'react'
import { motion } from 'framer-motion'
import { Code, MapPin, Calendar, Mail, GraduationCap, Globe } from 'lucide-react'

const About: React.FC = () => {
  const personalInfo = [
    { icon: MapPin, label: '所在地', value: 'マレーシア、クアラルンプール' },
    { icon: Calendar, label: '年齢', value: '21歳' },
    { icon: Mail, label: 'メール', value: 'takuto.watanabeq@gmail.com' },
    { icon: GraduationCap, label: '専攻', value: 'Mechatronic Engineering' },
    { icon: Globe, label: '状況', value: 'マレーシアの大学に留学中' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            私について
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            情熱的なアプリ開発エンジニアとして、革新的なソリューションを創造することに情熱を持っています
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-600 dark:to-dark-700 rounded-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
                >
                  <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                経歴と情熱
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                中学時代からWebサイト制作に興味を持ち、現在はマレーシアの大学でMechatronic Engineeringを専攻しています。
                プログラミングの経験は6年以上あり、特にバックパッカー向け位置共有アプリの開発を通じて、
                Flutter、React、Python、Firebase、Google Maps API、WebSocketなど幅広い技術スタックを習得しています。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                専門分野
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Flutter（2年）、React（2年）、Python（4年）、Firebase（2年）、Google Maps API（2年）、WebSocket（2年）、
                JavaScript（4年）、HTML（6年）、CSS（6年）の経験を持ち、特にリアルタイムアプリケーション開発と
                クロスプラットフォーム開発が専門です。バックパッカー向け位置共有アプリでは、リアルタイム位置追跡、
                オフライン対応、プライバシー保護など複雑な要件を実現しました。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                開発哲学
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                コードの品質、パフォーマンス、セキュリティを重視し、保守性の高いアプリケーションの開発を心がけています。
                特にリアルタイムアプリケーションでは、ユーザーのプライバシー保護とデータセキュリティを最優先に考え、
                直感的で使いやすいインターフェースを設計することに情熱を持っています。
                バックパッカー向け位置共有アプリでは、位置情報の暗号化、権限管理、バッテリー消費の最適化など、
                実用的な課題解決に取り組みました。
              </p>
            </div>

            {/* Skills Preview */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                主要技術スタック
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'React', 'Python', 'Firebase', 'Google Maps API', 'WebSocket', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
