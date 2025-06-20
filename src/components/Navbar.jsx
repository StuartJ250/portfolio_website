import React, {useEffect, useState} from 'react'

import {MoonIcon, SunIcon, Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') return true;
        if (stored === 'light') return false;

        return window.matchMedia('(prefers-color-scheme:dark').matches;
    });

    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <nav className="w-full bg-white dark:bg-black p-1 fixed top-0 left-0 z-40">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo Link */}
                <a href="#top" className=" text-sm md:text-4xl font-extrabold text-soft-teal dark:text-soft-teal">
                    <img src="src/assets/logos/SJLogo2.png"
                    alt="Logo"
                    className="rounded-full h-10 md:h-20 w-auto object-contain" />
                </a>
                {/* NAV DESKTOP LINKS */}
                <ul className="hidden md:flex gap-6 text-lg text-shadow-md text-gray-700 dark:text-gray-300 font-medium">
                    <li><a href="#top">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me!</a></li>
                </ul>

                {/* DARK MODE TOGGLE */}
                <div className="ml-6">
                    <label className="relative inline-flex items-center cursor-pointer ">
                        <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode(prev => !prev)}
                        />
                        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-softPurple transition-all relative duration-300" />
                            <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transform transition-transform flex items-center justify-center duration-300">
                                {isDarkMode ? (
                                    <MoonIcon className="h-4 w-4 text-soft-purple" />
                                ) : (
                                    <SunIcon className="h-4 w-4 text-yellow-400" />
                                )}
                            </span>
                    </label>
                </div>

                {/* NAV Mobile LINKS */}
                <div className="md:hidden bg-gray-300 dark:bg-gray-900 rounded-lg ">
                    <button onClick={() => setMenuOpen((prev) => !prev)}>
                        {menuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-soft-teal"/>
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-soft-teal"/>
                        )}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-white dark:bg-black p-4 rounded shadow transition-all">
                    <a href="#top" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-softPurple">Home</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-softPurple">Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-softPurple">Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-softPurple">Contact</a>
                </div>
            )}
        </nav>
    )
}
export default Navbar
