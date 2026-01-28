import Item from "./Item"
import "./skill.css"
import 'boxicons'

const Programming = () => {
  const skills = [
    {
      imgname: "c-plus-plus",
      sname: "C Language",
      text: "C is a powerful low-level programming language used for system programming and performance-critical applications."
    },
    {
      imgname: "c-plus-plus",
      sname: "C++",
      text: "C++ is a high-performance programming language that extends C with object-oriented and generic programming features."
    },
    {
      imgname: "javascript",
      sname: "JavaScript (Vanilla JS)",
      text: "JavaScript adds interactivity, logic, and dynamic behavior to modern web applications."
    },
    {
      imgname: "python",
      sname: "Python Programming",
      text: "Python is a versatile, easy-to-read programming language used for automation, data analysis, and application development."
    }
  ]
  return (
    <div className="scard">
      <div className="content z-10 text-white p-5 flex flex-col items-center">
        <box-icon color="#03fac0" name='code' className="h-10 w-10"></box-icon>
        <p className="text-xl text-emerald-300 font-bold">Programming</p>
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

export default Programming
