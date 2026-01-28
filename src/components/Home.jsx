import React from 'react'
import Lefttext from './Home/Lefttext'
import Rightimg from './Home/Rightimg'
import Buttons from './Home/Buttons'

const Home = ({id}) => {
  return (
    <section id={id} className='min-h-screen w-full px-20 py-5'>
      <div className="division flex flex-row justify-between gap-7 mt-20">
        <div className="left flex flex-col justify-center gap-5">
            <Lefttext />
            <Buttons />
        </div>
        <Rightimg />
      </div>
    </section>
  )
}

export default Home
