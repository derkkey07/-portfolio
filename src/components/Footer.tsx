import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:tanaka.taro@example.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                  Mechatronic Engineeringを専攻する大学生として、Flutter、React、Pythonなどを中心とした
                  モバイルアプリ・Webアプリケーションの開発に取り組んでいます。
                  中学時代から続けてきたプログラミングの経験を活かし、革新的なソリューションを創造することに情熱を持っています。
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-3 bg-gray-800 dark:bg-dark-800 rounded-lg text-gray-300 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
              <ul className="space-y-2">
                {[
                  { name: 'ホーム', href: '#home' },
                  { name: '私について', href: '#about' },
                  { name: 'スキル', href: '#skills' },
                  { name: 'プロジェクト', href: '#projects' },
                  { name: '経験', href: '#experience' },
                  { name: 'お問い合わせ', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">連絡先</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400">
                <li>takuto.watanabeq@gmail.com</li>
                <li>電話番号なし</li>
                <li>マレーシア、クアラルンプール</li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 dark:border-dark-800 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 mb-4 md:mb-0"
            >
              <span>© 2024 渡邉拓斗. All rights reserved.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in Japan</span>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white transition-colors duration-200 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
      </motion.button>
    </footer>
  )
}

export default Footer
