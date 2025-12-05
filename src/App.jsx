// src/App.jsx (Kode yang diperbaiki)

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Lifestyle from './pages/Lifestyle';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Komponen Pembungkus untuk menentukan apakah akan menampilkan Navbar/Footer
// Sekarang menerima props isLoggedIn dan handleLogout
const Layout = ({ children, isLoggedIn, onLogout }) => {
  const location = useLocation();
  // Tentukan rute di mana Navbar dan Footer TIDAK boleh ditampilkan
  // Penting: Pastikan path NotFound sama dengan yang ada di Routes
  const noLayout = location.pathname === '/login' || location.pathname === '/404'; 

  return (
    <>
      {/* Jangan tampilkan Navbar untuk halaman login/404 */}
      {/* Sekarang Navbar menerima props isLoggedIn dan onLogout */}
      {!noLayout && <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />} 
      
      <main>
        {children}
      </main>

      {/* Jangan tampilkan Footer untuk halaman login/404 */}
      {!noLayout && <Footer />} 
    </>
  );
};

function App() {
  // Gunakan localStorage untuk menyimpan status login agar tidak hilang saat refresh
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true' ? true : false;
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  // Fungsi untuk menangani proses logout
  const handleLogout = () => {
    // Hapus token dan status dari localStorage
    localStorage.removeItem('authToken'); 
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    // Redirect ke halaman utama/login akan ditangani di Navbar.jsx
  };

  return (
    <Router>
      {/* Teruskan state dan handler ke Layout */}
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          
          {/* Rute Login: Teruskan onLogin */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> 

          {/* Rute Not Found: Penting untuk merender halaman 'kosong' jika ada error */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
