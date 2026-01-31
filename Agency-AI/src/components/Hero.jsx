
import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'

export default function Hero() {
    // Animation variants
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5
            }
        }
    }

    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    return (
        <motion.div 
            id='hero' 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='relative flex flex-col items-center gap-8 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-800 dark:text-white bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black'
        >
            
            {/* Animated background elements */}
            <motion.div 
                animate={floatAnimation}
                className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
            />
            <motion.div 
                animate={{
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 1 }
                }}
                className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
            />

            <motion.div variants={itemVariants} className='relative'>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className='inline-flex items-center gap-3 border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-2 pr-5 rounded-full shadow-lg z-10'
                >
                    <img className='w-20' src={assets.group_profile} alt="Trusted users" />
                    <p className='text-sm font-semibold text-gray-700 dark:text-gray-300'>Trusted by 10k+ customers worldwide</p>
                </motion.div>
            </motion.div>

            <motion.h1 
                variants={itemVariants}
                className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold xl:leading-[1.2] max-w-6xl mt-6'
            >
                Turning imagination into <motion.span 
                    className='gradient-text inline-block'
                    animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                    }}
                    transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >digital</motion.span> impact.
            </motion.h1>

            <motion.p 
                variants={itemVariants}
                className='text-lg font-medium text-gray-600 dark:text-gray-300 max-w-2xl px-4 leading-relaxed'
            >
                Creating meaningful connections & turning big ideas into interactive digital experiences that drive results.
            </motion.p>

            <motion.div 
                variants={itemVariants}
                className='flex gap-4 mt-8'
            >
                <motion.a 
                    href="#contact-us" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
                >
                    Start a Project
                </motion.a>
                <motion.a 
                    href="#services" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300'
                >
                    Our Services
                </motion.a>
            </motion.div>

            <motion.div 
                variants={imageVariants}
                className='relative mt-16 w-full max-w-6xl'
            >
                <motion.div 
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-3xl"
                />
                <motion.img 
                    src={assets.hero_img} 
                    alt="Hero showcase" 
                    className='relative w-full rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800'
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>

        </motion.div>
    )
}