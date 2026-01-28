import React from 'react'
import 'boxicons'
import './home.css'

const Buttons = () => {
  return (
    <div className='flex flex-col'>
      <div className="social flex flex-row gap-4">
        <a target="_blank" href="https://github.com/dipesh-2874"><box-icon type='logo' color='#5ee9b5' className='h-10 w-10 duration-300 ease-in-out' name='github'></box-icon></a>
        <a target="_blank" href="https://leetcode.com/u/Dipesh1804/"><box-icon color='#5ee9b5' className='h-10 w-10 duration-300 ease-in-out' name='code-alt'></box-icon></a>
        <a target="_blank" href="https://www.linkedin.com/in/d1p3sh-d4s-4b1dd3n/"><box-icon type='logo' color='#5ee9b5' className='h-10 w-10 duration-300 ease-in-out' name='linkedin'></box-icon></a>
        <a target="_blank" href="https://www.instagram.com/dipesh_184?igsh=NW5odWYzbmN5dHYy"><box-icon type='logo' color='#5ee9b5' className='h-10 w-10 duration-300 ease-in-out' name='instagram'></box-icon></a>
        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=01dipeshdas@gmail.com"><box-icon color='#5ee9b5' className='h-10 w-10 duration-300 ease-in-out' name='envelope'></box-icon></a>
      </div>
      <a href="" className="view px-6 py-2 bg-emerald-300 font-bold mt-2 text-center w-65 rounded-full duration-300 ease-in-out">View Resume</a>
    </div>
  )
}

export default Buttons
