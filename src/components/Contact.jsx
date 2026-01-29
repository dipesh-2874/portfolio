import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import "./Contact/contact.css"

const Contact = ({ id }) => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_k7wln6k",      
      "template_klez5m7",      
      form.current,
      "oFO364wLXze-Ixp42"       
    )
    .then(() => {
      alert("Message sent successfully ✅")
      form.current.reset()
    })
    .catch((err) => {
      console.error(err)
      alert("Failed to send ❌")
    })
  }

  return (
    <section id={id} className='min-h-screen w-full px-40 py-5'>
      <div className="cc relative flex flex-row w-full bg-zinc-950 mt-25 rounded-xl p-15 z-30">
        <div className="info text-left w-full flex flex-col gap-4">
          <p className="pro w-fit text-4xl text-white text-center font-extrabold">
            Let's Get in Touch
          </p>
          <p className='text-lg text-emerald-300 font-bold tracking-tighter'>Open to ideas, opportunities, and meaningful conversations.<div className="blink-box"></div></p>
          <div className="navlinks flex flex-col justify-center h-50 gap-7">
            <a target="_blank" href="https://www.google.com/maps/@26.5433033,88.7012639,3522m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D" className="flex flex-row items-center">
              <box-icon name='current-location' color="#ffffff" className="h-7 w-7"></box-icon>
              <p className='text-white hover:text-emerald-300 text-sm tracking-tighter w-110 px-4'>Jalpaiguri Government Engineering College, Jalpaiguri, West Bengal, Pin:- 735102</p>
            </a>
            <a className="flex flex-row items-center">
              <box-icon name='phone-call' color="#ffffff" className="h-7 w-7"></box-icon>
              <p className='text-white hover:text-emerald-300 text-sm tracking-tighter w-110 px-4'>+91 97337 17805</p>
            </a>
            <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=01dipeshdas@gmail.com" className="flex flex-row items-center">
              <box-icon name='envelope' color="#ffffff" className="h-7 w-7"></box-icon>
              <p className='text-white hover:text-emerald-300 text-sm w-110 px-4'>01dipeshdas@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="contact w-full flex flex-col">
          <form ref={form} onSubmit={sendEmail} className='text-white w-full flex flex-col gap-4'>
            <input name='name' className='border-2 outline-0 border-emerald-300 h-10 px-4 py-2 rounded-xl' type="text" placeholder='Name' required/>
            <input name='email' className='border-2 outline-0 border-emerald-300 h-10 px-4 py-2 rounded-xl' type="email" placeholder='Email' required/>
            <input name='subject' className='border-2 outline-0 border-emerald-300 h-10 px-4 py-2 rounded-xl' type="text" placeholder='Subject' required/>
            <textarea name="message" className='border-2 outline-0 border-emerald-300 resize-none h-40 px-4 py-4 rounded-xl' placeholder='Message' required></textarea>

            <div className="btns px-5 mt-3 flex flex-row justify-between">
              <button type="reset" className="cb flex py-2 px-3 items-center gap-2 border-2 border-emerald-300 text-emerald-300 font-extrabold rounded-xl">
                <box-icon name='reset' color='#03fac0'></box-icon>
                Reset
              </button>
              <button type="submit" className="cb flex py-2 px-3 items-center gap-2 bg-emerald-300 text-zinc-950 font-extrabold rounded-xl">
                <box-icon name='send' type='solid' color='#09090b'></box-icon>
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="left-plane absolute w-full z-90 -left-20 -bottom-20">
          <box-icon className="plane1 rotate-15" name='paper-plane' type='solid' color='#ffffff' ></box-icon>
          <box-icon className="plane2 rotate-30" name='paper-plane' type='solid' color='#03fac0' ></box-icon>
        </div>
        <div className="right-plane absolute -right-20 -bottom-20">
          <box-icon className="plane3 -rotate-15" name='paper-plane' type='solid' flip='horizontal' color='#ffffff' ></box-icon>
        </div>
      </div>
    </section>
  )
}

export default Contact
