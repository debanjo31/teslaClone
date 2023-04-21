import React from 'react'
import model from '../assets/modelY.jpg'
import modelDesktop from '../assets/DesktopY.jpg'
  

function ModelY() {

  const styles = {
    backgroundImage: `url(${model})`,
    '@media (min-width: 600px)': {
      backgroundImage: `url(${modelDesktop})`,
    }, // Add a comma here
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
  };
  return (
    <div className='modelY snap-start  w-screen h-screen flex justify-around  ' style={styles}> 
      <div className=' h-4/5 my-auto w-screen items-center text-center flex justify-between flex-col '>
          <div className='flex flex-col w-5/6 mx-auto'>
              <h2 className='text-4xl mb-2'>Model Y</h2>
              <p className='underline'>View Inventory</p>
           </div>
           <div className='flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto max-w-600px '>
             <button className='bg-gray-800 text-white p-2 rounded-md ss:w-1/2'>Order Now</button>
             <button className='bg-gray-200 text-black p-2 rounded-md ss:w-1/2'>Demo Drive</button>
           </div>
      </div>
</div>
  )
}

export default ModelY