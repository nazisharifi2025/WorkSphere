import React from 'react'

function Slider() {
  return (
    <div className='h-[100vh] flex justify-between items-center w-full bg-no-repeat bg-cover bg-center bg-[url(../public/Images/bg.jpg)]  '>
      <div className='flex relative justify-between items-center w-full  px-24 h-full bg-[rgba(107,108,109,0.4)] '>
        <div className='h-full w-[40%] mx-6  flex flex-col gap-12 justify-end py-24 '>
          <h1 className='text-sm font-web font-normal py-2 px-6 border w-fit rounded-full'>Front-End & Back-End <span className='font-bold text-sm text-nav'>Developer</span><br /></h1>
            <h1 className=' font-web font-normal'><span className='font-bold text-2xl'>Creating modern and device-compatible <span className='text-nav'>websites</span>  that help you grow and get noticed in the <span className='text-nav'>online world</span> </span>
            <div className='w-[50%] border-b '></div>
            If you're interested in collaborating, have a question, or something in my work caught your eye, I'd be happy to hear from you.
I'm always excited to connect with creative minds and explore new opportunities to learn and grow.
            </h1>
            <button className='py-2 px-5 bg-black font-web text-xl font-normal text-nav w-fit'>Read More..</button>
        </div>
        <div className="  right-22 absolute  rounded-full  h-[414px] flex justify-center items-center w-[414px] bg-gradient-to-tr from-text-nav to-black animate-spin-slow">
          </div>    
            <div className='h-[400px] w-[400px] rounded-full bg-no-repeat text-nav bg-cover object-cover bg-center bg-[url(../public/Images/me3.jpg)]   '>
        </div>
          </div>
    </div>
  )
}

export default Slider