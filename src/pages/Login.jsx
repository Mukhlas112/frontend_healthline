import React, { useState, useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile
  
  // Fungsi utilitas untuk mengambil data user dari localStorage
  const getUserData = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  const [user, setUser] = useState(getUserData());
  const isLoggedIn = !!user; // Cek status login
  const USERNAME_PLACEHOLDER = user?.username || user?.email || "Pengguna";

  // State dan Ref untuk Dropdown Pengguna
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const dropdownRef = useRef(null); // Ref untuk mendeteksi klik di luar area dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // --- LOGIKA UTAMA: Menutup dropdown saat klik di luar (UX Improvement) ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // --- LOGIKA BARU: Sinkronisasi Status Login dengan localStorage (PENTING) ---
  useEffect(() => {
    const handleStorageChange = () => {
      // Ketika localStorage 'user' berubah (misalnya setelah login/logout di halaman lain)
      setUser(getUserData()); 
    };
    
    // Tambahkan event listener untuk mendengarkan perubahan pada window storage
    window.addEventListener('storage', handleStorageChange);
    
    // Bersihkan listener saat komponen dilepas
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  // --------------------------------------------------------

  const handleLogout = () => {
    localStorage.removeItem('user'); // Hapus dari localStorage
    setUser(null); // Update state (ini akan memicu re-render)
    // PENTING: Panggil event 'storage' secara manual agar komponen lain (jika ada) ikut terupdate
    window.dispatchEvent(new Event('storage')); 
    setIsDropdownOpen(false); 
  };
  
  // Mengambil inisial nama
  const getInitials = (name) => {
    if (!name) return 'U'; 
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Fungsi untuk menutup menu mobile saat navigasi
  const handleLinkClick = () => {
    toggleMenu();
  };


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

          {/* === BAGIAN AUTENTIKASI (Desktop) === */}
          <div className="hidden md:flex items-center space-x-4 relative" ref={dropdownRef}> 
            
            {!isLoggedIn ? (
              // Tampilan JIKA BELUM LOGIN
              <>
                <Link 
                  to="/login" 
                  state={{ mode: 'login' }} 
                  className="text-gray-600 hover:text-blue-600 font-medium transition px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  Masuk
                </Link>

                <Link 
                  to="/login" 
                  state={{ mode: 'register' }} 
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50 transition-all duration-300CXCc transform hover:-translate-y-0.5"
                >
                  Daftar Sekarang
                </Link>
              </>
            ) : (
              // Tampilan JIKA SUDAH LOGIN
              <>
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  aria-label="User menu"
                  aria-expanded={isDropdownOpen}
                >
                  {getInitials(USERNAME_PLACEHOLDER)} 
                </button>

                {/* Dropdown Menu Pengguna */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-1 ring-1 ring-black ring-opacity-5 z-50 origin-top-right transition-transform duration-150 ease-out scale-100">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100 font-semibold truncate">
                      {USERNAME_PLACEHOLDER}
                    </div>
                    <button 
                      onClick={handleLogout} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition duration-150"
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Menu Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* Konten Menu Mobile (Conditional Rendering) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          
          {/* Menu Links Mobile */}
          <Link to="/" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
            Beranda
          </Link>
          <Link to="/tips" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
            Tips Sehat
          </Link>
          <Link to="/lifestyle" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
            Lifestyle
          </Link>

          {/* Bagian Autentikasi Mobile - Conditional Rendering */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            {!isLoggedIn ? (
              // Mobile view JIKA BELUM LOGIN
              <>
                <Link 
                  to="/login" 
                  state={{ mode: 'login' }} 
                  onClick={handleLinkClick}
                  className="block w-full text-center px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 transition duration-300 rounded-md hover:bg-blue-50"
                >
                  Masuk
                </Link>
                <Link 
                  to="/login" 
                  state={{ mode: 'register' }} 
                  onClick={handleLinkClick}
                  className="block w-full text-center px-4 py-2.5 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md shadow-blue-600/30"
                >
                  Daftar Sekarang
                </Link>
              </>
            ) : (
              // Mobile view JIKA SUDAH LOGIN
              <>
                <div className="px-4 py-2 text-base font-semibold text-gray-800 border-b border-gray-100">
                  Selamat datang, {USERNAME_PLACEHOLDER}!
                </div>
                <button 
                  onClick={handleLogout} 
                  className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-red-500 hover:bg-red-600 transition duration-300 rounded-md"
                >
                  Keluar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
