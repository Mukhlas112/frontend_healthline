import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigasi

const Login = () => {
  // Catatan: Saat ini menggunakan alert() untuk notifikasi. 
  // Untuk aplikasi sungguhan, gunakan komponen modal/toastify yang lebih baik.
  
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // 1. State untuk menyimpan data input
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: ''
  });
  
  const [loading, setLoading] = useState(false);

  // 2. Fungsi saat user mengetik
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Fungsi saat tombol ditekan (Kirim ke Backend)
  const handleAuth = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    const endpoint = isLogin 
      ? 'http://localhost:5000/api/users/login' 
      : 'http://localhost:5000/api/users/register';

    try {
      const payload = isLogin 
        ? { email: formData.email, password: formData.password } // Login hanya butuh email & pass
        : formData; // Register butuh semua

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
          // LOGIKA SETELAH LOGIN SUKSES
          // Simpan data user ke localStorage (ini agar user tetap login walau refresh)
          localStorage.setItem('user', JSON.stringify(data.data)); 
          alert(`Login Berhasil! Selamat datang ${data.data.username}`);
          navigate('/'); // Pindah ke Halaman Utama
        } else {
          // LOGIKA SETELAH REGISTER SUKSES
          alert('Registrasi Berhasil! Silakan Masuk.');
          setIsLogin(true); // Pindah ke mode Login
          setFormData({ username: '', email: '', password: '' }); // Reset form
        }
      } else {
        // Gagal (Status 400, 401, 500 dari backend)
        alert('Gagal: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan koneksi ke server. Pastikan Backend Anda berjalan di Port 5000.');
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

          {/* Form */}
          <form className="space-y-6" onSubmit={handleAuth}>
            
            {/* Input Nama (Hanya muncul saat Daftar) */}
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

            {/* Input Email */}
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

            {/* Input Password */}
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

            {/* Lupa Password (Hanya saat Login) */}
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Lupa password?
                </a>
              </div>
            )}

            {/* Tombol Aksi */}
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
                : isLogin ? 'Masuk Sekarang' : 'Daftar Gratis'}
            </button>
          </form>

          {/* Switch Login/Register */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'} 
              <button 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({ username: '', email: '', password: '' }); // Reset form saat ganti mode
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