import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION: Bagian Utama Penarik Perhatian */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Kolom Kiri: Teks Copywriting */}
            <div className="text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                #1 Platform Kesehatan Digital
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Hidup Sehat Dimulai dari <span className="text-blue-600">Langkah Kecil.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Dapatkan akses ke ribuan artikel kesehatan terpercaya, tips gaya hidup, dan panduan nutrisi langsung dari ahlinya.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/tips" className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1">
                  Mulai Baca Tips
                </Link>
                <Link to="/lifestyle" className="bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all">
                  Lihat Lifestyle
                </Link>
              </div>
            </div>

            {/* Kolom Kanan: Gambar Ilustrasi */}
            <div className="relative">
              {/* Lingkaran dekorasi di belakang gambar */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Dokter dan Pasien" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
              />
              
              {/* Kartu Floating Kecil (Aksesoris) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status Kesehatan</p>
                    <p className="font-bold text-gray-900">Sangat Baik</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION: Mengapa Memilih Kami */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h2>
            <p className="text-gray-600">Kami menyederhanakan informasi medis yang rumit menjadi tips praktis yang mudah Anda terapkan sehari-hari.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artikel Terverifikasi</h3>
              <p className="text-gray-600">Semua artikel ditulis dan ditinjau oleh tenaga medis profesional untuk memastikan keakuratan.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tips Gaya Hidup</h3>
              <p className="text-gray-600">Panduan praktis untuk diet, olahraga, dan kesehatan mental yang bisa Anda lakukan di rumah.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Komunitas Sehat</h3>
              <p className="text-gray-600">Bergabung dengan ribuan pengguna lain untuk saling berbagi pengalaman menuju hidup sehat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER SEDERHANA */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">HealthLine.id</span>
            <p className="text-gray-400 mt-2">Partner kesehatan terpercaya Anda.</p>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; 2025 HealthLineID. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;