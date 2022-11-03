import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { FaJava ,FaPhp } from "react-icons/fa";
import { SiTailwindcss,SiExpress } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

import './TechStack.css'
function Techstack() {
  return (
    
    <center className="  w-3/5  relative z-0	gap-4 tech">
      <div className="border flex justify-center h-32  items-center ">
        <CgCPlusPlus  className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
          <DiJavascript1 className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <DiNodejs className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <DiReact className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <DiMongodb className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <SiTailwindcss className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <SiExpress className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <FaPhp className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <DiPython className="h-14 w-14" />
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <FaJava className="h-14 w-14" />
      </div>
    </center>
    
  );
}

export default Techstack;

