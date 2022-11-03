import React from 'react'
import { ImPointRight } from "react-icons/im";
import Techstack from './TechStack';
import './about.css'
import ToolStack from './ToolStack';

const About = () => {
  return (
    <>
        <div className='flex w-screen  h-screen justify-center  items-center text-2xl gap-24 z-0'>
    <div > 
        <h1 className='text-3xl'>
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
            <li className="flex gap-4">
              <ImPointRight  /> Playing Games
            </li>
            <li className="flex gap-4">
              <ImPointRight /> Practice Sports
            </li>
            <li className="flex gap-4">
              <ImPointRight /> Reading Books
            </li>
          </ul>
           </div>
    <div className="container" >
		<span className="react-logo">
			<span className="nucleo"></span>
		</span>

    </div>
    </div>
    <center className="h-screen w-screen">
      <center className="text-6xl my-4"> professional <span className="text-yellow-400"> SkillSet</span></center>

      <Techstack></Techstack>
      <center className="text-6xl my-4"> Tools <span className="text-yellow-400"> I USE</span></center>
      
      <ToolStack></ToolStack>
      </center>
    </>
  )
}

export default About
