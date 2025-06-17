import React from 'react'
import Contact from '../atoms/Contact'
import { Link } from 'react-router-dom'
import envelope from "../../assets/Vector (2).png"
import call from "../../assets/call.png"
import dot from "../../assets/Frame 1050.png"

const Footer = () => {
  return (
    <div className='py-10 lg:pt-36 px-3 md:px-10 lg:px-14 xl:px-20 bg-[#4F0072] flex flex-col justify-between h-[70rem] md:h-[56rem] lg:h-[70rem] xl:h-[80rem] relative'>
      <Contact/>
      <div className='flex flex-col md:flex-row gap-4 md:gap-0 lg:items-center  text-white sans'>
        <div className='w-full md:w-2/5 flex gap-6 text-2xl xl:justify-center'>
            <i class='bx bxl-linkedin' ></i>
            <i class='bx bxl-facebook-square'></i>
            <i class='bx bxl-twitter' ></i>
            <i class='bx bxl-instagram-alt' ></i>
        </div>
        <div className='w-full md:w-4/5 lg:w-full grid grid-cols-8 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-0 items-center'>
            <Link to="#" className='col-span-2 md:col-span-1 xl:col-start-2 '>About Us</Link>
            <Link to="#" className='col-span-3 md:col-span-1 '>Privacy Policy</Link>
            <Link to="#" className='col-span-3 md:col-span-1 '>Terms of use</Link>
            <p className='col-span-6 lg:col-span-2'>&copy;2025 Revve. All rights reserved.</p>
        </div>
      </div>
      <img src={envelope} alt='' className='absolute w-14 md:w-32 lg:w-40 xl:w-60 left-0 bottom-40 md:bottom-20 xl:bottom-30 '/>
      <img src={call} alt='' className='absolute w-14 md:w-32 lg:w-40 xl:w-60 right-0 bottom-52 md:bottom-45 lg:bottom-52 xl:bottom-1/4'/>
      <img src={dot} alt='' className='absolute w-14 md:w-20 lg:w-36 xl:w-44 right-0 top-[32rem] md:top-[20rem] lg:top-[30rem] xl:top-[25rem] z-20'/>
    </div>
  )
}

export default Footer
