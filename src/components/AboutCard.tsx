'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Lightbulb, Rocket } from 'lucide-react'

const AboutCard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const stats = [
    { icon: Users, value: '500+', label: 'Attendees', color: 'text-gdg-blue' },
    { icon: Lightbulb, value: '10+', label: 'Workshops', color: 'text-gdg-yellow' },
    { icon: Rocket, value: '2', label: 'Days', color: 'text-gdg-green' }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                About{' '}
                <span className="gdg-text-gradient">AAGAAZ&apos;25</span>
              </motion.h2>
              
              <motion.div
                className="space-y-4 text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  AAGAAZ&apos;25 is a 2-day, student-driven festival that celebrates innovation, 
                  collaboration, and cultural vibrancy. Organized by GDG SAGE University Indore, 
                  the event is expected to bring together more than 500 students, startup founders, 
                  and industry leaders from across the region.
                </p>
                
                <p>
                  This unique festival blends technology workshops, startup showcases, cultural 
                  performances, and networking opportunities to create an unforgettable experience 
                  for all participants.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gdg-blue text-white font-semibold rounded-xl hover:bg-gdg-blue/90 transition-all duration-300 hover:shadow-xl hover:glow-blue group"
              >
                Learn More About GDG
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 rounded-xl text-center hover-lift"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Card */}
            <motion.div
              className="glass-card p-8 rounded-2xl space-y-6"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Attend AAGAAZ&apos;25?
              </h3>
              
              <div className="space-y-3">
                {[
                  '🚀 Hands-on Tech Workshops',
                  '💡 Startup Pitch Competitions',
                  '🎤 Cultural Performances',
                  '🤝 Industry Networking',
                  '🎁 Exciting Prizes & Goodies'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to be Part of Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6">
              Join us for two days of innovation, learning, and unforgettable experiences 
              at SAGE University Indore.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://forms.gle/KFzMipzuHYZ3J8GXA"
                className="inline-block px-8 py-4 bg-gdg-red text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:glow-red transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now - It&apos;s Free!
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCard
