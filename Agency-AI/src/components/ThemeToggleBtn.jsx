
import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {

    useEffect(()=> {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme || (prefersDarkMode ? 'dark' : 'light'))
    }, [])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])

    return (
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            {theme === 'dark' ? (
                <img onClick={()=> setTheme('light')} src={assets.sun_icon} 
                className='size-6 p-1 bg-yellow-100 dark:bg-yellow-900/30 border border-gray-300 dark:border-gray-600 rounded-full transition-transform hover:scale-110' alt="Light mode" />
            ) : (
                <img onClick={()=> setTheme('dark')} src={assets.moon_icon} 
                className='size-6 p-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full transition-transform hover:scale-110' alt="Dark mode" />
            )}
        </button>
    )
}

export default ThemeToggleBtn