import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const data = [
  {
    icon: <FaFacebookF className="text-yel text-[32px] mb-[15px] mx-auto" />,
    name: "Facebook",
  },
  {
    icon: <FaTwitter className="text-yel text-[32px] mb-[15px] mx-auto" />,
    name: "twitter",
  },
  {
    icon: <FaGooglePlusG className="text-yel text-[32px] mb-[15px] mx-auto" />,
    name: "google plus",
  },
  {
    icon: <FaYoutube className="text-yel text-[32px] mb-[15px] mx-auto" />,
    name: "youtube",
  },
  {
    icon: <FaInstagram className="text-yel text-[32px] mb-[15px] mx-auto" />,
    name: "instagram",
  },
  {
    icon: <FaTwitch className="text-yel text-[32px] mb-[15px] mx-auto" />,
    name: "twitch",
  },
];

const SocialMedia = () => {
  return (
    <section className="social px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[70px]">
      <div className="min-[1200px]:max-w-[1140px] max-w-full mx-auto">
        <div className="grid grid-cols-6 gap-6">
          {data.map((socialMedia, index) => (
            <div className="group uppercase text-center" key={index}>
              <a href="" className="text-center ">
                {socialMedia.icon}
                <h2 className="group-hover:text-yel font-bold text-[16px] transition-all duration-300 hidden md:block">
                  {socialMedia.name}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
