import React from 'react'
import profileImage from "../assets/images/profileImage.jpg"
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";



const textVariant ={
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 1.2} },
};

const imageVariant = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 1.2} },
}

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    return (
        <section id="hero" ref={ref} className=" min-w-screen min-h-screen flex items-center justify-center pt-24 scroll-mt-24 py-6 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Content for Hero Starts here*/}
                <motion.div className="text-center md:text-left" variants={textVariant} initial="hidden" animate={isInView ? 'visible':'hidden'}>

                    <p className="text-xl md:text-2xl font-bold text-black dark:text-gray-300">
                        Hi! My name is
                    </p>
                    <h1 className="text-soft-teal text-2xl md:text-5xl font-extrabold mb-0">
                        Stuart Jacobson
                    </h1>

                    <h2 className="text-lg md:text-2xl font-bold text-gray-600 dark:text-gray-300 mb-10">
                        Software Engineer & Developer
                    </h2>

                    <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        I like to learn new things and make stuff. <br />
                        Associates of Business<br />
                        Bachelor of Science - Software Engineering <br />
                        8+ years of IT support at Best Buy and Apple<br />
                        Experience in Java, Python, PostgreSQL, Android app development, UX and UI design
                    </p>
                </motion.div>
                 {/*Cute image here */}
                <motion.div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-softTeal shadow-lg" variants={imageVariant} initial="hidden" animate={isInView ? 'visible':'hidden'}>
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                        />
                </motion.div>
            </div>
        </section>
    )
}
export default Hero
