import React, { useState } from 'react'
import Tick from '../assets/icons/checkmark.png'
import Section1 from '../assets/startpage1.png'
import LogoImg from '../assets/logo-img.png'
import LogoText from '../assets/logo-text.png'
import Company from '../assets/company-specific.png'
import Book from '../assets/book-img.png'
import Book1 from '../assets/best1.png'
import Book2 from '../assets/best2.png'
import Book3 from '../assets/best3.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const StartPage = () => {
    // UseState for navigating side navbar
    const [showNavbar, setShowNavbar] = useState(false)
    return (
        <div>
            {/* Navbar */}
            <nav className='flex justify-between h-[80px] md:gap-5 w-[100%] items-center sticky top-0 z-10 bg-[#F6F4EB] md:h-24 pt-8 md:pt-12'>
                <div className='flex items-start justify-start md:ml-0 ml-[-5%] w-[40%] md:w-[20%]'>
                    <img src={LogoImg} className='md:w-[40%] w-[70%]' />
                    <img src={LogoText} className='md:w-[70%] md:ml-[-28%] ml-[-45%] mt-[-16%]' />
                </div>
                <ul className='hidden md:flex md:gap-14 font-bold md:justify-center mt-[-4%] w-[25%] cursor-pointer' onClick={()=>{alert("Login or SignUp first")}}>
                    <a>Home</a>
                    <a>Courses</a>
                    <a>Resources</a>
                </ul>
                <div className='text-[#808080] hidden md:gap-2 md:flex items-center justify-start w-[20%] bg-white rounded-xl p-1 pl-2 mt-[-4%]'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='search here' className='bg-transparent mt-[-1%] outline-none' />
                </div>
                <div className='md:w-[35%] w-[10%] md:ml-0 ml-14 font-bold flex items-center justify-end md:mr-10 md:mt-[-4%] mt-[-9%] gap-5'>
                    <Link to={'/login'}><button className='text-[12px] md:text-[16px] w-full mx-5 md:mx-0'>Log In</button></Link>
                    <Link to={'/signup'}><button className='bg-[#004EEC] p-1 text-[12px] md:text-[16px] md:w-full px-5 w-[90px] text-white md:px-7 rounded-full'>Sign Up</button></Link>
                </div>
                <div className='md:hidden ml-[-15%] mr-5 cursor-pointer' onClick={() => { setShowNavbar(true) }}>
                    <i class="fa-solid fa-bars text-2xl mb-9"></i>
                </div>
            </nav>
            {/* Side Navbar */}
            {
                showNavbar ?
                    <nav className='start-page w-[50%] absolute right-0 z-20 top-0 h-[780px]'>
                        <div className='flex justify-end m-3'>
                            <i class="fa-solid fa-xmark text-2xl cursor-pointer text-white" onClick={() => { setShowNavbar(false) }}></i>
                        </div>
                        <div className='flex ml-[25%] items-center gap-4 mt-8'>
                            <h1 className='text-white text-xl'>Home</h1>
                        </div>
                        <div className='flex ml-[25%] items-center gap-4 mt-8'>
                            <h1 className='text-white text-xl'>Courses</h1>
                        </div>
                        <div className='flex ml-[25%] items-center gap-4 mt-8'>
                            <h1 className='text-white text-xl'>Resources</h1>
                        </div>
                    </nav> : ""
            }
            

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default StartPage
