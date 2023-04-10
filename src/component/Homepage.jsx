import React from 'react'
import NavBar from './NavBar'
import Model from './Model'
// import model3 from '../assets/model3.jpg'
// import modelY from '../assets/modelY.jpg'
import model3 from '../assets/model3.jpg'
const Homepage = () => {
  return (
    <div className=''>
         <div className='relative'>
          {/* <Model  model="Model 3" text="Leasing starting at $349/mo" />
           {/* <Model img={model3} model="Model 3" text="Leasing starting at $349/mo" />
            <Model img={modelY} model="Model Y" text="Schedule a Demo Drive" className="relative" />
           <Model img={model3} model="Model 3" text="Leasing starting at $349/mo" />
            <Model img={modelY} model="Model Y" text="Schedule a Demo Drive" className="relative" />  */}
            <div>
              <div className='relative w-full h-screen bg-blue-500 '>
                  <img src={model3} className="h-full w-full object-cover" alt="" />
              </div>
              <div className='absolute top-0 left-0 w-full flex flex-col gap-24 items-center justify-around h-screen text-center'>
                  <div>
                      <h1 className=' text-center text-5xl '> Model Y</h1>
                      <p>NEXT MODEL</p>
                  </div>
                  <div className='flex flex-col w-full gap-2'>
                      <button className='bg-gray-800  w-5/6 mx-auto py-2 text-white rounded-md'>View Inventory</button>
                      <button className='bg-gray-100  w-5/6 mx-auto py-2 text-black font-bold rounded-md'>Custom Order</button>
                  </div>
              </div>
          </div>        
        </div> 
       <div className='fixed top-0 left-0 w-full'>
            <NavBar />
       </div>
    </div>
  )
}

export default Homepage