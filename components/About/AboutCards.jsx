"use client";
import React from "react";
import FancyButton from "../UI/FancyButton";

const AboutCards = () => {
  const cards = [
    {
      title: "CLOUX GAMES",
      subtitle: "OUR ALL GAMES",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ullam error, eius dolore deserunt nostrum consectetur perspiciatis sunt!",
      bg: "/img/box-1-bg.jpg",
      button: { content: "all games", link: "/games" },
    },
    {
      title: "CLOUX TEAM",
      subtitle: "OUR DEVELOPER TEAM",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ullam error, eius dolore deserunt nostrum consectetur perspiciatis sunt!",
      bg: "/img/box-2-bg.jpg",
      button: { content: "read more", link: "/about" },
    },
    {
      title: "HELP CENTER",
      subtitle: "DOCUMENTATIONS & SUPPORT",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ullam error, eius dolore deserunt nostrum consectetur perspiciatis sunt!",
      bg: "/img/box-3-bg.jpg",
      button: { content: "contact", link: "/contact" },
    },
  ];
  return (
    <section className="about py-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full min-[992px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`shadow-[0_0_3rem_rgba(0,0,0,0.23)] bg-cover bg-center bg-no-repeat p-10 relative before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full`}
            style={{ backgroundImage: `url('${card.bg}')` }}
          >
            <div className="relative top-0 left-0 w-full h-full z-10">
              <h4 className="text-yel font-semibold text-[14px] mb-[5px]">
                {card.subtitle}
              </h4>
              <h2 className="text-white text-[24px] font-black mb-[15px]">
                {card.title}
              </h2>
              <p className="text-white text-[13px] mb-[30px] ">
                {card.description}
              </p>
              <FancyButton
                content={card.button.content}
                link={card.button.link}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
