'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import CountdownSection from '@/components/CountdownSection'
import AboutCard from '@/components/AboutCard'
import HighlightsSection from '@/components/HighlightsSection'
import EventsPreview from '@/components/EventsPreview'

export default function Home() {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gdg-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gdg-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gdg-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gdg-green/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <CountdownSection />
        <AboutCard />
        <HighlightsSection />
        <EventsPreview />
      </motion.div>
    </div>
  )
}
