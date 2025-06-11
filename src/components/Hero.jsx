import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Content for Hero Starts here*/}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-gray-300">
                        Hi! My name is  <span className="text-soft-teal">Stuart Jacobson!</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                        Software Engineer & Developer
                    </h2>
                    <p className="max-w-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        I like to learn new things and make stuff.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Hero
