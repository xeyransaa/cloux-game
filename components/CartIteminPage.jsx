import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BASE_URL } from "@/api/BaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/Redux/features/Cart/CartSlice";

const CartIteminPage = ({ gameId }) => {
  const [game, setGame] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const gameInCart = cartItems.find((c) => c.id == gameId);
  const getGame = (gameId) => {
    fetch(BASE_URL + `game/${gameId}`)
      .then((c) => c.json())
      .then((c) => setGame(c.data));
  };

  useEffect(() => {
    getGame(gameId);
  }, [gameId]);
  const dispatch = useDispatch();
  
  const totalGamePrice = gameInCart.quantity * game.discountedPrice

  return (
    <div className="flex justify-between items-center mb-[15px]">
      <a href={`/games/${game.id}`} className="mr-[10px] w-[10%] ">
        <Image
          src={`/img/${game.posterUrl}`}
          width={0}
          height={0}
          sizes="100vw"
          alt="game-photo"
          style={{ width: "100%", height: "auto" }}
        />
      </a>
     
        <div className="title font-semibold hover:text-yel transition duration-200 uppercase w-[60%]">
          <a href={`/games/${game.id}`}>{game.name}</a>
        </div>
        <div className="w-[15%] mr-[10px] text-center">
        <div className="quantity text-[14px] ">
          {gameInCart.quantity} x ${game.discountedPrice}
        </div>
        <div>
          ${totalGamePrice}
        </div>

        </div>
        <div className="flex quantity-change items-center gap-[10px] mr-[20px]">
          <button className="decrement" onClick={()=> dispatch(decreaseQuantity(game.id))}>
          <FaMinus/>

          </button>
          
          <span className="border p-[5px] w-[40px] text-center">{gameInCart.quantity}</span>
          <button className="increment" onClick={()=> dispatch(increaseQuantity(game.id))}>
          <FaPlus/>

          </button>
          
        </div>
        
      
      <div className="remove">
        <button
          className="text-yel flex justify-center items-center"
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeFromCart(game.id));
          }}
        >
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};

export default CartIteminPage;
