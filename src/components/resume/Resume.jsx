import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Title from '../layouts/Title'
import Education from './Education'
import Achivements from './Achivements'
import Skills from './Skills'
import Experience from './Experience'

const Resume = () => {

  const [education, setEducation] = useState(true)
  const [skills, setSkills] = useState(false)
  const [experience, setExperience] = useState(false)
  const [achivement, setAchivement] = useState(false)

  return (
    <motion.section
    initial={{x:"-100%", opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{duration:.8, delay:.3}}
     id="resume" className='py-20 border-b-[1px] border-black'>
      <div className='flex justify-center items-center text-center'>
      <Title title="7+ YEARS OF EXPERIENCE" desc="My Resume"/>
      </div>
      <div className='pb-20'>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <li onClick={()=>{
              setEducation(true)&
              setSkills(false)&
              setExperience(false)&
              setAchivement(false)
            }} className={`${education ? "border-designColor rounded-md text-designColor":"border-noe"} resumeli` }>Education</li>

            <li onClick={()=>{
              setEducation(false)&
              setSkills(true)&
              setExperience(false)&
              setAchivement(false)
            }}
            className={`${skills ? "border-designColor rounded-md text-designColor":"border-noe"} resumeli` }>Professional Skills</li>

            <li onClick={()=>{
              setEducation(false)&
              setSkills(false)&
              setExperience(true)&
              setAchivement(false)
            }} className={`${experience ? "border-designColor rounded-md text-designColor":"border-noe"} resumeli` }>Experience</li>


            <li onClick={()=>{
              setEducation(false)&
              setSkills(false)&
              setExperience(false)&
              setAchivement(true)
            }} className={`${achivement ? "border-designColor rounded-md text-designColor":"border-noe"} resumeli` }>Achievements</li>

        </ul>
      </div>

      <div>
        {education && <Education /> }
        {skills && <Skills /> }
        {experience && <Experience /> }
        {achivement && <Achivements /> }
        

      </div>

    </motion.section>
  )
}

export default Resume
