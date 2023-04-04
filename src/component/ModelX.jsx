import React from 'react'
import model3 from '../assets/model3.jpg'

const ModelX = () => {
  return (
    <div>
        <div className='relative w-full h-screen bg-blue-500 '>
            <img src={model3} className="h-full w-full object-cover" alt="" />
        </div>
        <div className='absolute top-0 left-0 w-full flex flex-col gap-24 items-center justify-around h-screen text-center'>
            <div>
               <h1 className=' text-center text-5xl '>Model 3</h1>
               <p>Leading starting at $349/mo</p>
            </div>
            <div className='flex flex-col w-full gap-2'>
                <button className='bg-gray-800  w-5/6 mx-auto py-2 text-white rounded-md'>View Inventory</button>
                <button className='bg-gray-100  w-5/6 mx-auto py-2 text-black font-bold rounded-md'>Custom Order</button>
            </div>
        </div>
    </div>
  )
}

export default ModelX