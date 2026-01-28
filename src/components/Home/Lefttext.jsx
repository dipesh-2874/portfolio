import useScrambleText from './useScrambleText';

const Lefttext = () => {
  const scrambleRef = useScrambleText("Dipesh Das", 50);

  return (
    <div className='flex flex-col gap-1'>
        <h1 className='text-6xl font-extrabold text-emerald-300'>WELCOME</h1>
        <h2 className='text-2xl text-white font-semibold'>MYSELF</h2>
        <h2 ref={scrambleRef} className='text-8xl w-fit text-white font-extrabold mt-1'>Dipesh Das</h2>
        <h2 className='flex flex-row items-center px-1 py-0.5 bg-emerald-300 font-bold w-95'>an Undergraduate Enineering Student...<div id="box" className='bg-zinc-950 w-1.5'></div></h2>
        <p className='text-white text-sm w-180 mt-4'>Passionate about Development and CyberSecurity. I'm a Computer Science undergraduate at JGEC, graduating in 2028. I thrive on solving complex problems and love applying creative thinking to tackle real-world challenges in tech. Exploring the world of backend development. I'm always eager to learn, experiment, and grow. Whether it's cracking CTFs, or building innovative projects, I enjoy pushing my boundaries and collaborating with like-minded people.</p>
    </div>
  )
}

export default Lefttext
