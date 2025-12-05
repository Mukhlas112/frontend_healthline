// src/App.jsx

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
const Layout = ({ children }) => {
  const location = useLocation();
  // Tentukan rute di mana Navbar dan Footer TIDAK boleh ditampilkan
  // Misalnya, untuk halaman Login dan Not Found
  const noLayout = location.pathname === '/login' || location.pathname === '/404';

  return (
    <>
      {/* Jangan tampilkan Navbar untuk halaman login/404 */}
      {!noLayout && <Navbar />} 
      
      <main>
        {children}
      </main>

      {/* Jangan tampilkan Footer untuk halaman login/404 */}
      {!noLayout && <Footer />} 
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kelola state login
  
  // Fungsi untuk menangani proses logout
  const handleLogout = () => {
    // Lakukan pembersihan token atau sesi di sini
    setIsLoggedIn(false);
    // Setelah logout, arahkan pengguna ke halaman utama atau login
    // Catatan: Redirect pasca-logout harus dilakukan di komponen yang memicu logout (e.g., Navbar/Login/etc.) 
    // menggunakan useNavigate() dari react-router-dom.
    // Untuk App.jsx, kita hanya mengubah state.
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          
          {/* Tambahkan logika untuk meneruskan state dan fungsi login/logout ke Login */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> 

          {/* Rute Not Found harus selalu ada sebagai rute terakhir */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
