import React from 'react'
import model3 from '../assets/modelY.jpg'

  

function ModelY() {

    const styles = {
        backgroundImage : `url(${model3})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        backgroundPosition : '50% 80%'
      }
  return (
    <div className='snap-start  w-screen h-screen flex just items-center  text-center' style={styles}> 
    <div className='h-5/6 w-5/6 flex flex-col justify-between'>
           <div className='flex flex-col w-5/6 mx-auto'>
              <h2>Model 3</h2>
              <p>Leasing starting at $349/mo</p>
           </div>
           <div className='flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto'>
             <button className='bg-gray-800 text-white p-2 rounded-md'>Order Now</button>
             <button>Demo Drive</button>
           </div>
    </div>
        
</div>
  )
}

export default ModelY