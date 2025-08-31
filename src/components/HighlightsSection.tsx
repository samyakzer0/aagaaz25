'use client'

import { motion } from 'framer-motion'
import { 
  Rocket, 
  Lightbulb, 
  Code, 
  Mic, 
  Gift, 
  Users 
} from 'lucide-react'

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Rocket,
      title: 'Tech Talks & Workshops',
      description: 'Learn from industry experts about AI, Machine Learning, Web Development, and Cloud Computing.',
      color: 'text-gdg-blue',
      bgColor: 'bg-gdg-blue/10',
      borderColor: 'border-gdg-blue/20'
    },
    {
      icon: Lightbulb,
      title: 'Startup Pitch & MVP Showcase',
      description: 'Present innovative ideas and MVPs to mentors and investors for valuable feedback.',
      color: 'text-gdg-red',
      bgColor: 'bg-gdg-red/10',
      borderColor: 'border-gdg-red/20'
    },
    {
      icon: Code,
      title: 'Coding & Debugging Contests',
      description: 'Test your coding skills with challenging problems and fast-paced debugging contests.',
      color: 'text-gdg-yellow',
      bgColor: 'bg-gdg-yellow/10',
      borderColor: 'border-gdg-yellow/20'
    },
    {
      icon: Mic,
      title: 'Cultural Evenings & Open Mic',
      description: 'Enjoy vibrant cultural performances and showcase your talents at open mic sessions.',
      color: 'text-gdg-green',
      bgColor: 'bg-gdg-green/10',
      borderColor: 'border-gdg-green/20'
    },
    {
      icon: Gift,
      title: 'Goodies & Experience Zones',
      description: 'Get exciting swags while exploring VR demos, gaming booths, and startup displays.',
      color: 'text-gdg-blue',
      bgColor: 'bg-gdg-blue/10',
      borderColor: 'border-gdg-blue/20'
    },
    {
      icon: Users,
      title: 'Networking Opportunities',
      description: 'Build valuable connections with students, founders, and industry leaders.',
      color: 'text-gdg-red',
      bgColor: 'bg-gdg-red/10',
      borderColor: 'border-gdg-red/20'
    }
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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Event <span className="gdg-text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing experiences waiting for you at AAGAAZ&apos;25. 
            From cutting-edge technology to vibrant cultural activities.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-card p-8 rounded-2xl border-2 ${highlight.borderColor} ${highlight.bgColor} hover-lift group cursor-pointer`}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-16 h-16 ${highlight.color} mb-6 mx-auto flex items-center justify-center rounded-full bg-white/50`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <highlight.icon size={32} />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`text-xl font-bold ${highlight.color} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Hover Effect Lines */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${highlight.color.replace('text-', 'bg-')} w-0 group-hover:w-full transition-all duration-500`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Participants', color: 'text-gdg-blue' },
            { number: '15+', label: 'Sessions', color: 'text-gdg-red' },
            { number: '10+', label: 'Speakers', color: 'text-gdg-yellow' },
            { number: '48', label: 'Hours', color: 'text-gdg-green' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-card p-6 rounded-xl hover-lift"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              delay={index * 0.1}
            >
              <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-3 h-3 bg-gdg-blue rounded-full opacity-30"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-20 w-4 h-4 bg-gdg-red rounded-full opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 0.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gdg-yellow rounded-full opacity-40"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
