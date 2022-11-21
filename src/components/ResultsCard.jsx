import React from 'react'

const ResultsCard = ({result, about}) => {
  return (
    <div className='flex flex-1 flex-col items-start p-[15px] text-start'>
        <h4 className='text-5xl font-semibold mb-3'>{result}</h4>
        <p className='text-gray-500 uppercase text-xl'>{about}</p>
    </div>
  )
}

export default ResultsCard