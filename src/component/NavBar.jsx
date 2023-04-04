import React from 'react'
import tesla from '../assets/tesla.svg'
import { useState } from 'react';

const NavBar = () => {
  const [status, setStatus] = useState(false);
  function Sidebar() {
    return (
      <div className='fixed top-0 left-0 w-full h-screen flex overflow-visible'>
          <div className='w-2/6 bg-gray-600 bg-opacity-75 ' onClick={()=> setStatus(false)}></div>
          <div className='w-4/6 bg-white p-8'>
               <p onClick={()=> setStatus(false)} className='block cursor-pointer text-xl text-right'>X</p>
               <div className="flex flex-col font-bold gap-8">
                  <p>Model S</p>
                  <p>Model 3</p>
                  <p>Model X</p>
                  <p>Model Y</p>
                  <p>Solar Roof</p>
                  <p>Solar Panels</p>
                  <p>Powerwall</p>
                  <p>Existing Inventory</p>
                  <p>Used Inventroy</p>
                  <p>Trade-In</p>
                  <p>Demo Drive</p>
                  <p>Insurance</p>
                  <p>Commercial Energy</p>
                  <p>Utilities</p>
                  <p>Charging</p>
                  <p>Find Us</p>
                  <p>Support</p>
                  <p>Investor Relations</p>
                  <p>Shop</p>
                  <p>Account</p>
                  <div className="flex justify-between">
                    <p>More</p>
                    <p>&gt;</p>
                  </div>
               </div>
               <div className="flex flex-col">
                  <p>United States</p>
                  <p className='text-sm'>English</p>
               </div>
          </div>
      </div>
    )
  }
  
  return (
    <div className=' relative  '>
      <div className='pt-8'>
          <div className="w-5/6 mx-auto flex justify-between ">
              <div><img src={tesla} alt="tesla" className='h-4'/></div>
              <div className='hidden lg:flex gap-4 -mt-1 '>
                  <p>Model S</p>
                  <p>Model 3</p>
                  <p>Model X</p>
                  <p>Model Y</p>
                  <p>Solar Roof</p>
                  <p>Solar Panels</p>
                  <p>Powerwall</p>
              </div>
              <div className='flex gap-4 -mt-1'>
                  <p className='hidden lg:block'>Shop</p>
                  <p className='hidden lg:block'>Account</p>
                  <button onClick={() => setStatus(true)} className="px-2 py-1 -mt-1 bg-gray-700 bg-opacity-10">Menu</button>
              </div>
          </div>
      </div>
      {status && <Sidebar />}
    </div>
  )
}

export default NavBar