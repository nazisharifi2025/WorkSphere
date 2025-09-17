import React from 'react'

function Navbar() {
  return (
    <div className='h-20 fixed z-50 w-full text-nav bg-black flex justify-between items-center px-14'>
        <h1 className='font-kheal text-5xl font-normal'>Nazi Sharifi</h1>
        <ul className='font-web flex space-x-12 font-normal text-xl'>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Home">Home</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#About">About Us</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Portifolio">Project</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#scill">Skills</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Contuct">Contuct Us</a></li>
        </ul>
    </div>
  )
}

export default Navbar