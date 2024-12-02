import React from 'react'
import { motion } from 'framer-motion';
import { Typewriter} from 'react-simple-typewriter'
import { FaFacebookF,FaTwitter ,FaLinkedinIn,FaReact ,FaJs, FaFigma} from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";
import { bannerImg } from '../../assets/images';




const Banner = () => {

    
  return (
    <motion.section
    initial={{x:"100%", opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration:.8, delay:.3}}
     id="home" className='w-full h-auto pb-20 border-black border-b-[1px]'>
      
      <div className='flex flex-col xl:flex-row'>
        <div className='w-full xl:w-1/2 flex flex-col gap-10  md:gap-16'>
            <div className='flex flex-col pt-8 gap-4 xl:pt-[200px]'>
                <h4 className='text-lightText text-lg md:text-xl'>WELCOME TO MY WORLD</h4>
                <h1 className='text-white  text-4xl md:text-6xl font-bold'>Hi, I'm <span className='text-designColor'>Jhon Doe</span></h1>
                <h2 className='text-2xl md:text-4xl text-white font-bold '>a <span>
                <Typewriter
                words={['Frontend Developer', 'Web Designer', 'Photographer!']}
                loop={true}
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={2000}
          />
                </span></h2>
               
                <p className='text-base font-bodyFont tracking-wide leading-6'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>


            <div className='flex flex-col lg:flex-row gap-4 xl:gap-0 xl:justify-between lg:justify-between'>
            <div>
                <div className='flex'>
                    <p className='text-lightText text-base mb-4'>FIND ME IN</p>
                </div>
                <div className='flex gap-4'>
                    <span className='bannerIcon'><a href=''><FaFacebookF  /></a></span>
                    <span className='bannerIcon'><a href=''><FaTwitter  /></a></span>
                    <span className='bannerIcon'><a href=''><FaLinkedinIn  /></a></span>
                </div>
            </div>

            <div>
                <div>
                <p className='text-lightText text-base mb-4'>SKILL</p>
                </div>
                <div className='flex gap-4'>
                    <span className='bannerIcon'><FaReact /></span>
                    <span className='bannerIcon'><FaJs /></span>
                    <span className='bannerIcon'><SiTailwindcss /></span>
                    <span className='bannerIcon'><FaFigma /></span>
                </div>
            </div>
            </div>
        </div>


        <div className='w-full xl:w-1/2 flex justify-center items-center relative pt-10'>
            <img src={bannerImg} alt='bannerImg' className='w-[300px] h-[380px] xl:w-[500px] xl:h-[650px] z-10' />
            <div className='absolute bottom-0 flex justify-center items-center h-[300px] w-[300px]  xl:h-[500px] xl:w-[500px] bg-gradient-to-r from-purple-950 to-gray-800 opacity-30 shadow-shadowOne'></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Banner
