import './styles/Navbar.css'
import artic from './images/Artic.png'

function Navbar(){
  return (
    <div className='navbar'>
      <div className='company'>
        <div className='logo-image' ><img src={artic} alt='Artic Logo'></img></div>
        <div className='logo-title'>Artic Travels</div>
      </div>

      <div className='nav-right'>
        <div className='help' href='/'>Help</div>
        <div className='trips' href='/'>Trips</div>
        <div className='login'>Login</div>
      </div>
    </div>
  );
}

export default Navbar;

