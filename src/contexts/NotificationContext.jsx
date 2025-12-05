// src/contexts/NotificationContext.jsx (File baru)

import React, { createContext, useState, useContext, useCallback } from 'react';
import Toast from '../components/Toast'; // Menggunakan komponen Toast yang sudah ada

// 1. Buat Konteks
const NotificationContext = createContext();

// 2. Buat Provider
export const NotificationProvider = ({ children }) => {
  const [toast, setToast] = useState({
    message: '',
    type: '', // success, error, info
    isVisible: false,
  });

  // Fungsi untuk menampilkan notifikasi
  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    setToast({ message, type, isVisible: true });

    // Sembunyikan setelah durasi tertentu
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, duration);
  }, []);

  return (
    <NotificationContext.Provider value={{ showToast }}>
      {children}
      {/* Komponen Toast di render di sini, di luar children */}
      {toast.isVisible && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(prev => ({ ...prev, isVisible: false }))} 
        />
      )}
    </NotificationContext.Provider>
  );
};

// 3. Buat Hook Kustom untuk memudahkan penggunaan
export const useNotification = () => {
  return useContext(NotificationContext);
};