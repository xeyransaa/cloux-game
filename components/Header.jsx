import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaCartShopping,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaXmark,
  FaYoutube,
} from "react-icons/fa6";

import Login from "./Login";
import SignUp from "./SignUp";
import { BASE_URL } from "@/api/BaseConfig";
import Account from "./Account";
import { usePathname } from "next/navigation";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [links, setLinks] = useState([]);
  const location = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [showCart, setShowCart] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowHeader(!showHeader);
  };
  const closeCart = () => {
    setShowCart(false)
  } 

  const getLinks = () => {
    fetch(BASE_URL + "SocialMedia")
      .then((c) => c.json())
      .then((c) => setLinks(c));
  };

const ref = useRef(null);
    const handleClickOutside = (event) => {
        if (ref.current && !event.composedPath().includes(ref.current)) {
          setShowCart(false);
        }
      };

    useEffect(() => {
        if (!showCart) return;
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [showCart]);

  useEffect(() => {
    getLinks();
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <>
      <header className="rel-header relative z-50">
        <div className="container mx-auto w-full min-[992px]:max-w-[1140px] max-w-full px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px]">
          <div className="header-relative relative">
            <div className="header header-lg justify-between items-center absolute w-full top-[40px] hidden opacity-0 lg:flex lg:visible lg:opacity-100">
              <div className="logo">
                <a href="/">
                  <Image
                    src="/img/logo-2.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "200px", height: "auto" }}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="header-items">
                <div className="top-header flex justify-end items-center mb-[20px] relative">
                  <div className="buttons flex items-center mr-[40px]">
                    {links.map((link) => (
                      <React.Fragment key={link.name}>
                        <a
                          className="text-white ml-[15px] hover:text-yel transition duration-500 ease-in"
                          href={link.link}
                          target="_blank"
                        >
                          {link.name == "Facebook" && <FaFacebookF />}
                          {link.name == "Twitter" && <FaTwitter />}
                          {link.name == "Google Plus" && <FaGooglePlusG />}
                          {link.name == "Youtube" && <FaYoutube />}
                          {link.name == "Instagram" && <FaInstagram />}
                          {link.name == "Twitch" && <FaTwitch />}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                  {showProfilePic ? (
                    <div className="profile-pic w-[50px] h-[50px] border-2 rounded-full relative">
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setShowAccount(!showAccount);
                        }}
                      >
                        <Image
                          src="/img/icons8-user-96.png"
                          fill
                          alt="profile-pic"
                          className="rounded-full"
                        ></Image>
                      </a>
                    </div>
                  ) : (
                    <div className="registration flex">
                      <button
                        className="login text-white bg-yel text-[12px] rounded-l-[30px] py-2 pl-[24px] pr-[12px] border-r border-solid border-white "
                        onClick={() => setShowLogin(true)}
                      >
                        LOGIN
                      </button>
                      <button
                        className="sign-up text-white bg-yel text-[12px] rounded-r-[30px] py-2 pl-[12px] pr-[24px] border-l border-solid border-white"
                        onClick={() => setShowSignUp(true)}
                      >
                        SIGN UP
                      </button>
                    </div>
                  )}

                  {showAccount && (
                    <Account
                      closeAccount={() => setShowAccount(false)}
                      logOut={() => setShowProfilePic(false)}
                    />
                  )}
                  <div className="cart ml-[20px] relative">
                    <button className="flex items-center" onClick={() => setShowCart(!showCart)}>
                    <FaCartShopping className="text-yel text-[24px]"/>

                    </button>
                    {showCart && <Cart closeCart={closeCart} ref={ref}/>}
                 <span className="count-of-items absolute bottom-[60%] left-[70%] bg-white text-[10px] w-[16px]  rounded-[10px] text-center">
                  {totalQuantity}
                 </span>

                  </div>
                </div>
                <div className="bottom-header flex justify-end items-center">
                  <ul className="flex list-unstyled">
                    <li className={`list-item ml-[30px]`}>
                      <a
                        className={`${
                          location === "/" ? "text-yel" : "text-white"
                        } transition duration-200 ease-in font-semibold text-[14px]`}
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className={`list-item ml-[30px]`}>
                      <a
                        className={`${
                          location === "/about" ? "text-yel" : "text-white"
                        } transition duration-200 ease-in font-semibold text-[14px]`}
                        href="/about"
                      >
                        About
                      </a>
                    </li>

                    <li className="list-item ml-[30px]">
                      <a
                        className={`${
                          location === "/games" ? "text-yel" : "text-white"
                        } transition duration-200 ease-in font-semibold text-[14px]`}
                        href="/games"
                      >
                        Games
                      </a>
                    </li>

                    <li className="list-item ml-[30px]">
                      <a
                        className={`${
                          location === "/contact" ? "text-yel" : "text-white"
                        } transition duration-200 ease-in font-semibold text-[14px]`}
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showHeader && (
          <div className="header header-md flex justify-between items-center fixed top-0 left-0 w-full py-[10px] md:px-[2.308rem] px-[1.154rem] bg-white lg:hidden lg:opacity-0 z-50">
            <div className="logo">
              <a href="/">
                <Image
                  src="/img/logo.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "150px", height: "auto" }}
                  alt="logo"
                />
              </a>
            </div>
            <div className="menu-btn">
              <button onClick={toggleMenu}>
                <FaBars />
              </button>
            </div>
          </div>
        )}
        {showMenu && (
          <div
            className="mini-menu lg:hidden fixed top-0 right-0 w-[350px] h-screen bg-white px-[30px] py-[50px] max-h-[750px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            <div className="x-button absolute top-0 right-0">
              <button
                className="p-[15px] text-white bg-black hover:bg-yel transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
              >
                <FaXmark />
              </button>
            </div>
            <div className="scroll-menu ">
              <div className="mb-[25px] flex justify-between items-center relative">
                <a href="/">
                  <Image
                    src="/img/logo.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "150px", height: "auto" }}
                    alt="logo"
                  />
                </a>
                {!showProfilePic && (
                  <div className="profile-pic w-[50px] h-[50px] border-2 border-black rounded-full relative">
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        setShowAccount(!showAccount);
                      }}
                    >
                      <Image
                        src="/img/icons8-user-96 (1).png"
                        fill
                        alt="profile picture"
                        className="rounded-full"
                      ></Image>
                    </a>
                  </div>
                )}
                {showAccount && (
                  <Account
                    closeAccount={() => setShowAccount(false)}
                    logOut={() => setShowProfilePic(false)}
                  />
                )}
              </div>

              <ul>
                <li className="py-[10px] border-b-[1px] border-solid">
                  <a
                    href="/"
                    className={`${
                      location === "/" && "text-yel font-bold"
                    } block text-[14px]`}
                  >
                    Home
                  </a>
                </li>
                <li className="py-[10px] border-b-[1px] border-solid">
                  <a
                    href="/about"
                    className={`${
                      location === "/about" && "text-yel font-bold"
                    } block text-[14px]`}
                  >
                    About
                  </a>
                </li>

                <li className="py-[10px] border-b-[1px] border-solid">
                  <a
                    href="/games"
                    className={`${
                      location === "/games" && "text-yel font-bold"
                    } block text-[14px]`}
                  >
                    Games
                  </a>
                </li>

                <li className="py-[10px]">
                  <a
                    href="/contact"
                    className={`${
                      location === "/contact" && "text-yel font-bold"
                    } block text-[14px]`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="flex my-[20px]">
                <div className="buttons flex items-center">
                  {links.map((link) => (
                    <React.Fragment key={link.name}>
                      <a
                        className="text-black mr-[15px] hover:text-yel transition duration-500 ease-in"
                        href={link.link}
                        target="_blank"
                      >
                        {link.name == "Facebook" && <FaFacebookF />}
                        {link.name == "Twitter" && <FaTwitter />}
                        {link.name == "Google Plus" && <FaGooglePlusG />}
                        {link.name == "Youtube" && <FaYoutube />}
                        {link.name == "Instagram" && <FaInstagram />}
                        {link.name == "Twitch" && <FaTwitch />}
                      </a>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {showProfilePic && (
                <div className="registration flex w-full">
                  <button
                    className="login text-white bg-yel text-[12px] py-2 w-1/2 border-r border-solid border-[rgba(0,0,0,0.08)]"
                    onClick={() => setShowLogin(true)}
                  >
                    LOGIN
                  </button>
                  <button
                    className="sign-up text-white bg-yel text-[12px] py-2 w-1/2"
                    onClick={() => setShowSignUp(true)}
                  >
                    SIGN UP
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
          profilePic={() => {
            setShowProfilePic(true);
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

export default Header;
