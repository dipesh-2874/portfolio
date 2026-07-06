import React, { useState } from 'react'
import "../components/Contact/contact.css"
import toast from "react-hot-toast"

const Contact = ({ id }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
            toast.success("Message sent successfully!", {id: toastId,});
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } else {
            toast.error("Failed to send.", {id: toastId,});
        }
    } catch (err) {
        console.log(err);
        toast.error("Server Error", {id: toastId,});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className='min-h-screen w-full px-6 md:px-12 lg:px-40 py-5 flex flex-col justify-center items-center scroll-mt-20'>
      <div className="cc relative w-full max-w-6xl flex flex-col md:flex-row gap-10 bg-zinc-950 rounded-xl p-6 md:p-10 lg:p-15 z-30">
        <div className="info text-left w-full flex flex-col gap-4">
          <p className="pro w-fit text-3xl md:text-4xl text-white font-extrabold text-center md:text-left">
            Let's Get in Touch
          </p>
          <p className='text-lg text-emerald-300 font-bold tracking-tighter'>Open to ideas, opportunities, and meaningful conversations.<div className="blink-box"></div></p>
          <div className="navlinks flex flex-col gap-5">
            <a target="_blank" href="https://www.google.com/maps/@26.5433033,88.7012639,3522m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D" className="flex flex-row items-center px-4 gap-2">
              <box-icon name='current-location' color="#ffffff" className="w-7"></box-icon>
              <p className='text-white hover:text-emerald-300 md:text-sm text-xs tracking-tighter'>Jalpaiguri Government Engineering College, Jalpaiguri, West Bengal, Pin:- 735102</p>
            </a>
            <a className="flex flex-row items-center px-4 gap-2">
              <box-icon name='phone-call' color="#ffffff" className="w-7"></box-icon>
              <p className='text-white hover:text-emerald-300 md:text-sm text-xs tracking-tighter'>+91 97337 17805</p>
            </a>
            <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=01dipeshdas@gmail.com" className="flex flex-row items-center px-4 gap-2">
              <box-icon name='envelope' color="#ffffff" className="w-7"></box-icon>
              <p className='text-white hover:text-emerald-300 md:text-sm text-xs'>01dipeshdas@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="contact w-full flex flex-col">
          <form onSubmit={sendEmail} className='text-white w-full flex flex-col gap-4 max-w-md mx-auto'>
            <input name='name' 
            onChange={(e)=>setFormData({...formData,name:e.target.value})} 
            value={formData.name} 
            className='border-2 outline-0 border-emerald-300 h-10 px-4 py-2 rounded-xl' 
            type="text" placeholder='Name' required/>

            <input name='email' 
            onChange={(e)=>setFormData({...formData,email:e.target.value})} 
            value={formData.email} 
            className='border-2 outline-0 border-emerald-300 h-10 px-4 py-2 rounded-xl' 
            type="email" placeholder='Email' required/>

            <input name='subject' 
            onChange={(e)=>setFormData({...formData,subject:e.target.value})} 
            value={formData.subject} 
            className='border-2 outline-0 border-emerald-300 h-10 px-4 py-2 rounded-xl' 
            type="text" placeholder='Subject' required/>

            <textarea name="message" 
            onChange={(e)=>setFormData({...formData,message:e.target.value})}
            className='border-2 outline-0 border-emerald-300 resize-none h-40 px-4 py-4 rounded-xl' 
            placeholder='Message' required></textarea>

            <div className="btns px-5 mt-3 flex flex-row justify-between">
              <button onClick={()=>{setFormData({
                  name:"",
                  email:"",
                  subject:"",
                  message:"",
                  })
              }} className="cb flex py-2 px-3 items-center gap-2 border-2 border-emerald-300 text-emerald-300 font-extrabold rounded-xl">
                <box-icon name='reset' color='#03fac0'></box-icon>
                Reset
              </button>

              <button type="submit" className={`cb flex py-2 px-3 items-center gap-2 rounded-xl font-extrabold transition-all duration-300 ${
                  loading
                      ? "bg-zinc-600 cursor-not-allowed text-white"
                      : "bg-emerald-300 text-zinc-950 hover:scale-105"
              }`}>
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>

                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v3l4-4-4-4v3A10 10 0 002 12h2z"
                            ></path>
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        <box-icon
                            name="send"
                            type="solid"
                            color="#09090b"
                        ></box-icon>
                        Send
                    </>
                )}
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
