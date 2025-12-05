import React from 'react';

const Lifestyle = () => {
  return (
    <div className="bg-white pb-20">
      
      {/* (PENTING: Tidak ada <Navbar /> di sini lagi) */}

      {/* 1. Header Artikel */}
      <div className="relative bg-blue-600 text-white py-24 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Gaya Hidup Sehat Modern</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kunci kesejahteraan tubuh dan pikiran untuk hidup lebih berkualitas di era digital.
          </p>
        </div>
      </div>

      {/* 2. Konten Artikel (Dibuat ramping di tengah agar enak dibaca) */}
      <div className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Semua orang pasti ingin selalu sehat dan terhindar dari berbagai penyakit. Sebab, dengan tubuh dan pikiran yang selalu sehat, kesejahteraan dan kualitas hidup tentunya juga dapat meningkat. Menjaga kesehatan pun nyatanya tidak sesulit yang dibayangkan.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mengapa Ini Penting?</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <p className="text-blue-800 italic">
              "Menurut Organisasi Kesehatan Dunia (WHO), pola makan tidak sehat dan kurangnya aktivitas fisik merupakan faktor risiko kesehatan global yang utama."
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Apalagi dengan kemajuan teknologi pangan, produksi makanan olahan pun semakin meningkat. Tidak hanya itu, kemudahan teknologi seringkali membuat kita malas bergerak (sedentary lifestyle), yang membuat tubuh rentan terserang penyakit seperti diabetes, jantung, dan kanker.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Langkah Memulai Gaya Hidup Sehat</h2>
          
          {/* List Langkah - Menggunakan Grid Card Kecil */}
          <div className="grid gap-6 md:grid-cols-2">
            
            <div className="border border-gray-100 p-5 rounded-xl hover:shadow-md transition bg-gray-50">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mb-3">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Makan Gizi Seimbang</h3>
              <p className="text-sm text-gray-500">Perhatikan asupan protein, karbohidrat, serat, mineral, dan vitamin harian Anda.</p>
            </div>

            <div className="border border-gray-100 p-5 rounded-xl hover:shadow-md transition bg-gray-50">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Olahraga Teratur</h3>
              <p className="text-sm text-gray-500">Luangkan waktu minimal 30 menit setiap hari untuk aktivitas fisik ringan.</p>
            </div>

            <div className="border border-gray-100 p-5 rounded-xl hover:shadow-md transition bg-gray-50">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold mb-3">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Istirahat Cukup</h3>
              <p className="text-sm text-gray-500">Tidur yang berkualitas membantu regenerasi sel tubuh dan kesehatan mental.</p>
            </div>

            <div className="border border-gray-100 p-5 rounded-xl hover:shadow-md transition bg-gray-50">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mb-3">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Kelola Stres</h3>
              <p className="text-sm text-gray-500">Lakukan meditasi atau hobi yang menyenangkan untuk menjaga pikiran tetap positif.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Lifestyle;