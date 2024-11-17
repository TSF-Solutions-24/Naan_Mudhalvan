import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo-img.png'
import LogoText from '../../assets/logo-text.png'
import Company from '../../assets/company-specific.png'
import Book from '../../assets/book-img.png'
import Book1 from '../../assets/best1.png'
import Book2 from '../../assets/best2.png'
import Book3 from '../../assets/best3.png'
import Tick from '../../assets/icons/checkmark.png'
import Section1 from '../../assets/startpage1.png'
const Home = () => {
   return (
      <>
         <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-10 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
            <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
               <img src={LogoImg} className='md:w-[40%] w-[70%]' />
               <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
            </div>
            <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%] cursor-pointer' onClick={() => { alert("Login or SignUp first") }}>
               <a>Home</a>
               <a>Courses</a>
               <a>Resources</a>
            </ul>
            <div className='md:w-[35%] w-[10%] md:ml-0 ml-14 font-bold flex items-center justify-end md:mr-10 md:mt-[-4%] mt-[-9%] gap-5'>
               <Link to={'/login'}><button className='text-[12px] md:text-[16px] w-full mx-5 md:mx-0'>Log In</button></Link>
               <Link to={'/register'}><button className='bg-[#004EEC] p-1 text-[12px] md:text-[16px] md:w-full px-5 w-[90px] text-white md:px-7 rounded-full'>Sign Up</button></Link>
            </div>
            <div className='md:hidden ml-[-15%] mr-5 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
               <i class="fa-solid fa-bars text-2xl mb-9"></i>
            </div>
         </nav>
         {/* Hero Section */}
         <section className='start-page md:mx-10 mx-5 rounded-2xl relative'>
                <h1 className='md:pt-28 md:pl-28 pl-5 pt-20 heading'>
                    <span className='text-[#FF3D00] font-bold text-4xl'>Unlock Your</span> <span className='text-[#FFC107] font-bold text-4xl md:ml-2 ml-1'>Potential,</span> <br />
                    <span className='text-[#FFC107] font-bold text-4xl m-1'>Learn</span> <span className='text-[#FF3D00] font-bold text-4xl ml-2'>Anytime,</span> <br />
                    <span className='text-[#FF3D00] font-bold text-4xl ml-1'>Anywhere</span>
                </h1>
                <img src={Section1} className='md:absolute md:top-36 md:right-0' />
                <div className='text-white pl-5 pt-10 md:pl-28 md:pt-10 md:w-[40%] w-[90%]'>
                    <p>Navigate through a wide range of courses, certifications, and resources designed to help you achieve your goals. From beginner to expert, we’ve got something for everyone.</p>
                </div>
                <div className='md:pb-24 md:pl-8 md:ml-0 ml-[-17%] pt-10 pb-10 md:pt-0'>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Courses and Certifications</h1>
                    </div>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Data Structures & Algorithms</h1>
                    </div>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Company-specific Questions</h1>
                    </div>
                    <div className='flex items-center gap-5 pl-20 mt-5'>
                        <img src={Tick} className='w-6' />
                        <h1 className='text-white text-lg font-semibold'>Training and Process Tracking</h1>
                    </div>
                </div>

            </section>

            {/* Company Specific Section */}
            <section className='mt-7 mx-10 mb-5 relative md:flex md:flex-row flex flex-col gap-10'>
                <div className='bg-[#4682A9] md:w-[60%] flex gap-5 rounded-2xl pb-[7%]'>
                    <h1 className='text-white md:text-3xl w-[60%] pl-5 pb-20 md:w-[50%] font-medium md:p-10 py-5  md:pl-12 md:pt-28'>Company - Specific Courses</h1>
                    <img src={Company} className='md:absolute md:w-[35%] w-[70%] absolute right-[-15%] top-7 md:right-[44%]' />
                </div>
                <div className='bg-[#4682A9] md:w-[60%] md:flex gap-5 rounded-2xl'>
                    <img src={Book} className='md:mt-10 md:ml-0 ml-12' alt="" />
                    <div>
                        <h1 className='font-medium md:text-xl md:mt-16 ml-5 md:ml-0'>"The Best Things in Life are Free, <br /> The Second Best are very Expensive"</h1>
                        <div className='flex items-center justify-start ml-3 md:ml-0'>
                            <div className='flex flex-col items-center mt-10'>
                                <img src={Book1} alt="" />
                                <h1 className='text-lg ml-3 font-semibold'>Articles</h1>
                            </div>
                            <div className='flex flex-col items-center mt-9'>
                                <img src={Book2} alt="" />
                                <h1 className='text-lg ml-3 font-semibold'>Test</h1>
                            </div>
                            <div className='flex flex-col items-center mt-12'>
                                <img src={Book3} alt="" />
                                <h1 className='text-lg ml-3 font-semibold'>Videos</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      </>
   )
}

export default Home


