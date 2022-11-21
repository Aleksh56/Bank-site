import React from 'react'
import {FiArrowRight} from 'react-icons/fi'

const ServicesCard = ({title, image}) => {
  return (
    <div className='px-[25px] py-[15px]'>
        <img src={image} className='max-w-[260px] max-h-[260px] rounded-lg' />
        <div className='flex flex-1 items-center justify-between text-left mt-3'>
            <h4 className='max-w-[150px] text-xl font-semibold uppercase'>{title}</h4>
            <FiArrowRight className='text-2xl text-pink-600 rounded-full bg-pink-200 cursor-pointer font-bold'/>
        </div>
    </div>
  )
}

export default ServicesCard