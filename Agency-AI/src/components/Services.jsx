
import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData = [
        {
            title: 'Digital Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage, and convert your target audience across all platforms.',
            icon: assets.ads_icon
        },
        {
            title: 'Marketing Strategy',
            description: 'We help you execute your plan & deliver measurable results with data-driven marketing strategies.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Creation',
            description: 'We help you create compelling content marketing strategies that drive engagement and results.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media Management',
            description: 'We help you build a strong social media presence & engage with your audience effectively.',
            icon: assets.social_icon
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
        hidden: { y: 50, opacity: 0 },
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

    return (
        <motion.div 
            id='services' 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className='relative py-30 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden'
        >
            
            {/* Background decorative elements */}
            <motion.div 
                animate={{ 
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"
            />
            <motion.div 
                animate={{ 
                    x: [0, -50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"
            />

            <div className='relative z-10'>
                <motion.div variants={itemVariants}>
                    <Title 
                        title='How Can We Help You Grow?' 
                        desc='From strategy to execution, we craft digital solutions that move your business forward with measurable results.' 
                    />
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16'
                >
                    {servicesData.map((service, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <ServiceCard service={service} index={index}/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Services