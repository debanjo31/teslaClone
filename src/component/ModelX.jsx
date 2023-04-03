import React from 'react'
import model3 from '../assets/model3.jpg'

const ModelX = () => {
  return (
    <div>
        <div className='relative w-full h-screen bg-blue-500'>
            <img src={model3} className="h-full w-full object-cover" alt="" />
        </div>
        <div className='absolute top-0 left-0 w-full flex items-center justify-center h-screen text-center'>
            <h1 className='text-white text-center'>New HEADER</h1>
        </div>
    </div>
  )
}

export default ModelX