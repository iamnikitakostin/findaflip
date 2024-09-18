import React from 'react';
import logo from '../assets/logo-black-transparent.png';

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white shadow-lg">
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-40 h-auto" />
      </div>

      <div className="flex flex-col md:flex-row items-center text-center md:text-left md:w-3/4">
        <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-4">
          <p className="text-4xl text-red-500 font-extrabold">!</p>
        </div>
        <div className="text-gray-600 text-sm md:text-base leading-relaxed">
          <p className="mb-2">
            The content on this website is for informational purposes only. Make sure to research the custom laws of a particular country before the transaction.
          </p>
          <p>
            Users should conduct their own research and consult with appropriate legal or financial professionals before engaging in any transactions.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
