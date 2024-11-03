import React from 'react'

import Navbar from './components/nav/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
    <div className='w-full h-auto bg-bodyColor text-lightText'>
    <div className='xs:px-3 sm:px-5 lg:max-w-screen-xl mx-auto px-16'>
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
    </div>
    </>
  )
}

export default App
