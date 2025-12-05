import React, { useState } from 'react';

const Tips = () => {
  // 1. Data Dummy (Simulasi Database)
  const tipsData = [
    { title: "Minum Air Putih", category: "Nutrisi", desc: "Pastikan minum minimal 8 gelas sehari untuk hidrasi optimal.", color: "bg-blue-500" },
    { title: "Kurangi Gula", category: "Penyakit", desc: "Batasi konsumsi manis untuk mencegah risiko diabetes.", color: "bg-pink-500" },
    { title: "Jalan Kaki Pagi", category: "Olahraga", desc: "Sinar pagi mengandung vitamin D yang baik untuk tulang.", color: "bg-orange-500" },
    { title: "Perbanyak Sayur", category: "Nutrisi", desc: "Serat membantu pencernaan dan menurunkan kolesterol.", color: "bg-green-500" },
    { title: "Detox Digital", category: "Mental", desc: "Kurangi screen time sebelum tidur agar tidur nyenyak.", color: "bg-indigo-500" },
    { title: "Cek Kesehatan", category: "Medis", desc: "Lakukan medical check-up setidaknya setahun sekali.", color: "bg-red-500" },
    { title: "Meditasi 10 Menit", category: "Mental", desc: "Tenangkan pikiran sejenak dari kesibukan harian.", color: "bg-purple-500" },
    { title: "Hindari Begadang", category: "Lifestyle", desc: "Tidur 7-8 jam membantu regenerasi sel tubuh.", color: "bg-gray-800" }
  ];

  // 2. State untuk Search dan Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Ambil daftar kategori unik secara otomatis
  const categories = ["Semua", ...new Set(tipsData.map(item => item.category))];

  // 3. Logika Filter
  const filteredTips = tipsData.filter(tip => {
    const matchSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        tip.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "Semua" || tip.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Tips Sehat Harian</h1>
          <p className="mt-4 text-xl text-gray-500">Kumpulan panduan praktis untuk hidup lebih baik.</p>
        </div>

        {/* --- SEARCH BAR & FILTER --- */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Input Pencarian */}
            <div className="w-full md:w-1/2 relative">
              <input 
                type="text"
                placeholder="Cari tips (misal: tidur, sayur)..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="w-6 h-6 text-gray-400 absolute left-4 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            {/* Tombol Kategori */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <div className="flex gap-2">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === cat 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid Tips */}
        {filteredTips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 group flex flex-col h-full">
                <div className={`h-2 w-full ${tip.color}`}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600 uppercase tracking-wide`}>
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tampilan jika data tidak ditemukan */
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Tips tidak ditemukan</h3>
            <p className="text-gray-500 mt-1">Coba gunakan kata kunci lain atau ganti kategori.</p>
            <button onClick={() => {setSearchTerm(""); setSelectedCategory("Semua")}} className="mt-6 text-blue-600 font-bold hover:underline">
              Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Tips;