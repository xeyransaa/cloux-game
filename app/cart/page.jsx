'use client'
import CartItem from '@/components/CartItem';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Login from '@/components/Login';
import Newsletter from '@/components/Newsletter';
import SignUp from '@/components/SignUp';
import SocialMedia from '@/components/SocialMedia';
import React, { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const CartPage = () => {
     const [showLogin, setShowLogin] = useState(false);
      const [showSignUp, setShowSignUp] = useState(false);
      const cartItems = useSelector((state) => state.cart.cartItems)
    const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0)
    const totalPrice = cartItems.reduce((sum, i) => sum + i.quantity*i.price, 0)
  return (
<>
      <Header />
      <Heading name="Cart" />
      <section className="main">
        <div className="min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
        <div
             
             className=""
           >
               {cartItems.length > 0 ? 
               (
                   <div className=''>
                    <h2 className='mb-[10px]'><span className='font-black text-yel'>{totalQuantity}</span> {totalQuantity > 1 ? "products" : "product"} in your cart</h2>
                    {cartItems.map((i) => <CartItem key={i.id} gameId={i.id}/>)}
                    <h2 className='font-bold mb-[20px]'>Total price: ${totalPrice}</h2>
                    <a
            href='#'
             
             className="text-white bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 py-[10px] px-[20px] outline-none text-[14px]"
           >
             Check out
           </a>
                   </div>
                  )   : 
                (
                   <div className='text-[30px] flex flex-col items-center'>
                    <FaCartShopping className='text-yel text-[80px] mb-[20px]'/>
                       Your cart is currently empty.
                   </div>
                )}
             
           
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
  )
}

export default CartPage