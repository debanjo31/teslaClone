import React from 'react'
import NavBar from './NavBar'
import ModelX from './ModelX'
import model3 from '../assets/model3.jpg'
const Homepage = () => {
  const styles = {
    backgroundImage : `url(${model3})`,
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover',
    backgroundPosition : 'center center'
  }
  return (
    <div className=''>
         <div className='snap-y snap-mandatory h-screen w-full overflow-scroll '>
            {/* <ModelX />
            <ModelX />
            <ModelX />
            <ModelX />         */}
            <div className='snap-start  w-screen h-screen' style={styles}> 
                <div className="flex flex-col">
                  <div className="text-5xl">WIN</div>
                  <div className="text-5xl">WIN</div>
                </div>
            </div>
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