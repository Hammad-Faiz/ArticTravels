import './styles/navbar.css'
import artic from './images/Artic.png'

function Navbar(){
  return (
    <ul className='navbar'>
      <div className='company'>
        <div className='logo-image' ><img src={artic} alt='Artic Logo'></img></div>
        <div>Artic Travels</div>
      </div>

      <div className='nav-right'>
        <div className='help' href='/'>Help</div>
        <div className='trips' href='/'>Trips</div>
        <div className='login'>Login</div>
      </div>
      
    </ul>
  );
}

export default Navbar;

