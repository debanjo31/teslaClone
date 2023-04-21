import React from 'react'
import model from '../assets/modelY.jpg'
import modelDesktop from '../assets/DesktopY.jpg'
  

function ModelY() {

  const styles = {
    backgroundImage: `url(${model})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
  };
  return (
    <div className='modelY snap-start  w-screen h-screen flex justify-around flex-col items-center  text-center' style={styles}> 
    <div className='flex flex-col w-5/6 mx-auto'>
       <h2 className='text-4xl'>Model Y</h2>
       <p className='under'>View Inventory</p>
    </div>
    <div className='flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto'>
      <button className='bg-gray-800 text-white p-4 rounded-md'>Order Now</button>
      <button className='bg-gray-200 text-black p-2 rounded-md'>Demo Drive</button>
    </div>
</div>
  )
}

export default ModelY