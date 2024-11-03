import React from 'react'

const ResumeCard = ({title,subtitle,result,desc}) => {
  return (
    <div className='w-full h-1/3 group flex'>
        <div className='w-8 h-[6px] bg-black bg-opacity-50 relative mt-14'>
            <span className='w-5 h-5 rounded-full bg-black bg-opacity-70 absolute -left-3 -top-2 flex jus items-center'>
                <span className='w-3 h-3 absolute left-[4px] rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
            </span>
        </div>
        <div className='w-full px-10 rounded-lg shadow-shadowOne flex flex-col justify-center  bg-black bg-opacity-20 hover:bg-opacity-50  duration-200 cursor-pointer'>
        <div className='flex flex-col gap-10'>
        <div className='flex items-center justify-between'>
        <div>
        <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
        <h6 className='text-sm mt-2 group-hover:text-white duration-300'>{subtitle}</h6>
        </div>
        <div>
            <p className='px-4 py-2 bg-black bg-opacity-25 text-sm font-medium flex justify-center items-center shadow-shadowOne text-designColor rounded-md'>{result}</p>
        </div>
      </div>
       <div> <p className='text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-200 duration-300'>{desc}</p></div>
      </div>
    </div>
    </div>
  )
}

export default ResumeCard
