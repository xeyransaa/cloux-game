import React, { forwardRef, useEffect, useRef } from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { FaXmark } from 'react-icons/fa6';
import { clearCart } from '@/Redux/features/Cart/CartSlice';


const Cart = forwardRef(({ closeCart }, ref) => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0)
    const totalPrice = cartItems.reduce((sum, i) => sum + i.quantity*i.price, 0)
    const dispatch = useDispatch()
    
  return (
    <div
             
                      className="absolute z-50 p-[20px] rounded-sm bg-white shadow-[0_0_3rem_rgba(0,0,0,0.23)] w-[400px] top-[150%] right-0" ref={ref} 
                    >
                      
                        {cartItems.length > 0 ? 
                        (
                            <div className=''>
                             <h2 className='mb-[10px]'><span className='font-black text-yel'>{totalQuantity}</span> {totalQuantity > 1 ? "products" : "product"} in your cart</h2>
                             {cartItems.map((i) => <CartItem key={i.id} gameId={i.id}/>)}
                             <h2 className='font-bold mb-[20px]'>Total price: ${totalPrice}</h2>
                             <a
                     href='/cart'
                      
                      className="text-white mr-[15px] bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 py-[10px] px-[20px] outline-none text-[14px]"
                    >
                      Go to your cart
                    </a>
                    <a
                     onClick={()=> dispatch(clearCart())}
                      
                      className="text-white cursor-pointer bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 py-[10px] px-[20px] outline-none text-[14px]"
                    >
                      Clear the cart
                    </a>
                            </div>
                           )   : 
                         (
                            <div>
                                Your cart is empty
                            </div>
                         )}
                      <button
                      onClick={closeCart}
                      className="text-white bg-yel font-semibold hover:bg-black hover:border-black transition-all duration-200 absolute top-0 right-0  h-[30px] px-[10px] outline-none text-[14px]"
                    >
                      <FaXmark/>
                    </button>
                    
                    </div>
  );
});

export default Cart