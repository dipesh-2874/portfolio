import React from 'react'
import Exp1 from './Experience/Exp1'
import Exp2 from './Experience/Exp2'

const Experience = ({id}) => {
  return (
    <div>
      <section id={id} className='min-h-screen w-full px-6 md:px-12 lg:px-20 py-5 scroll-mt-20'>
        <p className="pro text-3xl md:text-4xl text-white text-center font-extrabold mt-5">Experience</p>
        <div className="exps flex flex-col items-center w-full mt-10 gap-10">
          <Exp2 />
          <Exp1 />
        </div>
      </section>
    </div>
  )
}

export default Experience
