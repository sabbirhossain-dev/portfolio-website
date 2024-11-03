import React from 'react'
import { FaFacebookF ,FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import Title from '../layouts/Title'
import { contactImg } from '../../assets/images'
import FormPart from './FormPart'

const Contact = () => {

  

  return (
    <section id="contact" className='py-20 border-b-black border-b-[1px]'>
      <div className="flex justify-center items-center text-center pb-5">
        <Title title="CONTACT" desc="Contact With Me" />
      </div>
      <div className='w-full h-auto lg:h-[800px] flex flex-col lg:flex-row lg:justify-between gap-10 lg-gap-0'>
        <div className='w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 shadow-shadowOne rounded-lg'>
            <div className='mb-8'>
                <img src={contactImg} alt='contactImg' className='h-64 object-cover rounded-lg'/>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-bold text-white'>John Doe</h2>
                <h4 className='text-lg font-normal gray-400'>MERN Stack Developer</h4>
                <p className='text-base text-gray tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</p>
                <p className='text-base text-gray flex items-center gap-1 '>Phone: +968 97859628</p>
                <p className='text-base text-gray flex items-center gap-1'>Email: noor.jsdivs@gmail.com</p>
                <div>
                <div className='flex'>
                    <p className='text-lightText text-base mb-8 mt-8'>FIND ME IN</p>
                </div>
                <div className='flex gap-4'>
                    <span className='bannerIcon'><a href=''><FaFacebookF  /></a></span>
                    <span className='bannerIcon'><a href=''><FaTwitter  /></a></span>
                    <span className='bannerIcon'><a href=''><FaLinkedinIn  /></a></span>
                </div>
            </div>
            </div>
        </div>


      <FormPart />
        
      </div>
    </section>
  )
}

export default Contact
