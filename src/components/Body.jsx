import React from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

const Body = () => {
  return (
    <div className='w-full'>
      <Home id='home'/>
      <About id='about'/>
      <Project id='project'/>
      <Skills id='skills'/>
      <Experience id='experience'/>
      <Education id='education'/>
      <Contact id='contact'/>
    </div>
  )
}

export default Body
