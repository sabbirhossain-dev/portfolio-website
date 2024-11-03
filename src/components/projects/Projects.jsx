import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne } from '../../assets/images'
import { projectTwo } from '../../assets/images'
import { projectThree } from '../../assets/images'
const Project = () => {
  return (
    <section id='projects' className='py-20 border-b-[1px] border-black'>
    <div className='flex justify-center items-center text-center'>
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" desc="My Projects" />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProjectCard 
        src={projectOne}
         title="SOCIAL MEDIA CLONE" 
         desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!" />
        
        <ProjectCard 
        src={projectTwo}
         title="E-commerce Website" 
         desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!" />

        <ProjectCard 
        src={projectThree}
         title="Chatting App" 
         desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!" />

         <ProjectCard 
        src={projectThree}
         title="SOCIAL MEDIA CLONE" 
         desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!" />

        <ProjectCard 
        src={projectTwo}
         title="E-commerce Website" 
         desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!" />

        <ProjectCard 
        src={projectOne}
         title="Chatting App" 
         desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!" />
    </div>
    </section>
  )
}

export default Project
