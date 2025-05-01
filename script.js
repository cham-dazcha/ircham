// Modal interaksi
function openModal(project) {
    const descriptions = {
      proyek1: "<h3>Proyek 1</h3><p>Desain yang akan diubah menjadi website sederhana.</p>",
      proyek2: "<h3>Proyek 2</h3><p>Game snake: awal saya belajar coding.</p>",
      proyek3: "<h3>Proyek 3</h3><p>UI Coffee Shop: latihan desain UI.</p>",
      proyek4: "<h3>Proyek 4</h3><p>Landing Page untuk belajar auto layout.</p>"
    };
    document.getElementById("modal-text").innerHTML = descriptions[project] || "Deskripsi tidak tersedia.";
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Dark mode toggle
  window.onload = () => {
    const toggle = document.getElementById("darkModeToggle");
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  };
  