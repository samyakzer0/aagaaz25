'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink,
  Award,
  Lightbulb,
  Code,
  Mic,
  Gift,
  HandHeart
} from 'lucide-react'

export default function EventsPage() {
  const eventOverview = [
    { icon: Calendar, label: 'Event Name', value: 'AAGAAZ\'25', color: 'text-gdg-blue' },
    { icon: Lightbulb, label: 'Theme', value: 'Uniting Youth and Tech', color: 'text-gdg-red' },
    { icon: Calendar, label: 'Dates', value: 'September 17–18, 2025', color: 'text-gdg-blue' },
    { icon: MapPin, label: 'Venue', value: 'Kalpavriksha Auditorium, SAGE University Indore', color: 'text-gdg-red' },
    { icon: Users, label: 'Audience', value: '500+ attendees', color: 'text-gdg-yellow' },
    { icon: HandHeart, label: 'Organizers', value: 'GDG SAGE University Indore', color: 'text-gdg-green' }
  ]

  const day1Events = [
    {
      icon: '👋',
      title: 'Welcome & GDG Intro + GDG Certificate Distribution',
      description: 'Kickstart of AAGAAZ\'25 with dignitaries, GDG community introduction, and certificate distribution for GDG members.',
      time: '9:00 AM',
      duration: '1 hour',
      color: 'border-gdg-blue',
      bgColor: 'bg-gdg-blue/5'
    },
    {
      icon: '🎙️',
      title: 'Speaker Session (Vena Solutions)',
      description: 'An expert talk by Vena Solutions, providing insights into industry tech practices.',
      time: '10:00 AM',
      duration: '1.5 hours',
      color: 'border-gdg-red',
      bgColor: 'bg-gdg-red/5'
    },
    {
      icon: '💡',
      title: 'Speaker Session (Feedbox) + MVP Workshop Intro',
      description: 'A session by the Feedbox team, including an introduction to the MVP Workshop for participants.',
      time: '2:00 PM',
      duration: '2 hours',
      color: 'border-gdg-yellow',
      bgColor: 'bg-gdg-yellow/5'
    }
  ]

  const day2Events = [
    {
      icon: '🛠️',
      title: 'MVP Workshop',
      description: 'A practical, hands-on session on building Minimum Viable Products, with team-based activities in labs.',
      time: '9:00 AM',
      duration: '4 hours',
      color: 'border-gdg-blue',
      bgColor: 'bg-gdg-blue/5'
    },
    {
      icon: '🎁',
      title: 'Speaker Session + Goodies (Ecell)',
      description: 'A motivational session from Ecell, followed by the distribution of goodies to attendees.',
      time: '2:00 PM',
      duration: '1.5 hours',
      color: 'border-gdg-red',
      bgColor: 'bg-gdg-red/5'
    },
    {
      icon: '🎤',
      title: 'StandUp & Open Mic',
      description: 'A fun-filled wrap-up session with an open stage for stand-up comedy, music, and other performances.',
      time: '5:00 PM',
      duration: '2 hours',
      color: 'border-gdg-yellow',
      bgColor: 'bg-gdg-yellow/5'
    }
  ]

  const highlights = [
    '500+ Attendees - Students, startups, and industry leaders',
    'Tech Focus - AI, Web3, AR/VR, blockchain, product design',
    'Hands-on Workshops - AI tools, Web3, design thinking, no-code development',
    'Pitch Competitions & Hackathons - Startup ideas and prototypes on stage',
    'Experience Zones & Stalls - Explore AR/VR demos, startup booths, and partner showcases',
    'Cultural Evenings - Open mic, stand-up, music, and dance'
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
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-red-50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gdg-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gdg-red/10 rounded-full blur-3xl" />
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
                Event <span className="gdg-text-gradient">Overview</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore the complete schedule of AAGAAZ'25 - two days packed with 
                technology, innovation, culture, and networking opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Overview Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {eventOverview.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 rounded-xl hover-lift"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Day 1 Events */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="text-gdg-blue">📅 Day 1 Events</span>
              </h2>
              <p className="text-xl text-gray-600">September 17, 2025</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {day1Events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`glass-card p-8 rounded-2xl border-2 ${event.color} ${event.bgColor} hover-lift`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {event.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {event.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Day 2 Events */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="text-gdg-green">📅 Day 2 Events</span>
              </h2>
              <p className="text-xl text-gray-600">September 18, 2025</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {day2Events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`glass-card p-8 rounded-2xl border-2 ${event.color} ${event.bgColor} hover-lift`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {event.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {event.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Highlights */}
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
                Key <span className="gdg-text-gradient">Highlights</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 glass rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`w-2 h-2 bg-gdg-${['blue', 'red', 'yellow', 'green', 'blue', 'red'][index % 6]} rounded-full mt-3 flex-shrink-0`} />
                    <p className="text-gray-700 font-medium">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact & Community */}
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
                Contact & Community
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">📧</span>
                  <a 
                    href="mailto:gdgsage2024@gmail.com" 
                    className="text-lg text-gray-600 hover:text-gdg-blue transition-colors duration-300"
                  >
                    gdgsage2024@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">📍</span>
                  <p className="text-lg text-gray-600">SAGE University, Indore</p>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <span className="text-2xl">🔗</span>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/gdg_sage.university?igsh=aWJjMzA4cmJ3N2ow" 
                      className="text-lg text-gray-600 hover:text-gdg-red transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                    <span>|</span>
                    <a 
                      href="https://www.linkedin.com/company/gdg-on-campus-sui/" 
                      className="text-lg text-gray-600 hover:text-gdg-blue transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <span>|</span>
                    <a 
                      href="https://gdg.community.dev/gdg-on-campus-sage-university-indore-india/" 
                      className="text-lg text-gray-600 hover:text-gdg-green transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">💬</span>
                  <a 
                    href="https://chat.whatsapp.com/F0OZz8qBGp376oCzOYd1AD" 
                    className="text-lg text-gray-600 hover:text-gdg-green transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join our WhatsApp group
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  AAGAAZ'25 isn't just an event — it's an experience.
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Celebrate learning, leadership, and culture with us.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://forms.gle/KFzMipzuHYZ3J8GXA"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gdg-blue text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:glow-blue transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Today
                    <ExternalLink size={20} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
