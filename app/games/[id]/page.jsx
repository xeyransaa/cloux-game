"use client";

import { BASE_URL } from "@/api/BaseConfig";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Login from "@/components/Login";
import Newsletter from "@/components/Newsletter";
import PlatformButton from "@/components/PlatformButton";

import SignUp from "@/components/SignUp";
import SocialMedia from "@/components/SocialMedia";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/Redux/features/Cart/CartSlice";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaFacebookF,
  FaGears,
  FaGooglePlusG,
  FaRegClock,
  FaShareNodes,
  FaTags,
  FaTv,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const GameSingle = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);
  const getGame = (id) => {
    fetch(BASE_URL + `Game/${id}`)
      .then((c) => c.json())
      .then((r) => setGame(r.data));
  };
  useEffect(() => {
    getGame(id);
  }, [id]);
  const [reqsList, setReqsList] = useState([]);
  const [activeOS, setActiveOS] = useState("Windows");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleButtonClick = (name, reqsList) => {
    setReqsList(reqsList);
    setActiveOS(name);
  };
  const uniqueLanguages = game.languages
    ? game.languages.filter(
        (lang, index, self) =>
          index ===
          self.findIndex(
            (l) =>
              l.name === lang.name &&
              JSON.stringify(l.gameLanguageTypes) === JSON.stringify(lang.gameLanguageTypes)
          )
      )
    : [];

    useEffect(() => {
      if (game.minimumReqs && game.minimumReqs.length > 0) {
        setReqsList(game.minimumReqs[0].systemRequirements);
      }
    }, [game]);
   
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleAddToCart = (id, price) => {
      dispatch(addToCart({id, price}))
      
  };
      
  return (
    <>
      <Header />
      <Heading name={game.name} />
      <section className="main">
        <div className="single-game min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
          <div className="grid lg:grid-cols-[65%_32%] grid-cols-1 lg:gap-[3%]">
            <div className="left-side">
              <div className="game-image mb-[30px]">
                <Image
                  src={`/img/${game.mainPhotoUrl}`}
                  sizes="100vh"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  alt="game-photo"
                />
              </div>
              <div className="about-game md:mb-[30px] mb-[50px] md:p-[30px] md:pr-[45px] pr-[10px] md:shadow-[0_0_3rem_rgba(0,0,0,0.23)]">
                <h1 className="text-[24px] font-black uppercase mb-[20px]">
                  About <span className="text-yel">{game.name}</span>
                </h1>
                <p className="text-[14px] mb-[20px]">
                  {game.description}
                </p>
                
              </div>
              <div
                className="details md:p-[30px] md:pr-[45px] pr-[10px] md:shadow-[0_0_3rem_rgba(0,0,0,0.23)] md:mb-[30px] mb-[50px]"
                id="buy"
              >
                <h1 className="font-black text-[24px] mb-[20px] uppercase">
                  Minimum <span className="text-yel">system requirements</span>
                </h1>
                <ul className="unstyled flex my-[40px]">
                  {game.minimumReqs?.map(reqs => (
                    <li>
                    <PlatformButton
                      name={reqs.osName}
                      isActive={activeOS === reqs.osName}
                      onClick={() => handleButtonClick(reqs.osName, reqs.systemRequirements)}
                    />
                  </li>
                    
                  )

                  )}
                </ul>
                <div className="minimum mb-[30px]">
                  
                  <ul className="">
                  {reqsList.os && <li className="flex items-center mb-[15px]">
                      
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        OS:
                      </p>
                      <p className="text-[12px] w-[70%]">
                        {reqsList.os}
                      </p>
                    </li>}
                    {reqsList.processor && <li className="flex items-center mb-[15px]">
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        processor:
                      </p>
                      <p className="text-[12px] w-[70%]">
                        {reqsList.processor}
                      </p>
                    </li>}
                    {reqsList.memory && <li className="flex items-center mb-[15px]">
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        memory:
                      </p>
                      <p className="text-[12px] w-[70%]">{reqsList.memory}</p>
                    </li>}
                    {reqsList.graphics &&  <li className="flex items-center mb-[15px]">
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        graphics:
                      </p>
                      <p className="text-[12px] w-[70%]">
                        {reqsList.graphics}
                      </p>
                    </li>}
                    {reqsList.storage && <li className="flex items-center mb-[15px]">
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        storage:
                      </p>
                      <p className="text-[12px] w-[70%]">
                        {reqsList.storage}
                      </p>
                    </li>}
                   {reqsList.soundCard && <li className="flex items-center mb-[15px]">
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        sound card:
                      </p>
                      <p className="text-[12px] w-[70%]">
                        {reqsList.soundCard}
                      </p>
                    </li>}
                    {reqsList.network && <li className="flex items-center mb-[15px]">
                      <p className="uppercase font-bold text-[12px] w-[20%]">
                        network:
                      </p>
                      <p className="text-[12px] w-[70%]">
                        {reqsList.network}
                      </p>
                    </li>}
                    
                    
                  </ul>
                </div>
               
                {game.additionalNotes && <div className="additional mb-[30px]">
                  <p className="uppercase font-bold text-[12px] mb-[10px]">
                    additional notes:
                  </p>
                  <p className="text-[12px]">{game.additionalNotes}</p>
                </div>}
                
                <div className="buy flex items-center justify-between">
                  <div className="price">
                    <h2 className="uppercase text-[18px] font-bold">
                      Price:{" "}
                      <span className="text-yel font-black">
                        ${game.originalPrice}
                      </span>
                    </h2>
                  </div>
                  <div onClick={() => handleAddToCart(game.id, game.discountedPrice)}>
                    <PlatformButton name="add to cart"/>
                    <div>{game.name}</div><span>{cartItems?.find((item) => item.id === game.id)?.quantity || 0}</span>

                  </div>
                  <button onClick={() => dispatch(increaseQuantity(game.id))}>+</button><br />
<button onClick={()=> dispatch(decreaseQuantity(game.id))}>-</button>
                </div>
              </div>
            </div>
            <div className="right-side ">
              <div className="sticky top-0">
                <div className="details p-[30px] pr-[45px] shadow-[0_0_3rem_rgba(0,0,0,0.23)] mb-[30px]">
                  <h1 className="font-black text-[24px] mb-[20px]">
                    GAME <span className="text-yel">DETAILS</span>
                  </h1>
                  <ul className="">
                    <li className="flex items-center mb-[15px]">
                      <FaTags className="text-yel w-[7%] mr-[10px]" />
                      <p className="uppercase font-bold text-[12px] w-[40%]">
                        Genre:
                      </p>
                      <div className="text-[12px] w-[50%]">
                        {game.categoryNames?.map((categoryName, index) => (
                          <React.Fragment key={categoryName}>
                            <a href="">{categoryName}</a>
                            {index < game.categoryNames.length - 1 && (
                              <span className="mr-[5px]">,</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </li>
                    <li className="flex items-center mb-[15px]">
                      <FaRegClock className="text-yel w-[7%] mr-[10px]" />
                      <p className="uppercase font-bold text-[12px] w-[40%]">
                        Release date:
                      </p>
                      <div className="text-[12px] w-[50%]">
                        {`${game.releaseMonth} ${game.releaseDay}, ${game.releaseYear}`}
                      </div>
                    </li>
                    <li className="flex items-center mb-[15px]">
                      <FaGears className="text-yel w-[7%] mr-[10px]" />
                      <p className="uppercase font-bold text-[12px] w-[40%]">
                        Developer:
                      </p>
                      <div className="text-[12px] w-[50%]">
                        <a href="">Gamevision,</a>
                        <a href="">Xtra Soft</a>
                      </div>
                    </li>

                    <li className="flex items-center mb-[15px]">
                      <FaTv className="text-yel w-[7%] mr-[10px]" />
                      <p className="uppercase font-bold text-[12px] w-[40%]">
                        Platforms:
                      </p>
                      <div className="text-[12px] w-[50%]">
                        {game.platformNames?.map((platformName, index) => (
                          <React.Fragment key={platformName}>
                            <a href="">{platformName}</a>
                            {index < game.platformNames.length - 1 && (
                              <span className="mr-[5px]">,</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </li>

                    <li className="flex items-center mb-[15px]">
                      <FaShareNodes className="text-yel w-[7%] mr-[10px]" />
                      <p className="uppercase font-bold text-[12px] w-[40%]">
                        Sites:
                      </p>
                      <div className="flex items-center w-[50%]">
                        <a
                          className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                          href={game.facebookLink}
                          target="_blank"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                          href={game.twitterLink}
                          target="_blank"
                        >
                          <FaTwitter />
                        </a>
                        <a
                          className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                          href={game.googlePlusLink}
                          target="_blank"
                        >
                          <FaGooglePlusG />
                        </a>
                        <a
                          className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                          href={game.youtubeLink}
                          target="_blank"
                        >
                          <FaYoutube />
                        </a>
                        <a
                          className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                          href={game.twitchLink}
                          target="_blank"
                        >
                          <FaTwitch />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="languages p-[30px] pr-[45px] shadow-[0_0_3rem_rgba(0,0,0,0.23)]">
                  <h1 className="font-black text-[24px] mb-[20px] uppercase">
                    languages
                  </h1>
                  <ul className="">
                    <li className="flex items-center  justify-between border-b-[1px] py-[10px]">
                      <p className="uppercase text-yel text-[12px] font-black w-[28%]">
                        Language
                      </p>
                      <p className="uppercase text-yel text-[12px] font-black w-[27%] text-center">
                        Interface
                      </p>
                      <p className="uppercase text-yel text-[12px] font-black w-[16%] text-center">
                        Audio
                      </p>
                      <p className="uppercase text-yel text-[12px] font-black w-[26%] text-center">
                        Subtitles
                      </p>
                    </li>
                    {uniqueLanguages?.map(l => (
                      <li className="flex items-center justify-between  border-b-[1px] py-[10px]">
                      <a href="" className="text-[12px] w-[28%]">
                        {l.name}
                      </a>
                     <span className="text-yel w-[27%] flex justify-center" >
                     {
                          l.gameLanguageTypes.includes('Interface') && <FaCheck />}
                     </span>
                     <span className="text-yel w-[16%] flex justify-center">
                     {l.gameLanguageTypes.includes('Audio') && <FaCheck  />}

                     </span>
                      
                        <span className="text-yel w-[26%] flex justify-center" >
                        {l.gameLanguageTypes.includes('Subtitle') && <FaCheck />

}
                        </span>
                         
                         
                        

                      

                    </li>

                    ))}
                    
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <SocialMedia />
      <Footer />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      )}
      {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default GameSingle;
