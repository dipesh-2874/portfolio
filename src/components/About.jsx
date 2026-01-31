import Leftimg from "./About/Leftimg"
import Righttext from "./About/Righttext"


const About = ({id}) => {
  return (
    <section id={id} className='flex flex-col justify-center items-center min-h-screen w-full px-6 md:px-12 lg:px-20 py-5 scroll-mt-20'>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <Leftimg />
        <Righttext />
      </div>
    </section>
  )
}

export default About
