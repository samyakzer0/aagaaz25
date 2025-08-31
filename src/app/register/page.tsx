'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Mail,
  AlertCircle
} from 'lucide-react'

export default function RegisterPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Network with 500+ Participants',
      description: 'Connect with students, founders, and industry leaders',
      color: 'text-gdg-blue'
    },
    {
      icon: Award,
      title: 'Certificates & Recognition',
      description: 'Get certificates for select workshops and competitions',
      color: 'text-gdg-red'
    },
    {
      icon: CheckCircle,
      title: 'Free Entry & Goodies',
      description: 'Complete access to all events plus exciting merchandise',
      color: 'text-gdg-green'
    }
  ]

  const requirements = [
    'Valid Student ID card for entry verification',
    'Laptop/device for hands-on workshops (recommended)',
    'Enthusiasm to learn and network',
    'Respect for event guidelines and fellow participants'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gdg-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gdg-blue/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Register for <span className="gdg-text-gradient">AAGAAZ&apos;25</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Join us for two incredible days of technology, innovation, and cultural celebration. 
                Registration is completely free and includes access to all events!
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                <motion.div
                  className="flex items-center gap-3 glass-card px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="text-gdg-red" size={24} />
                  <span className="font-semibold text-gray-700">Limited Seats Available</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-3 glass-card px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="text-gdg-green" size={24} />
                  <span className="font-semibold text-gray-700">100% Free Registration</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Registration Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-1 gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Registration Card */}
              <motion.div
                variants={itemVariants}
                className="glass-card p-12 rounded-3xl border-2 border-gdg-blue/20 bg-gdg-blue/5 text-center"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(66, 133, 244, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  🎉
                </motion.div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  AAGAAZ&apos;25 Registration
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Join AAGAAZ&apos;25 – The Youth &amp; Tech Fest. Network with innovators, 
                  attend expert sessions, enjoy cultural evenings, and grab exciting goodies.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-8"
                >
                  <Link
                    href="https://forms.gle/KFzMipzuHYZ3J8GXA"
                    className="inline-flex items-center gap-3 px-12 py-6 bg-gdg-blue text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:glow-blue transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register for AAGAAZ&apos;25 Now
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ExternalLink size={24} />
                    </motion.div>
                  </Link>
                </motion.div>

                <div className="text-sm text-gray-500">
                  Registration takes less than 2 minutes
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why <span className="gdg-text-gradient">Register</span>?
              </h2>
              <p className="text-xl text-gray-600">
                Here&apos;s what you get when you join AAGAAZ&apos;25
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-8 rounded-2xl text-center hover-lift"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-16 h-16 ${benefit.color} mx-auto mb-6 flex items-center justify-center rounded-full bg-white/50`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon size={32} />
                  </motion.div>
                  <h3 className={`text-xl font-bold ${benefit.color} mb-4`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-12 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <AlertCircle className="w-12 h-12 text-gdg-yellow mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Important Notes for Participants
                </h2>
              </div>
              
              <div className="space-y-4 mb-8">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 glass rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <CheckCircle className="text-gdg-green w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{requirement}</p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-8 space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="text-gdg-blue" size={20} />
                  <span className="text-gray-600">For queries: </span>
                  <a 
                    href="mailto:gdgsage2024@gmail.com" 
                    className="text-gdg-blue hover:underline font-medium"
                  >
                    gdgsage2024@gmail.com
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    Each event has Limited seats — first come, first served
                  </p>
                  <p className="text-gray-600">
                    Don&apos;t miss out — Join 500+ participants at AAGAAZ&apos;25!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-12 rounded-3xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Join the Innovation Revolution?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Be part of AAGAAZ&apos;25 and connect with the future of technology and innovation.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-6"
              >
                <Link
                  href="https://forms.gle/KFzMipzuHYZ3J8GXA"
                  className="inline-flex items-center gap-3 px-12 py-6 bg-gdg-red text-white font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:glow-red transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now - It&apos;s Free!
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </Link>
              </motion.div>

              <p className="text-sm text-gray-500">
                Secure your spot today and be part of something extraordinary
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
