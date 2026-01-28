import Item from "./Item"
import "./skill.css"
import 'boxicons'

const Webdev = () => {
  const skills = [
    {
      imgname: "html5",
      sname: "HTML5",
      text: "HTML5 is the modern standard for structuring web content and enabling rich, interactive experiences."
    },
    {
      imgname: "css3",
      sname: "CSS3",
      text: "CSS3 styles and layouts web pages with animations, responsive designs, and visual effects for modern user interfaces."
    },
    {
      imgname: "javascript",
      sname: "JavaScript (Vanilla JS)",
      text: "JavaScript adds interactivity, logic, and dynamic behavior to modern web applications."
    },
    {
      imgname: "react",
      sname: "React JS",
      text: "React JS is a JavaScript library for building fast, dynamic, and component-based user interfaces."
    },
    {
      imgname: "tailwind-css",
      sname: "Tailwind CSS",
      text: "Tailwind CSS is a utility-first framework for rapidly building responsive and modern user interfaces."
    },
    {
      imgname: "nodejs",
      sname: "Node JS & Express JS",
      text: "Node.js enables scalable, high-performance server-side applications using JavaScript."
    },
    {
      imgname: "mongodb",
      sname: "MongoDB",
      text: "MongoDB is a NoSQL database for storing and managing data in flexible, JSON-like documents."
    },
  ]
  return (
    <div className="scard">
      <div className="content z-10 text-white p-5 flex flex-col items-center">
        <box-icon type='solid' color="#03fac0" name='devices' className="h-10 w-10"></box-icon>
        <p className="text-xl text-emerald-300 font-bold">Development</p>
        <div className="techstack flex flex-col items-start mt-5 gap-2">
          {skills.map((elem, idx) => {
            return <div key={idx}>
              <Item imgname={elem.imgname} sname={elem.sname} text={elem.text}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Webdev
