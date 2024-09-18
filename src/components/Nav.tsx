import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-blue-900 px-4 py-3 shadow-md rounded-lg flex justify-center items-center w-full">
      <ul className="flex space-x-8 text-white font-semibold text-sm md:text-base">
        <li>
          <button
            className="hover:text-blue-400 transition-colors duration-300"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:text-blue-400 transition-colors duration-300"
            onClick={() => navigate('/about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="hover:text-blue-400 transition-colors duration-300"
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
