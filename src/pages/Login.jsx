import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext'; // Import hook notifikasi

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useNotification(); // Panggil hook notifikasi
  
  // Ambil mode dari state, default ke 'login'
  const initialMode = location.state?.mode || 'login';

  const [mode, setMode] = useState(initialMode); // 'login' atau 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Pesan error di dalam form (opsional)

  // Sinkronisasi mode saat state navigasi berubah
  useEffect(() => {
    if (location.state?.mode) {
      setMode(location.state.mode);
      setError(null); 
    }
  }, [location.state?.mode]);

  // Fungsi yang MENSIMULASIKAN proses login/register
  const handleAuth = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // --- LOGIKA SIMULASI AUTENTIKASI (Hanya Simulasi) ---
    setTimeout(() => {
      setLoading(false);

      if (mode === 'login') {
        if (email && password) {
          const userData = {
            email: email,
            username: email.split('@')[0], 
            token: 'mock-auth-token-123',
          };

          // Simpan data user ke localStorage
          localStorage.setItem('user', JSON.stringify(userData));
          window.dispatchEvent(new Event('storage'));
          
          // Tampilkan notifikasi sukses login
          showToast(`Selamat datang, ${userData.username}!`, 'success'); 

          navigate('/'); // Redirect ke halaman utama

        } else {
          const errMsg = 'Email dan kata sandi harus diisi.';
          setError(errMsg);
          showToast(errMsg, 'error'); // Tampilkan notifikasi error
        }
      } else {
        if (username && email && password) {
          const successMsg = 'Pendaftaran berhasil! Silakan masuk.';
          setError(successMsg); 
          setMode('login'); 
          showToast(successMsg, 'success'); // Tampilkan notifikasi sukses register
        } else {
          const errMsg = 'Semua kolom harus diisi untuk mendaftar.';
          setError(errMsg);
          showToast(errMsg, 'error'); // Tampilkan notifikasi error
        }
      }
    }, 1500); 
    // --- AKHIR LOGIKA SIMULASI AUTENTIKASI ---
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {mode === 'login' ? 'Masuk ke Akun Anda' : 'Daftar Akun Baru'}
          </h2>
        </div>
        
        {/* Pesan Error/Sukses (Opsional: hanya tampilkan error non-Toast) */}
        {error && !error.includes('berhasil') && (
          <div className="p-3 text-sm rounded-md bg-red-100 text-red-700">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          {mode === 'register' && (
            <div>
              <label htmlFor="username" className="sr-only">Nama Pengguna</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Nama Pengguna"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="sr-only">Alamat Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Alamat Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Kata Sandi</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition duration-150"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memuat...
                </>
              ) : (
                mode === 'login' ? 'Masuk' : 'Daftar'
              )}
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          {mode === 'login' ? (
            <p>
              Belum punya akun?{' '}
              <button
                onClick={() => setMode('register')}
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
              >
                Daftar Sekarang
              </button>
            </p>
          ) : (
            <p>
              Sudah punya akun?{' '}
              <button
                onClick={() => setMode('login')}
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
              >
                Masuk
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
