import React from 'react'

function Slider() {
  return (
    <section id='Slider' className='lg:h-[100vh] h-fit flex justify-between items-center w-full bg-no-repeat bg-cover bg-center bg-[url(../public/Images/bg.jpg)]  '>
      <div className='flex relative justify-between lg:flex-row flex-col  items-center w-full px-4 lg:px-24 h-full bg-[rgba(107,108,109,0.4)] py-16'>
        <div className='lg:h-full h-fit w-full lg:w-[45%] lg:mx-6 mx-0  flex flex-col gap-12 justify-end lg:py-18 py-6'>
          <h1 className='text-sm font-web font-normal py-2 px-6 border w-fit rounded-full'>Front-End & Back-End <span className='font-bold text-sm text-nav'>Developer</span><br /></h1>
            <h1 className=' font-body font-normal'><span className='font-bold text-2xl'>Creating modern and device-compatible <span className='text-nav'>websites</span>  that help you grow and get noticed in the <span className='text-nav'>online world</span> </span>
            <div className='w-[50%] border-b '></div>
            If you're interested in collaborating, have a question, or something in my work caught your eye, I'd be happy to hear from you.
I'm always excited to connect with creative minds and explore new opportunities to learn and grow.
            </h1>
            <button className='py-2 px-5 bg-black font-web text-xl font-normal text-nav w-fit'><a href="#About">Read More..</a></button>
        </div>
        <div className="  lg:right-22 md:right-44 right-0 lg:bottom-27 bottom-14   absolute  rounded-full  lg:h-[414px] md:h-[414px] h-[396px] flex justify-center items-center lg:w-[414px] md:w-[414px] w-[396px] mx-auto  bg-gradient-to-tr from-text-nav to-black animate-spin-slow">
          </div>    
            <div className='lg:h-[400px] md:h-[400px] h-[396px] md:w-[400px] mx-auto w-[396px] lg:w-[400px] rounded-full bg-no-repeat text-nav bg-cover object-cover bg-center bg-[url(../public/Images/mee.jpg)]   '>
        </div>
          </div>
    </section>
  )
}

export default Slider