import React from 'react'
import Exp1 from './Experience/Exp1'
import Exp2 from './Experience/Exp2'

const Experience = ({id}) => {
  return (
    <div>
      <section id={id} className='min-h-screen w-full px-20 py-5'>
        <p className="pro text-4xl text-white text-center font-extrabold mt-25">Experience</p>
        <div className="exps flex flex-col items-center justify-center w-full ml-20 mt-10 gap-10">
          <Exp2 />
          <Exp1 />
        </div>
      </section>
    </div>
  )
}

export default Experience
