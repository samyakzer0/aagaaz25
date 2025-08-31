'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react'

const EventsPreview = () => {
  const events = [
    {
      title: 'Tech Talks & Workshops',
      description: 'Learn about AI, ML, Web Development, and Cloud Computing from industry experts.',
      icon: '🗣️',
      day: 'Day 1',
      time: 'Multiple Sessions',
      attendees: '200+',
      color: 'border-gdg-blue',
      bgColor: 'bg-gdg-blue/5'
    },
    {
      title: 'Startup Pitch & MVP Showcase',
      description: 'Showcase innovative ideas and MVPs to mentors and investors.',
      icon: '🚀',
      day: 'Day 1',
      time: 'Afternoon',
      attendees: '150+',
      color: 'border-gdg-red',
      bgColor: 'bg-gdg-red/5'
    },
    {
      title: 'MVP Workshop',
      description: 'Hands-on session on building Minimum Viable Products with team activities.',
      icon: '🛠️',
      day: 'Day 2',
      time: 'Full Day',
      attendees: '100+',
      color: 'border-gdg-yellow',
      bgColor: 'bg-gdg-yellow/5'
    },
    {
      title: 'Cultural Evening & Open Mic',
      description: 'Fun-filled performances, stand-up comedy, music, and talent showcase.',
      icon: '🎤',
      day: 'Day 2',
      time: 'Evening',
      attendees: '500+',
      color: 'border-gdg-green',
      bgColor: 'bg-gdg-green/5'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
            Featured <span className="gdg-text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a preview of the exciting events planned for AAGAAZ'25. 
            Two days packed with learning, innovation, and entertainment.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-card p-8 rounded-2xl border-2 ${event.color} ${event.bgColor} hover-lift group cursor-pointer`}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {event.icon}
                </motion.div>
                
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/50 rounded-full text-sm font-semibold text-gray-700">
                    {event.day}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gdg-blue transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={16} />
                    {event.attendees}
                  </div>
                </div>
              </div>

              {/* Hover Arrow */}
              <motion.div
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="text-gdg-blue" size={24} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Preview */}
        <motion.div
          className="glass-card p-8 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Event Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gdg-blue flex items-center gap-2">
                <Calendar size={20} />
                Day 1 - September 17, 2025
              </h4>
              <div className="space-y-3 pl-6">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Welcome & GDG Intro</span>
                  <span className="text-sm text-gray-500">9:00 AM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Speaker Sessions</span>
                  <span className="text-sm text-gray-500">10:00 AM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">MVP Workshop Intro</span>
                  <span className="text-sm text-gray-500">2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gdg-green flex items-center gap-2">
                <Calendar size={20} />
                Day 2 - September 18, 2025
              </h4>
              <div className="space-y-3 pl-6">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">MVP Workshop</span>
                  <span className="text-sm text-gray-500">9:00 AM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Speaker & Goodies</span>
                  <span className="text-sm text-gray-500">2:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-medium">Open Mic & Cultural</span>
                  <span className="text-sm text-gray-500">5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to See the Complete Event Schedule?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore all events, speakers, workshops, and activities planned for AAGAAZ'25.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/events"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gdg-blue text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:glow-blue transition-all duration-300 group"
                >
                  View All Events
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              
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
                  Register Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsPreview
