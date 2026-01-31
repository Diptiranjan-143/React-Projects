
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    // Auto-scroll logos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(company_logos.length / 4))
        }, 3000)
        
        return () => clearInterval(interval)
    }, [])

    const visibleLogos = [...company_logos, ...company_logos.slice(0, 4)]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { 
            y: 30, 
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    const logoVariants = {
        hover: {
            scale: 1.2,
            rotateY: 180,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    }

    const marqueeVariants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                }
            }
        }
    }

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className='relative py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black overflow-hidden'
        >
            
            {/* Animated gradient border */}
            <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                animate={{ 
                    background: [
                        'linear-gradient(to right, transparent, #5044E5, transparent)',
                        'linear-gradient(to right, transparent, #8B5CF6, transparent)',
                        'linear-gradient(to right, transparent, #06B6D4, transparent)',
                        'linear-gradient(to right, transparent, #5044E5, transparent)'
                    ]
                }}
                transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <div className='relative z-10 max-w-7xl mx-auto'>
                <motion.div 
                    variants={itemVariants}
                    className='text-center mb-12'
                >
                    <div className='inline-flex items-center gap-3 mb-6'>
                        <motion.div 
                            className='w-20 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700'
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <motion.span 
                            className='text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase'
                            animate={{ 
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            TRUSTED BY INDUSTRY LEADERS
                        </motion.span>
                        <motion.div 
                            className='w-20 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent'
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                    </div>
                    
                    <motion.h3 
                        variants={itemVariants}
                        className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'
                    >
                        Trusted by <motion.span 
                            className='text-primary inline-block'
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >Innovative</motion.span> Companies Worldwide
                    </motion.h3>
                    <motion.p 
                        variants={itemVariants}
                        className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'
                    >
                        Join over 10,000+ businesses that trust us with their digital transformation journey.
                    </motion.p>
                </motion.div>

                {/* Logo Marquee */}
                <motion.div 
                    className='relative overflow-hidden py-8'
                    variants={containerVariants}
                >
                    <motion.div 
                        className='flex items-center gap-12'
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        {visibleLogos.map((logo, index) => (
                            <motion.div 
                                key={index} 
                                className='flex-shrink-0 group relative'
                                variants={logoVariants}
                                whileHover="hover"
                            >
                                <div className='w-40 h-20 flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800'>
                                    <motion.img 
                                        src={logo} 
                                        alt='Trusted company logo' 
                                        className='max-h-10 grayscale group-hover:grayscale-0 transition-all duration-500'
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div 
                    variants={containerVariants}
                    className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'
                >
                    {[
                        { value: '10K+', label: 'Happy Customers', suffix: 'worldwide' },
                        { value: '24/7', label: 'Support', suffix: 'available' },
                        { value: '99%', label: 'Satisfaction', suffix: 'rating' },
                        { value: '5+', label: 'Years Experience', suffix: 'in industry' },
                    ].map((stat, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            custom={index}
                            className='text-center group'
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className='relative inline-block'>
                                <motion.div 
                                    className='absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                    animate={{ 
                                        rotate: 360,
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ 
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 2, repeat: Infinity }
                                    }}
                                />
                                <div className='relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800'>
                                    <motion.div 
                                        className='text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors'
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: index * 0.5
                                        }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1'>
                                        {stat.label}
                                    </div>
                                    <div className='text-xs text-gray-500 dark:text-gray-400'>
                                        {stat.suffix}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div 
                    variants={itemVariants}
                    className='text-center mt-16'
                >
                    <motion.div 
                        className='inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8'
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className='text-left'>
                            <motion.h4 
                                className='text-xl font-bold text-gray-900 dark:text-white mb-2'
                                animate={{ 
                                    x: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >
                                Ready to Transform Your Business?
                            </motion.h4>
                            <p className='text-gray-600 dark:text-gray-300'>
                                Join thousands of successful companies who trust us.
                            </p>
                        </div>
                        <motion.a 
                            href="#contact-us" 
                            className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ 
                                boxShadow: [
                                    "0 10px 15px -3px rgba(80, 68, 229, 0.2)",
                                    "0 20px 25px -5px rgba(80, 68, 229, 0.3)",
                                    "0 10px 15px -3px rgba(80, 68, 229, 0.2)"
                                ]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Start Your Journey
                            <motion.svg 
                                className="w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default TrustedBy