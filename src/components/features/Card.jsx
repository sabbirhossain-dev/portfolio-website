import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = ({title,desc,icon}) => {
  return (
    <div className='w-full px-12 h-80 pt-12 pb-8  rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#1e2024] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100'>
      <div className=' h-72 overflow-y-hidden '>
       <div className='h-full flex flex-col gap-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500'>
       <div className=''>
            <span className='text-5xl text-designColor'>{icon}</span>
        </div>
       <div className='flex flex-col gap-6 md:gap-4'>
       <div className='flex flex-col gap-4 md:gap-4'>
            <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
            <p className='text-base'>{desc}</p>
        </div>
        <div>
        <span className='text-xl lg:text-2xl text-designColor'>
            <button><FaArrowRight /></button>
        </span>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Card
