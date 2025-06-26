document.addEventListener('DOMContentLoaded', function () {
    const katalogContainer = document.getElementById('katalogBuku');
    const searchInput = document.getElementById('searchInput');

    /**
     * Membuat string HTML untuk satu kartu buku berdasarkan objek buku.
     * @param {object} buku - Objek yang berisi detail buku.
     * @returns {string} String HTML untuk kartu buku.
     */
    function buatKartuBuku(buku) {
        return `
            <article class="buku-card">
                <img src="${buku.gambar}" alt="Cover ${buku.judul}">
                <div class="buku-info">
                    <h3>${buku.judul}</h3>
                    <p class="penulis">${buku.penulis}</p>
                    <p><strong>Tahun Terbit:</strong> ${buku.tahunTerbit}</p>
                    <p><strong>ISBN:</strong> ${buku.isbn}</p>
                    <p class="deskripsi-singkat">${buku.deskripsi}</p>
                    <span class="kategori">${buku.kategori}</span>
                </div>
            </article>
        `;
    }

    /**
     * Menampilkan daftar buku ke dalam kontainer katalog.
     * @param {Array<object>} daftarBuku - Array objek buku yang akan ditampilkan.
     */
    function tampilkanKatalog(daftarBuku) {
        // Kosongkan kontainer sebelum menampilkan hasil baru.
        katalogContainer.innerHTML = ''; 

        // Jika array kosong (tidak ada hasil pencarian), tampilkan pesan.
        if (daftarBuku.length === 0) {
            katalogContainer.innerHTML = '<p style="text-align: center; width: 100%;">Buku tidak ditemukan.</p>';
            return;
        }
        
        // Buat HTML untuk setiap buku, gabungkan, dan masukkan ke dalam kontainer.
        const katalogHTML = daftarBuku.map(buku => buatKartuBuku(buku)).join('');
        katalogContainer.innerHTML = katalogHTML;
    }

    // Event listener untuk input pencarian yang dijalankan setiap kali pengguna mengetik.
    searchInput.addEventListener('keyup', function (event) {
        const query = event.target.value.toLowerCase().trim();
        
        // Lakukan filter pada array 'koleksiBuku' utama.
        const hasilFilter = koleksiBuku.filter(buku => {
            // Gabungkan teks yang relevan dari setiap buku untuk pencarian.
            const teksBuku = `${buku.judul} ${buku.penulis} ${buku.kategori}`.toLowerCase();
            return teksBuku.includes(query);
        });

        // Tampilkan hasil yang sudah difilter.
        tampilkanKatalog(hasilFilter);
    });

    // --- Inisialisasi ---
    // Tampilkan semua buku dari 'koleksiBuku' saat halaman pertama kali dimuat.
    tampilkanKatalog(koleksiBuku);
});