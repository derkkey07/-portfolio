import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      title: 'メール',
      value: 'takuto.watanabeq@gmail.com',
      link: 'mailto:takuto.watanabeq@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: '電話',
      value: 'なし',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: '所在地',
      value: 'マレーシア、クアラルンプール',
      link: 'https://maps.google.com/?q=Kuala+Lumpur+Malaysia',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // シミュレーション: 実際のAPIコール
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetStatus = () => {
    setSubmitStatus('idle')
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            プロジェクトのご相談、お仕事のご依頼、その他ご質問など、お気軽にお問い合わせください
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                連絡先情報
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                フリーランスでのお仕事や、新しいプロジェクトのご相談を承っております。
                技術的なアドバイスや、開発のサポートも可能です。
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      target={info.title === '所在地' ? '_blank' : '_self'}
                      rel={info.title === '所在地' ? 'noopener noreferrer' : ''}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-primary-100 dark:border-primary-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                対応可能な業務
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>Webアプリケーション開発（フロントエンド・バックエンド）</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>モバイルアプリ開発（iOS・Android）</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>システム設計・アーキテクチャ設計</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  <span>技術的なアドバイス・コンサルティング</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              お問い合わせフォーム
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    お問い合わせを送信しました！
                  </span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-2">
                  通常24時間以内にご返信いたします。
                </p>
                <button
                  onClick={resetStatus}
                  className="text-green-600 dark:text-green-400 text-sm underline mt-2 hover:text-green-700 dark:hover:text-green-300"
                >
                  新しいお問い合わせを送信
                </button>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-800 dark:text-red-200 font-medium">
                    送信に失敗しました
                  </span>
                </div>
                <p className="text-red-700 dark:text-red-300 text-sm mt-2">
                  しばらく時間をおいて再度お試しください。
                </p>
                <button
                  onClick={resetStatus}
                  className="text-red-600 dark:text-red-400 text-sm underline mt-2 hover:text-red-700 dark:hover:text-red-300"
                >
                  再試行
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                    placeholder="田中太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  件名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                  placeholder="プロジェクトのご相談について"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 resize-none"
                  placeholder="プロジェクトの詳細やご要望をお聞かせください..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>送信中...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>送信する</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              お送りいただいた情報は、お問い合わせへの対応以外には使用いたしません。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
