import React from 'react'
import NavBar from './NavBar'
import ModelX from './ModelX'
import ModelY from './ModelY'
const Homepage = () => {
 
  return (
    <div className=''>
         <div className='snap-y snap-mandatory h-screen w-full overflow-scroll '>
            <ModelY />
            <ModelX />
            <ModelY />
            <ModelX />        
            
            <div className='snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl'>1</div>
            <div className='snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl'>1</div>
            <div className='snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl'>1</div>
        </div> 
       <div className='fixed top-0 left-0 w-full'>
            <NavBar />
       </div>
    </div>
  )
}

export default Homepage