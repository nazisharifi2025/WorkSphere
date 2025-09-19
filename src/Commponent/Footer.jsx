import React from 'react'

function Footer() {
  return (
    <section id='Contuct' className='lg:h-[90vh] h-fit w-full bg-black py-4 text-nav flex flex-col justify-center items-center font-body'>
        <h1 className='text-4xl lg:my-0 md:my-0 my-5'>Get In <span className='font-serif text-stone-300'>Touch</span></h1>
    <div className='h-[90%] w-full  flex justify-between lg:flex-row flex-col items-center'>
        <div className='lg:w-1/2 w-full h-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl'>Contact Information</h1>
        <div className='h-fit w-full flex flex-col gap-7 py-6'>
            <div className='flex gap-16 items-center w-[60%] mx-auto h-fit p-2'>
               <i class="fas fa-envelope text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Email <br /> Nazisharifi415@gmail.com</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col gap-7 py-6'>
            <div className='flex gap-16 items-center w-[60%] mx-auto h-fit p-2'>
               <i class="fas fa-phone text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Phone Number <br /> +93-795-064-649</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col gap-7 py-6'>
            <div className='flex gap-16 items-center w-[60%] mx-auto h-fit p-2'>
               <i class="fas fa-map-marker-alt text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Location <br /> Ghazni Afghanistan</h2>
            </div>
        </div>
        </div>
          <div className='lg:w-1/2 w-full h-full flex flex-col items-center justify-center'>
    <h1 className='text-2xl text-nav py-6'>Send A Messege</h1>
    <form className='w-full flex justify-center items-center flex-col gap-5'>
        <label htmlFor="">Your Name</label>
        <input type="text" className='lg:w-[60%] w-[80%] outline-0 border text-nav rounded-md py-3' placeholder='Nazi' />
        <label htmlFor="">Your Email</label>
        <input type="text" className='lg:w-[60%] w-[80%] outline-0 border text-nav rounded-md py-3' placeholder='nazisharifi415@gmail.com' />
        <label htmlFor="">Your Email</label>
        <textarea type="text" className='lg:w-[60%] w-[80%] outline-0 border text-nav rounded-md py-3' placeholder='Hi there , i am Writing this to..' />
        <button className='px-6 py-2 bg-nav text-black rounded-sm w-fit'>Send Messege</button>
    </form>
    </div>
    </div>
  </section>
  )
}

export default Footer