import React from 'react'
import { FaStar } from 'react-icons/fa';

import { testimonialTwo } from '../../assets/images';
import { quote } from '../../assets/images';

const SliderTwo = () => {
  return (
    <>
     <div className='max-w-[90%] h-auto lg:h-[500px] mx-auto flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne flex gap-4 lg:flex-col lg:gap-8'>
                <img src={testimonialTwo} alt='testimonialImg' className='h-40 w-40 md:w-56 lg:w-full lg:h-72 object-cover rounded-lg' />
                <div className='flex flex-col ml-4 md:ml-10 lg:ml-0 justify-center lg:block'>
                    <p className='text-xs uppercase text-designColor tracking-wide pb-2'>Bound - Trolola</p>
                    <h3 className='text-xl lg:text-2xl font-bold'>Jone Duone Joe</h3>
                    <p className='text-base text-gray-300 tracking-wide'>Operation Officer</p>
                </div>
            </div>
            <div className='w-full lg:w-[60%] h-full flex flex-col justify-between'>
                <div>
                    <img src={quote} alt='quote' className='w-20'/>
                </div>
                <div className='w-full h-[70%] bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne px-6 py-16'>
                    <div  className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-4 md:gap-2 lg:gap-0 text-center md:text-start lg:text-start pb-8 border-b-[1px] border-b-gray-900'>
                        <div>
                            <h3 className='text-xl lg:text-2xl font-medium tracking-wide'>Travel Mobile App Design.</h3>
                            <p className='text-gray-400 text-base  mt-3'>via Upwork - Mar 4, 2015 - Aug 30, 2021 test</p>
                        </div>
                        <div>
                            <ul className='flex gap-1'>
                                <li className='text-yellow-500 cursor-pointer'><FaStar /></li>
                                <li className='text-yellow-500 cursor-pointer'><FaStar /></li>
                                <li className='text-yellow-500 cursor-pointer'><FaStar /></li>
                                <li className='text-yellow-500 cursor-pointer'><FaStar /></li>
                                <li className='text-yellow-500 cursor-pointer'><FaStar /></li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum, eos natus ipsum numquam veniam officia necessitatibus ratione quos debitis exercitationem repudiandae facilis id neque nihil accusantium perspiciatis repellat? Iste.</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default SliderTwo
