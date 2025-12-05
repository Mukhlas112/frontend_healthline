import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Lifestyle from './pages/Lifestyle';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; // Kita import halaman error yang baru dibuat

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        {/* Navbar akan muncul di semua halaman */}
        <Navbar />

        <div className="pt-0"> 
          <Routes>
            {/* Daftar Halaman Resmi */}
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/login" element={<Login />} />

            {/* Halaman Error (Tanda * berarti menangkap semua halaman yg tidak dikenal) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;