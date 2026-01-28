import './exp.css'

const Exp1 = () => {
  return (
    <div className='w-full flex flex-col'>
      <div class="experience-2 w-full px-30 flex flex-row justify-between items-center text-white">
        <img src="images/exp1img.png" alt="" className="exp1img w-15 rounded-full duration-300 ease-in-out"/>
        <div class="exp2content w-200">
            <div className="typing-wrap flex flex-row items-center gap-2">
                <box-icon color="#03fac0" name="user-voice" className="h-8 w-8"></box-icon>
                <h3 className="laptop flex flex-row items-center text-2xl text-emerald-300 font-extrabold">
                    Single Point of Contact
                    <div className="blink-box"></div>
                </h3>
            </div>
            <h4 className='text-lg ml-10'><a target="_blank" href="https://jgec.ac.in/"><b>JGEC</b></a> | <em>Aug 2025 - present</em></h4>
            <h5 className='ml-10'>Working on <span>real-world projects</span> under industry mentorship, <span>gaining practical experience</span> in software development and innovation.</h5>
        </div>
        <div>
            {/* blank for alignment */}
        </div>
      </div>
      <div className="par border-r-2 w-81 h-25 -translate-y-20 border-emerald-300"></div>
      <div class="experience-2 -translate-y-20 w-full px-30 flex flex-row justify-between items-center text-white">
        <img src="" alt="" className="w-15 rounded-full"/>
        <div class="exp2content w-200">
            <div className="typing-wrap flex flex-row items-center gap-2">
                <box-icon color="#03fac0" name="user-voice" className="h-8 w-8"></box-icon>
                <h3 className="laptop flex flex-row items-center text-2xl text-emerald-300 font-extrabold">
                    Training and Placement Coordinator
                    <div className="blink-box"></div>
                </h3>
            </div>
            <h4 className='text-lg ml-10'><a target="_blank" href="https://jgec.ac.in/"><b>JGEC</b></a> | <em>Nov 2024 - present</em></h4>
            <h5 className='ml-10'>Working on <span>real-world projects</span> under industry mentorship, <span>gaining practical experience</span> in software development and innovation.</h5>
        </div>
        <div>
            {/* blank for alignment */}
        </div>
      </div>
    </div>
  )
}

export default Exp1
