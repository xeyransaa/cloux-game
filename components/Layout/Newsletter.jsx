import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter bg-[url('/img/block-bg-1920x209.jpg')] bg-cover bg-center bg-no-repeat relative before:absolute before:top-0 before:left-0 before:bg-yel before:opacity-75 before:w-full before:h-full px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[70px]">
        <div className="relative z-10 min-[1200px]:max-w-[1140px] max-w-full mx-auto">
          <div className='flex justify-center items-center'>
          <form
            action=""
            className="grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 gap-5 items-center"
          >
            <div className="uppercase text-white text-[24px] font-black w-full my-[12px] col-span-2 md:col-span-4 lg:col-auto text-center">
              newsletter:
            </div>
            <input
              type="text"
              placeholder="Your email address"
              className="py-[10px] w-full h-[50px] px-[20px] text-white border-white border-[2px] border-solid bg-transparent placeholder:text-white placeholder:text-[14px] outline-none"
            />
            <input
              type="text"
              placeholder="First Name"
              className="py-[10px] w-full h-[50px] px-[20px] text-white border-white border-[2px] border-solid bg-transparent placeholder:text-white placeholder:text-[14px] outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-[10px] w-full h-[50px] px-[20px] text-white border-white border-[2px] border-solid bg-transparent placeholder:text-white placeholder:text-[14px] outline-none"
            />

            <button
              type="submit"
              className="text-yel w-full font-semibold uppercase hover:bg-black hover:border-black transition-all duration-200 relative h-[50px] px-[20px] border-white border-[2px] border-solid bg-white outline-none text-[14px]"
            >
              Submit
            </button>
          </form>

          </div>
          
        </div>
      </section>
  )
}

export default Newsletter