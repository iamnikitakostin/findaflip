import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-900 p-4 shadow-md">
      <ul className="flex justify-center space-x-6 text-white font-medium">
        <li>
          <button 
            className="hover:text-blue-300 transition-colors duration-300"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            className="hover:text-blue-300 transition-colors duration-300"
            onClick={() => navigate('/about')}
          >
            About
          </button>
        </li>
        <li>
          <button 
            className="hover:text-blue-300 transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
