import React from 'react'
import model3 from '../assets/model3.jpg'

const ModelX = () => {
  return (
    <div>
        <div className='relative w-full h-screen bg-blue-500'>
            <img src={model3} className="h-full w-full object-cover" alt="" />
        </div>
        <div className='absolute top-0 left-0 w-full flex flex-col items-center justify-around h-screen text-center'>
            <h1 className=' text-center text-2xl font-bold font-serif'>Model 3</h1>
            <h1 className=' text-center'>Model 3</h1>
        </div>
    </div>
  )
}

export default ModelX