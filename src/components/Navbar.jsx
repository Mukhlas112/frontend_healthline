import React from 'react';
import { Link } from 'react-router-dom'; // Import Link agar halaman tidak refresh saat diklik

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
              HealthLine<span className="text-gray-800">.id</span>
            </span>
          </Link>

          {/* Menu Tengah */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">
              Beranda
            </Link>
            <Link to="/tips" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">
              Tips Sehat
            </Link>
            <Link to="/lifestyle" className="text-gray-600 hover:text-blue-600 font-medium transition duration-300">
              Lifestyle
            </Link>
          </div>

          {/* Tombol Kanan */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition">
              Masuk
            </Link>
            <Link to="/login" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50 transition-all duration-300 transform hover:-translate-y-0.5">
              Daftar Sekarang
            </Link>
          </div>

          {/* Menu Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;