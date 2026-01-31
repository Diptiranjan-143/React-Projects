
import React, { useState } from "react";
import { motion } from 'framer-motion';
import assets from "../assets/assets";
import toast from "react-hot-toast";

const Footer = ({ theme }) => {
    const [email, setEmail] = useState("");
    const [isSubscribing, setIsSubscribing] = useState(false);

    const footerLinks = {
        Company: ["About", "Careers", "Press", "Blog"],
        Services: ["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"],
        Resources: ["Case Studies", "Whitepapers", "Tools", "Community"],
        Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
    };

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
        hidden: { y: 30, opacity: 0 },
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

    const floatAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
        if (!email.trim()) {
            toast.error("Please enter your email address");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsSubscribing(true);

        try {
            // Create form data for Web3Forms
            const formData = new FormData();
            formData.append("access_key", "6526d77a-c089-4d19-9df6-6349c6bac881");
            formData.append("email", email);
            formData.append("subject", "Newsletter Subscription Request");
            formData.append("from_name", "Newsletter Subscriber");
            formData.append("botcheck", "");
            formData.append("source", "newsletter-footer");
            formData.append("message", `New newsletter subscription from: ${email}`);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            
            if (data.success) {
                toast.success(
                    `🎉 Thank you for subscribing! We've sent a confirmation email to ${email}`,
                    {
                        duration: 5000,
                        style: {
                            background: '#10B981',
                            color: '#fff',
                            borderRadius: '10px',
                            padding: '16px',
                        },
                    }
                );
                setEmail("");
            } else {
                if (data.message.includes("already subscribed") || data.message.includes("already exists")) {
                    toast.error(
                        `You're already subscribed with ${email}!`,
                        {
                            duration: 4000,
                            style: {
                                background: '#F59E0B',
                                color: '#fff',
                            },
                            icon: 'ℹ️',
                        }
                    );
                } else {
                    toast.error(data.message || "Something went wrong. Please try again.");
                }
            }
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            toast.error("Network error. Please check your connection and try again.");
        } finally {
            setIsSubscribing(false);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <motion.footer 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black pt-20 pb-10 mt-20 overflow-hidden"
        >
            
            {/* Background decorative elements */}
            <motion.div 
                animate={floatAnimation}
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            />
            <motion.div 
                animate={{
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 0.5 }
                }}
                className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -translate-y-1/2"
            />
            <motion.div 
                animate={{
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 1 }
                }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Top */}
                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
                >
                    {/* Brand Column */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <motion.img 
                                src={theme === 'dark' ? assets.logo_dark : assets.logo} 
                                className="w-40" 
                                alt="Company Logo"
                                whileHover={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg">
                            Creating meaningful connections & turning big ideas into interactive digital experiences that drive real results.
                        </p>
                        
                        <motion.div 
                            variants={containerVariants}
                            className="flex gap-4 pt-4"
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
                                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                                >
                                    <img 
                                        src={icon} 
                                        alt="Social" 
                                        className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div 
                            key={category} 
                            variants={itemVariants}
                            custom={categoryIndex}
                            className="space-y-4"
                        >
                            <motion.h3 
                                className="text-lg font-bold text-gray-900 dark:text-white"
                                whileHover={{ x: 5 }}
                            >
                                {category}
                            </motion.h3>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <motion.li 
                                        key={linkIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: linkIndex * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.a 
                                            href="#" 
                                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.span 
                                                className="w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-primary transition-all"
                                                whileHover={{ scale: 2 }}
                                            />
                                            {link}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Newsletter */}
                <motion.div 
                    variants={itemVariants}
                    className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-8 mb-12 border border-primary/20"
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <motion.h3 
                                className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                                animate={{ 
                                    textShadow: [
                                        "0 0 0px rgba(80, 68, 229, 0)",
                                        "0 0 10px rgba(80, 68, 229, 0.3)",
                                        "0 0 0px rgba(80, 68, 229, 0)"
                                    ]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Stay Updated
                            </motion.h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Subscribe to our newsletter for the latest updates, tips, and insights delivered to your inbox.
                            </p>
                        </div>
                        <motion.form 
                            onSubmit={handleSubscribe} 
                            className="relative"
                            variants={itemVariants}
                        >
                            <div className="relative">
                                <motion.input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 pr-36"
                                    disabled={isSubscribing}
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.button 
                                    type="submit"
                                    disabled={isSubscribing}
                                    className={`absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 ${
                                        isSubscribing ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-primary/20'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={isSubscribing ? {
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
                                    {isSubscribing ? (
                                        <>
                                            <motion.div 
                                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            <span className="hidden sm:inline">Subscribing</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="hidden sm:inline">Subscribe</span>
                                            <span className="sm:hidden">Join</span>
                                        </>
                                    )}
                                </motion.button>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates.
                            </p>
                        </motion.form>
                    </div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div 
                    variants={itemVariants}
                    className="pt-8 border-t border-gray-200 dark:border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <motion.p 
                                className="text-gray-600 dark:text-gray-400"
                                animate={{ 
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                © {new Date().getFullYear()} Coders Agency. All rights reserved.
                            </motion.p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                Made with ❤️ for the digital community
                            </p>
                        </div>
                        
                        <motion.div 
                            className="flex items-center gap-6"
                            variants={containerVariants}
                        >
                            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
                                <motion.a 
                                    key={index}
                                    href="#" 
                                    variants={itemVariants}
                                    custom={index}
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                    
                    {/* Back to Top */}
                    <motion.div 
                        className="text-center mt-8"
                        variants={itemVariants}
                    >
                        <motion.a 
                            href="#hero" 
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors group"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.span 
                                className="group-hover:-translate-y-1 transition-transform"
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                ↑
                            </motion.span>
                            Back to top
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;