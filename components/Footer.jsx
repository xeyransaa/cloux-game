import { BASE_URL } from "@/api/BaseConfig";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaAmazon,
  FaApple,
  FaEnvelope,
  FaFax,
  FaGooglePlay,
  FaLocationDot,
  FaPaypal,
  FaPhoneFlip,
  FaRegClock,
  FaSteamSymbol,
  FaWindows,
} from "react-icons/fa6";

const Footer = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = () => {
    fetch(BASE_URL + "Blog")
      .then((c) => c.json())
      .then((c) => setBlogs(c));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <footer>
      <div className="top-footer bg-[#111111] px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[70px]">
        <div className="footer-wrapper min-[1200px]:max-w-[1140px] max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="about">
              <div className="title uppercase font-black text-[24px] mb-[20px]">
                <h2 className="text-white">
                  about <span className="text-yel">us</span>
                </h2>
              </div>
              <div className="desc mb-[20px] text-white text-[14px]">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  velit ipsam porro dolores voluptatibus quis facilis ullam
                  sapiente cum commodi quasi, blanditiis iusto eveniet atque.
                </p>
              </div>
              <div className="grid menu grid-cols-2">
                <ul>
                  <li className="mb-[8px]">
                    <a
                      href="/"
                      className="text-white hover:text-yel transition-all duration-300"
                    >
                      <span className="text-[14px] relative pl-[20px] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[12px] before:h-[12px] before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-t-[6px] before:border-l-yel before:border-transparent">
                        Home
                      </span>
                    </a>
                  </li>
                  <li className="mb-[8px]">
                    <a
                      href="/games"
                      className="text-white hover:text-yel transition-all duration-300"
                    >
                      <span className="text-[14px] relative pl-[20px] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[12px] before:h-[12px] before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-t-[6px] before:border-l-yel before:border-transparent">
                        Games
                      </span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="mb-[8px]">
                    <a
                      href="/about"
                      className="text-white hover:text-yel transition-all duration-300"
                    >
                      <span className="text-[14px] relative pl-[20px] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[12px] before:h-[12px] before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-t-[6px] before:border-l-yel before:border-transparent">
                        About
                      </span>
                    </a>
                  </li>

                  <li className="mb-[8px]">
                    <a
                      href="/contact"
                      className="text-white hover:text-yel transition-all duration-300"
                    >
                      <span className="text-[14px] relative pl-[20px] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[12px] before:h-[12px] before:border-l-[6px] before:border-r-[6px] before:border-b-[6px] before:border-t-[6px] before:border-l-yel before:border-transparent">
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="apps">
              <div className="title uppercase font-black text-[24px] mb-[20px]">
                <h2 className="text-white">
                  apps <span className="text-yel">& platforms</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <a
                  href=""
                  className="platform w-full text-white hover:bg-yel transition-all duration-500 border-[rgba(255,255,255,0.2)] border-[1px] border-solid px-[20px] py-[12px]"
                >
                  <div className="flex items-center">
                    <FaApple className="mr-[10px] text-[26px]" />
                    <div className="buy text-[13px]">
                      Buy now via <strong>Apple Store</strong>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="platform w-full text-white hover:bg-yel transition-all duration-500 border-[rgba(255,255,255,0.2)] border-[1px] border-solid px-[20px] py-[12px]"
                >
                  <div className="flex items-center">
                    <FaGooglePlay className="mr-[10px] text-[26px]" />
                    <div className="buy text-[13px]">
                      Buy now via <strong>Google Play</strong>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="platform w-full text-white hover:bg-yel transition-all duration-500 border-[rgba(255,255,255,0.2)] border-[1px] border-solid px-[20px] py-[12px]"
                >
                  <div className="flex items-center">
                    <FaSteamSymbol className="mr-[10px] text-[26px]" />
                    <div className="buy text-[13px]">
                      Buy now via <strong>Steam</strong>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="platform w-full text-white hover:bg-yel transition-all duration-500 border-[rgba(255,255,255,0.2)] border-[1px] border-solid px-[20px] py-[12px]"
                >
                  <div className="flex items-center">
                    <FaWindows className="mr-[10px] text-[26px]" />
                    <div className="buy text-[13px]">
                      Download via <strong>WinStore</strong>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="platform w-full text-white hover:bg-yel transition-all duration-500 border-[rgba(255,255,255,0.2)] border-[1px] border-solid px-[20px] py-[12px]"
                >
                  <div className="flex items-center">
                    <FaAmazon className="mr-[10px] text-[26px]" />
                    <div className="buy text-[13px]">
                      Buy now via <strong>Amazon</strong>
                    </div>
                  </div>
                </a>
                <a
                  href=""
                  className="platform w-full text-white hover:bg-yel transition-all duration-500 border-[rgba(255,255,255,0.2)] border-[1px] border-solid px-[20px] py-[12px]"
                >
                  <div className="flex items-center">
                    <FaPaypal className="mr-[10px] text-[26px]" />
                    <div className="buy text-[13px]">
                      Download via <strong>PayPal</strong>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact mt-[15px] lg:hidden">
              <div className="title uppercase font-black text-[24px] mb-[20px]">
                <h2 className="text-white">
                  contact <span className="text-yel">us</span>
                </h2>
              </div>
              <div className="contact-list mb-[25px]">
                <ul>
                  <li className="flex items-center mb-[10px]">
                    <FaLocationDot className="text-yel mr-[10px]" />
                    <span className="text-white text-[14px]">
                      Walking Street, Los Angeles, California, USA
                    </span>
                  </li>
                  <li className="flex items-center mb-[10px]">
                    <FaEnvelope className="text-yel mr-[10px]" />
                    <a
                      href="mailto:info@cloux.com"
                      className="text-white text-[14px] hover:text-yel transition duration-200"
                    >
                      info@cloux.com
                    </a>
                  </li>
                  <li className="flex items-center mb-[10px]">
                    <FaPhoneFlip className="text-yel mr-[10px]" />
                    <a
                      href="tel:+06749876659"
                      className="text-white text-[14px] hover:text-yel transition duration-200"
                    >
                      0674 987 66 59
                    </a>
                  </li>
                  <li className="flex items-center mb-[10px]">
                    <FaFax className="text-yel mr-[10px]" />
                    <span className="text-white text-[14px]">
                      1923 236 12 96
                    </span>
                  </li>
                </ul>
              </div>
              <div className="desc mb-[20px] text-white text-[14px]">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  velit ipsam porro dolores voluptatibus quis facilis ullam
                  sapiente cum commodi quasi, blanditiis iusto eveniet atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer bg-black text-white px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[30px]">
        <div className="footer-wrapper min-[1200px]:max-w-[1140px] max-w-full mx-auto">
          <div className="flex justify-center items-center lg:flex-row flex-col">
            <div className="flex items-center flex-col lg:flex-row">
              <a href="">
                <Image
                  alt="logo"
                  src="/img/logo-2.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "120px", height: "auto" }}
                />
              </a>
              <p className="text-[13px] m-[15px]">
                Copyright © 2018 Cloux - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
