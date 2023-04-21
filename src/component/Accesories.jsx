import React from 'react'
import model from '../assets/accessoriesMobile.webp'

function Accesories() {
   
  const styles = {
    backgroundImage: `url(${model})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
  };
  return (
    <div className='accessory snap-start  w-screen h-screen flex justify-around flex-col items-center text-center gap-8 lg:gap-36' style={styles}> 
    <div className='flex flex-col w-5/6 mx-auto'>
       <h2 className='text-4xl font-san'>Accessories</h2>
    </div>
    <div className='flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto modelButton'>
      <button className=' bg-black text-white p-2 rounded-md ss:w-3/6'>Shop Now</button>
    </div>
</div>
  )
}

export default Accesories