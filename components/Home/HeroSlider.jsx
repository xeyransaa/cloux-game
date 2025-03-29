"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSkeleton from "@/components/Skeletons/SliderSkeleton";
import { FaTags, FaTv } from "react-icons/fa6";
import React from "react";

const HeroSlider = ({ featured, isLoading }) => {
  const settings = {
    className: "slider",
    customPaging: function (i) {
      return <button className="custom-dot"></button>;
    },
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: false,
  };
  return (
    <Slider {...settings}>
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <SliderSkeleton key={`slide-${i}`} />
          ))
        : [...featured]
            ?.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
            .slice(0, 3)
            .map((game) => (
              <div key={`game-${game.id}`}>
                <div
                  className={`top-game top-game-1 flex justify-center items-center h-screen min-h-[600px]`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/${game.largePhotoUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="game m-auto w-[800px] text-center">
                    <div className="game-box slider-item">
                      <div className="game-info flex items-center justify-center mb-5 text-[13px]">
                        <div className="stream-plat flex items-center mr-[35px]">
                          <FaTv className="text-yel mr-[10px]" />
                          {game.platformNames?.map((platformName, index) => (
                            <React.Fragment key={platformName}>
                              <a
                                className="text-white transition duration-200 ease-in hover:text-yel uppercase"
                                href={`/games/platform/${platformName}`}
                              >
                                {platformName}
                              </a>
                              {index < game.platformNames.length - 1 && (
                                <span className="text-white mr-[5px]">,</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                        <div className="game-cat flex items-center">
                          <FaTags className="text-yel mr-[10px]" />
                          {game.categoryNames?.map((categoryName, index) => (
                            <React.Fragment key={categoryName}>
                              <a
                                className="text-white transition duration-200 ease-in hover:text-yel uppercase"
                                href={`/games/category/${categoryName}`}
                              >
                                {categoryName}
                              </a>
                              {index < game.categoryNames.length - 1 && (
                                <span className="text-white mr-[5px]">,</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <h1 className="title uppercase text-white lg:text-[66px] text-[36px] font-black mb-[30px]">
                        {game.name}
                      </h1>
                      <p className="description max-h-[70px] overflow-hidden text-white text-[16px] mb-[60px]">
                        {game.shortDescription}
                      </p>
                      <div className="game-btns">
                        <a
                          className="btn-style text-white border-b-[2px] border-solid border-white transition duration-200 ease-in py-[15px] px-[20px] mr-[40px] font-semibold hover:text-yel hover:border-yel"
                          href={`/games/${game.id}`}
                        >
                          GAME DETAILS
                        </a>
                        <a
                          className="btn-style text-white border-b-[2px] border-solid border-white transition duration-200 ease-in py-[15px] px-[20px] mr-[40px] font-semibold hover:text-yel hover:border-yel"
                          href={`/games/${game.id}/#buy`}
                        >
                          BUY NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
    </Slider>
  );
};

export default HeroSlider;
