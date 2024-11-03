import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa'

// import {logo} from '../../assets/images/index'
import { navData } from '../../constants'

const Navbar = () => {

  const [navToggle, setNavToggle] = useState(false)

  return (
      <div className='w-full h-24 py-5 flex justify-between items-center mx-auto sticky z-50 top-0 bg-bodyColor border-b-[1px] border-gray-600'>
      <div>
        {/* <a href=''>
            <img src={logo} alt='Logo'/>
        </a> */}
      </div>
        <div className='ml-auto'>
            <ul className='hidden xl:flex  mx-auto items-center gap-10 font-titleFont'>
                {navData.map(({id,title,link})=>{
                    return <li key={id} className='text-base text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                    <Link 
                    activeClass="active" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500} 
                    >
                    {title}
                    </Link>
                    </li>
                })}
            </ul>
            <div onClick={()=>{setNavToggle(!navToggle)}} className='cursor-pointer xl:hidden'>
              {navToggle? <FaTimes size={30}/>:<FaBars size={30} />}
            </div>
            {navToggle && <motion.ul 
            initial={{x:"100%", opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:.6, delay:.1}}
            className='flex flex-col items-center py-20 text-2xl w-full h-screen bg-gradient-to-b from-black to-gray-600 gap-5 absolute top-24 left-0 xl:hidden'>
              {navData.map(({id,title,link})=>{
                    return <li key={id} className='text-2xl text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                    <Link 
                    activeClass="active" 
                    to={link} 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    >
                    {title}
                    </Link>
                    </li>
                })}
            </motion.ul>}
        </div>
    </div>
  )
}

export default Navbar

