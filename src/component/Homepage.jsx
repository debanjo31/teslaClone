import React from 'react'
import ModelX from './ModelX'
import NavBar from './NavBar'

const Homepage = () => {
  return (
    <div>
        <div className='relative'>
            <ModelX />
            <ModelX />
            <ModelX />
        </div>
       <div className='fixed top-0 left-0 w-full'>
            <NavBar />
       </div>
    </div>
  )
}

export default Homepage