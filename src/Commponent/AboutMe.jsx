import React from 'react'

function AboutMe() {
  return (
    <section id='About' className='h-screen w-full flex justify-center bg-nav items-center gap-16'>
        <div className='h-full w-[30%] flex flex-col relative justify-center gap-4'>
            <h1 className='font-kheal text-5xl'>About Me</h1>
            <p className='font-extralight'>Hi, I'm Nazi Sharifi, a passionate and dedicated web developer with a strong foundation in both frontend and backend technologies. I have successfully studied and practiced HTML, CSS, JavaScript, React, Next.js, PHP, and Laravel.  

I enjoy turning ideas into real, functional websites and applications. Whether it's creating clean and responsive UI using modern frontend frameworks, or building robust backend systems, I love the challenge of full-stack development.

My goal is to continuously grow as a developer, work on meaningful projects, and contribute to solutions that make a real impact</p>
<button className='py-2 px-6 bg-black text-nav font-veb font-web w-fit font-medium'>GET TO KNOW ME</button>
<div className='w-[60%] border-b text-black absolute bottom-36 -right-24'></div>
        </div>
        <div className='h-[70vh] w-[350px] bg-cover bg-no-repeat bg-center bg-[url(../public/Images/me4.jpg)] '></div>
    </section>
  )
}

export default AboutMe