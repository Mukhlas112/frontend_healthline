// src/components/Toast.jsx (Diperbaiki)

import React from 'react';

const Toast = ({ message, type, isVisible, onClose }) => {
  // PENTING: Toast sekarang hanya merender jika isVisible=true (dikelola oleh Context)
  if (!isVisible) return null;

  // Mendefinisikan gaya berdasarkan tipe notifikasi
  const typeStyles = {
    success: 'bg-green-500 border-green-700',
    error: 'bg-red-500 border-red-700',
    info: 'bg-blue-500 border-blue-700',
  };

  const currentStyles = typeStyles[type] || typeStyles.info;

  return (
    // Posisi di KANAN BAWAH: fixed, bottom-5, right-5
    <div className={`fixed bottom-5 right-5 z-[100] w-full max-w-xs transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div className={`shadow-xl rounded-lg border-l-4 ${currentStyles} text-white p-4 flex justify-between items-center`}>
        <p className="text-sm font-medium">{message}</p>
        <button 
          onClick={onClose} 
          className="ml-4 -mr-1 rounded-full p-1 hover:bg-white/20 transition-colors"
          aria-label="Tutup notifikasi"
        >
          {/* Ikon Silang (X) */}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
