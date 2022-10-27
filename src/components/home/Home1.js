import React from 'react'
import Type from './Type'
import logo from'../../Assets/loop.png'
import Background from '../../Assets/home-bg.jpg'
import Home2 from './Home2'
const Home1 = () => {
  return (
    <>
    <div className='flex w-screen  h-screen  items-center relative text-6xl  z-0 	' style={{backgroundImage:Background}}>
  
  <center className='w-1/2  ' >
    <h1 style={{ paddingBottom: 15 }} className="" >
              Hi There!{" "}
    <span className="rotate-45 hue-rotate-90" >
                👋🏻
      </span>
      </h1>
      <h1 className="heading-name">
              I'M
              <strong className="text-yellow-400"> Ahmed Belkhiria</strong>
            </h1>
            <Type/>

  </center>
  <div className='w-1/2'>
    <img src={logo} className="w-3/4 h-3/4"></img>
  </div>
  </div>
  <Home2/>
    </>
  )
}

export default Home1
