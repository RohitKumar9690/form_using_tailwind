import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import icons from Heroicons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <a herf="/" className="text-2xl font-bold">
            <span className="text-yellow-500">My</span>Site
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a herf="/" className="hover:text-gray-300">Home</a>
          <a herf="/about" className="hover:text-gray-300">About</a>
          <a herf="/services" className="hover:text-gray-300">Services</a>
          <a herf="/contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
