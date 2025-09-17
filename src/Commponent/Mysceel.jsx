import React from 'react'

function Mysceel() {
  return (
    <section id='scill' className='w-full h-[60vh] bg-no-repeat bg-cover bg-center bg-[url(public/Images/bg.jpg)] '>
        <div className='h-full w-full bg-[rgba(0,0,0,0.3)] flex justify-center items-center py-20 flex-col gap-16'>
            <h1 className='text-4xl font-web'>My <span className='text-5xl font-kheal'>Skills</span></h1>
            <div className='flex space-x-6 w-full justify-center '>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all duration-700 bg-nav p-5 rounded-full fab fa-html5"></i>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all duration-700 bg-nav p-5 rounded-full fab fa-css3-alt"></i>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all duration-700 bg-nav p-5 rounded-full fab fa-js"></i>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all duration-700 bg-nav p-5 rounded-full fab fa-react"></i>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all duration-700 bg-nav p-5 rounded-full fab fa-php"></i>
                <i class="text-4xl hover:rotate-180 transform-fill transition-all duration-700 bg-nav p-5 rounded-full fab fa-github"></i>
            </div>
        </div>
    </section>
  )
}

export default Mysceel