import { BASE_URL } from '@/api/BaseConfig';
import React, { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6';

const SignUp = ({onClose, switchToLogin}) => {
  
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState('Already have an account?')

  // const dispatch = useDispatch();
  // const myUserInfo=useSelector(st=>st.registerUser)
  // const navi=useNavigate()
  const submitForm = (e) => {
   
    
    e.preventDefault();
    const data = {
      userName,
      email,
      password,
      confirmPassword,
    };

    fetch(`${BASE_URL}Account/Register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        if (response.ok) {
          // Successfully registered
          setMessage('Successfully registered. Please login to continue')
          
        } else {
          // Handle unsuccessful registration
          console.error('Registration failed');
          setMessage('Registration failed!')
        }
      });   
      document.querySelector('.submit-form').innerHTML = ''
      
  };
  
  // useEffect(()=>{
  //   if(myUserInfo.userInfo && myUserInfo.userInfo.status===201){
  //     navi("/")
  //    }
  // },[myUserInfo.userInfo,navi])

  // useEffect(() => {
  //   submitForm();
  
  // }, []);
  return (
    <section className="registration-page fixed top-0 left-0 w-full h-full bg-white z-50">
        <div className="relative h-screen">
          <div className="flex justify-center items-center absolute w-full h-full">
            <div className='w-full max-w-[560px] px-[30px]'>
              <h1 className="text-center text-[44px] font-black mb-[40px]">
                SIGN UP
              </h1>
              <form onSubmit={submitForm} method='post' className="w-full">
                <div className='submit-form'>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[50px] px-[20px] text-[14px] outline-none border-[#eeeeee] border-[2px] border-solid mb-[20px]"
                />
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
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-[50px]  px-[20px] text-[14px] outline-none border-[#eeeeee] border-[2px] border-solid mb-[20px]"
                />
               
               <label className='cursor-pointer relative pl-[20px]'><input type="checkbox" className='peer absolute top-0 left-0 w-0 h-0'/><span className='checkbox absolute top-[1px] left-0 w-[18px] h-[18px] border-[#eee] border-[2px] border-solid after:content-["✔"] after:absolute after:-top-1 after:left-1 after:text-[#777] after:opacity-0 after:scale-0 peer-checked:after:opacity-100 peer-checked:after:scale-100 after:transition-all after:duration-300'></span> <span className='ml-[8px] text-[13px] text-[#777]'>Remember Me</span></label>
               <div className='my-[35px]'>
               <button type='submit' href="" className='px-[25px] py-[15px] bg-yel text-white text-[13px] hover:bg-black transition-all duration-300'>SIGN UP</button>

               </div>
                  
                </div>
              
               
              </form>
              <div className='text-[#777] text-[14px]'>
              <span className='message'>{message}</span> <button className='login text-yel transition-all duration-300 ' onClick={(e) => {
                  e.preventDefault();
                  switchToLogin();
                }}>Login</button>
                

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

export default SignUp