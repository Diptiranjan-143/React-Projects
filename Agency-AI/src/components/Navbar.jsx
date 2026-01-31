
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home')

    const navLinks = [
        { id: 'home', label: 'Home', href: '#hero' },
        { id: 'services', label: 'Services', href: '#services' },
        { id: 'our-work', label: 'Our Work', href: '#our-work' },
        { id: 'teams', label: 'Team', href: '#teams' },
        { id: 'contact-us', label: 'Contact', href: '#contact-us' },
    ]

    const handleLinkClick = (id) => {
        setActiveLink(id)
        setSidebarOpen(false)
    }

    // Animation variants
    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    }

    const linkVariants = {
        hover: { 
            scale: 1.1,
            color: "#5044E5"
        },
        tap: { scale: 0.95 }
    }

    const sidebarVariants = {
        hidden: { x: "100%" },
        visible: { 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.nav 
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    
                    {/* Logo */}
                    <motion.a 
                        href="#hero" 
                        className='flex items-center gap-3'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.img 
                            src={theme === 'dark' ? assets.logo_dark : assets.logo}  
                            className='w-36 sm:w-44 h-auto' 
                            alt='Company Logo'
                            animate={{ 
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                                duration: 5,
                                repeat: Infinity,
                                repeatDelay: 5
                            }}
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                onClick={() => handleLinkClick(link.id)}
                                variants={linkVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                    activeLink === link.id
                                        ? 'text-primary'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                }`}
                            >
                                {link.label}
                                {activeLink === link.id && (
                                    <motion.span 
                                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full'
                                        layoutId="activeLink"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className='flex items-center gap-4'>
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                        
                        <motion.a 
                            href="#contact-us" 
                            variants={linkVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className='hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300'
                        >
                            Get Started
                            <motion.svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </motion.a>

                        {/* Mobile menu button */}
                        <motion.button 
                            onClick={() => setSidebarOpen(true)}
                            className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img 
                                src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
                                alt="Menu" 
                                className='w-6 h-6' 
                            />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <div className='fixed inset-0 z-50 md:hidden'>
                        {/* Backdrop */}
                        <motion.div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setSidebarOpen(false)}
                        />
                        
                        {/* Sidebar content */}
                        <motion.div 
                            className='absolute top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl'
                            variants={sidebarVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            
                            {/* Close button */}
                            <motion.button 
                                onClick={() => setSidebarOpen(false)}
                                className='absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img src={assets.close_icon} alt="Close" className='w-6 h-6' />
                            </motion.button>

                            {/* Sidebar content */}
                            <div className='px-8 pt-24 pb-8 h-full flex flex-col'>
                                
                                <div className='mb-12'>
                                    <motion.img 
                                        src={theme === 'dark' ? assets.logo_dark : assets.logo}  
                                        className='w-40 mb-8' 
                                        alt='Company Logo'
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.1 }}
                                    />
                                    <motion.p 
                                        className='text-gray-600 dark:text-gray-400 text-sm'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Creating digital experiences that drive results.
                                    </motion.p>
                                </div>

                                <div className='flex-1 space-y-6'>
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.id}
                                            href={link.href}
                                            onClick={() => handleLinkClick(link.id)}
                                            className={`block text-lg font-medium py-3 transition-colors ${
                                                activeLink === link.id
                                                    ? 'text-primary'
                                                    : 'text-gray-800 dark:text-gray-300 hover:text-primary'
                                            }`}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                        >
                                            {link.label}
                                        </motion.a>
                                    ))}
                                </div>

                                <motion.div 
                                    className='pt-8 border-t border-gray-200 dark:border-gray-800'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.a 
                                        href="#contact-us" 
                                        className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300'
                                        onClick={() => setSidebarOpen(false)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Start a Project
                                        <motion.svg 
                                            className="w-4 h-4" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar