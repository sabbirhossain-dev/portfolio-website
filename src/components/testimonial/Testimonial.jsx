import React, { useState } from 'react'
import Slider from "react-slick";

import Title from '../layouts/Title'
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-10 h-8 md:w-12 md:h-10 lg:w-14 lg:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl lg:text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-10 lg:right-16 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-10 h-8 md:w-12 md:h-10 lg:w-14 lg:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl lg:text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-28 lg:right-40 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }


const Testimonial = () => {

    const [dotActive, setDotActive] = useState(0)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow />,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        appendDots: dots => (
            <div>
              <ul className='flex justify-center items-center gap-3 mt-5'> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={i===dotActive?{
                width: "12px",
                height:"12px",
                borderRadius:"50%",
                background:"#ff014f",
                cursor:"pointer"
                
              }:{
                width: "12px",
                height:"12px",
                borderRadius:"50%",
                background:"gray",  
                cursor:"pointer"              
              }}
            >
              
            </div>
          )
        
      };
  return (
    <section id="testimonial" className='py-20 border-b-black border-b-[1px]'>
      <div className="flex justify-center items-center text-center pb-5">
        <Title title="WHAT CLIENTS SAY" desc="Testimonial" />
      </div>

      <div>
        


      <Slider {...settings}>
      <div><SliderOne /></div>
      <div><SliderTwo /></div>
      <div><SliderOne /></div>

    </Slider>
      </div>
    </section>
  )
}

export default Testimonial
