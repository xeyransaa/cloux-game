"use client"
import React from 'react'
import FancyButton from './FancyButton'
import Image from 'next/image'

const NewGame = () => {
  return (
    <section className="new bg-[url('/img/fifa-release-bg.jpg')] bg-cover bg-center bg-no-repeat py-[100px] relative before:absolute before:top-0 before:left-0 before:bg-black before:opacity-60 before:w-full before:h-full px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
        <div className="wrapper relative z-10 min-[1200px]:max-w-[1140px] max-w-full mx-auto ">
          <div className="flex justify-between items-center flex-col-reverse lg:flex-row md:flex-row">
            <div className="game-infor w-full lg:w-[35%] md:w-full">
              <div className="game-title mb-[20px]">
                <h2 className="text-white text-[44px] font-black uppercase mb-[-15px]">
                  fifa soccer 18
                </h2>
                <h2 className="text-yel text-[44px] font-black uppercase">
                  is released!
                </h2>
              </div>
              <div className="game-desc text-white text-[14px] mb-[40px]">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias necessitatibus ipsam nobis sequi maiores molestiae
                  ratione nam. Nesciunt labore id odit quod voluptatibus quaerat
                  perspiciatis.
                </p>
              </div>
              <div className="buttons">
                <FancyButton content="read more" link="/games/14" />
                <span className="mr-[25px]"></span>
                <FancyButton content="buy now" link="/games/14/#buy" />
              </div>
            </div>
            <div className="game-pic lg:w-[58%] w-full mb-[30px] md:hidden lg:block">
              <Image
                src="/img/fifa-release-image.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="fifa"
              ></Image>
            </div>
          </div>
        </div>
      </section>
  )
}

export default NewGame