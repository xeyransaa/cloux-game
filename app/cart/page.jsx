"use client";
import CartIteminPage from "@/components/Cart/CartIteminPage";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Heading from "@/components/UI/Heading";
import Newsletter from "@/components/Layout/Newsletter";
import SocialMedia from "@/components/Layout/SocialMedia";
import { clearCart } from "@/Redux/features/Cart/CartSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.quantity * i.price,
    0
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  const handleClickOutside = (event) => {
    if (ref.current && !event.composedPath().includes(ref.current)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (!showModal) return;
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);
  const router = useRouter();

  return (
    <>
      <Header />
      <Heading name="Cart" />
      <section className="main">
        <div className="min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
          <div className="">
            {cartItems.length > 0 ? (
              <div className="">
                <ul className="cart-items mb-[45px]">
                  {cartItems.map((i) => (
                    <li className="cart-item border-t-[2px] border-[rgba(0,0,0,0,8)] last:border-b-[2px] pt-[15px] ">
                      <CartIteminPage key={i.id} gameId={i.id} />
                    </li>
                  ))}
                </ul>

                <h2 className="font-bold text-[30px] mb-5">
                  Total price: ${totalPrice}
                </h2>
                <button
                  onClick={() => router.push("/checkout")}
                  className="text-white mr-[20px] bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 py-[10px] px-[20px] outline-none text-[18px]"
                >
                  Check out
                </button>
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="text-white bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 py-[10px] px-[20px] outline-none text-[18px]"
                >
                  Clear the cart
                </button>
              </div>
            ) : (
              <div className="text-[30px] flex flex-col items-center">
                <FaCartShopping className="text-yel text-[80px] mb-5" />
                Your cart is currently empty.
              </div>
            )}
          </div>
          {showModal && (
            <div
              ref={ref}
              className="fixed z-50 px-[50px] flex justify-center items-center bg-white rounded-xl shadow-[0_0_3rem_rgba(0,0,0,0.23)] w-[300px] h-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <div className="flex flex-col items-center text-center">
                <p className="mb-5 font-semibold">
                  Are you sure you want to clear the cart?
                </p>
                <div className="flex gap-[10px]">
                  <button
                    onClick={() => {
                      dispatch(clearCart());
                      setShowModal(false);
                    }}
                    className="text-white bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 relative h-[50px] px-[20px] border-white border-[2px] border-solid bg-white outline-none text-[14px]"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                    className="text-white bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 relative h-[50px] px-[20px] border-white border-[2px] border-solid bg-white outline-none text-[14px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default CartPage;
