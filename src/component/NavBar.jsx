import React, { useState } from 'react'
import tesla from '../assets/tesla.svg'


const NavBar = () => {
  const [status, setStatus] = useState(false);
  function Sidebar() {
    return (
      <div className='fixed top-0 left-0 w-full h-screen flex overflow-hidden'>
          <div className='w-2/6 bg-gray-600 bg-opacity-75 ' onClick={()=> setStatus(false)}></div>
          <div className='w-4/6 bg-white p-4'>
               <p onClick={()=> setStatus(false)} className='block cursor-pointer text-xl text-right'>X</p>
          </div>
      </div>
    )
  }
  
  return (
    <div className=' pt-8  '>
      <div className="w-5/6 mx-auto flex justify-between">
          <div><img src={tesla} alt="tesla" className='h-4'/></div>
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
              <p>Menu</p>
          </div>
      </div>
        
    </div>
  )
}

export default NavBar