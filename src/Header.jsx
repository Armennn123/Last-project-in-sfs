
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-around p-7 bg-gradient-to-r  from-orange-500 to-blue-400'>
        <div>
            <Link to={'/'}>Logo</Link>
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