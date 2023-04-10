import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
