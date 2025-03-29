"use client";
import React from "react";
import FancyButton from "../UI/FancyButton";
import Image from "next/image";

const AboutCloux = () => {
  return (
    <section className="about bg-[url('/img/content-box-banner.jpg')] bg-cover bg-center bg-no-repeat py-[170px] relative before:absolute before:top-0 before:left-0 before:bg-black before:opacity-60 before:w-full before:h-full px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
      <div className="wrapper relative z-10 min-[1200px]:max-w-[1140px] max-w-full mx-auto ">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="about-pic w-full lg:w-[58%] lg:block md:hidden mb-5">
            <Image
              src="/img/about-box-image.jpg"
              alt="about"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            ></Image>
          </div>
          <div className="about-infor w-full lg:w-[36%]">
            <div className="about-title mb-5">
              <h2 className="text-white text-[44px] font-black uppercase mb-[-15px]">
                about the
              </h2>
              <h2 className="text-yel text-[44px] font-black uppercase">
                cloux
              </h2>
            </div>
            <div className="about-desc text-white text-[14px] mb-[40px]">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                necessitatibus ipsam nobis sequi maiores molestiae ratione nam.
                Nesciunt labore id odit quod voluptatibus quaerat perspiciatis.
              </p>
            </div>
            <div className="buttons">
              <FancyButton content="read more" link="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCloux;
