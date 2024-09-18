import logo from '../assets/logo-black-transparent.png';
import Nav from './Nav';

function Header() {
  return (
    <header className="bg-white shadow-lg rounded-lg px-6 flex flex-col items-center justify-between">
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-48 h-auto" />
      </div>
      
      <div className="w-full">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
