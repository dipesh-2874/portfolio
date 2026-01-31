import './exp.css'

const Exp2 = () => {
  return (
    <div class="experience-2 w-full px-4 md:px-10 lg:px-30 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center text-white">
        <img src="images/exp2img.png" alt="" className="exp2img w-12 h-12 md:w-15 md:h-15 rounded-full duration-300 ease-in-out"/>
        <div class="exp2content w-full max-w-3xl">
            <div className="typing-wrap flex flex-row items-center gap-2">
                <box-icon color="#03fac0" name="laptop"></box-icon>
                <h3 className="laptop flex flex-row items-center text-2xl text-emerald-300 font-extrabold">
                    Software and Innovation Intern
                    <div className="blink-box"></div>
                </h3>
            </div>
            <h4 className='md:text-lg text-xs md:ml-10'><a target="_blank" href="https://www.linkedin.com/company/ak-infratech/"><b>AK Infratech</b></a> | <em>June 2025 - July 2025</em></h4>
            <h5 className='md:text-lg text-xs md:ml-10'>Working on <span>real-world projects</span> under industry mentorship, <span>gaining practical experience</span> in software development and innovation.</h5>
        </div>
        <div>
            {/* blank for alignment */}
        </div>
    </div>
  )
}

export default Exp2
