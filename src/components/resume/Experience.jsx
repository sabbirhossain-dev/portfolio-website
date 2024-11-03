import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Experience = () => {
  return (
    <>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1, transition:{duration:.5}}}
       className='flex justify-between flex-col gap-10 lg:flex-row lg:gap-20'>

            <div>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">2010 - 2022</h3>
            <h1 className="text-4xl md:text-4xl text-gray-300 font-bold capitalize">Job Experience</h1>
            </div>
            <div>
            <div className='w-full h-[1000px] flex flex-col gap-8 border-l-[6px] border-black border-opacity-50'>
            <ResumeCard 
            title="Sr. Software Engineer"
            subtitle="Google Out Tech - (2017 - Present)"
            result="USA"
            desc="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />

            <ResumeCard 
            title="Web Developer & Trainer"
            subtitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            desc="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />

            <ResumeCard 
            title="Front-end Developer"
            subtitle="Nike - (2020 - 2011)"
            result="OMAN"
            desc="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />  
            </div>
            </div>
            </div>

            <div className='sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0'>
            <div className='flex flex-col gap-4 font-titleFont mb-14'>
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">2001 - 2020</h3>
            <h1 className="text-4xl md:text-4xl text-gray-300 font-bold capitalize">Trainer Experience</h1>
            </div>
            <div>
            <div className='w-full h-[1000px] flex flex-col gap-8 border-l-[6px] border-black border-opacity-50'>
            <ResumeCard 
            title="Gym Instructor"
            subtitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            desc="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />

            <ResumeCard 
            title="Web Developer and Instructor"
            subtitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            desc="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />

            <ResumeCard 
            title="School Teacher"
            subtitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            desc="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />  
            </div>
            </div>
            </div>


            </motion.div>
    </>
  )
}

export default Experience
