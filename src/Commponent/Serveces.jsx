import React from 'react'

function Serveces() {
  return (
    <div className='h-screen w-full bg-black text-nav p-24 relative flex justify-center gap-5 flex-wrap'>
        <h1 className='text-6xl font-medium font-web absolute -top-7 right-[40%] '>SERVECES</h1>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 text-black'>
            <i class="fas fa-code text-4xl text-amber-600"></i>
            <h1 className='font-normal text-xl'>Website Development</h1>
            <p>Design and develop modern, responsive websites using HTML, CSS, Tailwind CSS, JavaScript, and the React library.</p>
        </div>
        <div className='bg-nav rounded-2xl flex hover:bg-stone-300 hover:scale-105 flex-col h-[200px] w-[330px] font-body p-3 justify-center gap-3 text-black'>
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
    </div>
  )
}

export default Serveces