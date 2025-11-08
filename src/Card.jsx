import { Link } from 'react-router-dom'

function Card({title,img,price,id}) {
  return (
    <Link to={`${id}`} className=' w-[300px] p-5 rounded-sm shadow-lg '>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <span>{price}$</span>
    </Link>
  )
}

export default Card