import React from 'react'

function AboutMe() {
  return (
    <section id='About' className='lg:h-screen h-fit w-full flex lg:flex-row flex-col justify-center lg:py-0 py-12 bg-nav items-center gap-16'>
        <div className='h-full lg:w-[30%] w-full lg:px-0 px-5 flex flex-col relative justify-center gap-4'>
            <h1 className='font-kheal text-5xl'>About Me</h1>
            <p className='font-extralight font-body'>Hi, I'm Nazi Sharifi, a passionate and dedicated web developer with a strong foundation in both frontend and backend technologies. I have successfully studied and practiced HTML, CSS, JavaScript, React, Next.js, PHP, and Laravel.  

I enjoy turning ideas into real, functional websites and applications. Whether it's creating clean and responsive UI using modern frontend frameworks, or building robust backend systems, I love the challenge of full-stack development.

My goal is to continuously grow as a developer, work on meaningful projects, and contribute to solutions that make a real impact</p>
<button className='py-2 px-6 bg-black text-nav font-veb font-web w-fit font-medium'><a href="#Slider">GET TO KNOW ME</a></button>
<div className='w-[60%]  lg:border-b text-black absolute bottom-36 -right-24'></div>
        </div>
       <div className='lg:h-[70vh] h-[50vh] lg:w-[50%] w-full my-4 lg:my-0 overflow-hidden'>
  <div className='h-full w-full bg-cover bg-no-repeat bg-center bg-[url(../public/Images/about.avif)] animate-pulse-scale'></div>
</div>
    </section>
  )
}

export default AboutMe