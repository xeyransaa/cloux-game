import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/Redux/features/Cart/CartSlice";
import CartItemSkeleton from "../Skeletons/CartItemSkeleton";
import { fetchData } from "@/services/api";
import Link from "next/link";

const CartItem = ({ gameId }) => {
  const [game, setGame] = useState([]);
  const [isGameLoading, setIsGameLoading] = useState(true);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const gameInCart = cartItems.find((c) => c.id == gameId);
  const dispatch = useDispatch();

  const loadGame = async (gameId) => {
    const data = await fetchData(`game/${gameId}`);
    setGame(data?.data);
    setIsGameLoading(false);
  };

  useEffect(() => {
    loadGame(gameId);
  }, [gameId]);

  if (isGameLoading || !game) return <CartItemSkeleton />;

  return (
    <div className="flex justify-between mb-[15px]">
      {/* Game Image */}

      <Link href={`/games/${game.id}`} className="mr-[10px] w-[15%] ">
        <Image
          src={`/img/${game.posterUrl}`}
          width={0}
          height={0}
          sizes="100vw"
          alt="game-photo"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      {/* Game Details */}
      <div className="w-[70%]">
        <div className="title font-semibold hover:text-yel transition duration-200 uppercase">
          <Link href={`/games/${game.id}`}>{game.name}</Link>
        </div>
        <div className="quantity text-[14px]">
          {gameInCart.quantity} x ${game.discountedPrice}
        </div>
      </div>
      {/* Quantity Controls */}
      <div className="flex quantity-change items-center gap-[10px] mr-[20px]">
        <button
          className="decrement"
          onClick={() => dispatch(decreaseQuantity(game.id))}
        >
          <FaMinus />
        </button>

        <span className="border p-[5px] w-[40px] text-center">
          {gameInCart.quantity}
        </span>
        <button
          className="increment"
          onClick={() => dispatch(increaseQuantity(game.id))}
        >
          <FaPlus />
        </button>
        <div className="remove mt-[2px]">
          <button
            className="text-yel flex items-center"
            onClick={() => {
              dispatch(removeFromCart(game.id));
            }}
          >
            <FaTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
