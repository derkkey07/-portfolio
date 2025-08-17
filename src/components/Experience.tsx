import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Experience: React.FC = () => {
  const workExperience = [
    {
      id: 1,
      title: 'フルスタック開発者',
      company: 'フリーランス',
      period: '2022年 - 現在',
      location: 'マレーシア・日本',
      description: 'バックパッカー向けマップ共有サイトの設計から開発までを担当。フロントエンド・バックエンド・データベース設計を一貫して実装。',
      technologies: ['Flutter', 'React', 'Python', 'Ruby', 'JavaScript', 'HTML/CSS'],
      achievements: [
        'ユーザー体験を重視した直感的なUI/UX設計',
        'レスポンシブデザインによる多デバイス対応',
        '効率的なデータベース設計とAPI開発'
      ]
    },
    {
      id: 2,
      title: 'Web開発者',
      company: '個人開発',
      period: '2018年 - 2022年',
      location: '日本',
      description: '中学時代からWebサイト制作に取り組み、HTML、CSS、JavaScriptを使用したフロントエンド開発を経験。',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      achievements: [
        '複数のWebサイトの設計・開発・デプロイ',
        'モバイルファーストのレスポンシブデザイン実装',
        'ユーザビリティを重視したUI/UX設計'
      ]
    },
    {
      id: 3,
      title: 'Python開発者',
      company: '学習・個人プロジェクト',
      period: '2019年 - 現在',
      location: '日本・マレーシア',
      description: 'Pythonを使用したバックエンド開発、データ処理、API開発を学習・実践。機械学習やデータ分析にも興味を持つ。',
      technologies: ['Python', 'Flask', 'Django', 'Pandas', 'NumPy', 'SQLite'],
      achievements: [
        '複数のPythonプロジェクトの開発・実装',
        'データ処理とAPI開発の経験',
        '継続的な学習とスキル向上'
      ]
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Mechatronic Engineering学士（在学中）',
      school: 'マレーシアの大学',
      period: '2022年 - 現在',
      location: 'マレーシア、クアラルンプール',
      description: 'Mechatronic Engineeringを専攻し、機械工学、電子工学、制御工学、プログラミングを学んでいます。',
      gpa: '在学中',
      relevantCourses: ['メカトロニクス', '制御工学', 'プログラミング', '機械設計', '電子回路']
    }
  ]

  const continuousLearning = [
    {
      id: 1,
      name: 'Flutter開発スキル',
      area: 'モバイルアプリ開発',
      period: '2022年 - 現在',
      status: '継続学習中',
      description: 'Flutterを使用したクロスプラットフォームモバイルアプリ開発のスキルを継続的に向上させています。'
    },
    {
      id: 2,
      name: 'Pythonプログラミング',
      area: 'データ分析・Web開発',
      period: '2020年 - 現在',
      status: '継続学習中',
      description: 'Pythonプログラミングの基礎から応用まで、継続的に学習を進めています。'
    },
    {
      id: 3,
      name: 'Web開発技術',
      area: 'フロントエンド・バックエンド',
      period: '2018年 - 現在',
      status: '継続学習中',
      description: 'HTML、CSS、JavaScript、React、Rubyを使用したWeb開発のスキルを継続的に向上させています。'
    },
    {
      id: 4,
      name: 'Firebase・Google Cloud',
      area: 'クラウド・API開発',
      period: '2023年 - 現在',
      status: '継続学習中',
      description: 'Firebase、Google Cloud Platform、Google APIsを使用したクラウドアプリケーション開発を学習中。'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            経験・経歴
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            これまでの職歴、学歴、継続学習などの経歴をご紹介します
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">職歴</h3>
            </motion.div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-l-xl"></div>
                  
                  <div className="pl-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {job.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">使用技術</h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">主な成果</h5>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">学歴</h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-l-xl"></div>
                  
                  <div className="pl-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="w-4 h-4" />
                            <span>{edu.school}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">関連科目</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">継続学習・自己研鑽</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {continuousLearning.map((learning, index) => (
                <motion.div
                  key={learning.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {learning.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {learning.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {learning.area}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {learning.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-dark-700">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">学習期間</span>
                        <span className="font-medium text-gray-900 dark:text-white">{learning.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
