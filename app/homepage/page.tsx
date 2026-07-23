import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'
import Chatbot from './Chatbot'

export default function HomePage() {
    return (
        <div className="bg-white">
            <Navbar />
            <div className="pt-16">
                <Hero />
                <About />
                <Skills />
                <Project />
                <Contact />
            </div>
            <Chatbot />
        </div>
    )
}
