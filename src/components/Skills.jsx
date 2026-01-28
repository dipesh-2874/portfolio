import Webdev from './Skills/Webdev'
import Programming from './Skills/Programming'
import Designing from './Skills/Designing'
import Tools from './Skills/Tools'

const Skills = ({id}) => {
  return (
    <div>
      <section id={id} className='min-h-screen w-full px-20 py-5'>
        <p className="pro text-4xl text-emerald-300 text-center font-extrabold mt-25">Skills</p>
        <div className='w-full flex flex-wrap gap-5 mt-12'>
            <Webdev />
            <Programming />
            <Designing />
            <Tools />
        </div>
      </section>
    </div>
  )
}

export default Skills
