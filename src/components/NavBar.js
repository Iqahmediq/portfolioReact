import React, { useState } from 'react'
import logo from "../Assets/loop.png"
import HomePng from '../Assets/home.png'
import { Link } from "react-router-dom";
import About from '../Assets/about_icon.png'
import Project from '../Assets/project.png'
import Resumes from '../Assets/resumes.png'
import './Navbar.css'

const NavBar = (props) => {

  const [navColour, updateNavbar] = useState('flex h-20 w-full justify-between pt-4 fixed z-50  bg-transparent ');

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar('flex h-20 w-full justify-between pt-4 fixed z-50 bgColor');
    } else {
      updateNavbar('flex h-20 w-full justify-between pt-4 fixed z-50 bg-transparent');
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    
    <div className={navColour +" opacity-95"} >
      
      <div className='flex w-1/6 pl-10 '> <img src="https://logowhirl.com/wp-content/uploads/2019/07/le29-1024x609.jpg" className="h-14 w-20"></img></div>
      <div className='flex w-8/12 justify-between pr-10'>
      <Link className='flex border text-white border-yellow-50 hover:border-yellow-400 hover:border-2 shadow-2xl rounded-3xl h-10 items-center p-2	gap-2' to='/'> <img src={HomePng} className="h-5 w-5"></img> <div>Home</div></Link>
      <Link className='flex border text-white border-yellow-50 hover:border-yellow-400 hover:border-2 shadow-2xl rounded-3xl h-10 items-center p-2	gap-2' to='/about'><img src={About} className="h-5 w-5"></img> <div>About</div></Link>
      <Link className='flex border text-white border-yellow-50 hover:border-yellow-400 hover:border-2 shadow-2xl rounded-3xl h-10 items-center p-2	gap-2' to='/projects'><img src={Project} className="h-5 w-5"></img> <div>Projects</div></Link>
      <Link className='flex border text-white border-yellow-50 hover:border-yellow-400 hover:border-2 shadow-2xl rounded-3xl h-10 items-center p-2	gap-2' to='/resumes'><img src={Resumes} className="h-5 w-5"></img> <div>Resumes</div></Link>
     
      <button className='flex border text-white hover:border-slate-200 rounded-3xl h-10 items-center p-2	'> <img src={logo} className="h-5 w-5"></img><div>bouton</div></button>
      </div>
    </div>
  )
}

export default NavBar
