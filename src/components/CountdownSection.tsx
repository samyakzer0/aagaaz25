'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-09-17T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', color: 'text-gdg-blue', bg: 'bg-gdg-blue/10' },
    { value: timeLeft.hours, label: 'Hours', color: 'text-gdg-red', bg: 'bg-gdg-red/10' },
    { value: timeLeft.minutes, label: 'Minutes', color: 'text-gdg-yellow', bg: 'bg-gdg-yellow/10' },
    { value: timeLeft.seconds, label: 'Seconds', color: 'text-gdg-green', bg: 'bg-gdg-green/10' }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Event Countdown
          </h2>
          <p className="text-xl text-gray-600">
            Get ready for an amazing experience!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              variants={itemVariants}
              className={`glass-card p-8 rounded-2xl text-center hover-lift ${unit.bg}`}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`text-4xl md:text-5xl lg:text-6xl font-black ${unit.color} mb-2`}
                key={unit.value} // Key helps animate number changes
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 font-medium">
              Mark your calendars! AAGAAZ'25 is approaching fast. Don't miss out on this incredible
              opportunity to connect, learn, and innovate with the tech community.
            </p>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-gdg-blue rounded-full opacity-40"
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-gdg-red rounded-full opacity-30"
            animate={{
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-10 left-1/4 w-2 h-2 bg-gdg-yellow rounded-full opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default CountdownSection
