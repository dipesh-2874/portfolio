import './card.css'

const Card = (props) => {
  return (
    <div className="card h-120 p-5 bg-zinc-950 flex flex-col items-center justify-between">
        <div className="content flex flex-col gap-3">
            <img src={props.image} className="img rounded-lg w-full" alt="" />
            <div style={{width: `${props.pname.length+1}ch`}} className='ml-2'>
                <p className="nam text-lg font-bold text-emerald-300" >{props.pname}</p>
            </div>
            <p className='px-2 text-xs text-white'>{props.text}</p>
            <p className='px-2 text-xs font-semibold text-white'><span className='text-emerald-300'>Technologies : </span>{props.techs}</p>
        </div>
        <div className="btns flex flex-row justify-between w-full px-3">
            <a target="_blank" href={props.github} className="github px-3 py-1 w-fit border-2 border-emerald-300 text-emerald-300 rounded-full duration-300 ease-in-out">GitHub</a>
            <a target="_blank" href={props.mvp} className="mvp px-3 py-1 w-fit border-0 bg-emerald-300 font-bold rounded-full duration-300 ease-in-out">Launch</a>
        </div>
    </div>
  )
}

export default Card
