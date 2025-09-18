import React from 'react'

function Mysceel() {
  return (
    <section id='scill' className='w-full h-fit bg-no-repeat bg-cover bg-center bg-[url(public/Images/bg.jpg)] '>
        <div className='h-full w-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center lg:py-20 py-28 px-12 flex-col gap-16'>
            <h1 className='text-4xl font-web'>My <span className='text-5xl font-kheal'>Skills</span></h1>
            <div className='flex gap-12 w-full justify-center flex-wrap'>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav p-4 rounded-xl animate-bounce text-red-500 fab fa-html5"></i>
                <h1 className='font-medium text-2xl'>HTML</h1>
                <p>Proficient in writing semantic, accessible, and clean HTML markup.</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav p-4 rounded-xl animate-bounce text-blue-500 fab fa-css3-alt"></i>
                <h1 className='font-medium text-2xl'>CSS</h1>
                <p>Clean, responsive styles with Flexbox and Grid</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav p-4 rounded-xl animate-bounce text-yellow-500 fab fa-js"></i>
                <h1 className='font-medium text-2xl'>jAVASCRIPT</h1>
                <p>Dynamic web apps using vanilla JavaScript.</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav p-4 rounded-xl animate-bounce text-cyan-600 fas fa-wind"></i>
                <h1 className='font-medium text-2xl'>TailwindCss</h1>
                <p>Efficient styling with Tailwind CSS utility classes.</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav px-3 py-4 rounded-xl animate-bounce text-blue-800 fas fa-code"></i>
                <h1 className='font-medium text-2xl'>TypeScrept</h1>
                <p>Strongly-typed JavaScript development with TypeScript.</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav p-4 rounded-xl animate-bounce text-cyan-500 fab fa-react"></i>
                <h1 className='font-medium text-2xl'>REACT</h1>
                <p>Build scalable apps with React Hooks.</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav px-3 py-4 rounded-xl animate-bounce text-indigo-900 fab fa-php"></i>
                <h1 className='font-medium text-2xl'>PHP</h1>
                <p>Server-side development with PHP.</p>
                </div>
              <div className='h-[150px] w-[300px] rounded-2xl bg-nav2 hover:bg-transparent hover:border border-stone-300 px-12 py-6 relative '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all absolute top-12 -left-6 duration-700 bg-nav p-4 rounded-xl animate-bounce text-black fab fa-github"></i>
                <h1 className='font-medium text-2xl'>GIT HUB</h1>
                <p>Version control and collaboration using GitHub.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mysceel