
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
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
        },
        hover: {
            y: -8,
            scale: 1.03,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    const floatAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className='py-30 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden'
        >
            
            {/* Background decorative elements */}
            <motion.div 
                animate={{
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 0.5 }
                }}
                className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
            />
            <motion.div 
                animate={floatAnimation}
                className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl"
            />

            <div className='relative z-10 max-w-7xl mx-auto'>
                <motion.div variants={itemVariants} className='text-center mb-16'>
                    <Title 
                        title='Meet Our Experts' 
                        desc="A passionate team of digital experts dedicated to driving your brand's success."
                        align='center'
                    />
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'
                >
                    {teamData.map((team, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            custom={index}
                            whileHover="hover"
                            className='group relative'
                        >
                            <div className='flex flex-col items-center gap-5 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 transition-all duration-400'>
                                
                                <motion.div 
                                    className='relative'
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.div 
                                        className='w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg'
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <img 
                                            src={team.image} 
                                            className='w-full h-full object-cover'
                                            alt={team.name}
                                        />
                                    </motion.div>
                                    <motion.div 
                                        className='absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold'
                                        animate={{ 
                                            rotate: [0, 360],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ 
                                            rotate: { 
                                                duration: 20, 
                                                repeat: Infinity, 
                                                ease: "linear" 
                                            },
                                            scale: { 
                                                duration: 2, 
                                                repeat: Infinity,
                                                repeatDelay: 1
                                            }
                                        }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                </motion.div>
                                
                                <div className='text-center'>
                                    <motion.h3 
                                        className='font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {team.name}
                                    </motion.h3>
                                    <p className='text-sm text-primary font-medium mt-1'>{team.title}</p>
                                    <p className='text-xs text-gray-600 dark:text-gray-400 mt-2'>
                                        {team.department || 'Digital Solutions'}
                                    </p>
                                </div>
                                
                                <motion.div 
                                    className='flex gap-3 mt-4'
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.a 
                                        href="#" 
                                        className='w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300'
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className='w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300'
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </motion.a>
                                </motion.div>

                                {/* Hover effect line */}
                                <motion.div 
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div 
                    className='text-center mt-16'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div 
                        className='bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto'
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                            Join Our Growing Team
                        </h3>
                        <p className='text-gray-600 dark:text-gray-300 mb-6'>
                            We're always looking for talented individuals to join our mission.
                        </p>
                        <motion.a 
                            href="#contact-us" 
                            className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
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
                            View Open Positions
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

export default Teams