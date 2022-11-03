import React from 'react'
import Typewriter from "typewriter-effect";
import'./Type.css'
const Type = () => {
  return (
    <div className='style'>
      <Typewriter
      options={{
        strings: [
          "Software Engineer ...",
        
          "MERN Stack Developer ...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,

      }}
    />
    </div>
  )
}

export default Type
