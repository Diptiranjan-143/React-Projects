import React from 'react'

const Title = ({ title, desc, align = 'center', size = 'large' }) => {
    const titleSizes = {
        large: 'text-4xl md:text-5xl lg:text-6xl font-bold',
        medium: 'text-3xl md:text-4xl font-bold',
        small: 'text-2xl md:text-3xl font-semibold'
    }

    const descSizes = {
        large: 'text-lg md:text-xl',
        medium: 'text-base md:text-lg',
        small: 'text-sm md:text-base'
    }

    const alignClasses = {
        center: 'text-center mx-auto',
        left: 'text-left',
        right: 'text-right ml-auto'
    }

    return (
        <div className={`mb-12 ${alignClasses[align]}`}>
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            
            <h2 className={`${titleSizes[size]} text-gray-900 dark:text-white mb-6 leading-tight`}>
                {title.includes(' ') ? (
                    <>
                        {title.split(' ').map((word, index, arr) => {
                            if (word.toLowerCase().includes('digital') || 
                                word.toLowerCase().includes('impact') || 
                                word.toLowerCase().includes('amazing') ||
                                word.toLowerCase().includes('experts') ||
                                word.toLowerCase().includes('projects') ||
                                word.toLowerCase().includes('build')) {
                                return (
                                    <span key={index} className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                        {word}{index < arr.length - 1 ? ' ' : ''}
                                    </span>
                                )
                            }
                            return (
                                <span key={index} className="text-gray-900 dark:text-white">
                                    {word}{index < arr.length - 1 ? ' ' : ''}
                                </span>
                            )
                        })}
                    </>
                ) : (
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        {title}
                    </span>
                )}
            </h2>
            
            {desc && (
                <p className={`${descSizes[size]} text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed ${
                    align === 'center' ? 'mx-auto' : ''
                }`}>
                    {desc}
                </p>
            )}
        </div>
    )
}

export default Title