import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'


const Skills = () => {
  return (
    <>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity: 1, transition:{duration:.5}}}
      className='flex w flex-col gap-10 lg:flex-row lg:gap-20'>


            {/* Left part start */}


            <div className='sm:w-full md:w-full w-1/2 h-full'>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">Features</h3>
            <h1 className="text-4xl md:text-4xl text-gray-300 font-bold capitalize">Design Skill</h1>
            </div>

            {/* //* Left skills part start */}

           <div className='flex flex-col gap-7'>
           <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>Figma</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[90%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>90%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>Photoshop</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[95%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>95%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>Adobe Illustrator</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[70%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>70%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>Adobe XD.</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[65%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>65%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>Design</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[93%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>93%</p></span>
                </span>
              </motion.span>
            </div>
           </div>

           {/* //* Left skills part end */}

            </div>







            {/* right part start */}


            <div className='sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 sm:w-full md:w-full w-1/2 h-full'>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">Features</h3>
            <h1 className="text-4xl md:text-4xl text-gray-300 font-bold capitalize">Development Skill</h1>
            </div>

            {/* //* right skills part start */}

           <div className='flex flex-col gap-7'>
           <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>Html</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[90%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>90%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>css</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[85%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>85%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>react</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[75%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>75%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>javascript</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[65%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>65%</p></span>
                </span>
              </motion.span>
            </div>

            <div className='flex flex-col gap-2 overflow-x-hidden'>
              <p className='uppercase text-base'>tailwind</p>
              <motion.span 
              initial={{x:"-100%", opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:.5, delay:.3}}

               className='w-full h-3 inline-flex bg-black bg-opacity-50 rounded-md'>
                <span className='w-[90%] h-full bg-gradient-to-r from-blue-400 via-purple-700 to-pink-500 rounded-md relative'>
                  <span className='absolute -top-7 right-0'><p>90%</p></span>
                </span>
              </motion.span>
            </div>
           </div>

           {/* //* right skills part end */}
            
            </div>


            </motion.div>
    </>
  )
}

export default Skills
