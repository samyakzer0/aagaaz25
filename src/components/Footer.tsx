'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card border-t border-white/20 text-center py-8"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <p className="text-gray-600 font-medium">
            &copy; 2024 AAGAAZ&apos;25. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Organized by{' '}
            <span className="text-gdg-blue font-semibold">GDG SUI</span>{' '}
            |{' '}
            <span className="text-gdg-green font-semibold">SAGE University</span>{' '}
            |{' '}
            <span className="text-gdg-yellow font-semibold">Sunstone</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
