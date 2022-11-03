import React from 'react'

const ProjectsCard = (props) => {
  return (
    <div className='flex flex-col justify-center w-80 shadow-yellow-400	border border-yellow-600 shadow-xl hover:shadow-2xl ' style={{height:"550px"}}> 
      <center><img className='h-64 w-64' src={props.src}></img></center>
      <center>{props.title}</center>
      <center>{props.text}</center>
      <center><a className="flex justify-center border-2 w-36bg-blue-500 hover:bg-yellow-400 text-white font-bold rounded w-44" href={props.link}>github</a></center>
    </div>
  )
}

export default ProjectsCard
