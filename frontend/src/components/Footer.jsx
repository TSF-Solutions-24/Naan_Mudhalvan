import React from 'react'
import LogoImg from '../assets/logo-img.png'
import LogoText from '../assets/logo-text.png'
import fb from '../assets/icons/facebook.png'
import linkedin from '../assets/icons/linkedin.png'
import insta from '../assets/icons/instagram.png'

const Footer = () => {
  return (
    <footer className='pl-3 md:w-[100%] w-[fit] bg-[#D9D9D9] mb-[-8%] md:mt-20 mt-32'>
      <div className='md:flex md:items-start md:gap-16'>
        <div className='mt-[-10%] md:mt-[-2%]'>
          <div className='flex md:ml-0 ml-[-6%] items-center justify-start'>
            <img src={LogoImg} className='w-28' />
            <img src={LogoText} className='w-48 ml-[-20%]' />
          </div>
          <h1 className='md:pl-12 ml-2 md:mt-[-17%] mt-[-15%]'>
            <span className='text-[#FF3D00] font-bold text-[30px] md:text-3xl'>Unlock Your</span> <span className='text-[#FFC107] font-bold text-[30px] md:text-3xl ml-2'>Potential,</span> <br />
            <span className='text-[#FFC107] font-bold text-[30px] md:text-3xl m-1'>Learn</span> <span className='text-[#FF3D00] font-bold text-[30px] md:text-3xl ml-2'>Anytime,</span> <br />
            <span className='text-[#FF3D00] font-bold text-[30px] md:text-3xl ml-1'>Anywhere</span>
          </h1>
        </div>
        <div className='flex items-center justify-between gap-4 md:gap-16 md:ml-0 ml-[-11%] mt-[-9%] md:mt-0'>
          <div className='md:ml-20 ml-14 md:mt-16 mt-20 w-[150px]'>
            <h1 className='md:text-2xl text-[14px] font-semibold'>PRODUCTS</h1>
            <h1 className='mt-3 md:text-lg text-[12px]'>JAVA</h1>
            <h1 className='mt-1 md:text-lg text-[12px]'>.NET DEVELOPER</h1>
            <h1 className='mt-1 md:text-lg text-[12px]'>DATA LEARNING</h1>
          </div>
          <div className='md:ml-20 md:mt-16 mt-[18%] w-[180px]'>
            <h1 className='md:text-2xl text-[14px] font-semibold'>LEGAL</h1>
            <h1 className='mt-3 md:text-lg text-[12px]'>Privacy Policies</h1>
            <h1 className='mt-1 md:text-lg text-[12px]'>Cookies Collection</h1>
            <h1 className='mt-1 md:text-lg text-[12px]'>Terms and Conditions</h1>
          </div>
          <div className='md:ml-20 md:mt-14 mt-[18%] w-[150px]'>
            <h1 className='md:text-2xl text-[14px] font-semibold'>SOCIAL</h1>
            <div className='flex gap-2 items-center mt-3'>
              <img src={fb} className='md:w-6 w-4' />
              <h1 className='md:text-lg text-[12px]'>Facebook</h1>
            </div>
            <div className='flex gap-2 items-center md:mt-3 mt-1'>
              <img src={linkedin} className='md:w-6 w-4' />
              <h1 className='md:text-lg text-[12px]'>LinkedIn</h1>
            </div>
            <div className='flex gap-2 items-center mt-1 md:mt-3'>
              <img src={insta} className='md:w-6 w-4' />
              <h1 className='md:text-lg text-[12px]'>Instagram</h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className='mt-5 ml-[-10%] md:ml-0 flex items-center justify-center gap-1 text-sm'>
        <i class="fa-regular fa-copyright"></i>
        Skill Plus 2024, All Rights Reserved
      </h1>
    </footer>
  )
}

export default Footer
