import "./skill.css"
import 'boxicons'

const Designing = () => {
  return (
    <div className="scard">
      <div className="content z-10 text-white p-5 flex flex-col items-center">
        <box-icon color="#03fac0" name='edit' className="h-10 w-10"></box-icon>
        <p className="text-xl text-emerald-300 font-bold">Designing & Editing</p>
        <div className="techstack flex flex-col items-start mt-5 gap-2">
          <div className="item group relative flex flex-row gap-2">
            <box-icon name='figma' type='logo' color="#ffffff"></box-icon>
            <p className="text-white hover:text-emerald-300">Figma</p>
            <div className="info absolute left-0 top-full mt-2
                text-xs font-light text-white
                opacity-0 translate-x-10 -translate-y-5 transition-all duration-300 ease-out
                bg-black/80 px-3 py-2 rounded-md w-60">
              Figma is a collaborative design tool used to create, prototype, and share modern user interfaces in real time.
            </div>
          </div>
          <div className="item group relative flex flex-row gap-2">
            <img src="images/canva.png" alt="" className="h-6 w-6" />
            <p className="text-white hover:text-emerald-300">Canva</p>
            <div className="info absolute left-0 top-full mt-2
                text-xs font-light text-white
                opacity-0 translate-x-10 -translate-y-5 transition-all duration-300 ease-out
                bg-black/80 px-3 py-2 rounded-md w-60">
              Canva is an easy-to-use design platform for creating graphics, presentations, and social media content quickly.
            </div>
          </div>
          <div className="item group relative flex flex-row gap-2">
            <img src="images/filmora.png" alt="" className="h-6 w-6" />
            <p className="text-white hover:text-emerald-300">Wondershare Filmora</p>
            <div className="info absolute left-0 top-full mt-2
                text-xs font-light text-white
                opacity-0 translate-x-10 -translate-y-5 transition-all duration-300 ease-out
                bg-black/80 px-3 py-2 rounded-md w-60">
              Wondershare Filmora is a user-friendly video editing software for creating polished videos with effects and transitions.
            </div>
          </div>
          <div className="item group relative flex flex-row gap-2">
            <img src="images/obs-studio.png" alt="" className="h-6 w-6" />
            <p className="text-white hover:text-emerald-300">OBS Studio</p>
            <div className="info absolute left-0 top-full mt-2
                text-xs font-light text-white
                opacity-0 translate-x-10 -translate-y-5 transition-all duration-300 ease-out
                bg-black/80 px-3 py-2 rounded-md w-60">
              OBS Studio is a free, open-source software used for screen recording and live streaming with real-time video and audio control.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Designing
