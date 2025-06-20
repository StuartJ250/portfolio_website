import React from 'react'
import {FaGithub, FaLinkedin,} from 'react-icons/fa'
import {SiLeetcode} from "react-icons/si";

const SocialBar = () => {
    const links =[
        {
            href: 'https://github.com/StuartJ250',
            icon: <FaGithub />,
            label: 'GitHub',
        },
        {
            href: 'www.linkedin.com/in/stuart-jacobson-535362121',
            icon: <FaLinkedin />,
            label: 'LinkedIn',
        },
        {
            href: 'https://leetcode.com/u/StuartJ250/',
            icon: <SiLeetcode />,
            label: 'LeetCode',
        }
    ]
    return (

        <section id="SocialBar">
            <div className="fixed left-0 top-1/3 z-50 hidden sm:flex flex-col items-center gap-4 px-2">
                {links.map((link, index) => (
                    <a key={index}
                       href={link.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white dark:bg-black text-soft-teal hover:text-soft-purple p-3 rounded-full shadow transition-colors duration-300"
                       title={link.label}
                    >
                        {link.icon}
                    </a>

                ))}
            </div>

            <div className="fixed bottom-0 left-0 w-full z-50 sm:hidden bg-white dark:bg-black flex justify-center gap-8 py-2 shadow-inner">
                {links.map((link, index) => (
                    <a key={index}
                       href={link.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="bg-white dark:bg-black text-soft-teal hover:text-soft-purple p-3 rounded-full shadow transition-colors duration-300"
                       title={link.label}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </section>
    )
}
export default SocialBar
