import Image from "next/image";
import React from "react";
import { FaClock, FaFolder, FaFolderOpen, FaRegClock } from "react-icons/fa6";

const Blog = (props) => {
  return (
    <div className="blog-item">
      <div className="mb-[20px] relative w-full">
        <a href="">
          <Image src={`/img/${props.photo}`} alt="blog" width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} />
        </a>
      </div>
      <div className="title mb-[18px]">
        <a
          href=""
          className="text-[20px] hover:text-yel transition-all duration-300 font-black uppercase"
        >
          {props.name}
        </a>
      </div>
      <p className="text-[14px] text-[#777777] mb-[20px] h-[40px] overflow-hidden">
        {props.content}
      </p>
      <div className="flex items-center justify-between mr-[30px] flex-wrap">
        
          <a
            href=""
            className="name mb-[5px] flex items-center hover:text-yel transition-all duration-300"
          >
            <Image
              src={`/img/${props.authorPhoto}`}
              width={20}
              height={20}
              alt="avatar"
              className="mr-[5px]"
            />
            <span className="capitalize text-[13px]">{props.authorName}</span>
          </a>
          <div className="flex items-center mb-[5px]">
            <FaRegClock className="text-yel mr-[5px]" />
            <span className="text-[13px]">{props.createdDate}</span>
          </div>
          <div className="flex items-center mb-[5px]">
          <FaFolderOpen className="text-yel mr-[5px]" />
          <a
            href=""
            className="text-[13px] hover:text-yel transition-all duration-300"
          >
            {props.blogCategoryName}
          </a>
        </div>
        
        
      </div>
    </div>
  );
};

export default Blog;
