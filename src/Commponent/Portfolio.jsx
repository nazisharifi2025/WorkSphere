import React from 'react'

function Portfolio() {
  return (
    <section id='Portifolio' className='h-fit w-full flex flex-col '>
        <div className='h-[80vh] w-full relative bg-black flex justify-between items-center font-web text-nav'>
            <div className='w-[80%] h-full flex justify-center items-center'>
            <h1 className='text-7xl font-normal absolute -top-9 right-[35%]'>PORTFOLIO</h1>
            <div className='w-[40%] h-[55%] flex flex-col relative gap-4 justify-center'>
                <h1 className='text-8xl text-stone-300 absolute top-0 -left-15'>1</h1>
                <h2 className='text-4xl text-nav w-[60%]'>CHARITY PLATFORM </h2>
                <p className='text-sm w-[80%] text-stone-100  font-normal'>Give an intro to what your project is about and how it helps the community. This project is focused on supporting those in need through digital donations, volunteer coordination, and awareness campaigns.  
It’s designed to make giving easier and more accessible for everyone.  
This is just a preview — click below to see the full details and demo.</p>
<div className='w-full flex space-x-5'>
    <button className='px-7 py-2 rounded-full bg-nav text-black hover:bg-transparent hover:border hover:text-stone-300 border-stone-300 '>React</button>
    <button className='px-7 py-2 rounded-full border text-nav hover:bg-stone-300 hover:text-black hover:border-0 '>Tailwindcss</button>
    <button className='px-7 py-2 rounded-full bg-nav text-black hover:bg-transparent hover:border hover:text-stone-300 border-stone-300 '>Javaiscript</button>
</div>
<button className='py-2 px-6 bg-nav text-black w-fit'>Learn More</button>
            </div>
             <div className='h-[50vh] absolute z-40 -bottom-24 border-8 text-nav right-10 w-[550px] overflow-hidden'>
            <div className=' bg-cover hover:scale-105 transition-all duration-500  h-full w-full bg-no-repeat bg-center bg-[url(public/Images/charity.jpg)] '></div>
            </div>
        </div>
        </div>
        {/* one div ended */}
        <div className='h-[80vh] w-full relative bg-nav2 flex justify-end items-center font-web text-nav'>
            <div className='w-[80%] h-full float-right flex justify-end items-center'>
            <div className='w-[40%] h-[55%] flex flex-col relative gap-4 justify-center'>
                <h1 className='text-8xl text-stone-200 absolute top-0 -left-15'>2</h1>
                <h2 className='text-4xl text-black w-[90%]'>DENTAL CLINIC WEBSITE</h2>
                <p className='text-sm w-[80%] text-black  font-normal'>This project is a modern and user-friendly website built for a dental clinic. The goal was to create a clean, trustworthy, and easy-to-navigate platform for patients to book appointments, explore services, and contact the clinic.  </p>
                <div className='w-full flex space-x-5'>
    <button className='px-7 py-2 rounded-full bg-nav text-black hover:bg-transparent hover:border hover:text-stone-300 border-stone-300 '>React</button>
    <button className='px-7 py-2 rounded-full border text-nav hover:bg-stone-300 hover:text-black hover:border-0 '>Tailwindcss</button>
</div>
<button className='py-2 px-6 bg-black text-nav w-fit'>Learn More..</button>
            </div>
            <div className='h-[50vh] absolute z-40 -bottom-24 border-8 text-nav left-10 w-[550px] overflow-hidden'>
            <div className=' bg-cover hover:scale-105 transition-all duration-500  h-full w-full bg-no-repeat bg-center bg-[url(public/Images/doctor.jpg)] '></div>
            </div>
        </div>
        </div>
        {/* div 2 endded */}
        <div className='h-[94vh] w-full relative bg-black flex justify-between items-center font-web text-nav'>
            <div className='w-[80%] h-full flex justify-center items-center'>
            <div className='w-[40%] h-[55%] flex flex-col relative gap-4 justify-center'>
                <h1 className='text-8xl text-stone-300 absolute top-0 -left-15'>3</h1>
                <h2 className='text-4xl text-nav w-[60%]'>Interior Design Website
</h2>
                <p className='text-sm w-[80%] text-stone-100  font-normal'>This website was created for an interior designer to showcase their work, services, and unique design approach in a sleek and modern way. The layout focuses on minimalism and elegance, allowing the visuals to speak for themselves and build trust with potential clients.
</p>
<div className='w-full flex gap-5 flex-wrap'>
    <button className='px-7 py-2 rounded-full bg-nav text-black hover:bg-transparent hover:border hover:text-stone-300 border-stone-300 '>React</button>
    <button className='px-7 py-2 rounded-full border text-nav hover:bg-stone-300 hover:text-black hover:border-0 '>Tailwindcss</button>
    <button className='px-7 py-2 rounded-full bg-nav text-black hover:bg-transparent hover:border hover:text-stone-300 border-stone-300 '>Javaiscript</button>
    <button className='px-7 py-2 rounded-full border text-nav hover:bg-stone-300 hover:text-black hover:border-0 '>Swipper</button>
</div>
<button className='py-2 px-6 bg-nav text-black w-fit'>Learn More</button>
            </div>
            <div className='h-[50vh] absolute z-40 -bottom-24 border-8 text-nav right-10 w-[550px] overflow-hidden'>
            <div className=' bg-cover hover:scale-105 transition-all duration-500  h-full w-full bg-no-repeat bg-center bg-[url(public/Images/home.jpg)] '></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Portfolio