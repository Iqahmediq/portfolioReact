import React from 'react'
import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <div>
      <Typewriter
      options={{
        strings: [
          "Software Engineer ...",
        
          "MERN Stack Developer ...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        stop:50 ,
      }}
    />
    </div>
  )
}

export default Type
