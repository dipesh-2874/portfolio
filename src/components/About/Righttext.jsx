import React from 'react'
import "./about.css"

const Righttext = () => {
  return (
    <div className='flex flex-col gap-2 mt-6 lg:mt-20 h-auto lg:h-140'>
        <h1 className="about text-4xl md:text-6xl font-extrabold text-white mb-3">About</h1>
        <h2 className="text-lg md:text-2xl font-extrabold text-emerald-300 mt-3">My fields of interest:&nbsp;
          <div className='inline-block h-8 overflow-hidden align-middle'>
            <ol className="orl text-white">
              <li>Aspiring Technologies</li>
              <li>Web Development</li>
              <li>Cyber Security</li>
              <li>Gaming & E-sports</li>
              <li>Programming & Problem Solving</li>
            </ol>
          </div>
        </h2>
        <p className='text-sm text-white mt-2 w-full max-w-xl lg:w-150'>Passionate about web development, cybersecurity, and problem-solving. Currently pursuing B.Tech in Computer Science & Engineering at Jalpaiguri Government Engineering College .</p>
        <ul className='text-sm text-white w-full max-w-xl lg:w-150 mt-2'>
            <p className='text-emerald-300'>🡆 Foundation in programming with hands-on experience in:</p>
            <li><span className='text-emerald-300'>⦿ Languages:</span> C, C++, Python, JavaScript, HTML, CSS</li>
            <li><span className='text-emerald-300'>⦿ Tools:</span> Git, Canva, Linux, Basic AI Tools</li>
        </ul>
        <p className='text-sm text-white w-full max-w-xl lg:w-150 mt-2'>🡆 Eager to explore internship opportunities and real-world projects in software development, web technologies, and cybersecurity.</p>
        <a href="#project" className="button bg-emerald-300 px-5 py-2 mt-8 font-bold rounded-full w-fit duration-300 ease-in-out">Read More</a>
    </div>
  )
}

export default Righttext
