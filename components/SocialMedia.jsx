import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa6'

const SocialMedia = () => {
  return (
    <section className="social px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[70px]">
        <div className="min-[1200px]:max-w-[1140px] max-w-full mx-auto">
          <div className="grid grid-cols-6 gap-6">
            <div className="group uppercase text-center">
              <a href="" className="text-center ">
                <FaFacebookF className="text-yel text-[32px] mb-[15px] mx-auto" />
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  facebook
                </h2>
              </a>
            </div>
            <div className="group uppercase text-center">
              <a href="" className="text-center ">
                <FaTwitter className="text-yel text-[32px] mb-[15px] mx-auto" />
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  twitter
                </h2>
              </a>
            </div>
            <div className="group uppercase text-center">
              <a href="" className="text-center ">
                <FaGooglePlusG className="text-yel text-[32px] mb-[15px] mx-auto" />
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  google plus
                </h2>
              </a>
            </div>
            <div className="group uppercase text-center">
              <a href="" className="text-center ">
                <FaYoutube className="text-yel text-[32px] mb-[15px] mx-auto" />
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  youtube
                </h2>
              </a>
            </div>
            <div className="group uppercase text-center">
              <a href="" className="text-center ">
                <FaInstagram className="text-yel text-[32px] mb-[15px] mx-auto" />
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  instagram
                </h2>
              </a>
            </div>
            <div className="group uppercase text-center">
              <a href="" className="text-center ">
                <FaTwitch className="text-yel text-[32px] mb-[15px] mx-auto" />
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  twitch
                </h2>
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SocialMedia