import Image from 'next/image'
import React from 'react'
import { FaTags } from 'react-icons/fa6'

const Shop = (props) => {
  return (
    <div className="game-single ">
      <div className="image relative w-full mb-[20px] shadow-[0_0_3rem_rgba(0,0,0,0.23)]">
        <a href="" className="">
          <Image
            src={`/img/${props.photoUrl}`}
            alt="game-image"
            width={0}
            height={0}
            sizes='100vw'
            style={{width: '100%', height: 'auto'}}
          ></Image>
          
        </a>
      </div>
      <div className="title text-[22px] font-black uppercase">
        <a href="" className="hover:text-yel transition-all duration-400">{props.name}</a>
      </div>
      <div className="price text-[20px] text-yel font-black">
        ${props.price}
        
      </div>
      
    </div>
  )
}

export default Shop