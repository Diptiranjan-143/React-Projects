
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

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
            y: 30, 
            opacity: 0,
            scale: 0.95
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
            y: -5,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    const inputVariants = {
        focus: {
            scale: 1.02,
            transition: { duration: 0.2 }
        }
    }

    const floatAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        
        const formData = new FormData(event.target)
        formData.append("access_key", "6526d77a-c089-4d19-9df6-6349c6bac881")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()
            if (data.success) {
                toast.success('Thank you for your submission! We\'ll get back to you within 24 hours.', {
                    duration: 5000,
                    style: {
                        background: '#10B981',
                        color: '#fff',
                    },
                })
                event.target.reset()
            } else {
                toast.error(data.message || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            toast.error('Network error. Please check your connection.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div 
            id='contact-us' 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className='relative py-30 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black overflow-hidden'
        >
            
            {/* Background decorative elements */}
            <motion.div 
                animate={floatAnimation}
                className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"
            />
            <motion.div 
                animate={{
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 1 }
                }}
                className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"
            />

            <div className='relative z-10 max-w-7xl mx-auto'>
                <motion.div variants={itemVariants} className='text-center mb-16'>
                    <Title 
                        title="Let's Build Something Amazing Together" 
                        desc="Have a project in mind? Let's discuss how we can help bring your vision to life."
                        align='center'
                    />
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    className='grid lg:grid-cols-2 gap-12 items-start'
                >
                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className='space-y-8'>
                        <motion.div 
                            variants={itemVariants}
                            whileHover="hover"
                            className='bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800'
                        >
                            <motion.h3 
                                variants={itemVariants}
                                className='text-2xl font-bold text-gray-900 dark:text-white mb-6'
                            >
                                Contact Information
                            </motion.h3>
                            
                            <div className='space-y-6'>
                                {[
                                    {
                                        icon: assets.email_icon,
                                        label: 'Email',
                                        value: 'hello@example.com',
                                        color: 'primary'
                                    },
                                    {
                                        icon: 'phone',
                                        label: 'Phone',
                                        value: '+1 (555) 123-4567',
                                        color: 'secondary'
                                    },
                                    {
                                        icon: 'location',
                                        label: 'Location',
                                        value: 'San Francisco, CA',
                                        color: 'accent'
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover={{ x: 5 }}
                                        className='flex items-start gap-4'
                                    >
                                        <motion.div 
                                            className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {item.icon === 'phone' ? (
                                                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            ) : item.icon === 'location' ? (
                                                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            ) : (
                                                <img src={item.icon} alt={item.label} className='w-6 h-6' />
                                            )}
                                        </motion.div>
                                        <div>
                                            <p className='text-sm text-gray-500 dark:text-gray-400'>{item.label}</p>
                                            <p className='text-lg font-semibold text-gray-900 dark:text-white'>{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div 
                                variants={itemVariants}
                                className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-800'
                            >
                                <p className='text-gray-600 dark:text-gray-400 mb-4'>Connect with us</p>
                                <motion.div 
                                    className='flex gap-4'
                                    variants={containerVariants}
                                >
                                    {[assets.facebook_icon, assets.twitter_icon, assets.instagram_icon, assets.linkedin_icon].map((icon, index) => (
                                        <motion.a 
                                            key={index} 
                                            href="#" 
                                            variants={itemVariants}
                                            custom={index}
                                            whileHover={{ 
                                                scale: 1.2, 
                                                rotate: 360,
                                                backgroundColor: '#5044E5'
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            className='w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300'
                                        >
                                            <img src={icon} alt="Social" className='w-5 h-5' />
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className='bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8 border border-primary/20'
                        >
                            <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Response Time</h4>
                            <p className='text-gray-600 dark:text-gray-300'>
                                We typically respond to all inquiries within 24 hours during business days.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        variants={itemVariants}
                        whileHover="hover"
                        className='bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800'
                    >
                        <motion.form 
                            onSubmit={onSubmit} 
                            className='space-y-6'
                            variants={containerVariants}
                        >
                            <div className='grid sm:grid-cols-2 gap-6'>
                                {['name', 'email'].map((field, index) => (
                                    <motion.div 
                                        key={field}
                                        variants={itemVariants}
                                        custom={index}
                                    >
                                        <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                                            {field === 'name' ? 'Your name' : 'Email address'} <span className='text-red-500'>*</span>
                                        </label>
                                        <motion.div 
                                            className='relative group'
                                            whileFocus="focus"
                                            variants={inputVariants}
                                        >
                                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                                <img 
                                                    src={field === 'name' ? assets.person_icon : assets.email_icon} 
                                                    alt="" 
                                                    className='w-5 h-5 text-gray-400' 
                                                />
                                            </div>
                                            <input 
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                                                className='w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300'
                                                required 
                                                disabled={isSubmitting}
                                            />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div variants={itemVariants}>
                                <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                                    Subject
                                </label>
                                <motion.input 
                                    type="text" 
                                    name="subject" 
                                    placeholder='Project Inquiry' 
                                    className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300'
                                    disabled={isSubmitting}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                                    Your message <span className='text-red-500'>*</span>
                                </label>
                                <motion.textarea 
                                    name="message" 
                                    rows={6} 
                                    placeholder='Tell us about your project...' 
                                    className='w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all duration-300'
                                    required 
                                    disabled={isSubmitting}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.button 
                                type='submit' 
                                disabled={isSubmitting}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 ${
                                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                                animate={isSubmitting ? {
                                    background: [
                                        'linear-gradient(to right, #5044E5, #8B5CF6)',
                                        'linear-gradient(to right, #8B5CF6, #5044E5)',
                                        'linear-gradient(to right, #5044E5, #8B5CF6)'
                                    ]
                                } : {}}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div 
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <motion.img 
                                            src={assets.arrow_icon} 
                                            alt="" 
                                            className='w-5'
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    </>
                                )}
                            </motion.button>

                            <motion.p 
                                variants={itemVariants}
                                className='text-sm text-gray-500 dark:text-gray-400 text-center mt-4'
                            >
                                By submitting this form, you agree to our Privacy Policy.
                            </motion.p>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default ContactUs