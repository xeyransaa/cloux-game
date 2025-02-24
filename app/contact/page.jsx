'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Login from '@/components/Login'
import Newsletter from '@/components/Newsletter'

import SignUp from '@/components/SignUp'
import SocialMedia from '@/components/SocialMedia'
import React, { useState } from 'react'
import { FaEnvelope, FaFax, FaLocationDot, FaPhone} from 'react-icons/fa6'


const Contact = () => {
    const [showLogin, setShowLogin] = useState(false)
      const [showSignUp, setShowSignUp] = useState(false)
  return (
    <>
    <Header/>
    <Heading name="contact"/>
    <section className='main'>
        <div className="contact-info min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
            <div className='md:flex justify-between'>
                <div className='message-form mr-[20px] mb-[70px] w-full md:w-[60%]'>
                    <form action="">
                        <div className='grid grid-cols-2 gap-4 mb-[20px]'>
                        <input type="text" className='text-[14px] mb-[25px] px-[20px] py-[10px] border-[1px] border-[rgba(134,132,132,0.59)] outline-none'  placeholder='Name'/>
                        <input type="text" className='text-[14px] mb-[25px] px-[20px] py-[10px] border-[1px] border-[rgba(134,132,132,0.59)] outline-none' placeholder='Email Address'/>
                        <input type="text" className='text-[14px] mb-[25px] px-[20px] py-[10px] border-[1px] border-[rgba(134,132,132,0.59)] outline-none' placeholder='Phone Number'/>
                        <input type="text" className='text-[14px] mb-[25px] px-[20px] py-[10px] border-[1px] border-[rgba(134,132,132,0.59)] outline-none' placeholder='Subject'/>
                        
                        <textarea className='col-span-2 h-[130px] text-[14px] mb-[25px] px-[20px] py-[10px] border-[1px] border-[rgba(134,132,132,0.59)] outline-none' placeholder='Message'/>

                        </div>
                        <button
              type="submit"
              className="text-white bg-yel font-semibold uppercase hover:bg-black hover:border-black transition-all duration-200 relative h-[50px] px-[20px] border-white border-[2px] border-solid bg-white outline-none text-[14px]"
            >
              Submit
            </button>

                       


                    </form>

                </div>
                <div className='details w-full md:w-[37%]'>
                    <div className='flex items-center mb-[15px]'>
                        <FaLocationDot className='mr-[10px] text-yel'/>
                        <p className='text-[14px]'>Walking Street, Los Angeles, California, USA</p>

                    </div>
                    <div className='flex items-center mb-[15px]'>
                        <FaEnvelope className='mr-[10px] text-yel'/>
                        <a href='mailto:info@cloux.com' className='text-[14px] hover:text-yel transition duration-200'>
                        info@cloux.com</a>

                    </div>
                    <div className='flex items-center mb-[15px]'>
                        <FaPhone className='mr-[10px] text-yel'/>
                        <a href='tel:0674 987 66 59' className='text-[14px] hover:text-yel transition duration-200'>
                        0674 987 66 59</a>

                    </div>
                    <div className='flex items-center mb-[35px]'>
                        <FaFax className='mr-[10px] text-yel'/>
                        <p className='text-[14px]'>1923 236 12 96
                        </p>

                    </div>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto. Ea movet saperet rationibus sit, pri autem aliquip invidunt an consetetur omittantur.</p>

                </div>

            </div>
        </div>
        <div className='map'>
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48383.67307648629!2d-74.00502849999998!3d40.718466299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990e23d7e8d%3A0xfa615edfd1b67e18!2sWashington%20Square%20Park!5e0!3m2!1sen!2sus!4v1740193272968!5m2!1sen!2sus" width="600" height="450"></iframe>

        </div>
      

    </section>
    <Newsletter/>
    <SocialMedia/>
    <Footer />
    
      {showLogin && <Login onClose={() => setShowLogin(false)} switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }} />}
    </>
  )
}

export default Contact