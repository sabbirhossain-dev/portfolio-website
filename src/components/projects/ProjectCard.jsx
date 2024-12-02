import React from 'react'
import { FaGit, FaGithub, FaGlobe } from 'react-icons/fa'

const Card = ({src,title,desc}) => {
  return (
    <div>
      <div className='w-full px-2 sm:px-4 md:px-8 lg:px-12 h-auto pt-5 md:pt-12 pb-8  rounded-lg shadow-shadowOne flex flex-col gap-8 items-center bg-gradient-to-r from-bodyColor to-[#1e2024] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100'>
      
      <div>
      <div className='w-full h-[80%] rounded-lg overflow-hidden'>
        <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt='projectImg'/>
      </div>
      </div>

      <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <div >
            <h3 className='text-base uppercase font-normal text-designColor'>{title}</h3>
        </div>
        <div className='flex gap-2'>
            <span className='text-xl w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer'><a href=''>{<FaGlobe />}</a></span>
            <span className='text-xl w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer'><a href=''>{<FaGithub />}</a></span>
        </div>
      </div>
      <div>
        <p>{desc}</p>
      </div>
      </div>

    
    </div>
    </div>
  )
}

export default Card
