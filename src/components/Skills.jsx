import React, { useState } from 'react'
import {FaJava, FaPython, FaReact, FaAws, FaGitAlt} from 'react-icons/fa'
import {SiTailwindcss, SiSpringboot, SiMysql, SiKotlin}from 'react-icons/si'


const skills = [
    {name: 'Java', level: 'Advanced', icon: <FaJava />},
    {name: 'Python', level: 'Intermediate', icon: <FaPython />},
    {name: 'React.js', level: 'Intermediate', icon: <FaReact />},
    {name: 'TailwindCSS', level: 'Intermediate', icon: <SiTailwindcss />},
    {name: 'SQL', level: 'Intermediate', icon: <SiMysql />},
    {name: 'Spring Boot', level: 'Intermediate', icon: <SiSpringboot />},
    {name: 'AWS', level: 'Intermediate', icon: <FaAws />},
    {name: 'GIT', level: 'Intermediate', icon: <FaGitAlt />},
    {name: 'Kotlin', level: 'Advanced', icon: <SiKotlin />},
];

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(null);


    return (
        <section id="skills" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black dark:text-gray-300 mb-12">
                    My Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={skill.name}
                             onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                             className="relative aspect-square cursor-pointer group"
                        >
                            {/*3D Container*/}
                            <div
                                className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                                    index === activeIndex ?'rotate-y-180' : ''
                                }`}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden backface-hidden flex flex-col justify-center items-center hover:shadow-2xl hover:scale-105 hover:z-10">
                                    <div className="opacity-70 dark:opacity-40 text-6xl text-soft-teal mb-2 group-hover:opacity-90 group-hover:scale-110">{skill.icon}</div>
                                    <div className="opacity-70 text-soft-teal text-lg font-semibold group-hover:scale-110 group-hover:drop-shadow-xl">{skill.name}</div>
                                </div>

                                {/*Back*/}
                                <div className="absolute inset-0 bg-dark-purple text-white rounded-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center p-4">
                                    <div className="text-md font-bold mb-2 p-4">{skill.level}</div>

                                    <div className=" relative w-4/5 h-6 bg-white/20 rounded-lg overflow-hiddenborder border-white/30">
                                        {[25, 50, 75].map((percent) => (
                                        <div key={percent}
                                             className="absolute top-0 bottom-0 w0.5 bg-white/30"
                                             style={{left: `${percent}%`}}
                                             />

                                        ))}

                                        <div key={activeIndex === index ? `fill-${index}` : `empty-${index}`}
                                             className={`h-full bg-white rounded-lg animate-fill transition-all duration-1000
                                                        ${
                                                         skill.level === 'Beginner'
                                                            ? 'fill-25'
                                                         : skill.level === 'Intermediate'
                                                            ? 'fill-50'
                                                         : skill.level === 'Advanced'
                                                            ? 'fill-75'
                                                         : 'fill-100'
                                             }`}
                                             ></div>
                                    </div>
                                </div>
                            </div>
                            {/*/!*Icon Background*!/*/}
                            {/*<div className="absolute inset-0 flex items-center justify-center opacity-40 text-6xl text-soft-teal pointer-events-none">*/}
                            {/*    {skill.icon}*/}
                            {/*</div>*/}

                            {/*/!*Skill Name*!/*/}
                            {/*<div className="text-lg font-semibold text-soft-teal group-hover:scale-105 transition-transform">*/}
                            {/*    {skill.name}*/}
                            {/*</div>*/}

                            {/*/!*Skill level reveal*!/*/}
                            {/*<div*/}
                            {/*    className={`absolute inset-0 flex items-center justify-center bg-soft-teal rounded-lg transition-opacity duration-300 ${*/}
                            {/*        activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'*/}
                            {/*    }`}*/}
                            {/*>*/}
                            {/*    <>*/}
                            {/*        <div className="text-sm font-extrabold text-soft-purple mb-2"> {skill.level} </div>*/}
                            {/*        <div className="w-4/5 h-5 bg-gray-200 dark:bg-gray-600 rounded-full">*/}
                            {/*            <div className="h-full bg-soft-purple rounded-full transition-all duration-300"*/}
                            {/*                 style = {{*/}
                            {/*                     width:*/}
                            {/*                        skill.level === 'Beginner' ? '25%'*/}
                            {/*                            :skill.level === 'Intermediate' ? '50%'*/}
                            {/*                            :skill.level === 'Advanced' ? '75%'*/}
                            {/*                            :skill.level === 'Master' ? '100%'*/}
                            {/*                            :'0%',*/}
                            {/*                 }}*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*    </>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills
