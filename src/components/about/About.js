import React from 'react'
import { ImPointRight } from "react-icons/im";

const About = () => {
  return (
    <div className='flex w-screen  h-screen  items-center relative justify-center z-0 '>
      <div> 
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Know Who <strong className="text-yellow-400">I'M</strong>
        </h1>
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="text-yellow-400">Ahmed belkhiria</span>
            from <span className="text-yellow-400"> Tunisia , Monastir</span>
            <br />I am a junior Software Engineer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="flex">
              <ImPointRight  /> Playing Games
            </li>
            <li className="flex">
              <ImPointRight /> ************
            </li>
            <li className="flex">
              <ImPointRight /> *******
            </li>
          </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About
