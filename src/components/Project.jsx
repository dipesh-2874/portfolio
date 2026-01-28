import React from 'react'
import Card from './Projects/Card'
import './Projects/card.css'

const Project = ({id}) => {
    const projects = [
        {
            pname : "SAVIORS",
            image : "images/saviors.png",
            text : "is a community-driven web platform that connects users with nearby essential service providers like plumbers, electricians, and mechanics. It simplifies service discovery through a clean interface and an AI-powered chatbot, ensuring quick, reliable, and accessible support for everyday needs.",
            techs : "EJS, VanillaJS, Tailwind CSS, CSS3, NodeJS, ExpressJS, MongoDB, Generative Language API.",
            github : "https://github.com/dipesh-2874/saviors",
            mvp : "https://saviors.onrender.com"
        },
        {
            pname : "CURRENCY CONVERTER",
            image : "images/currencyConverter.png",
            text : "This project is a real-time currency converter that provides accurate exchange rates using a live currency API. It features an AI-powered chatbot to assist users with conversions and queries, delivering a smooth, interactive, and user-friendly experience for global currency exchange needs.",
            techs : "EJS, ExpressJS, CSS3, Generative Language API.",
            github : "https://github.com/dipesh-2874/currencyConverter",
            mvp : "https://currencyconverter-6kp7.onrender.com/"
        },
        {
            pname : "PORTFOLIO",
            image : "images/portfolio.png",
            text : "Created a fully responsive portfolio website to showcase projects, skills, and achievements, enabling recruiters and clients to quickly understand my work and background.",
            techs : "ReactJS, Tailwind CSS, CSS3.",
            github : "https://github.com/dipesh-2874/personal_portfolio_website",
            mvp : "#home"
        },
        {
            pname : "WEB CALCULATOR",
            image : "images/calculator.png",
            text : "Made a A simple and responsive web calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations and mimics the functionality of a typical mobile or desktop calculator.",
            techs : "HTML5, CSS3, JavaScript (Vanilla JS)",
            github : "https://github.com/dipesh-2874/basic_calculator",
            mvp : "https://webcalculator-seven.vercel.app/"
        },
        {
            pname : "NOTEPAD",
            image : "images/notepad.png",
            text : "This project is a lightweight Notepad application built using React.js, JavaScript, and Tailwind CSS. It allows users to create, edit, and manage notes through a clean and responsive interface, focusing on simplicity, performance, and an intuitive user experience.",
            techs : "ReactJS, Tailwind CSS, JavaScript (Vanilla JS), CSS3.",
            github : "https://github.com/dipesh-2874/myNotepad",
            mvp : "https://my-notepad-pearl.vercel.app/"
        },
        {
            pname : "ROCK-PAPER-SCISSORS",
            image : "images/rps.png",
            text : "This project is a lightweight Notepad application built using React.js, JavaScript, and Tailwind CSS. It allows users to create, edit, and manage notes through a clean and responsive interface, focusing on simplicity, performance, and an intuitive user experience",
            techs : "HTML5, JavaScript (Vanilla JS), CSS3.",
            github : "https://github.com/dipesh-2874/Rock-Paper-Scissors",
            mvp : "https://r0ckp4p3rsc1ss0rs.vercel.app/"
        },
    ]
  return (
    <div>
      <section id={id} className='flex flex-col min-h-screen w-full px-20 py-5'>
        <p className="pro text-4xl text-white text-center font-extrabold mt-25">My Projects</p>
        <div className='w-full flex flex-wrap gap-5 mt-10'>
            {projects.map((elem,idx) => {
                return <div key={idx} className='w-25/78 h-120'>
                    <Card pname={elem.pname} image={elem.image} text={elem.text} techs={elem.techs} github={elem.github} mvp={elem.mvp}/>
                </div>
            })}
        </div>
      </section>
    </div>
  )
}

export default Project
