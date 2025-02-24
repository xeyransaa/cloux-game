'use client'
import FancyButton from '@/components/FancyButton'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Login from '@/components/Login'
import Newsletter from '@/components/Newsletter'

import SignUp from '@/components/SignUp'
import SocialMedia from '@/components/SocialMedia'
import React, { useState } from 'react'
import { FaGamepad, FaLifeRing, FaRegLifeRing, FaRocket } from 'react-icons/fa6'

const About = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <>
    <Header/>
    <Heading name="about"/>
    <section className='main'>
      <div className='container min-[1200px]:max-w-[1140px] max-w-full mx-auto px-0 py-0 md:px-[2.308rem] min-[1200px]:px-[15px] md:py-[80px]'>
        <div className='py-[80px] px-[1.154rem] md:p-[40px] shadow-[0_0_3rem_rgba(0,0,0,0.1)]'>
          <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
          <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
          <div className="my-[50px] grid lg:grid-cols-3 grid-cols-1 gap-10 ">
          <div className="shadow-[0_0_3rem_rgba(0,0,0,0.23)] bg-[url('/img/box-1-bg.jpg')] bg-cover bg-center bg-no-repeat p-10 relative before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full ">
            <div className="relative top-0 left-0 w-full h-full z-10">
              <h4 className="text-yel font-semibold text-[14px] mb-[5px]">
                OUR ALL GAMES
              </h4>
              <h2 className="text-white text-[24px] font-black mb-[15px]">
                CLOUX GAMES
              </h2>
              <p className="text-white text-[13px] mb-[30px] ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate ullam error, eius dolore deserunt nostrum consectetur
                perspiciatis sunt!
              </p>
              <FancyButton content="all games" />
            </div>
          </div>
          <div className="shadow-[0_0_3rem_rgba(0,0,0,0.23)] bg-[url('/img/box-2-bg.jpg')] bg-cover bg-center bg-no-repeat p-10 relative before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full ">
            <div className="relative top-0 left-0 w-full h-full z-10">
              <h4 className="text-yel font-semibold text-[14px] mb-[5px]">
                OUR DEVELOPER TEAM
              </h4>
              <h2 className="text-white text-[24px] font-black mb-[15px]">
                CLOUX TEAM
              </h2>
              <p className="text-white text-[13px] mb-[30px] ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate ullam error, eius dolore deserunt nostrum consectetur
                perspiciatis sunt!
              </p>
              <FancyButton content="read more" />
            </div>
          </div>
          <div className="shadow-[0_0_3rem_rgba(0,0,0,0.23)] bg-[url('/img/box-3-bg.jpg')] bg-cover bg-center bg-no-repeat p-10 relative before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full ">
            <div className="relative top-0 left-0 w-full h-full z-10">
              <h4 className="text-yel font-semibold text-[14px] mb-[5px]">
                DOCUMENTATIONS & SUPPORT
              </h4>
              <h2 className="text-white text-[24px] font-black mb-[15px]">
                HELP CENTER
              </h2>
              <p className="text-white text-[13px] mb-[30px] ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate ullam error, eius dolore deserunt nostrum consectetur
                perspiciatis sunt!
              </p>
              <FancyButton content="contact" />
            </div>
          </div>
        </div>
        <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
        <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
        <div className='circles grid grid-cols-1 md:grid-cols-3 my-[60px] gap-8'>
          <div className='circle flex flex-col items-center'>
            <div className='border-yel border-[2.5px] rounded-full w-[145px] h-[145px] flex justify-center items-center mb-[15px]'>
              <FaGamepad className='text-yel text-[55px] '/>
            </div>
            <div className='title uppercase text-yel text-[24px] font-black mb-[15px]'>
              best games

            </div>
            <p className='text-center text-[14px]'>Lorem lorem lorem cectetur provident voluptates non quam, voluptate alias, atque deleniti ipsam cum voluptatibus iste sunt quasi repellat delectus?</p>
          </div>
          <div className='circle flex flex-col items-center'>
            <div className='border-yel border-[2.5px] rounded-full w-[145px] h-[145px] flex justify-center items-center mb-[15px]'>
              <FaRegLifeRing className='text-yel text-[55px] '/>
            </div>
            <div className='title uppercase text-yel text-[24px] font-black mb-[15px]'>
              support

            </div>
            <p className='text-center text-[14px]'>Lorem lorem lorem cectetur provident voluptates non quam, voluptate alias, atque deleniti ipsam cum voluptatibus iste sunt quasi repellat delectus?</p>
          </div>
          <div className='circle flex flex-col items-center'>
            <div className='border-yel border-[2.5px] rounded-full w-[145px] h-[145px] flex justify-center items-center mb-[15px]'>
              <FaRocket className='text-yel text-[55px] '/>
            </div>
            <div className='title uppercase text-yel text-[24px] font-black mb-[15px]'>
              mobile apps

            </div>
            <p className='text-center text-[14px]'>Lorem lorem lorem cectetur provident voluptates non quam, voluptate alias, atque deleniti ipsam cum voluptatibus iste sunt quasi repellat delectus?</p>
          </div>

        </div>
        <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
        <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
        <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>
        <ul className='list-disc ml-[25px] mb-[20px] text-[14px]'>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
        </ul>
        <p className='text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum perferendis hic, aut fugiat eius natus rerum, possimus voluptates nobis eveniet sit aperiam nulla eaque tenetur sed ab numquam! Facilis odio labore officiis? Facilis aliquam ducimus fugit laudantium iste repellendus fugiat repudiandae molestiae ex sit suscipit vel libero cupiditate, quasi quisquam ullam qui dolorem beatae! Hic expedita nesciunt commodi repudiandae qui veniam iure alias quis aspernatur aliquid, culpa minima fuga officiis deleniti tempore, magnam provident dolorum dolores a vel autem possimus sit incidunt facere! Ad quam nisi corrupti asperiores soluta, officiis eaque similique illum velit libero pariatur repellat voluptate quo?</p>


        </div>

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

export default About