import React from 'react'
import Hero from './components/Hero.jsx'
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import SocialBar from "./components/SocialBar.jsx";

const App = () => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-gray-300 min-h-screen transition-colors duration-300">
            <Navbar />
            <SocialBar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
export default App
