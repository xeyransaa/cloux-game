import Image from "next/image";
import React from "react";
import { FaXmark } from "react-icons/fa6";

const Account = ({ closeAccount, logOut }) => {
  return (
    <div className="flex flex-col items-center bg-white p-[20px] rounded-2xl absolute top-[120%] right-0">
      <button
        className="absolute top-3 right-3 "
        onClick={(e) => {
          e.preventDefault();
          closeAccount();
        }}
      >
        <FaXmark />
      </button>
      <div className="profile-pic w-[80px] h-[80px] border-2 border-black rounded-full relative my-[10px]">
        <Image
          src="/img/icons8-user-96 (1).png"
          layout="fill"
          alt="profile-pic"
          className="rounded-full"
        ></Image>
      </div>

      <h1 className="text-black mb-[15px]">Hi, Kheyransa!</h1>
      <a
        className="text-black px-[40px] py-[8px] border-2 border-black rounded-3xl mb-[10px]"
        href=""
      >
        Manage your account
      </a>
      <a
        className="text-black"
        href=""
        onClick={(e) => {
          e.preventDefault();
          logOut();
          closeAccount();
        }}
      >
        Sign out
      </a>
    </div>
  );
};

export default Account;
