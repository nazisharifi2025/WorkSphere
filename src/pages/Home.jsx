import React from 'react'
import Navbar from '../Commponent/Navbar'
import Slider from '../Commponent/Slider'
import Portfolio from '../Commponent/Portfolio'
import AboutMe from '../Commponent/AboutMe'
import Mysceel from '../Commponent/Mysceel'
import Footer from '../Commponent/Footer'

function Home() {
  return (
    <div className='w-full bg-stone-200 h-screen overflow-y-scroll'>
        <Navbar/>
        <Slider/>
        <AboutMe/>
        <Portfolio/>
        <Mysceel/>
        <Footer/>
    </div>
  )
}

export default Home