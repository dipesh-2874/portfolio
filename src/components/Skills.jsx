import Webdev from './Skills/Webdev'
import Programming from './Skills/Programming'
import Designing from './Skills/Designing'
import Tools from './Skills/Tools'

const Skills = ({id}) => {
  return (
    <div>
      <section id={id} className='min-h-screen w-full px-6 md:px-12 lg:px-20 py-5 scroll-mt-20'>
        <p className="pro text-3xl md:text-4xl text-emerald-300 text-center font-extrabold">Skills</p>
        <div className='w-full grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
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
