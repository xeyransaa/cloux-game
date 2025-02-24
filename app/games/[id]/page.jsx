'use client'
import { BASE_URL } from '@/api/BaseConfig'
import FancyButton from '@/components/FancyButton'
import Footer from '@/components/Footer'
import GameDetail from '@/components/GameDetail'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Login from '@/components/Login'
import Newsletter from '@/components/Newsletter'
import PlatformButton from '@/components/PlatformButton'

import SignUp from '@/components/SignUp'
import SocialMedia from '@/components/SocialMedia'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaCheck, FaFacebookF, FaGears, FaGlobe, FaGooglePlusG, FaRegClock, FaShareNodes, FaTags, FaTv, FaTwitch, FaTwitter, FaUsers, FaYoutube } from 'react-icons/fa6'

const GameSingle = () => {
    const {id} = useParams()
    const [game, setGame] = useState([])
    const getGame = (id) => {
        fetch(BASE_URL + `Game/${id}`)
          .then((c) => c.json())
          .then((r) => setGame(r.data));
      };
    useEffect(() => {
        
        getGame(id);
        
      
      }, [id]);
    
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
  return (
    <>
    <Header/>
    <Heading name={game.name}/>
    <section className='main'>
        <div className="single-game min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
        
        <div className='grid grid-cols-[65%_32%] gap-[3%]'>
            <div className='left-side'>
                <div className='game-image mb-[30px]'>
                    <Image
                        src="/img/post-1-970x570.jpg"
                        sizes='100vh'
                        width={0}
                        height={0}
                        style={{width:"100%", height:"auto"}}
                        alt='game-photo'
                    />

                </div>
                <div className='about-game mb-[30px] p-[30px] pr-[45px] shadow-[0_0_3rem_rgba(0,0,0,0.23)]'>
                    <h1 className='text-[24px] font-black uppercase mb-[20px]'>About <span className='text-yel'>{game.name}</span></h1>
                    <p className='text-[14px] mb-[20px]'>Purus non enim praesent elementum facilisis. Neque vitae tempus quam pellentesque. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Rhoncus dolor purus non enim praesent elementum facilisis leo. Quisque non tellus orci ac auctor augue mauris. Lobortis mattis aliquam faucibus purus. Cras pulvinar mattis nunc sed blandit libero volutpat. Amet porttitor eget dolor morbi non arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Lacus sed turpis tincidunt id aliquet risus feugiat in diam sit.</p>
                    <p className='text-[14px] mb-[20px]'>Elementum nibh. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. At imperdiet dui accumsan sit amet nulla facilisi. Morbi tincidunt ornare massa eget egestas purus viverra. Commodo viverra maecenas accumsan lacus vel. In fermentum posuere urna nec tincidunt. Malesuada fames ac turpis egestas sed tempus urna. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Ultricies lacus sed turpis tincidunt id. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Non pulvinar neque laoreet suspendisse. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis malesuada.</p>
                    <ul className='list-disc ml-[25px] mb-[20px] text-[14px]'>
                        <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit

                        </li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </li>
                    </ul>
                    <p className='text-[14px] mb-[20px]'>Purus non enim praesent elementum facilisis. Neque vitae tempus quam pellentesque. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Rhoncus dolor purus non enim praesent elementum facilisis leo. Quisque non tellus orci ac auctor augue mauris. Lobortis mattis aliquam faucibus purus. Cras pulvinar mattis nunc sed blandit libero volutpat. Amet porttitor eget dolor morbi non arcu risus. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Molestie at elementum eu facilisis sed. In aliquam sem fringilla ut morbi. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Lacus sed turpis tincidunt id aliquet risus feugiat in diam sit.</p>

                </div>
                <div className='details p-[30px] pr-[45px] shadow-[0_0_3rem_rgba(0,0,0,0.23)] mb-[30px]' id='buy'>
                    <h1 className='font-black text-[24px] mb-[20px] uppercase'>System <span className='text-yel'>requirements</span></h1>
                    <div className='minimum mb-[30px]'>
                    <h2 className='uppercase text-yel text-[12px] font-black mb-[15px]'>minimum:</h2>
                    <ul className=''>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>OS:</p>
                        <p className='text-[12px] w-[70%]'>
                        Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Win 7 64 Bit


                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>processor:</p>
                        <p className='text-[12px] w-[70%]'>
                        Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs)


                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>memory:</p>
                        <p className='text-[12px] w-[70%]'>
                        4 GB Ram

                       </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>graphics:</p>
                        <p className='text-[12px] w-[70%]'>
                        NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)




                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>storage:</p>
                        <p className='text-[12px] w-[70%]'>
                        72 GB available space



                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>sound card:</p>
                        <p className='text-[12px] w-[70%]'>
                        100% DirectX 10 compatible



                        </p>

                        </li>
                        

                    </ul>

                    </div>
                    <div className='recommended mb-[20px]'>
                    <h2 className='uppercase text-yel text-[12px] font-black mb-[15px]'>recommended:</h2>
                    <ul className=''>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>OS:</p>
                        <p className='text-[12px] w-[70%]'>
                        Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Win 7 64 Bit Service Pack 1



                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>processor:</p>
                        <p className='text-[12px] w-[70%]'>
                        Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)



                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>memory:</p>
                        <p className='text-[12px] w-[70%]'>
                        8 GB Ram

                       </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>graphics:</p>
                        <p className='text-[12px] w-[70%]'>
                        NVIDIA GTX 660 2GB / AMD HD 7870 2GB





                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>storage:</p>
                        <p className='text-[12px] w-[70%]'>
                        72 GB available space



                        </p>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        
                        <p className='uppercase font-bold text-[12px] w-[20%]'>sound card:</p>
                        <p className='text-[12px] w-[70%]'>
                        100% DirectX 10 compatible



                        </p>

                        </li>
                        

                    </ul>

                    </div>
                    <div className='additional mb-[30px]'>
                    <p className='uppercase font-bold text-[12px] w-[20%] mb-[10px]'>additional notes:</p>
                        <p className='text-[12px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum pretium commodo. In hac habitasse platea dictumst. Donec ut nibh in metus accumsan tristique et non velit. Lorem ipsum dolor sit.




                        </p>


                    </div>
                    <div className='buy flex items-center justify-between'>
                        <div className='price'>
                        <h2 className='uppercase text-[18px] font-bold'>Price: <span className='text-yel font-black'>$100</span></h2>
                        

                        </div>
                        <ul className='unstyled'>
                        <PlatformButton name="add to cart" />


                        </ul>
                        

                    </div>
                    


                </div>


            </div>
            <div className='right-side '>
                <div className='sticky top-0'>
                <div className='details p-[30px] pr-[45px] shadow-[0_0_3rem_rgba(0,0,0,0.23)] mb-[30px]'>
                    <h1 className='font-black text-[24px] mb-[20px]'>GAME <span className='text-yel'>DETAILS</span></h1>
                    <ul className=''>
                        <li className='flex items-center mb-[15px]'>
                        <FaTags className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Genre:</p>
                        <div className='text-[12px] w-[50%]'>
                        {game.categoryNames?.map((categoryName, index) => (
                                      <React.Fragment key={game.id}>
                                        <a href="">
                                          {categoryName}
                                        </a>
                                        {index < game.categoryNames.length - 1 && (
                                          <span className="mr-[5px]">,</span>
                                        )}
                                      </React.Fragment>
                                    ))}
                        </div>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        <FaRegClock className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Release date:</p>
                        <div className='text-[12px] w-[50%]'>
                        December 14, 2017
                        </div>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        <FaGears className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Developer:</p>
                        <div className='text-[12px] w-[50%]'>
                            <a href="">Gamevision,</a>
                            <a href="">Xtra Soft</a>
                        </div>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        <FaGlobe className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Publisher:</p>
                        <div className='text-[12px] w-[50%]'>
                            <a href="">
                            Envato,</a>
                            <a href="">
                            Gloria Games</a>
                        </div>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        <FaTv className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Platforms:</p>
                        <div className='text-[12px] w-[50%]'>
                        {game.platformNames?.map((platformName, index) => (
                                      <React.Fragment key={game.id}>
                                        <a href="">
                                          {platformName}
                                        </a>
                                        {index < game.platformNames.length - 1 && (
                                          <span className="mr-[5px]">,</span>
                                        )}
                                      </React.Fragment>
                                    ))}
                        </div>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        <FaUsers className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Modes:</p>
                        <div className='text-[12px] w-[50%]'>
                            <a href="">Multi Player,</a>
                            <a href="">Single Player</a>
                        </div>

                        </li>
                        <li className='flex items-center mb-[15px]'>
                        <FaShareNodes className='text-yel w-[7%] mr-[10px]'/>
                        <p className='uppercase font-bold text-[12px] w-[40%]'>Sites:</p>
                        <div className="flex items-center w-[50%]">
                                          
                        
                                          
                                            <a
                                              className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                                              href=""
                                              target="_blank"
                                            >
                                              <FaFacebookF />
                                              
                                            </a>
                                            <a
                                              className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                                              href=""
                                              target="_blank"
                                            >
                                              <FaTwitter />
                                              
                                            </a>
                                            <a
                                              className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                                              href=""
                                              target="_blank"
                                            >
                                              <FaGooglePlusG />
                                              
                                            </a>
                                            <a
                                              className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                                              href=""
                                              target="_blank"
                                            >
                                              <FaYoutube />
                                              
                                            </a>
                                            <a
                                              className="mr-[10px] hover:text-yel transition duration-200 ease-in"
                                              href=""
                                              target="_blank"
                                            >
                                              <FaTwitch />
                                              
                                            </a>

                                            
                                           
                                        </div>

                        </li>
                        

                    </ul>


                </div>
                <div className='languages p-[30px] pr-[45px] shadow-[0_0_3rem_rgba(0,0,0,0.23)]'>
                    <h1 className='font-black text-[24px] mb-[20px] uppercase'>languages</h1>
                    <ul className=''>
                        <li className='flex items-center  justify-between border-b-[1px] py-[10px]'>
                        <p className='uppercase text-yel text-[12px] font-black w-[28%]'>Language</p>
                        <p className='uppercase text-yel text-[12px] font-black w-[27%]'>Interface</p>
                        <p className='uppercase text-yel text-[12px] font-black w-[16%]'>Audio</p>
                        <p className='uppercase text-yel text-[12px] font-black w-[26%] text-end'>Subtitles</p>
                       

                        </li>
                        <li className='flex items-center justify-between  border-b-[1px] py-[10px]'>
                            <a href="" className='text-[12px] w-[28%]'>English</a>
                            <FaCheck className='text-yel w-[27%]'/>
                            <FaCheck className='text-yel w-[16%]'/>
                            <FaCheck className='text-yel w-[26%]'/>

                        </li>
                        <li className='flex items-center justify-between border-b-[1px] py-[10px]'>
                            <a href="" className='text-[12px] w-[28%]'>German</a>
                            <FaCheck className='text-yel w-[27%]'/>
                            <FaCheck className='text-yel w-[16%]'/>
                            <FaCheck className='text-yel w-[26%]'/>

                        </li>
                        <li className='flex items-center justify-between border-b-[1px] py-[10px]'>
                            <a href="" className='text-[12px] w-[28%]'>Portegese</a>
                            <FaCheck className='text-yel w-[27%]'/>
                            <p className='text-yel w-[16%]'/>
                            <FaCheck className='text-yel w-[26%]'/>

                        </li>
                        <li className='flex items-center justify-between border-b-[1px] py-[10px]'>
                            <a href="" className='text-[12px] w-[28%]'>Spanish</a>
                            <FaCheck className='text-yel w-[27%]'/>
                            <p className='text-yel w-[16%]'/>
                            <p className='text-yel w-[26%]'/>

                        </li>
                        
                        <li className='flex items-center justify-between py-[10px]'>
                            <a href="" className='text-[12px] w-[28%]'>Turkish</a>
                            <FaCheck className='text-yel w-[27%]'/>
                            <FaCheck className='text-yel w-[16%]'/>
                            <FaCheck className='text-yel w-[26%]'/>

                        </li>
                        
                        
                        

                    </ul>


                </div>

                </div>
               

            </div>

        </div>
        
        
      
        </div>
        
      

    </section>
    <Newsletter/>
    <SocialMedia/>
    <Footer />
    
      {showLogin && <Login onClose={() => setShowLogin(false)} switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }} />}
    </>
  )
}

export default GameSingle