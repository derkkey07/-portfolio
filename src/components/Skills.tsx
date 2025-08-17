import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Palette, Server } from 'lucide-react'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'フロントエンド',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 95, color: 'bg-orange-500' },
        { name: 'CSS', level: 95, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'React', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
      ]
    },
    {
      title: 'バックエンド',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', level: 90, color: 'bg-yellow-500' },
        { name: 'Ruby', level: 80, color: 'bg-red-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-600' },
        { name: 'Node.js', level: 75, color: 'bg-green-600' },
        { name: 'Express.js', level: 70, color: 'bg-gray-600' },
      ]
    },
    {
      title: 'データベース',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 80, color: 'bg-green-500' },
        { name: 'Redis', level: 75, color: 'bg-red-600' },
        { name: 'MySQL', level: 70, color: 'bg-blue-600' },
      ]
    },
    {
      title: 'クラウド・API',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Firebase', level: 85, color: 'bg-orange-500' },
        { name: 'Google Cloud Platform', level: 80, color: 'bg-blue-600' },
        { name: 'Google APIs', level: 75, color: 'bg-green-600' },
        { name: 'Cloud Functions', level: 70, color: 'bg-purple-600' },
      ]
    },
    {
      title: 'モバイル開発',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Flutter', level: 85, color: 'bg-blue-500' },
        { name: 'React Native', level: 70, color: 'bg-blue-600' },
        { name: 'Dart', level: 80, color: 'bg-blue-700' },
        { name: 'Mobile UI/UX', level: 75, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'デザイン・ツール',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 75, color: 'bg-purple-500' },
        { name: 'Adobe XD', level: 70, color: 'bg-pink-500' },
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            技術スキル
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            幅広い技術スタックを習得し、様々なプロジェクトに対応できる能力を身につけています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color} transition-all duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            その他のスキル・ツール
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
                             'Git', 'GitHub', 'REST API', 'WebSocket', 'Jest', 'Cypress',
               'Webpack', 'Vite', 'ESLint', 'Prettier', 'Responsive Design',
               'Agile', 'Scrum', 'UI/UX Design', 'Cross-platform Development'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
