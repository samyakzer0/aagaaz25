import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AAGAAZ&apos;25 - Uniting Youth and Tech',
  description: 'AAGAAZ&apos;25 is a 2-day student-driven festival celebrating innovation, collaboration, and cultural vibrancy. Join 500+ students, startup founders, and industry leaders.',
  keywords: 'AAGAAZ, GDG, Google Developer Groups, SAGE University, Tech Festival, Innovation, Youth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
