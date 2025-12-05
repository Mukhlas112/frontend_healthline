import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  
  // State Login/Register
  // Default true (Login), tapi jika tidak ada state. Jika ada state 'register', jadi false.
  const [isLogin, setIsLogin] = useState(true);

  // EFECT BARU: Otomatis ganti mode berdasarkan tombol yang diklik di Navbar
  useEffect(() => {
    if (location.state?.mode === 'register') {
      setIsLogin(false);
    } else if (location.state?.mode === 'login') {
      setIsLogin(true);
    }
    // Reset form saat mode berubah
    setFormData({ username: '', email: '', password: '' });
  }, [location.state]);

  // State Form
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Logika Autentikasi (Backend)
  const handleAuth = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    const endpoint = isLogin 
      ? 'https://backend-healthline.vercel.app/api/users/login' 
      : 'https://backend-healthline.vercel.app/api/users/register';

    try {
      const payload = isLogin 
        ? { email: formData.email, password: formData.password } 
        : formData; 

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          // LOGIKA LOGIN SUKSES
          // Simpan data user ke localStorage
          // Pastikan struktur data sesuai dengan respons backend
          const userData = data.data || data; // Fallback jika data ada di root
          localStorage.setItem('user', JSON.stringify(userData)); 
          
          // Perbaikan: Gunakan optional chaining (?.) dan fallback value
          const username = userData.username || userData.email || 'Pengguna';
          alert('Login Berhasil! Selamat datang ${username}');
          
          navigate('/'); 
        } else {
          // LOGIKA REGISTER SUKSES
          alert('Registrasi Berhasil! Silakan Masuk.');
          setIsLogin(true); 
          setFormData({ username: '', email: '', password: '' }); 
        }
      } else {
        alert('Gagal: ' + (data.message || 'Terjadi kesalahan'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan koneksi ke server. Pastikan Backend berjalan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      {/* BAGIAN KIRI: Formulir */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              {isLogin ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin 
                ? 'Masuk untuk mengakses tips kesehatan personal Anda.' 
                : 'Bergabunglah bersama ribuan pengguna hidup sehat lainnya.'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleAuth}>
            
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input 
                  type="text" 
                  name="username" 
                  value={formData.username}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Contoh: budisentosa"
                  disabled={loading}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="nama@email.com"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Lupa password?
                </a>
              </div>
            )}

            <button 
              type="submit" 
              className={`w-full text-white font-bold py-3.5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 shadow-blue-600/30'
              }`}
              disabled={loading}
            >
              {loading 
                ? 'Memproses...' 
                : isLogin ? 'Masuk Sekarang' : 'Daftar'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} 
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({ username: '', email: '', password: '' });
                }} 
                className="ml-2 font-bold text-blue-600 hover:text-blue-500"
                disabled={loading}
              >
                {isLogin ? 'Daftar di sini' : 'Masuk di sini'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* BAGIAN KANAN: Gambar / Dekorasi */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 opacity-90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Health Lifestyle" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-white px-10 text-center max-w-lg">
          <h2 className="text-4xl font-bold mb-6">"Kesehatan adalah investasi terbaik untuk masa depan Anda."</h2>
          <p className="text-blue-100 text-lg">Bergabunglah dengan HealthLine.id dan mulai perjalanan hidup sehat Anda hari ini.</p>
        </div>
      </div>

    </div>
  );
};

export default Login;


