
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex text-white justify-around p-7 bg-black'>
        <div>
            <Link className='' to={'/'}>Logo</Link>
        </div>
        <nav>
            <ul className='flex gap-8'>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={'/shop'}>Shop</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header