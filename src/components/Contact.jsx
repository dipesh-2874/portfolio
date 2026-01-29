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
    <section id={id} className='min-h-screen w-full px-20 py-5'>
      <div className="contact mt-25 flex flex-col justify-center items-center">
        <p className="pro text-4xl text-white text-center font-extrabold">
          Let's Connect
        </p>

        <form ref={form} onSubmit={sendEmail} className='text-white w-1/2 flex flex-col gap-4 mt-7'>
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
    </section>
  )
}

export default Contact
