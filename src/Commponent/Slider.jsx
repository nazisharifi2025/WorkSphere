import React from 'react'

function Slider() {
  return (
    <div className='h-[100vh] w-full bg-no-repeat bg-cover bg-center bg-[url(../public/Images/meslide.jpg)]'>
        <div className='h-full w-[40%] mx-6 flex flex-col gap-12 justify-center'>
            <h1 className='text-3xl font-web'>Hellow</h1>
            <h1 className='text-xl font-web font-normal'>I'am <span className='font-kheal font-bold text-4xl text-nav'>Nazi sharifi</span><br />
            <div className='w-[50%] border-b '></div>
            I'm a passionate web developer with 1 year of study and internship experience.  
I focus on front-end development using React and Next.js, and have also worked with PHP and Laravel.
            </h1>
            <button className='py-2 px-5 bg-black font-web text-xl font-normal text-nav w-fit'>Read More..</button>
        </div>
    </div>
  )
}

export default Slider