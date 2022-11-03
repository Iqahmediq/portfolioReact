import React from 'react'
import { FaUbuntu  } from "react-icons/fa";
import { AiFillGithub  } from "react-icons/ai";
import { SiAdobephotoshop, SiAdobexd ,SiAdobeillustrator,SiAndroidstudio } from "react-icons/si";

const ToolStack = () => {
  return (
    <div>
      <div className=" w-3/5   items-center relative z-0	gap-4 tech">
      <div className="border flex justify-center h-32  items-center ">
        <FaUbuntu className='h-14 w-14'/>
      </div>
      <div className="border flex justify-center h-32  items-center ">
      <SiAdobephotoshop className='h-14 w-14'/>
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <SiAdobexd className='h-14 w-14'/>
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <SiAdobeillustrator className='h-14 w-14'/>
      </div>
      <div className="border flex justify-center h-32  items-center ">
        <SiAndroidstudio className='h-14 w-14'/>

      </div>
      </div>
    </div>
  )
}

export default ToolStack
