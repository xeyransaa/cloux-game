"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaBars,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaMagnifyingGlass,
  FaTags,
  FaTv,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BASE_URL } from "@/api/BaseConfig";
import GameDetail from "@/components/GameDetail";
import FancyButton from "@/components/FancyButton";
import PlatformButton from "@/components/PlatformButton";
import GameCoverDetail from "@/components/GameCoverDetail";
import Blog from "@/components/Blog";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import Newsletter from "@/components/Newsletter";
import useOverflow from "@/constants/Overflow";
import GameDetailSkeleton from "@/components/Skeletons/GameDetailSkeleton";
import SliderSkeleton from "@/components/Skeletons/SliderSkeleton";
import PlatformNameSkeleton from "@/components/Skeletons/PlatformNameSkeleton";

const Home = () => {
  const settings = {
    className: "slider",
    customPaging: function (i) {
      return <button className="custom-dot"></button>;
    },
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [showAllGames, setShowAllGames] = useState(true);
  const [showPlatform, setShowPlatform] = useState(false);
  const getGames = () => {
    fetch(BASE_URL + "Game")
      .then((c) => c.json())
      .then((c) => {
        setGames(c);
        setIsGamesLoading(false)
  });
  };
  const [featured, setFeatured] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [links, setLinks] = useState([]);
  const [products, setProducts] = useState([]);
  const [visiblePlatforms, setVisiblePlatforms] = useState([]);
  const [morePlatforms, setMorePlatforms] = useState([]);
  const copyOfPlatforms = [...platforms];
  const [isGamesLoading, setIsGamesLoading] = useState(true);
  const [isLinksLoading, setIsLinksLoading] = useState(true);
  const [isLanguagesLoading, setIsLanguagesLoading] = useState(true);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isPlatformsLoading, setIsPlatformsLoading] = useState(true);
  const [isFeaturedLoading, setIsFeaturedLoading] = useState(true);
  

  const getLinks = () => {
    fetch(BASE_URL + "SocialMedia")
      .then((c) => c.json())
      .then((c) => {
        setLinks(c);
        setIsLinksLoading(false)
  });
  };
  const getCategories = () => {
    fetch(BASE_URL + "Category")
      .then((c) => c.json())
      .then((c) => {
        setCategories(c);
        setIsCategoriesLoading(false)
  });
  };
  const getProducts = () => {
    fetch(BASE_URL + "Product")
      .then((c) => c.json())
      .then((c) => setProducts(c));
  };
  const getBlogs = () => {
    fetch(BASE_URL + "Blog")
      .then((c) => c.json())
      .then((c) => setBlogs(c));
  };
  const getLanguages = () => {
    fetch(BASE_URL + "Language")
      .then((c) => c.json())
      .then((c) => {
        setLanguages(c);
        setIsLanguagesLoading(false)
  });
  };
  const getFeatured = () => {
    fetch(BASE_URL + "Game/featured")
      .then((c) => c.json())
      .then((c) => {
        setFeatured(c);
        setIsFeaturedLoading(true)
      });
  };
  const getPlatforms = () => {
    fetch(BASE_URL + "Platform")
      .then((c) => c.json())
      .then((c) => {setPlatforms(c); 
        setIsPlatformsLoading(false)}
      );
  };

  const [activePlatform, setActivePlatform] = useState("All");
  const [isMoreActive, setIsMoreActive] = useState(false);
  const submenuRef = useRef(null);
  const ref = useRef(null);
  const isOverflowing = useOverflow(ref);
  const [platformGameList, setPlatformGameList] = useState(games);
  const [platformName, setPlatformName] = useState("");
  const handleButtonClick = (name, gameList) => {


    if (name === "More") {
      setIsMoreActive(!isMoreActive);
    } else if (name === "All") {
      setPlatformGameList(games);
      setPlatformName("");
      setActivePlatform(name);
      setIsMoreActive(false);
    } else {
      setPlatformGameList(gameList);
      setPlatformName(name);
      setActivePlatform(name);
      setIsMoreActive(false);
    }
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setIsMoreActive(false);
    }
  };

  useEffect(() => {
    if (!isMoreActive) return;
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMoreActive]);

  useEffect(() => {
    getGames();
    getFeatured();
    getLinks();
    getPlatforms();
    getCategories();
    getLanguages();
    getBlogs();
    getProducts();
  }, []);

  useEffect(() => {
    if (activePlatform === "All") {
      setPlatformGameList(games);
    }
  }, [activePlatform, games]);

  return (
    <>
      <Header
        onClickLogin={() => setShowLogin(true)}
        onClickSignup={() => setShowSignUp(true)}
      />

      <Slider {...settings}>
        {isFeaturedLoading ? Array.from({length:3}).map(i => <SliderSkeleton key={i}/>) :
        [...featured]
          ?.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
          .slice(0, 3)
          .map((c, index) => (
            <div key={`game-${c.id}`}>
              <div
                className={`top-game top-game-1 flex justify-center items-center h-screen min-h-[600px]`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/${c.largePhotoUrl}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="game m-auto w-[800px] text-center">
                  <div className="game-box slider-item">
                    <div className="game-info flex items-center justify-center mb-[20px] text-[13px]">
                      <div className="stream-plat flex items-center mr-[35px]">
                        <FaTv className="text-yel mr-[10px]" />
                        {c.platformNames?.map((platformName, index) => (
                          <React.Fragment key={platformName}>
                            <a
                              className="text-white transition duration-200 ease-in hover:text-yel uppercase"
                              href={`/games/platform/${platformName}`}
                            >
                              {platformName}
                            </a>
                            {index < c.platformNames.length - 1 && (
                              <span className="text-white mr-[5px]">,</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="game-cat flex items-center">
                        <FaTags className="text-yel mr-[10px]" />
                        {c.categoryNames?.map((categoryName, index) => (
                          <React.Fragment key={categoryName}>
                            <a
                              className="text-white transition duration-200 ease-in hover:text-yel uppercase"
                              href={`/games/category/${categoryName}`}
                            >
                              {categoryName}
                            </a>
                            {index < c.categoryNames.length - 1 && (
                              <span className="text-white mr-[5px]">,</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <h1 className="title uppercase text-white lg:text-[66px] text-[36px] font-black mb-[30px]">
                      {c.name}
                    </h1>
                    <p className="description max-h-[70px] overflow-hidden text-white text-[16px] mb-[60px]">
                      {c.shortDescription}
                    </p>
                    <div className="game-btns">
                      <a
                        className="btn-style text-white border-b-[2px] border-solid border-white transition duration-200 ease-in py-[15px] px-[20px] mr-[40px] font-semibold hover:text-yel hover:border-yel"
                        href={`/games/${c.id}`}
                      >
                        GAME DETAILS
                      </a>
                      <a
                        className="btn-style text-white border-b-[2px] border-solid border-white transition duration-200 ease-in py-[15px] px-[20px] mr-[40px] font-semibold hover:text-yel hover:border-yel"
                        href={`/games/${c.id}/#buy`}
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

      <section className="about py-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-full min-[992px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
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
              <FancyButton content="all games" link="/games" />
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
              <FancyButton content="read more" link="/about" />
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
              <FancyButton content="contact" link="/contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="games pb-[150px]">
        <div className="platform-names mb-[60px]" ref={ref}>
          <ul className="unstyled flex flex-row flex-wrap gap-y-6 justify-center items-center px-2">
            {isPlatformsLoading ? <PlatformNameSkeleton/> :
            (<>
            
            <li className="relative">
              <PlatformButton
                name="All"
                isActive={activePlatform === "All"}
                onClick={() => handleButtonClick("All", games)}
              />
            </li>
            {

platforms?.map((platform) => (
  <li className="relative" key={platform.id}>
    <PlatformButton
      key={platform.name}
      name={platform.name}
      isActive={activePlatform === platform.name}
      onClick={() =>
        handleButtonClick(platform.name, platform.games)
      }
    />
  </li>
))}
            </>
            
           )}
            {isOverflowing && (
              <PlatformButton
                name="More"
                isActive={isMoreActive}
                isMoreActive={isMoreActive}
                onClick={() => handleButtonClick("More", games)}
                submenuRef={submenuRef}
              />
            )}
          </ul>
        </div>
        <div className="al-games mb-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
          {isGamesLoading ? Array(8).fill(null).map(i => <GameDetailSkeleton key={i}/>) : (
          [...platformGameList]
            ?.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
            .slice(0, 8)
            .map((g) => (
              <GameDetail key={g.id} {...g} />
            )))}
        </div>
        <div className="flex justify-center items-center">
          <ul className="unstyled">
            <li className="relative">
              <PlatformButton
                name={`all ${platformName} games`}
                link={
                  platformName ? `games/platform/${platformName}` : "/games"
                }
              />
            </li>
          </ul>
        </div>
      </section>

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
      <section className="featured px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[120px]">
        <div className="game-wrapper min-[1200px]:max-w-[1140px] max-w-full mx-auto">
          <div className="featured-title text-center mb-[60px]">
            <h1 className="uppercase text-[40px] font-black">
              Featured <span className="text-yel">games</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
            {isFeaturedLoading ? Array(6).fill(null).map(i => <GameDetailSkeleton key={i}/>): ([...featured]
              ?.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
              .slice(0, 6)
              .map((g) => (
                <GameCoverDetail key={g.id} {...g} />
              )))}
          </div>
        </div>
      </section>

      <section className="about bg-[url('/img/content-box-banner.jpg')] bg-cover bg-center bg-no-repeat py-[170px] relative before:absolute before:top-0 before:left-0 before:bg-black before:opacity-60 before:w-full before:h-full px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
        <div className="wrapper relative z-10 min-[1200px]:max-w-[1140px] max-w-full mx-auto ">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="about-pic w-full lg:w-[58%] lg:block md:hidden mb-[20px]">
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
              <div className="about-title mb-[20px]">
                <h2 className="text-white text-[44px] font-black uppercase mb-[-15px]">
                  about the
                </h2>
                <h2 className="text-yel text-[44px] font-black uppercase">
                  cloux
                </h2>
              </div>
              <div className="about-desc text-white text-[14px] mb-[40px]">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias necessitatibus ipsam nobis sequi maiores molestiae
                  ratione nam. Nesciunt labore id odit quod voluptatibus quaerat
                  perspiciatis.
                </p>
              </div>
              <div className="buttons">
                <FancyButton content="read more" link="/about" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <SocialMedia />

      <Footer />
    </>
  );
};

export default Home;
