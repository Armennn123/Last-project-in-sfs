
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
    
  return (
    <div className="App">
    <Header/>
    <h1 className=' bg-gradient-to-r  from-black to-white-400'>HOME</h1>
    <div className=' flex flex-col justify-center items-center h-[450px] bg-gradient-to-r  from-black to-white-400'>
      <h1 className='text-4xl'>Добро пожаловать в наш сайт!</h1>
      <Link to={"/shop"} className='  mt-6 bg-gray-500  rounded-lg p-2'>Посмотреть все товары</Link>
      <a href='#addd' className= '  mt-2 bg-gray-500  rounded-lg p-2'>Посмотреть все товары</a>

    </div>
    <div id='addd'   className='agaa flex p-4  flex-col  items-center  bg-gradient-to-l  from-black to-white-400'>
      <h1 className='text-3xl'>Наши Приимущества!</h1>
      <div className='flex h-36 gap-[110px]'>
        <div className='h-28'>
          <img  className='h-[100%] rounded-2xl ' src='kchestvo.png'/>
          <h2>Качество!</h2>
        </div>
        <div className='h-28'>
          <img  className='h-[100%] rounded-2xl ' src='dostavka.png'/>
          <h2>Доставка!</h2>
        </div>
        <div className='h-28'>
          <img  className='h-[100%] rounded-2xl ' src='podderjka.png'/>
          <h2>Поддержка!</h2>
        </div>
      </div>
      
    </div>
     
    </div>
  );
}

export default App;
 
