import React from 'react'
import Lefttext from './Home/Lefttext'
import Rightimg from './Home/Rightimg'
import Buttons from './Home/Buttons'

const Home = ({ id }) => {
  return (
    <section id={id} className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-5">
      <div className="division flex flex-col lg:flex-row items-center justify-between gap-10 mt-20">
        <div className="order-1 lg:order-1 flex flex-col gap-5">
          <Lefttext />
          <Buttons />
        </div>
        <div className="order-2 lg:order-2">
          <Rightimg />
        </div>
      </div>
    </section>
  );
};

export default Home
