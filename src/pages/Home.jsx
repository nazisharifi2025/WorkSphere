import React from 'react'
import Navbar from '../Commponent/Navbar'
import Slider from '../Commponent/Slider'
import Portfolio from '../Commponent/Portfolio'
import AboutMe from '../Commponent/AboutMe'
import Mysceel from '../Commponent/Mysceel'
import Footer from '../Commponent/Footer'
import Serveces from '../Commponent/Serveces'

function Home() {
  return (
    <div className='w-full overflow-hidden bg-stone-200 h-screen overflow-y-scroll'>
        <Navbar/>
        <Slider/>
        <Serveces/>
        <AboutMe/>
        <Portfolio/>
        <Mysceel/>
        <Footer/>
    </div>
  )
}

export default Home