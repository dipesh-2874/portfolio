import './exp.css'

const Exp1 = () => {
  return (
    <div className='relative w-full flex flex-col'>
      <div className="experience-2 w-full px-4 md:px-10 lg:px-30 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center text-white">
        <img src="images/exp1img.png" alt="" className="exp1img w-15 rounded-full duration-300 ease-in-out"/>
        <div className="exp2content w-full max-w-3xl">
            <div className="typing-wrap flex flex-row items-center gap-2">
                <box-icon color="#03fac0" name="user-voice" className="h-8 w-8"></box-icon>
                <h3 className="laptop flex flex-row items-center text-2xl text-emerald-300 font-extrabold">
                    Single Point of Contact
                    <div className="blink-box"></div>
                </h3>
            </div>
            <h4 className='md:text-lg text-xs md:ml-10'><a target="_blank" href="https://jgec.ac.in/"><b>JGEC</b></a> | <em>Aug 2025 - present</em></h4>
            <h5 className='md:text-lg text-xs md:ml-10'>Working on <span>real-world projects</span> under industry mentorship, <span>gaining practical experience</span> in software development and innovation.</h5>
        </div>
        <div className="all">
            {/* blank for alignment */}
        </div>
      </div>
      <div className="experience-2 w-full px-4 md:px-10 lg:px-30 flex md:flex-row gap-6 md:gap-10 items-start md:items-center">
        <div className="all w-15">
            {/* blank for alignment */}
        </div>
        <div className='px-3 w-1/2'>
            <div className="timeline-line"></div>
        </div>
        <div className="all"> 
            {/* blank for alignment */}
        </div>   
      </div>
      <div className="experience-2 w-full px-4 md:px-10 lg:px-30 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center text-white">
        <img src="" alt="" className="all w-15 rounded-full"/>
        <div class="exp2content w-full max-w-3xl">
            <div className="typing-wrap flex flex-row items-center gap-2">
                <box-icon color="#03fac0" name="user-voice" className="h-8 w-8"></box-icon>
                <h3 className="laptop flex flex-row items-center text-2xl text-emerald-300 font-extrabold">
                    Training and Placement Coordinator
                    <div className="blink-box"></div>
                </h3>
            </div>
            <h4 className='md:text-lg text-xs md:ml-10'><a target="_blank" href="https://jgec.ac.in/"><b>JGEC</b></a> | <em>Nov 2024 - present</em></h4>
            <h5 className='md:text-lg text-xs md:ml-10'>Working on <span>real-world projects</span> under industry mentorship, <span>gaining practical experience</span> in software development and innovation.</h5>
        </div>
        <div className="all">
            {/* blank for alignment */}
        </div>
      </div>
    </div>
  )
}

export default Exp1
