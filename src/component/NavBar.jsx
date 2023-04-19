import React, { useState } from 'react'
import tesla from '../assets/tesla.svg'


const NavBar = () => {
  const [status, setStatus] = useState(false);
 
  function Sidebar() {
    return (
      <div className='fixed top-0 left-0 w-full h-screen flex overflow-hidden z-30'>
          <div className='w-2/6 bg-gray-600 bg-opacity-75 ' onClick={()=> setStatus(false)}></div>
          <div className='w-4/6 bg-white p-4'>
               <p onClick={()=> setStatus(false)} className='block cursor-pointer text-xl text-right'>X</p>
               <div className='flex flex-col gap-16 overflow-auto h-screen'>
                  <p>Model S</p>
                  <p>Model 3</p>
                  <p>Model X</p>
                  <p>Model Y</p>
                  <p>Solar Roof</p>
                  <p>Solar Panels</p>
                  <p>Powerwall</p>
                  <p>Model S</p>
                  <p>Model 3</p>
                  <p>Model X</p>
                  <p>Model Y</p>
                  <p>Solar Roof</p>
                  <p>Solar Panels</p>
                  <p>Powerwall</p>
              </div>
          </div>
      </div>
    )
  }
  
  return (
    <div className=' pt-8 fixed top-0 left-0 w-full  '>
      <div className="w-5/6 mx-auto flex justify-between">
          <div><img src={tesla} alt="tesla" className='h-3'/></div>
          <div className='hidden lg:flex gap-4'>
              <p>Model S</p>
              <p>Model 3</p>
              <p>Model X</p>
              <p>Model Y</p>
              <p>Solar Roof</p>
              <p>Solar Panels</p>
              <p>Powerwall</p>
          </div>
          <div className='flex gap-4'>
              <p className='hidden lg:block'>Shop</p>
              <p className='hidden lg:block'>Account</p>
              <button className='bg-gray-200 bg-opacity-25 -mt-1 px-2 rounded-md' onClick={() => setStatus(true)}>Menu</button>
          </div>
      </div>
      {status &&  <Sidebar />}
    </div>
  )
}

export default NavBar