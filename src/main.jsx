import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NotificationProvider } from './contexts/NotificationContext'; // Import Provider BARU

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bungkus Aplikasi dengan Provider Notifikasi */}
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
)
