import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

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
      <div className="contact mt-25">
        <p className="pro text-4xl text-white text-center font-extrabold">
          Let's Connect
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='text-white flex flex-col gap-4'
        >
          <input
            name='name'
            className='border-2 border-white'
            type="text"
            placeholder='Name'
            required
          />

          <input
            name='email'
            className='border-2 border-white'
            type="email"
            placeholder='Email'
            required
          />

          <input
            name='subject'
            className='border-2 border-white'
            type="text"
            placeholder='Subject'
            required
          />

          <textarea
            name="message"
            className='border-2 border-white'
            placeholder='Message'
            required
          ></textarea>

          <button type="submit" className="flex items-center gap-2">
            <box-icon name='send' type='solid' color='#ffffff'></box-icon>
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
