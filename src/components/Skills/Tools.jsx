import Item from "./Item"
import "./skill.css"
import 'boxicons'

const Tools = () => {
  const skills = [
    {
      imgname: "github",
      sname: "GitHub",
      text: "GitHub is a platform for hosting, managing, and collaborating on code using version control."
    },
    {
      imgname: "visual-studio",
      sname: "VS Code Editor",
      text: "Visual Studio Code is a lightweight, powerful code editor for building and debugging applications."
    },
    {
      imgname: "google-cloud",
      sname: "Google Colud Console",
      text: "Google Cloud Console is a web-based interface for managing, deploying, and monitoring applications on Google Cloud services."
    },
    {
      imgname: "windows",
      sname: "Windows Powershell",
      text: "Windows PowerShell is a task automation and configuration management tool that uses commands and scripts to manage Windows systems efficiently."
    }
  ]
  return (
    <div className="scard">
      <div className="content z-10 text-white p-5 flex flex-col items-center">
        <box-icon color="#03fac0" name='cog' className="h-10 w-10"></box-icon>
        <p className="text-xl text-emerald-300 font-bold">Tools & Techs</p>
        <div className="techstack flex flex-col items-start mt-5 gap-2">
          {skills.map((elem, idx) => {
            return <div key={idx}>
              <Item imgname={elem.imgname} sname={elem.sname} text={elem.text}/>
            </div>
          })}
          <div className="item group relative flex flex-row gap-2">
            <img src="images/kali.png" alt="" className="h-6 w-6" />
            <p className="text-white hover:text-emerald-300">Kali Linux</p>
            <div className="info absolute left-0 top-full mt-2
                text-xs font-light text-white
                opacity-0 translate-x-10 -translate-y-5 transition-all duration-300 ease-out
                bg-black/80 px-3 py-2 rounded-md w-60">
              Kali Linux is a security-focused Linux distribution used for penetration testing, ethical hacking, and cybersecurity research.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
