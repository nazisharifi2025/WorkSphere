import React from 'react'

function Serveces() {
  return (
    <section id='Serveces' className='lg:h-screen h-fit w-full bg-black text-nav lg:p-24 p-6 relative flex justify-center gap-5 flex-wrap'>
        <h1 className='text-6xl font-medium font-web absolute -top-7 lg:right-[40%] md:right-[30%] '>SERVECES</h1>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] lg:my-0  font-body p-3 justify-center gap-3 mt-7 text-black'>
            <i class="fas fa-code text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Website Development</h1>
            <p>Design and develop modern, responsive websites using HTML, CSS, Tailwind CSS, JavaScript, and the React library.</p>
        </div>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 lg:mt-0 mt-7 text-black'>
            <i class="fas fa-sync-alt text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Website Redesign</h1>
            <p>Redesigning outdated websites with a clean look, high performance, and full mobile compatibility.</p>
        </div>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 text-black'>
            <i class="fas fa-laptop-code text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Responsive Design</h1>
            <p>Make sure your website looks great on all screen sizes — phone, tablet, and desktop.</p>
        </div>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 text-black'>
            <i class="fas fa-bolt text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Interactive Features</h1>
            <p>Adding interactive elements like sliders, modals, and dropdowns with JavaScript, efficiently managed using React Hooks.</p>
        </div>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 text-black'>
            <i class="fas fa-moon text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Dark Mode Toggle</h1>
            <p>Develop customizable and responsive themes using JavaScript and React to create consistent and engaging user interfaces.</p>
        </div>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 text-black'>
            <i class="fas fa-paint-brush text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Web Design</h1>
            <p>Designing modern UI/UX solutions to elevate and optimize user experience across all devices.</p>
        </div>
    </section>
  )
}

export default Serveces