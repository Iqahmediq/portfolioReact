import React from 'react'
import logo from'../../Assets/loop.png'

const Home2 = () => {
  return (
    <div className='flex w-screen  h-screen  items-center relative z-0	justify-center'>
      <div className='w-7/12 flex flex-col items-center justify-center pl-40 text-lg '>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='text-yellow-400' > INTRODUCE </span> MYSELF
            </h1>
            <br></br>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              
                <b className="text-yellow-400"> C++, Javascript and Python. </b>
              
              <br />
              <br />
              My field of Interest's are building new 
              
                <b className="text-yellow-400">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="text-yellow-400">
                  Deep Learning and Natural Launguage Processing.
                </b>
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="text-yellow-400">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p> 
      </div>
            <div className='w-5/12'>
            <center>
            <img 
                src={logo}
                alt="home pic"
                className="h-1/2 w-1/2"
               
              />
            </center>
                 </div>
        
    </div>
  )
}

export default Home2
