import React from 'react'
import HeroImg from '../../assets/hero.png'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center min-h-screen justify-between px-4 lg:px-0'>
      
      {/* Text Section */}
      <div className='flex flex-col gap-1 lg:w-[55%] w-full'>
        <h1 className='text-[55px] uppercase font-medium leading-tight'>
          Empowering Your Next Career  
          Move with <br /><span className='text-[#0a65cc] font-black'>NEXTSTEP</span>
        </h1>
        <p className='uppercase text-[18px]'>
          Explore jobs, resources, and insights to help you succeed faster....
        </p>
        <NavLink 
          to="/jobs"
          className="w-[60%] lg:w-[18%] mt-2 flex items-center justify-center py-2 bg-[#0a65cc] text-white uppercase font-medium rounded-md hover:bg-[#0851a5] transition text-[18px] duration-300"
        >
          Find Jobs
        </NavLink>
      </div>

      {/* Image Section */}
      <div className='w-full lg:w-[45%] flex justify-center mb-6 lg:mb-0'>
        <img src={HeroImg} alt="Hero" className='object-cover w-full'/>
      </div>

    </div>
  )
}

export default Hero
