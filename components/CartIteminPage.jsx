import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { BASE_URL } from '@/api/BaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashCan } from 'react-icons/fa6';
import { removeFromCart } from '@/Redux/features/Cart/CartSlice';




const CartIteminPage = ({gameId}) => {
  
  const [game, setGame] = useState([])
  const cartItems = useSelector((state) => state.cart.cartItems)
  const gameInCart = cartItems.find(c => c.id == gameId)
  const getGame = (gameId) => {
      fetch(BASE_URL + `game/${gameId}`)
        .then((c) => c.json())
        .then((c) => setGame(c.data));
    };
  
    useEffect(() => {
      getGame(gameId);
    }, [gameId]);
    const dispatch = useDispatch();
    
  return (
    <div className='flex justify-between mb-[15px]'>
        <a href={`/games/${game.id}`} className='mr-[10px] w-[15%] '>
        <Image
          src={`/img/${game.smallPhotoUrl}`}
          width = {0}
          height = {0}
          sizes = "100vw"
          alt = 'game-photo'
          style = {{width: '100%', height: 'auto'}}
        /> 

        </a>
        <div className='w-[70%]'>
            <div className='title font-semibold hover:text-yel transition duration-200'>
                <a href={`/games/${game.id}`}>
                {game.name}

                </a>
           
            </div>
            <div className='quantity text-[14px]'>
            {gameInCart.quantity} x {game.discountedPrice}

            </div>
      
        

        </div>
        <div className='remove mt-[2px]'>
          <button className='text-yel' onClick={(e)=> {e.preventDefault(); dispatch(removeFromCart(game.id))}}>
          <FaTrashCan/>

          </button>
          

        </div>
       
        
    </div>
  )
}

export default CartIteminPage