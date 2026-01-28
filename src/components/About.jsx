import Leftimg from "./About/Leftimg"
import Righttext from "./About/Righttext"


const About = ({id}) => {
  return (
    <section id={id} className='flex flex-col justify-center items-center min-h-screen w-full px-20 py-5'>
      <div className="flex flex-row justify-between gap-7 mt-20">
        <Leftimg />
        <Righttext />
      </div>
    </section>
  )
}

export default About
