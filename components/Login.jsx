import { BASE_URL } from '@/api/BaseConfig';
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';

const Login = ({onClose, switchToSignUp, profilePic}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const submitForm = (e) => {
     
      
      e.preventDefault();
      const data = {
        userName,
        password
      };
  
      fetch(`${BASE_URL}Account/Login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => {
          if (response.ok) {
            onClose();
            profilePic();
            
          } else {
            // Handle unsuccessful registration
            console.error('Registration failed');
            setMessage('Registration failed!')
          }
        });   
        // document.querySelector('.submit-form').innerHTML = ''
        
    };
  return (
    <section className="login-page fixed top-0 left-0 w-full h-full bg-white z-50">
        <div className="relative h-screen">
          <div className="flex justify-center items-center absolute w-full h-full">
            <div className='w-full max-w-[560px] px-[30px]'>
              <h1 className="text-center text-[44px] font-black mb-[40px]">
                LOGIN
              </h1>
              <form onSubmit={submitForm} method='post' >
              <div className="w-full ">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-[50px] px-[20px] text-[14px] outline-none border-[#eeeeee] border-[2px] border-solid mb-[20px]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[50px]  px-[20px] text-[14px] outline-none border-[#eeeeee] border-[2px] border-solid mb-[20px]"
                />
               
               <label className='cursor-pointer relative pl-[20px]'><input type="checkbox" className='peer absolute top-0 left-0 w-0 h-0'/><span className='checkbox absolute top-[1px] left-0 w-[18px] h-[18px] border-[#eee] border-[2px] border-solid after:content-["✔"] after:absolute after:-top-1 after:left-1 after:text-[#777] after:opacity-0 after:scale-0 peer-checked:after:opacity-100 peer-checked:after:scale-100 after:transition-all after:duration-300'></span> <span className='ml-[8px] text-[13px] text-[#777]'>Remember Me</span></label>
               <div className='my-[35px]'>
               <button type='submit' className='px-[25px] py-[15px] bg-yel text-white text-[13px] hover:bg-black transition-all duration-300'>SIGN IN</button>

               </div>
               
              </div>


              </form>
              <p>{message}</p>
              
              <div className='flex justify-between items-center text-[#777] text-[14px]'>
                <a href="" className='forgot hover:text-yel transition-all duration-300 '>Lost Password?</a>
                <a href="" className='sign-up hover:text-yel transition-all duration-300 ' onClick={(e) => {
                  e.preventDefault();
                  switchToSignUp();
                }}>Create an account</a>

              </div>
            </div>
          </div>
          <div className="x-button absolute top-0 right-0">
            <button
              
              className="p-[15px] text-white bg-black hover:bg-yel transition-all duration-300"
              onClick={(e) =>  {
                e.preventDefault();
                onClose();
            }}
            >
              <FaXmark/>
            </button>
          </div>
        </div>
      </section>
  )
}

export default Login