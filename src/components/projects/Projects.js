import React from 'react'
import ProjectsCard from './ProjectsCard'
import img from '../../Assets/home.png'
import './projects.css'
const Projects = () => {
  const data=[{
    src:img ,
    title: "title" ,
    text : "Adipisicing proident consectetur incididunt ut dolore consequat. Amet tempor proident eiusmod quis ea et. Mollit nulla pariatur exercitation reprehenderit labore cupidatat non. Nisi labore aute labore labore sint non esse anim. Cupidatat commodoest deserunt cillum aute ipsum dolor tempor.",
    link:"https://github.com/Iqahmediq"
  },{
    src:img ,
    title: "title" ,
    text : "Adipisicing proident consectetur incididunt ut dolore consequat. Amet tempor proident eiusmod quis ea et. Mollit nulla pariatur exercitation reprehenderit labore cupidatat non. Nisi labore aute labore labore sint non esse anim. Cupidatat commodoest deserunt cillum aute ipsum dolor tempor.",
    link:"https://github.com/Iqahmediq"
  },{
    src:img ,
    title: "title" ,
    text : "Adipisicing proident consectetur incididunt ut dolore consequat. Amet tempor proident eiusmod quis ea et. Mollit nulla pariatur exercitation reprehenderit labore cupidatat non. Nisi labore aute labore labore sint non esse anim. Cupidatat commodoest deserunt cillum aute ipsum dolor tempor.",
    link:"https://github.com/Iqahmediq"
  },
  {
    src:img ,
    title: "title" ,
    text : "Adipisicing proident consectetur incididunt ut dolore consequat. Amet tempor proident eiusmod quis ea et. Mollit nulla pariatur exercitation reprehenderit labore cupidatat non. Nisi labore aute labore labore sint non esse anim. Cupidatat commodoest deserunt cillum aute ipsum dolor tempor.",
    link:"https://github.com/Iqahmediq"
  },
  {
    src:img ,
    title: "title" ,
    text : "Adipisicing proident consectetur incididunt ut dolore consequat. Amet tempor proident eiusmod quis ea et. Mollit nulla pariatur exercitation reprehenderit labore cupidatat non. Nisi labore aute labore labore sint non esse anim. Cupidatat commodoest deserunt cillum aute ipsum dolor tempor.",
    link:"https://github.com/Iqahmediq"
    
  },
  {
    src:img ,
    title: "title" ,
    text : "Adipisicing proident consectetur incididunt ut dolore consequat. Amet tempor proident eiusmod quis ea et. Mollit nulla pariatur exercitation reprehenderit labore cupidatat non. Nisi labore aute labore labore sint non esse anim. Cupidatat commodoest deserunt cillum aute ipsum dolor tempor.",
    link:"https://github.com/Iqahmediq"
    
  }
  ]
  
  return (
    <center>
      <div className='mt-20'>
      <h1 className="project-heading">
          My Recent <strong className="text-yellow-400">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      </div>
    <div className='hello my-20 gap-10'>
      {
        data.map((items,index)=>(
          <ProjectsCard
          key={index} 
        src={items.src} 
        title={items.title}
        text={items.text}/>
        ))
      }
    </div>
    </center>
    
  )
}

export default Projects
