import React, { useState } from 'react'; // Tambahkan 'useState'
import { Link } from 'react-router-dom';

const Navbar = () => {
  // 1. Tambahkan state untuk mengelola status menu mobile
  const [isOpen, setIsOpen] = useState(false); 
  
  // Fungsi untuk mengubah status menu
  const toggleMenu = () => setIsOpen(!isOpen); 

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0Ql flex items-center cursor-pointer">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
              HealthLine<span className="text-gray-800">.id</span>
            </span>
          </Link>

          {/* Menu Tengah (Desktop) */}
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

          {/* Tombol Login/Daftar (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Tombol Masuk: Mengirim state mode 'login' */}
            <Link 
              to="/login" 
              state={{ mode: 'login' }} 
              className="text-gray-600 hover:text-blue-600 font-medium transition px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Masuk
            </Link>

            {/* Tombol Daftar: Mengirim state mode 'register' */}
            <Link 
              to="/login" 
              state={{ mode: 'register' }} 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50 transition-all duration-300CXCc transform hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Menu Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} // 2. Tambahkan onClick handler
              className="text-gray-600 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* 3. Ganti ikon berdasarkan state menu */}
                {isOpen ? (
                  // Close X icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* 4. Konten Menu Mobile (Muncul hanya jika isOpen true dan di layar mobile/tablet) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Menu Links Mobile */}
          <Link 
            to="/" 
            onClick={toggleMenu} // Tutup menu saat link diklik
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Beranda
          </Link>
          <Link 
            to="/tips" 
            onClick={toggleMenu} 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Tips Sehat
          </Link>
          <Link 
            to="/lifestyle" 
            onClick={toggleMenu} 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
          >
            Lifestyle
          </Link>

          {/* Login/Daftar Buttons for Mobile */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <Link 
              to="/login" 
              state={{ mode: 'login' }} 
              onClick={toggleMenu}
              className="block w-full text-center px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 transition duration-300 rounded-md hover:bg-blue-50"
            >
              Masuk
            </Link>
            <Link 
              to="/login" 
              state={{ mode: 'register' }} 
              onClick={toggleMenu}
              className="block w-full text-center px-4 py-2.5 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md shadow-blue-600/30"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
