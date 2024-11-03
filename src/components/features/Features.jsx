import React from 'react'
import { FaGlobe,FaMobile ,FaBars} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { SiAntdesign,SiProgress  } from "react-icons/si";



import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <>
      <div id="features" className='w-full py-20 border-black border-b-[1px]'>
      <div >
      <Title title="Features" desc="What I Do" />
    </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
     <Card 
      title="Business Stratagy"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaBars/>}
     />
     <Card 
      title="App Development"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<AiFillAppstore/>}
     />
     <Card 
      title="SEO Optimisation"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<SiProgress/>}
     />
     <Card 
      title="Mobile Development"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaMobile />}
     />
     <Card 
      title="UX Design"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<SiAntdesign />}
     />
     <Card 
      title="Hosting Websites"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
      icon={<FaGlobe />}
     />
    </div>
      </div>
    </>
  )
}

export default Features
