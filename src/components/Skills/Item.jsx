import './skill.css'

const Item = (props) => {
  return (
    <div className="item group relative flex flex-row gap-2">
        <box-icon name={props.imgname} type='logo' color="#ffffff"></box-icon>
        <p className="text-white hover:text-emerald-300">{props.sname}</p>
        <div className="info absolute left-0 top-full mt-2
            text-xs font-light text-white
            opacity-0 translate-x-10 -translate-y-5 transition-all duration-300 ease-out
            bg-black/80 px-3 py-2 rounded-md w-60">
          {props.text}
        </div>
    </div>
  )
}

export default Item
