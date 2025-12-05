// src/App.jsx
import React, { useState, useCallback } from 'react'; // Tambahkan useState dan useCallback
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Lifestyle from './pages/Lifestyle';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Toast from './components/Toast'; // Import komponen Toast

function App() {
  const [toast, setToast] = useState({
    message: '',
    type: 'info', // success, error, info
    isVisible: false,
  });

  // Fungsi yang akan dipanggil untuk menampilkan Toast
  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type, isVisible: true });
    // Atur toast agar hilang setelah 5 detik
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  }, []);

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        
        {/* Navbar akan muncul di semua halaman */}
        <Navbar />

        <div className="pt-0"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            {/* Loloskan fungsi showToast sebagai prop ke Login */}
            <Route path="/login" element={<Login showToast={showToast} />} /> 

            {/* Halaman Error */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
        {/* Render Toast secara global di posisi bottom-left */}
        <Toast 
          message={toast.message} 
          type={toast.type} 
          isVisible={toast.isVisible} 
          onClose={closeToast} 
        />
        
      </div>
    </Router>
  );
}

export default App;
