
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'Complete mobile marketing strategy that increased app downloads by 300% in 3 months.',
            image: assets.work_mobile_app,
            category: 'Marketing'
        },
        {
            title: 'Dashboard Management',
            description: 'Enterprise dashboard solution that improved decision-making efficiency by 45%.',
            image: assets.work_dashboard_management,
            category: 'Development'
        },
        {
            title: 'Fitness App UI/UX',
            description: 'Modern fitness application design that boosted user engagement by 70%.',
            image: assets.work_fitness_app,
            category: 'Design'
        },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { 
            y: 50, 
            opacity: 0,
            rotateY: -10
        },
        visible: {
            y: 0,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        },
        hover: {
            y: -10,
            rotateY: 5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div 
            id='our-work' 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className='py-30 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black'
        >
            <div className='max-w-7xl mx-auto'>
                <motion.div 
                    variants={itemVariants}
                    className='text-center mb-16'
                >
                    <motion.span 
                        className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4'
                        whileHover={{ scale: 1.1 }}
                    >
                        PORTFOLIO
                    </motion.span>
                    <Title 
                        title='Our Latest Projects' 
                        desc='From strategy to execution, we craft digital solutions that move your business forward.'
                    />
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {workData.map((work, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            custom={index}
                            whileHover="hover"
                            className='group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800'
                        >
                            <motion.div 
                                className='relative overflow-hidden rounded-t-3xl'
                                variants={imageVariants}
                            >
                                <motion.div 
                                    className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'
                                    whileHover={{ opacity: 1 }}
                                />
                                <motion.img 
                                    src={work.image} 
                                    alt={work.title} 
                                    className='w-full h-64 object-cover'
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <motion.div 
                                    className='absolute top-4 right-4 z-20'
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <span className='px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium'>
                                        {work.category}
                                    </span>
                                </motion.div>
                            </motion.div>
                            
                            <div className='p-6'>
                                <motion.h3 
                                    className='text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors'
                                    whileHover={{ x: 5 }}
                                >
                                    {work.title}
                                </motion.h3>
                                <p className='text-gray-600 dark:text-gray-400 mb-6'>
                                    {work.description}
                                </p>
                                <div className='flex items-center justify-between'>
                                    <motion.button 
                                        className='text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all'
                                        whileHover={{ x: 5 }}
                                    >
                                        {/* View Case Study */}
                                        <motion.span 
                                            className='group-hover:translate-x-1 transition-transform'
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            {/* → */}
                                        </motion.span>
                                    </motion.button>
                                    <motion.div 
                                        className='text-2xl font-bold text-gray-200 dark:text-gray-700'
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 1
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hover shine effect */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                initial={false}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className='text-center mt-16'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a 
                        href="#contact-us" 
                        className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
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
                        View All Projects
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
            </div>
        </motion.div>
    )
}

export default OurWork