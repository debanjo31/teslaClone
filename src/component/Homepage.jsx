import React from 'react'
import NavBar from './NavBar'
import ModelX from './ModelX'
import ModelY from './ModelY'
import ModelS from './ModelS'
import Model3 from './Model3'

const Homepage = () => {
 
  return (
    <div className=''>
         <div className='snap-y snap-mandatory h-screen w-full overflow-scroll '>
            <ModelY />
            <Model3 />
            <ModelS />
            <ModelX />        
        </div> 
       <div className='fixed top-0 left-0 w-full h-full '>
            <NavBar />
       </div>
    </div>
  )
}

export default Homepage