import React from 'react'
import model from '../assets/modelY.jpg'
import modelDesktop from '../assets/DesktopY.jpg'
  

function ModelY() {

  const styles = {
    backgroundImage: `url(${model})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 30%',
  };
  return (
    <div className='modelY snap-start  w-screen h-screen flex justify-around flex-col items-center text-center gap-8 lg:gap-36' style={styles}> 
    <div className='flex flex-col w-5/6 mx-auto'>
       <h2 className='text-4xl font-san'>Model Y</h2>
       <p className='under text-ss -mt-1'>View Inventory</p>
    </div>
    <div className='flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto modelButton'>
      <button className='text-white p-2 rounded-md ss:w-3/6' style={{backgroundColor : "rgba(23, 26, 32, 0.8"}}>Order Now</button>
      <button className=' text-black p-2 rounded-md ss:w-3/6' style={{backgroundColor : "rgba(244, 244, 244, 0.65"}}>Demo Drive</button>
    </div>
</div>
  )
}

export default ModelY