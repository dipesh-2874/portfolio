import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import Education from '../pages/Education'
import Contact from '../pages/Contact'

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
