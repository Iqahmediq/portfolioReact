import React from 'react'
import TypeW from './TypeW'
import Background from '../../Assets/home-bg.jpg'
import Home2 from './Home2'
import Pic from '../../Assets/ing-pic.png'

const Home1 = () => {
  return (
    <>
    <div className='flex w-screen  h-screen  items-center relative text-5xl  z-0 gap-8	' style={{backgroundImage:Background}}>
  
  <center className='w-1/2  ' >
    <h1 style={{ paddingBottom: 15 }} className="type" >
              Hi There!👋🏻
    
      </h1> 
      <h1 className="">
              I'M
              <strong className="text-yellow-400 type"> Ahmed Belkhiria</strong>
      </h1>
            <TypeW/>

  </center>
  <div className='w-1/2'>
    <img src={Pic} className="h-1/2 w-1/2 "></img>
  </div>
  </div>
  <Home2/>
    </>
  )
}

export default Home1
