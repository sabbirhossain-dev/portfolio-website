import React from 'react'
import {FaFacebookF,FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import {Link} from 'react-scroll'
import { logo } from '../../assets/images'
import { navData } from '../../constants'

const Footer = () => {
  return (
    <>
    <section className='py-20 border-b-black border-b-[1px]'>
      <div className='flex flex-col md:flex-row lg:flex-row gap-8'>
        <div className='w-full md:w-1/2 lg:1/4 flex flex-col gap-8'>
            <div><img src={logo} alt='logo' /></div>
        <div className='flex gap-4'>
            <span className='bannerIcon'><a href=''><FaFacebookF  /></a></span>
            <span className='bannerIcon'><a href=''><FaTwitter  /></a></span>
            <span className='bannerIcon'><a href=''><FaLinkedinIn  /></a></span>
        </div>
        </div>

        <div className='w-full md:w-1/2 lg:1/4'>
            <h4 className='text-xl text-designColor'>Quick Link</h4>
            <ul className='flex flex-col gap-5 mt-5 overflow-hidden py-5'>
                {navData.map(({id,title,link})=>{
                    return <li key={id} className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    <Link 
                    activeClass="activee" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    >
                    {title}
                    </Link>
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>
                })}
            </ul>
        </div>

        <div className='w-full md:w-1/2 lg:1/4'>
        <h4 className='text-xl text-designColor'>RESOURCES</h4>
            <ul className='flex flex-col gap-5 mt-5 overflow-hidden py-5'>

            <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Authentication
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                  <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    System Status
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                    <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Terms of Service
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                    <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Pricing
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                    

                    <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Over Right
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>
            </ul>
        </div>

        <div className='w-full md:w-1/2 lg:1/4'>
        <h4 className='text-xl text-designColor'>DEVELOPERS</h4>
            <ul className='flex flex-col gap-5 mt-5 overflow-hidden py-5'>

            <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Documentation
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                  <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Authentication
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                    <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    API Reference
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                    <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Support
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>

                    <li className='text-lg cursor-pointer'>
                    <span className='hover:hover:text-designColor duration-300 relative  group'>
                    Open Source
                    <span className='w-full h-[1px] bg-designColor duration-300 absolute left-0 -bottom-1 translate-x-[-100%] group-hover:translate-x-0 transition-transform'></span>
                    </span>
                    </li>
            </ul>
        </div>
      </div>
    </section>
    <div className='w-full py-10 flex justify-center items-center'>
      <p className='text-base text-gray-500'>© 2022. All rights reserved by Md Sabbir Hossain</p>
    </div>
    </>
  )
}

export default Footer
