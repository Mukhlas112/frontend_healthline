// src/pages/NotFound.jsx (Contoh)
import React from 'react';

const NotFound = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Halaman tidak ditemukan. Anda mungkin baru saja logout atau rute salah.</p>
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default NotFound;
