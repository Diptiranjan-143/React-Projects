
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({service, index}) => {

    const [position, setPosition] = useState({x:0, y:0})
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e)=> {
        const bounds = divRef.current.getBoundingClientRect()
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }

    // Animation variants
    const cardVariants = {
        hidden: { 
            scale: 0.8,
            opacity: 0,
            rotateX: -10
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
            }
        },
        hover: {
            scale: 1.05,
            rotateY: 2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    const iconVariants = {
        hidden: { rotate: -90, opacity: 0 },
        visible: { 
            rotate: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                delay: 0.3 + index * 0.1
            }
        },
        hover: { 
            rotate: 360,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div 
            className='relative overflow-hidden max-w-lg rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 group'
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)} 
            ref={divRef} 
            onMouseMove={handleMouseMove}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >

            <div 
                className={`absolute w-64 h-64 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-2xl transition-opacity duration-500 ${
                    visible ? 'opacity-100' : 'opacity-0'
                }`} 
                style={{
                    top: position.y - 128,
                    left: position.x - 128,
                }}
            />

            <motion.div 
                className='relative z-10 p-8 group-hover:p-7 transition-all duration-300'
                whileHover={{ y: -5 }}
            >
                <div className='flex items-start gap-6'>
                    <motion.div 
                        className='flex-shrink-0 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300'
                        variants={iconVariants}
                    >
                        <img src={service.icon} alt={service.title} className='w-16 h-16'/>
                    </motion.div>
                    
                    <div className='flex-1'>
                        <div className='flex items-center justify-between mb-4'>
                            <motion.h3 
                                className='text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors'
                                whileHover={{ x: 5 }}
                            >
                                {service.title}
                            </motion.h3>
                            <motion.span 
                                className='text-3xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors'
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </motion.span>
                        </div>
                        
                        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                            {service.description}
                        </p>
                        
                        <motion.button 
                            className='mt-6 text-primary font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            whileHover={{ x: 10 }}
                        >
                            Learn more
                            <motion.span 
                                className='group-hover:translate-x-2 transition-transform'
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Border highlight on hover */}
            <div className='absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none'></div>
            
        </motion.div>
    )
}

export default ServiceCard