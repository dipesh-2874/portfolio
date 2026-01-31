import './Education/edu.css'
const Education = ({id}) => {
  return (
    <div>
      <section id={id} className='min-h-screen w-full px-6 md:px-12 lg:px-20 py-5 flex flex-col items-center justify-center scroll-mt-20'>
        <p className="pro text-4xl text-emerald-300 text-center font-extrabold z-100">My Education</p>
        <div className="relative xxp w-full h-30 flex items-center justify-center bg-zinc-950 -translate-y-20">
            <div className="xx1 h-30 w-1/2 rounded-full"></div>
            <div className="absolute w-full h-30 bg-zinc-950 z-90"></div>
        </div>
        <div className="yp flex flex-row w-full justify-center items-center">
            <div className="y1 hidden md:flex"></div>
            <div className="roller text-white -translate-y-20">
                <div className="grouping">
                    <div className="d">
                        <div className="content1 h-11/12 flex flex-col items-center justify-center gap-2 px-5 text-center">
                            <img src="images/education.png" className="h-14 w-14" alt="" />
                            <h3 className='text-emerald-300 md:text-lg text-md font-bold'>B.Tech in Computer Science and Engineering (2024-2028)</h3>
                            <p className='text-sm md:text-md'>Currently pursuing <b>Bachelor of Technology</b> in CSE from <b>Jalpaiguri Government Engineering College</b>, with <b>8.64 YGPA</b> till now.</p>
                        </div>
                    </div>
                    <div className="d">
                        <div className="content2 h-11/12 flex flex-col items-center justify-center gap-2 px-5 text-center">
                            <img src="images/education.png" className="h-14 w-14" alt="" />
                            <h3 className='text-emerald-300 md:text-lg text-md font-bold'>Higher Secondary Examination in 2023</h3>
                            <p className='text-sm md:text-md'>Passed the <b>Higher Secondary examination</b> from <b>Ramakrishna Mission Vidyabhavan(H.S.)</b> affiliated to <b>West Bengal Council of Higher Secondary Education</b> with <b>91.8% marks</b></p>
                        </div>
                    </div>
                    <div className="d">
                        <div className="content3 h-11/12 flex flex-col items-center justify-center gap-2 px-5 text-center">
                            <img src="images/education.png" className="h-14 w-14" alt="" />
                            <h3 className='text-emerald-300 md:text-lg text-md font-bold'>Secondary Examination in 2021</h3>
                            <p className='text-sm md:text-md'>Passed the <b>Secondary examination</b> from <b>Ramakrishna Mission Vidyabhavan(H.S.)</b> affiliated to <b>West Bengal Board of Secondary Education</b> with <b>90.14% marks</b></p>
                        </div>
                    </div>
                </div>
                <div aria-hidden className="grouping">
                    <div className="d">
                        <div className="content h-11/12 flex flex-col items-center justify-center gap-2 px-5 text-center">
                            <img src="images/education.png" className="h-14 w-14" alt="" />
                            <h3 className='text-emerald-300 md:text-lg text-md font-bold'>B.Tech in Computer Science and Engineering (2024-2028)</h3>
                            <p className='text-sm md:text-md'>Currently pursuing <b>Bachelor of Technology</b> in CSE from <b>Jalpaiguri Government Engineering College</b>, with <b>8.64 YGPA</b> till now.</p>
                        </div>
                    </div>
                    <div className="d">
                        <div className="content h-11/12 flex flex-col items-center justify-center gap-2 px-5 text-center">
                            <img src="images/education.png" className="h-14 w-14" alt="" />
                            <h3 className='text-emerald-300 md:text-lg text-md font-bold'>Higher Secondary Examination in 2023</h3>
                            <p className='text-sm md:text-md'>Passed the <b>Higher Secondary examination</b> from <b>Ramakrishna Mission Vidyabhavan(H.S.)</b> affiliated to <b>West Bengal Council of Higher Secondary Education</b> with <b>91.8% marks</b></p>
                        </div>
                    </div>
                    <div className="d">
                        <div className="content h-11/12 flex flex-col items-center justify-center gap-2 px-5 text-center">
                            <img src="images/education.png" className="h-14 w-14" alt="" />
                            <h3 className='text-emerald-300 md:text-lg text-md font-bold'>Secondary Examination in 2021</h3>
                            <p className='text-sm md:text-md'>Passed the <b>Secondary examination</b> from <b>Ramakrishna Mission Vidyabhavan(H.S.)</b> affiliated to <b>West Bengal Board of Secondary Education</b> with <b>90.14% marks</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="y2 hidden md:flex"></div>
        </div>
        <div className="relative xxp w-full h-30 flex items-center justify-center bg-zinc-950 -translate-y-20">
            <div className="xx2 h-30 w-1/2 rounded-full"></div>
            <div className="absolute w-full h-30 bg-zinc-950 z-90"></div>
        </div>
      </section>
    </div>
  )
}

export default Education
