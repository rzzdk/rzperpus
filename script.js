// script.js

document.addEventListener('DOMContentLoaded', function () {

    // --- Seleksi Elemen DOM untuk Katalog ---
    const searchInput = document.getElementById('searchInput');
    const kategoriFilter = document.getElementById('kategoriFilter');
    const katalogBukuBody = document.getElementById('katalogBukuBody');
    const totalBukuElement = document.getElementById('totalBuku');
    const bukuDitampilkanElement = document.getElementById('bukuDitampilkan');
    const pesanTidakDitemukanElement = document.getElementById('pesanTidakDitemukan');
    const tabelBukuElement = document.getElementById('tabelBuku');

    // --- Seleksi Elemen DOM untuk Navigasi ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    /**
     * Fungsi utama untuk menginisialisasi aplikasi.
     * Mengisi filter, menambahkan event listener, dan menampilkan data awal.
     */
    function inisialisasiAplikasi() {
        populateKategoriFilter();
        setupEventListeners();
        filterDanTampilkan(); // Menampilkan semua buku saat pertama kali dimuat
    }

    /**
     * Mengisi dropdown filter kategori secara dinamis dari variabel 'daftarKategori'.
     */
    function populateKategoriFilter() {
        // Pastikan variabel 'daftarKategori' ada dari data.js
        if (typeof daftarKategori !== 'undefined' && daftarKategori.length > 0) {
            daftarKategori.forEach(kategori => {
                const option = document.createElement('option');
                option.value = kategori;
                option.textContent = kategori;
                kategoriFilter.appendChild(option);
            });
        }
    }

    /**
     * Membuat satu baris tabel (<tr>) untuk satu data buku.
     * @param {object} buku - Objek buku yang berisi informasi lengkap.
     * @returns {string} String HTML untuk satu baris tabel.
     */
    function buatBarisBuku(buku) {
        return `
            <tr>
                <td>${buku.kodeBuku || '-'}</td>
                <td>${buku.judul || '-'}</td>
                <td>${buku.pengarang || '-'}</td>
                <td>${buku.penerbit || '-'}</td>
                <td>${buku.tahunTerbit || '-'}</td>
                <td><span class="lokasi-badge">${buku.lokasi || '-'}</span></td>
            </tr>
        `;
    }

    /**
     * Menampilkan daftar buku yang telah difilter ke dalam tabel.
     * @param {Array<object>} daftarBuku - Array berisi objek buku yang akan ditampilkan.
     */
    function tampilkanHasilDiTabel(daftarBuku) {
        katalogBukuBody.innerHTML = ''; // Kosongkan tabel sebelum mengisi data baru

        if (daftarBuku.length === 0) {
            tabelBukuElement.style.display = 'none';
            pesanTidakDitemukanElement.style.display = 'block';
        } else {
            tabelBukuElement.style.display = 'table';
            pesanTidakDitemukanElement.style.display = 'none';
            const semuaBarisHtml = daftarBuku.map(buku => buatBarisBuku(buku)).join('');
            katalogBukuBody.innerHTML = semuaBarisHtml;
        }
    }

    /**
     * Memperbarui panel jumlah total buku dan jumlah hasil yang ditampilkan.
     * @param {number} totalCount - Jumlah semua buku dalam koleksi.
     * @param {number} displayedCount - Jumlah buku yang sedang ditampilkan setelah difilter.
     */
    function updateJumlah(totalCount, displayedCount) {
        totalBukuElement.textContent = totalCount;
        bukuDitampilkanElement.textContent = displayedCount;
    }

    /**
     * Fungsi inti yang melakukan filter berdasarkan kategori dan pencarian teks,
     * lalu memanggil fungsi untuk menampilkan hasilnya.
     */
    function filterDanTampilkan() {
        const query = searchInput.value.toLowerCase().trim();
        const kategoriTerpilih = kategoriFilter.value;

        let hasilFilter = koleksiBuku;

        // 1. Filter berdasarkan kategori
        if (kategoriTerpilih !== 'semua') {
            hasilFilter = hasilFilter.filter(buku => buku.kategori === kategoriTerpilih);
        }

        // 2. Filter berdasarkan teks pencarian pada hasil filter kategori
        if (query) {
            hasilFilter = hasilFilter.filter(buku => {
                const teksBuku = `
                    ${buku.judul ? buku.judul.toLowerCase() : ''} 
                    ${buku.pengarang ? buku.pengarang.toLowerCase() : ''} 
                    ${buku.kodeBuku ? buku.kodeBuku.toLowerCase() : ''}
                `;
                return teksBuku.includes(query);
            });
        }

        // Panggil fungsi untuk render hasil ke DOM
        tampilkanHasilDiTabel(hasilFilter);
        updateJumlah(koleksiBuku.length, hasilFilter.length);
    }

    /**
     * Menyiapkan semua event listener untuk elemen interaktif.
     */
    function setupEventListeners() {
        searchInput.addEventListener('keyup', filterDanTampilkan);
        kategoriFilter.addEventListener('change', filterDanTampilkan);
    }

    // --- LOGIKA UNTUK MENU HAMBURGER & TAB NAVIGASI (Tetap sama) ---
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
            }
        });
    });

    // --- INISIALISASI ---
    // Pastikan variabel 'koleksiBuku' ada sebelum menjalankan aplikasi
    if (typeof koleksiBuku !== 'undefined' && koleksiBuku.length > 0) {
        inisialisasiAplikasi();
    } else {
        console.error("Data buku (koleksiBuku) tidak ditemukan atau kosong. Pastikan data.js dimuat dengan benar.");
        updateJumlah(0, 0);
        pesanTidakDitemukanElement.textContent = "Gagal memuat data buku.";
        pesanTidakDitemukanElement.style.display = 'block';
    }
});
