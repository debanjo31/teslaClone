import React from 'react'
import model3mobile from '../assets/model3mobile.jpg'

const Model3 = () => {
  const styles = {
    backgroundImage : `url(${ model3mobile})`,
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover',
    backgroundPosition : '500% 40%'
  }
  return (
    <div className='model3 snap-start  w-screen h-screen flex justify-around flex-col items-center  text-center' style={styles}> 
           <div className='flex flex-col w-5/6 mx-auto'>
              <h2 className='text-4xl'>Model 3</h2>
              <p>Leasing starting at $349/mo</p>
           </div>
           <div className='flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto'>
             <button className='bg-gray-800 text-white p-2 rounded-md'>Order Now</button>
             <button className='bg-gray-200 text-black p-2 rounded-md'>Demo Drive</button>
           </div>
</div>
  )
}

export default Model3