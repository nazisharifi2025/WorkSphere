import React from 'react'

function Navbar() {
  function handelClick(){
    document.getElementById("menu").classList.remove("hidden");
  }
  function handelclose(){
    document.getElementById("menu").classList.add("hidden");
  }
  return (
    <div className='h-20 fixed z-50 w-full text-nav bg-black flex justify-between items-center lg:px-14 md:px-14 px-5'>
        <h1 className='font-kheal text-5xl font-normal'>Nazi Sharifi</h1>
        <ul id='menu' className='font-web lg:flex lg:flex-row lg:px-0 px-4 flex-col lg:h-[50%] h-68 absolute  bg-black lg:w-fit w-[80%] lg:top-8 top-18 md:right-20 right-10 lg:right-6 lg:bg-transparent hidden rounded-2xl lg:space-x-12 lg:gap-0 gap-12 font-normal text-xl'>
          <button className='lg:hidden md:block w-full border-b text-right' onClick={handelclose}>
        <i className='fas fa-times text-4xl'></i>
        </button>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Home">Home</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Serveces">Serveces</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#About">About Us</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Portifolio">Project</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#scill">Skills</a></li>
            <li className='hover:text-fuchsia-100 hover:cursor-pointer'><a href="#Contuct">Contuct Us</a></li>
        </ul>
        <button className='lg:hidden md:block' onClick={handelClick}>
        <i className='fas fa-bars text-4xl '></i>
        </button>
    </div>
  )
}

export default Navbar