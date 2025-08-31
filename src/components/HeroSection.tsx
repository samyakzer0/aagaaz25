'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="inline-block text-gdg-blue"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6 }}
            >
              A
            </motion.span>
            <motion.span
              className="inline-block text-gdg-red"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A
            </motion.span>
            <motion.span
              className="inline-block text-gdg-yellow"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              G
            </motion.span>
            <motion.span
              className="inline-block text-gdg-green"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A
            </motion.span>
            <motion.span
              className="inline-block text-gdg-blue"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A
            </motion.span>
            <motion.span
              className="inline-block text-gdg-red"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Z
            </motion.span>
            <motion.span
              className="inline-block text-gdg-yellow"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              &apos;
            </motion.span>
            <motion.span
              className="inline-block text-gdg-green"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              2
            </motion.span>
            <motion.span
              className="inline-block text-gdg-blue"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              5
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            &ldquo;Uniting Youth and Tech&rdquo;
          </h2>
        </motion.div>

        {/* Event Details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-lg md:text-xl"
        >
          <motion.div
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Calendar className="text-gdg-blue" size={24} />
            <span className="font-semibold text-gray-700">September 17–18, 2025</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <MapPin className="text-gdg-red" size={24} />
            <span className="font-semibold text-gray-700">SAGE University Indore</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 glass-card px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Users className="text-gdg-green" size={24} />
            <span className="font-semibold text-gray-700">500+ Attendees</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://forms.gle/KFzMipzuHYZ3J8GXA"
              className="inline-block px-8 py-4 bg-gdg-red text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:glow-red transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/events"
              className="inline-block px-8 py-4 bg-gdg-blue text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:glow-blue transition-all duration-300"
            >
              Explore Events
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 w-4 h-4 bg-gdg-blue rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-16 w-6 h-6 bg-gdg-red rounded-full opacity-40"
            animate={{
              y: [0, -30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-20 w-3 h-3 bg-gdg-yellow rounded-full opacity-50"
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-10 w-5 h-5 bg-gdg-green rounded-full opacity-30"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
