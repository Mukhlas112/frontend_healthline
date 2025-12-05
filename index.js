const tips = [
  { title: "Minum Air Putih", desc: "Hidrasi penting untuk menjaga metabolisme tubuh." },
  { title: "Jaga Pola Tidur", desc: "Tidur 7-8 jam membantu sistem imun tetap kuat." },
  { title: "Konsumsi Sayur & Buah", desc: "Nutrisi alami menjaga sistem pencernaan tetap sehat." }
];

const section = document.getElementById("tips-section");
if (section) {
  tips.forEach(t => {
    section.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-green-700">${t.title}</h5>
            <p class="card-text">${t.desc}</p>
          </div>
        </div>
      </div>
    `;
  });
}