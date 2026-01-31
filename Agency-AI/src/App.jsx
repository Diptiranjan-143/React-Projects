
import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (systemPrefersDark) {
      setTheme('dark')
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'dark bg-gradient-to-b from-gray-900 to-black text-white' 
          : 'bg-gradient-to-b from-white to-gray-50 text-gray-900'
      }`}>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#1f2937' : '#ffffff',
              color: theme === 'dark' ? '#ffffff' : '#374151',
              border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
            },
          }}
        />
        
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          <Hero />
          <TrustedBy />
          <Services />
          <OurWork />
          <Teams />
          <ContactUs />
        </main>
        <Footer theme={theme} />
      </div>
    </AnimatePresence>
  )
}

export default App