import React from 'react'

const ExperienceCard = ({title, image, about}) => {
  return (
    <div className='flex flex-1 max-w-[260px] flex-col items-start text-left sm:mb-0 mb-10'>
        <img src={image} alt="" height='37px' width='37px' className='mb-3' />
        <h4 className='text-xl font-semibold mb-3'>{title}</h4>
        <p className='text-gray-500'>{about}</p>
    </div>
  )
}

export default ExperienceCard