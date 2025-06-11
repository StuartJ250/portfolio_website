import React from 'react'
import Hero from './components/Hero.jsx'
import Header from './components/Header.jsx'
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-gray-300 min-h-screen transition-colors duration-300">
            <Navbar />
            <Hero />
        </div>
    )
}
export default App
