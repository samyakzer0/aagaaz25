'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  Target, 
  History, 
  Heart, 
  Award, 
  Globe,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

export default function AboutPage() {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const features = [
    {
      icon: Users,
      title: 'Who We Are',
      description: 'Google Developer Groups (GDG) SAGE University Indore is a community of developers, learners, and tech enthusiasts passionate about building with technology.',
      color: 'text-gdg-blue',
      bgColor: 'bg-gdg-blue/10'
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Build a thriving developer ecosystem, empower students with industry-ready skills, and encourage collaboration between youth, startups, and industry leaders.',
      color: 'text-gdg-red',
      bgColor: 'bg-gdg-red/10'
    },
    {
      icon: Heart,
      title: 'Why Join GDG?',
      description: 'Access free workshops, mentorship from industry experts, hands-on projects, networking opportunities, and certificates for select programs.',
      color: 'text-gdg-green',
      bgColor: 'bg-gdg-green/10'
    },
    {
      icon: Globe,
      title: 'Who Can Join?',
      description: 'Students seeking internships, professionals aiming to upskill, designers, product builders, and beginners looking for a friendly space to learn.',
      color: 'text-gdg-yellow',
      bgColor: 'bg-gdg-yellow/10'
    }
  ]

  const missions = [
    'Learn & Share: Boost skills through workshops and hands-on sessions',
    'Community Building: Collaborate and mentor within the local tech ecosystem',
    'Build & Ship: Take ideas from concept to prototype through hackathons',
    'Inclusivity: A welcoming environment for everyone — beginners to professionals'
  ]

  return (
    <div className="pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gdg-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gdg-green/10 rounded-full blur-3xl" />
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
                About <span className="gdg-text-gradient">GDG</span> SAGE University Indore
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Google Developer Groups (GDG) SAGE University Indore is a vibrant community 
                where developers, designers, and tech enthusiasts come together to learn, 
                share, and build amazing things with Google technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is GDG Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="glass-card p-12 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  What is <span className="gdg-text-gradient">GDG</span>?
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Google Developer Groups (GDGs) are local communities of developers, designers, 
                    product builders, students, and tech enthusiasts. They host free and open events 
                    to share knowledge, build projects, and create a supportive ecosystem for innovation.
                  </p>
                  <div className="flex items-center gap-3">
                    <History className="text-gdg-blue" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800">A Brief History</h3>
                      <p className="text-gray-600">
                        GDGs started as part of Google&apos;s developer outreach program. Today, 
                        thousands of chapters exist worldwide, all run by volunteers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: '1000+', label: 'Global Chapters' },
                    { number: '500K+', label: 'Members Worldwide' },
                    { number: '50+', label: 'Countries' },
                    { number: '10K+', label: 'Events per Year' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center glass p-6 rounded-xl"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`text-2xl font-bold text-gdg-blue mb-1`}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`glass-card p-8 rounded-2xl border-2 border-transparent hover:${feature.color.replace('text-', 'border-')} ${feature.bgColor} hover-lift`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
                  <h3 className={`text-2xl font-bold ${feature.color} mb-4`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Details */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="glass-card p-12 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Our <span className="gdg-text-gradient">Mission</span> in Detail
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {missions.map((mission, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 glass rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-2 h-2 bg-gdg-blue rounded-full mt-3 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{mission}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gdg-green mb-3">Benefits of Joining</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Free workshops on Android, Web, Cloud, ML, Flutter, Firebase</li>
                      <li>• Mentorship from industry experts</li>
                      <li>• Hands-on project opportunities & hackathons</li>
                      <li>• Networking with recruiters, startups, and peers</li>
                      <li>• Certificates and badges for select programs</li>
                    </ul>
                  </div>
                  <motion.div
                    className="glass p-6 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Award className="text-gdg-yellow w-8 h-8 mb-3" />
                    <h3 className="text-xl font-bold text-gdg-yellow mb-3">Recognition</h3>
                    <p className="text-gray-600">
                      Get recognized for your contributions to the community through 
                      certificates, badges, and speaking opportunities.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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
                GDG — Where Developers & Ideas Grow Together
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                A community driven by curiosity — workshops, hackathons, mentorship, 
                and real-world projects. Open for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://chat.whatsapp.com/F0OZz8qBGp376oCzOYd1AD"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gdg-green text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:glow-green transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Community
                    <ExternalLink size={20} />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://gdg.community.dev/gdg-on-campus-sage-university-indore-india/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-800 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-gdg-blue transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Events
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Get in Touch</h3>
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600">
                  <a 
                    href="mailto:gdgsage2024@gmail.com" 
                    className="hover:text-gdg-blue transition-colors duration-300"
                  >
                    📧 gdgsage2024@gmail.com
                  </a>
                  <span className="hidden sm:block">|</span>
                  <a 
                    href="https://www.instagram.com/gdg_sage.university?igsh=aWJjMzA4cmJ3N2ow" 
                    className="hover:text-gdg-red transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 Instagram
                  </a>
                  <span className="hidden sm:block">|</span>
                  <a 
                    href="https://www.linkedin.com/company/gdg-on-campus-sui/" 
                    className="hover:text-gdg-blue transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
