// data.js

/**
 * Daftar Kategori Buku
 * Digunakan untuk mengisi dropdown filter secara dinamis.
 * Berdasarkan sheet 'Klasifikasi' dari file Excel.
 */
const daftarKategori = [
    "Agama",
    "Filsafat & Psikologi",
    "Ilmu Sosial",
    "Bahasa",
    "Sains & Matematika",
    "Teknologi",
    "Seni & Rekreasi",
    "Literatur & Sastra",
    "Sejarah & Geografi",
    "Karya Umum",
    "Fiksi" // Kategori tambahan jika ada
];

/**
 * Koleksi Lengkap Buku Perpustakaan
 * Berisi 650 data buku yang diimpor dari file 'Main Sheet.csv'.
 * Kategori setiap buku ditentukan secara otomatis berdasarkan 3 digit pertama dari kode buku.
 */
const koleksiBuku = [
    {
        "kodeBuku": "297.3 ALI m",
        "judul": "Manajemen Masjid",
        "pengarang": "Ali Audah",
        "penerbit": "Akbar",
        "tahunTerbit": "2007",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.3 SYA m",
        "judul": "Manajemen Masjid",
        "pengarang": "Syahrudin",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 SYA k",
        "judul": "Kultum",
        "pengarang": "Syahrudin",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 JUM p",
        "judul": "Panduan Ibadah Muslim",
        "pengarang": "Juman Rofarif",
        "penerbit": "Wahyu Media",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MAU k",
        "judul": "Kumpulan Doa",
        "pengarang": "Maulana",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2013",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 SUD k",
        "judul": "Kumpulan Khutbah Jumat",
        "pengarang": "Sudarno",
        "penerbit": "Aneka Ilmu",
        "tahunTerbit": "2007",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 FAT m",
        "judul": "Menjadi MC",
        "pengarang": "Fatah",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ZAK d",
        "judul": "Dahsyatnya Doa Para Nabi",
        "pengarang": "Zakaria",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 CHO d",
        "judul": "Dahsyatnya Shalat Dhuha",
        "pengarang": "Chudori",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 RID m",
        "judul": "Misteri Bismillah",
        "pengarang": "Ridwan",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 RID i",
        "judul": "Ibadah-Ibadah",
        "pengarang": "Ridwan",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 AZI s",
        "judul": "Super Dasyat",
        "pengarang": "Azis",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MUH m",
        "judul": "Mukjizat",
        "pengarang": "Muhammad",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MUH m",
        "judul": "Mukjizat Al Fatihah",
        "pengarang": "Muhammad",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 UMA b",
        "judul": "Beginilah",
        "pengarang": "Umar",
        "penerbit": "Aqwam",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 SUY m",
        "judul": "Menjadi Haji",
        "pengarang": "Suyadi",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MIS b",
        "judul": "Bimbingan Doa",
        "pengarang": "Misbah",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2007",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MUH m",
        "judul": "Mutiara",
        "pengarang": "Muhammad",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 FAT t",
        "judul": "Tuntunan Shalat",
        "pengarang": "Fatah",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 AZI s",
        "judul": "Super Dasyat",
        "pengarang": "Azis",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 PRA p",
        "judul": "Puasaku",
        "pengarang": "Pranowo",
        "penerbit": "Mutiara Media",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 HUS h",
        "judul": "Haji",
        "pengarang": "Husein",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 HUS m",
        "judul": "Manasik",
        "pengarang": "Husein",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 HAM a",
        "judul": "Amalan",
        "pengarang": "Hambali",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MUH k",
        "judul": "Keajaiban",
        "pengarang": "Muh.",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MUJ p",
        "judul": "Pintar",
        "pengarang": "Mujahid",
        "penerbit": "Absolut",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 FAT t",
        "judul": "Tuntunan",
        "pengarang": "Fatah",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MUS a",
        "judul": "Agar Shalat",
        "pengarang": "Muslich",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 UCH d",
        "judul": "Dahsyatnya",
        "pengarang": "Uchrowi",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 NUR s",
        "judul": "Sentuhan Kalbu",
        "pengarang": "Nurul",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ABD a",
        "judul": "Al-Quran",
        "pengarang": "Abdul",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ABD k",
        "judul": "Kekuatan",
        "pengarang": "Abdullah",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ZAK d",
        "judul": "Dahsyatnya",
        "pengarang": "Zakaria",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 HAR p",
        "judul": "Panduan",
        "pengarang": "Haris",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ARS i",
        "judul": "Indahnya",
        "pengarang": "Arsad",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 RAH t",
        "judul": "Terapi",
        "pengarang": "Rahmat",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ARI s",
        "judul": "Sehat",
        "pengarang": "Arifin",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 CHO d",
        "judul": "Dahsyatnya",
        "pengarang": "Chudori",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ARI k",
        "judul": "Kekuatan",
        "pengarang": "Arif",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 AZH s",
        "judul": "Shalat",
        "pengarang": "Azhar",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 ASY p",
        "judul": "Perjalanan",
        "pengarang": "Asy'ari",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MAU k",
        "judul": "Kumpulan",
        "pengarang": "Maulana",
        "penerbit": "Bintang",
        "tahunTerbit": "2013",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 FAT t",
        "judul": "Tuntunan",
        "pengarang": "Fatah",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.4 MIS b",
        "judul": "Bimbingan",
        "pengarang": "Misbah",
        "penerbit": "Bintang Cemerlang",
        "tahunTerbit": "2007",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 ANW p",
        "judul": "Puasa",
        "pengarang": "Anwar",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 FAH z",
        "judul": "Zakat",
        "pengarang": "Fahmi",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 MUH a",
        "judul": "Agar",
        "pengarang": "Muhammad",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 ASH a",
        "judul": "Amalan",
        "pengarang": "Ashidiq",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 AIN r",
        "judul": "Rahasia",
        "pengarang": "Ain",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 HAS a",
        "judul": "Amalan",
        "pengarang": "Hasan",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 HAM a",
        "judul": "Agar",
        "pengarang": "Hambali",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 ABU m",
        "judul": "Menjadi",
        "pengarang": "Abu",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.5 ANW p",
        "judul": "Puasa",
        "pengarang": "Anwar",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 RID a",
        "judul": "Agar",
        "pengarang": "Ridha",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 SUN s",
        "judul": "Sehat",
        "pengarang": "Sunsoko",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 WAH b",
        "judul": "Bimbingan",
        "pengarang": "Wahid",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ARS m",
        "judul": "Menjadi",
        "pengarang": "Arsyad",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ZAM k",
        "judul": "Kisah",
        "pengarang": "Zamami",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 MIS p",
        "judul": "Pendidikan",
        "pengarang": "Misbah",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 IBN k",
        "judul": "Kisah",
        "pengarang": "Ibnu",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 MUH m",
        "judul": "Meneladani",
        "pengarang": "Muh.",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 SYA m",
        "judul": "Muslim",
        "pengarang": "Syahid",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ABD i",
        "judul": "Indahnya",
        "pengarang": "Abdul",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ASR s",
        "judul": "Sudah",
        "pengarang": "Asror",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 IBN k",
        "judul": "Kisah",
        "pengarang": "Ibnu",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 AL- k",
        "judul": "Kisah",
        "pengarang": "Al-Hakim",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 MUS m",
        "judul": "Muslimah",
        "pengarang": "Muslimah",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 PRA b",
        "judul": "Bimbingan",
        "pengarang": "Pranowo",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ABD k",
        "judul": "Kisah",
        "pengarang": "Abdul",
        "penerbit": "Bening",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ARI c",
        "judul": "Cara",
        "pengarang": "Arif",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 SYA m",
        "judul": "Menjadi",
        "pengarang": "Syafi'i",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 MUH m",
        "judul": "Mendidik",
        "pengarang": "Muh.",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 AL- k",
        "judul": "Kisah-Kisah",
        "pengarang": "Al-Ghamidi",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 IBN k",
        "judul": "Kisah",
        "pengarang": "Ibnu",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ARS b",
        "judul": "Bimbingan",
        "pengarang": "Arsyad",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 ROH m",
        "judul": "Menjadi",
        "pengarang": "Rohman",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 MUS s",
        "judul": "Sukses",
        "pengarang": "Mustofa",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.6 WAH b",
        "judul": "Bimbingan",
        "pengarang": "Wahid",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 YUS k",
        "judul": "Kepemimpinan",
        "pengarang": "Yusuf",
        "penerbit": "Amzah",
        "tahunTerbit": "2013",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 SUY p",
        "judul": "Prophetic",
        "pengarang": "Suyanto",
        "penerbit": "Pro U Media",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 JAA m",
        "judul": "Mengelola",
        "pengarang": "Ja'far",
        "penerbit": "Amzah",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 DID m",
        "judul": "Manajemen",
        "pengarang": "Didin",
        "penerbit": "Gema Insani",
        "tahunTerbit": "2003",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 SYA k",
        "judul": "Kepemimpinan",
        "pengarang": "Syaifullah",
        "penerbit": "Al-Mawardi",
        "tahunTerbit": "2001",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 MUH m",
        "judul": "Manajemen",
        "pengarang": "Muhammad",
        "penerbit": "UPP AMP YKPN",
        "tahunTerbit": "2002",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 KAR d",
        "judul": "Dakwah",
        "pengarang": "Karna",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 DID m",
        "judul": "Manajemen",
        "pengarang": "Didin",
        "penerbit": "Gema Insani",
        "tahunTerbit": "2003",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 FAH d",
        "judul": "Dakwah",
        "pengarang": "Fahruroji",
        "penerbit": "Amzah",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 UMA i",
        "judul": "Islam",
        "pengarang": "Umar",
        "penerbit": "Sinar Grafika",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 SYA d",
        "judul": "Dakwah",
        "pengarang": "Syaiful",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 MUN m",
        "judul": "Manajemen",
        "pengarang": "Munir",
        "penerbit": "Amzah",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 AMZ b",
        "judul": "Bimbingan",
        "pengarang": "Amzah",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 SUY k",
        "judul": "Khatib",
        "pengarang": "Suyuti",
        "penerbit": "Amzah",
        "tahunTerbit": "2013",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 AMZ b",
        "judul": "Bimbingan",
        "pengarang": "Amzah",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 ILH m",
        "judul": "Menjadi",
        "pengarang": "Ilham",
        "penerbit": "Amzah",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 DID m",
        "judul": "Manajemen",
        "pengarang": "Didin",
        "penerbit": "Gema Insani",
        "tahunTerbit": "2003",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 MUH m",
        "judul": "Manajemen",
        "pengarang": "Muh.",
        "penerbit": "UUP AMP YKPN",
        "tahunTerbit": "2002",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.7 ILY w",
        "judul": "Wawasan",
        "pengarang": "Ilyas",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.8 ABD k",
        "judul": "Karakter",
        "pengarang": "Abdul",
        "penerbit": "UIN Press",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.8 FAQ m",
        "judul": "Membangun",
        "pengarang": "Faqih",
        "penerbit": "Aditya Media",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.8 MUH s",
        "judul": "Sosiologi",
        "pengarang": "Muhammad",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.8 NAS m",
        "judul": "Masyarakat",
        "pengarang": "Nasai",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.8 MUH p",
        "judul": "Pengantar",
        "pengarang": "Muhammad",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.8 ARB p",
        "judul": "Pemikiran",
        "pengarang": "Arbain",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 SUT s",
        "judul": "Sejarah",
        "pengarang": "Sutarmo",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 YUS s",
        "judul": "Sejarah",
        "pengarang": "Yusuf",
        "penerbit": "Amzah",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 AL- s",
        "judul": "Sejarah",
        "pengarang": "Al-Mawardi",
        "penerbit": "Amzah",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 RAH s",
        "judul": "Sejarah",
        "pengarang": "Rahman",
        "penerbit": "Amzah",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 HAS b",
        "judul": "Biografi",
        "pengarang": "Hasan",
        "penerbit": "Amzah",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 SYA p",
        "judul": "Peradaban",
        "pengarang": "Syalabi",
        "penerbit": "Amzah",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 AL- k",
        "judul": "Khulafaur",
        "pengarang": "Al-Usairy",
        "penerbit": "Akbar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 AL- k",
        "judul": "Khulafaur",
        "pengarang": "Al-Usairy",
        "penerbit": "Akbar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 AL- s",
        "judul": "Sejarah",
        "pengarang": "Al-Usairy",
        "penerbit": "Akbar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 AL- s",
        "judul": "Sejarah",
        "pengarang": "Al-Usairy",
        "penerbit": "Akbar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "297.9 AL- s",
        "judul": "Sejarah",
        "pengarang": "Al-Usairy",
        "penerbit": "Akbar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Agama"
    },
    {
        "kodeBuku": "153.1 KAR m",
        "judul": "Melejitkan",
        "pengarang": "Karna",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.3 AHM m",
        "judul": "Melejitkan",
        "pengarang": "Ahmad",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.3 HER m",
        "judul": "Melejitkan",
        "pengarang": "Hermawan",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.3 RAH d",
        "judul": "Dahsyatnya",
        "pengarang": "Rahmat",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.4 AND s",
        "judul": "Super",
        "pengarang": "Andi",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 AND s",
        "judul": "Super",
        "pengarang": "Andi",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 ARI m",
        "judul": "Menjadi",
        "pengarang": "Arif",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 DID b",
        "judul": "Bukan",
        "pengarang": "Didik",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 JUM m",
        "judul": "Menjadi",
        "pengarang": "Jumantoro",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 NUR m",
        "judul": "Menjadi",
        "pengarang": "Nurohman",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 ADH m",
        "judul": "Menjadi",
        "pengarang": "Adhe",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "153.8 FAI r",
        "judul": "Rahasia",
        "pengarang": "Faisal",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.2 GHO s",
        "judul": "Sukses",
        "pengarang": "Ghozali",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.2 MUH m",
        "judul": "Membangun",
        "pengarang": "Muh.",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.2 AL- k",
        "judul": "Keajaiban",
        "pengarang": "Al-Balkhi",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.2 UCH 9",
        "judul": "9 Kiat",
        "pengarang": "Uchrowi",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.2 ARF a",
        "judul": "Agar",
        "pengarang": "Arfan",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.2 UCH 9",
        "judul": "9 Kiat",
        "pengarang": "Uchrowi",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.9 ARS s",
        "judul": "Sukses",
        "pengarang": "Arsad",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.9 SAA m",
        "judul": "Manajemen",
        "pengarang": "Saad",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "155.9 UCH m",
        "judul": "Menjadi",
        "pengarang": "Uchrowi",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 SUY s",
        "judul": "Sukses",
        "pengarang": "Suyanto",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 HUS k",
        "judul": "Keajaiban",
        "pengarang": "Husein",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 FAT s",
        "judul": "Spiritual",
        "pengarang": "Fatah",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 AHM m",
        "judul": "Membangun",
        "pengarang": "Ahmad",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 AL- s",
        "judul": "Seni",
        "pengarang": "Al-Ghamidi",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 TAU m",
        "judul": "Menjadi",
        "pengarang": "Taufik",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 ELS b",
        "judul": "Best",
        "pengarang": "Elsa",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 WAH r",
        "judul": "Rahasia",
        "pengarang": "Wahid",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 SYA t",
        "judul": "Terapi",
        "pengarang": "Syahrur",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 KAR m",
        "judul": "Meraih",
        "pengarang": "Karna",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 TRI m",
        "judul": "Menjadi",
        "pengarang": "Trio",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 ADH j",
        "judul": "Jangan",
        "pengarang": "Adhe",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 ELS b",
        "judul": "Best",
        "pengarang": "Elsa",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 WAH r",
        "judul": "Rahasia",
        "pengarang": "Wahid",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 MUH d",
        "judul": "Dahsyatnya",
        "pengarang": "Muh.",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 AND m",
        "judul": "Menjadi",
        "pengarang": "Andi",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 WAH r",
        "judul": "Rahasia",
        "pengarang": "Wahid",
        "penerbit": "Sabil",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "158.1 UCH m",
        "judul": "Menjadi",
        "pengarang": "Uchrowi",
        "penerbit": "Sabil",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Filsafat & Psikologi"
    },
    {
        "kodeBuku": "301 AZI s",
        "judul": "Sosiologi",
        "pengarang": "Aziz",
        "penerbit": "Insan Cendekia",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "303.4 ABD g",
        "judul": "Gerakan",
        "pengarang": "Abdullah",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "303.4 EKO m",
        "judul": "Manajemen",
        "pengarang": "Eko",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "303.4 SOE m",
        "judul": "Manajemen",
        "pengarang": "Soetomo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "303.4 MAR p",
        "judul": "Pemberdayaan",
        "pengarang": "Mardikanto",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2013",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "303.4 SOE p",
        "judul": "Pemberdayaan",
        "pengarang": "Soetomo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "303.4 SOE p",
        "judul": "Pemberdayaan",
        "pengarang": "Soetomo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "305.2 HAW s",
        "judul": "Saatnya",
        "pengarang": "Hawari",
        "penerbit": "FKUI",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "305.2 MUH m",
        "judul": "Masa",
        "pengarang": "Mufid",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "305.5 SOE m",
        "judul": "Masalah",
        "pengarang": "Soetomo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "305.5 SOE k",
        "judul": "Kemiskinan",
        "pengarang": "Soetomo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "307.1 MAR p",
        "judul": "Pembangunan",
        "pengarang": "Marzali",
        "penerbit": "Kencana",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "307.1 TOT p",
        "judul": "Pembangunan",
        "pengarang": "Totok",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2003",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "307.7 SOE p",
        "judul": "Pembangunan",
        "pengarang": "Soetomo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "307.7 SUT p",
        "judul": "Pembangunan",
        "pengarang": "Sutanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "320.5 FAH i",
        "judul": "Ilmu",
        "pengarang": "Fahmi",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "321.8 ISN d",
        "judul": "Demokrasi",
        "pengarang": "Isnaeni",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "323.0 DID p",
        "judul": "Politik",
        "pengarang": "Didik",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "331.1 SUW e",
        "judul": "Ekonomi",
        "pengarang": "Suwanto",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 MUH i",
        "judul": "Ilmu",
        "pengarang": "Muhammad",
        "penerbit": "UUP STIM YKPN",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 HEN k",
        "judul": "Koperasi",
        "pengarang": "Hendrojogi",
        "penerbit": "UUP STIM YKPN",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 HEN e",
        "judul": "Ekonomi",
        "pengarang": "Hendrojogi",
        "penerbit": "Arloka",
        "tahunTerbit": "2001",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 ARi k",
        "judul": "Koperasi",
        "pengarang": "Arifin",
        "penerbit": "Akademika",
        "tahunTerbit": "1991",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 SUB k",
        "judul": "Koperasi",
        "pengarang": "Subandi",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 BAY p",
        "judul": "Perpajakan",
        "pengarang": "Bayu",
        "penerbit": "Graha Ilmu",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 CHA k",
        "judul": "Koperasi",
        "pengarang": "Chaniago",
        "penerbit": "Angkasa",
        "tahunTerbit": "1984",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 CHA k",
        "judul": "Koperasi",
        "pengarang": "Chaniago",
        "penerbit": "Angkasa",
        "tahunTerbit": "1984",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "334 SUB k",
        "judul": "Koperasi",
        "pengarang": "Subandi",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 SOE k",
        "judul": "Kewirausahaan",
        "pengarang": "Soetomo",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 ALM k",
        "judul": "Kewirausahaan",
        "pengarang": "Alma",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 KAS k",
        "judul": "Kewirausahaan",
        "pengarang": "Kasmir",
        "penerbit": "Raja Grafindo",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 ALM k",
        "judul": "Kewirausahaan",
        "pengarang": "Alma",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 SUR k",
        "judul": "Kewirausahaan",
        "pengarang": "Suryana",
        "penerbit": "Salemba Empat",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 SUR k",
        "judul": "Kewirausahaan",
        "pengarang": "Suryana",
        "penerbit": "Salemba Empat",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 SOE m",
        "judul": "Manajemen",
        "pengarang": "Soeparman",
        "penerbit": "UUP STIM YKPN",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "338.04 SOE m",
        "judul": "Manajemen",
        "pengarang": "Soeparman",
        "penerbit": "UUP STIM YKPN",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "340.03 ISN k",
        "judul": "Kamus",
        "pengarang": "Isnaeni",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "340.1 HUI p",
        "judul": "Pengantar",
        "pengarang": "Huijbers",
        "penerbit": "Kanisius",
        "tahunTerbit": "1995",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "340.1 BUS f",
        "judul": "Filsafat",
        "pengarang": "Busyro",
        "penerbit": "Genta",
        "tahunTerbit": "2013",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "342.02 JAU u",
        "judul": "UUD 1945",
        "pengarang": "Jauhari",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "342.02 JAU u",
        "judul": "UUD 1945",
        "pengarang": "Jauhari",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "346.07 ABD h",
        "judul": "Hukum",
        "pengarang": "Abdullah",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "352.1 ALI a",
        "judul": "Administrasi",
        "pengarang": "Ali",
        "penerbit": "Raja Grafindo",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "361.3 SUH a",
        "judul": "Anak",
        "pengarang": "Suharto",
        "penerbit": "Refika",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "361.3 SUH p",
        "judul": "Pekerjaan",
        "pengarang": "Suharto",
        "penerbit": "Refika",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "361.3 SUH k",
        "judul": "Kesejahteraan",
        "pengarang": "Suharto",
        "penerbit": "Refika",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "361.3 SUH m",
        "judul": "Membangun",
        "pengarang": "Suharto",
        "penerbit": "Refika",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "361.3 SUH m",
        "judul": "Membangun",
        "pengarang": "Suharto",
        "penerbit": "Refika",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.1 UZE p",
        "judul": "Pengembangan",
        "pengarang": "Uzer",
        "penerbit": "Remaja",
        "tahunTerbit": "2001",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.1 DIM b",
        "judul": "Belajar",
        "pengarang": "Dimyati",
        "penerbit": "Rineka Cipta",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.15 MUH p",
        "judul": "Psikologi",
        "pengarang": "Muhibbin",
        "penerbit": "Remaja",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.19 SAN s",
        "judul": "Sosiologi",
        "pengarang": "Sanapiah",
        "penerbit": "Remaja",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 Ahm p",
        "judul": "Profesi",
        "pengarang": "Ahmadi",
        "penerbit": "Eska Media",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 MAJ p",
        "judul": "Perencanaan",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 JAM s",
        "judul": "Strategi",
        "pengarang": "Jamaluddin",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 HAM k",
        "judul": "Kurikulum",
        "pengarang": "Hamalik",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 BAR p",
        "judul": "Pengembangan",
        "pengarang": "Bardu",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 SUD i",
        "judul": "Ilmu",
        "pengarang": "Sudijono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 SUD i",
        "judul": "Ilmu",
        "pengarang": "Sudijono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 SYA s",
        "judul": "Strategi",
        "pengarang": "Syaiful",
        "penerbit": "Kencana",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 DAR p",
        "judul": "Profesi",
        "pengarang": "Darmadi",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "370.7 MAJ p",
        "judul": "Perencanaan",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.1 MAJ p",
        "judul": "Pendidikan",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.1 WAH p",
        "judul": "Profesi",
        "pengarang": "Wahyudi",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.1 SUP p",
        "judul": "Profesi",
        "pengarang": "Supriyoko",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 MUL m",
        "judul": "Manajemen",
        "pengarang": "Mulyasa",
        "penerbit": "Remaja",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 MUL k",
        "judul": "Kurikulum",
        "pengarang": "Mulyasa",
        "penerbit": "Remaja",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 MUL m",
        "judul": "Manajemen",
        "pengarang": "Mulyasa",
        "penerbit": "Remaja",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 MUL k",
        "judul": "Kurikulum",
        "pengarang": "Mulyasa",
        "penerbit": "Remaja",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 MUL m",
        "judul": "Menjadi",
        "pengarang": "Mulyasa",
        "penerbit": "Remaja",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 FAT k",
        "judul": "Kurikulum",
        "pengarang": "Fattah",
        "penerbit": "Remaja",
        "tahunTerbit": "2004",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.2 ENG a",
        "judul": "Administrasi",
        "pengarang": "Engkoswara",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 AUN p",
        "judul": "Panduan",
        "pengarang": "Aunurrahman",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 AUN p",
        "judul": "Panduan",
        "pengarang": "Aunurrahman",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MAJ p",
        "judul": "Perencanaan",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 TRI p",
        "judul": "Pembelajaran",
        "pengarang": "Trianto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 KUN a",
        "judul": "Asesmen",
        "pengarang": "Kunandar",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 SAN s",
        "judul": "Strategi",
        "pengarang": "Sanjaya",
        "penerbit": "Kencana",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 TRI m",
        "judul": "Mendesain",
        "pengarang": "Trianto",
        "penerbit": "Kencana",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MUH m",
        "judul": "Model-model",
        "pengarang": "Muhibbin",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 SAN s",
        "judul": "Strategi",
        "pengarang": "Sanjaya",
        "penerbit": "Kencana",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 KEM p",
        "judul": "Pembelajaran",
        "pengarang": "Kemp",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MAJ p",
        "judul": "Perencanaan",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MAJ b",
        "judul": "Belajar",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MAJ p",
        "judul": "Penilaian",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 KUN l",
        "judul": "Langkah",
        "pengarang": "Kunandar",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 KUN l",
        "judul": "Langkah",
        "pengarang": "Kunandar",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 HAM p",
        "judul": "Proses",
        "pengarang": "Hamalik",
        "penerbit": "Bumi Aksara",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 HAM p",
        "judul": "Proses",
        "pengarang": "Hamalik",
        "penerbit": "Bumi Aksara",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MAJ p",
        "judul": "Penilaian",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.3 MAJ b",
        "judul": "Belajar",
        "pengarang": "Majid",
        "penerbit": "Remaja",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.4 MAR b",
        "judul": "Bimbingan",
        "pengarang": "Mardiyanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.4 FAH b",
        "judul": "Bimbingan",
        "pengarang": "Fahmi",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.4 TOH b",
        "judul": "Bimbingan",
        "pengarang": "Tohirin",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.4 NUR b",
        "judul": "Bimbingan",
        "pengarang": "Nurihsan",
        "penerbit": "Refika",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "371.9 ARI p",
        "judul": "Pengantar",
        "pengarang": "Arifin",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "372 HAM p",
        "judul": "Pengembangan",
        "pengarang": "Hamalik",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "372.1 SUY p",
        "judul": "Pembelajaran",
        "pengarang": "Suyadi",
        "penerbit": "Remaja",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "372.1 ABD p",
        "judul": "Pembelajaran",
        "pengarang": "Abdullah",
        "penerbit": "Multi Press",
        "tahunTerbit": "2007",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "372.2 MOR m",
        "judul": "Metode",
        "pengarang": "Morison",
        "penerbit": "Kencana",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "372.2 MOR p",
        "judul": "Pengembangan",
        "pengarang": "Morison",
        "penerbit": "Kencana",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "373.1 SUY p",
        "judul": "Panduan",
        "pengarang": "Suyadi",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "373.1 SUY p",
        "judul": "Panduan",
        "pengarang": "Suyadi",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "378.1 SUD p",
        "judul": "Penilaian",
        "pengarang": "Sudijono",
        "penerbit": "Raja Grafindo",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "378.1 SUD p",
        "judul": "Penilaian",
        "pengarang": "Sudijono",
        "penerbit": "Raja Grafindo",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "378.1 SYA p",
        "judul": "Penilaian",
        "pengarang": "Syah",
        "penerbit": "Raja Grafindo",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "378.1 HAR p",
        "judul": "Penilaian",
        "pengarang": "Harun",
        "penerbit": "Remaja",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "395 ARI c",
        "judul": "Cara",
        "pengarang": "Arifin",
        "penerbit": "Gema Insani",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "398.2 SYA k",
        "judul": "Kumpulan",
        "pengarang": "Syaf",
        "penerbit": "Bintang",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Ilmu Sosial"
    },
    {
        "kodeBuku": "401 KUN b",
        "judul": "Bahasa",
        "pengarang": "Kun",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALW t",
        "judul": "Tata Bahasa",
        "pengarang": "Alwi",
        "penerbit": "Balai Pustaka",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALW t",
        "judul": "Tata Bahasa",
        "pengarang": "Alwi",
        "penerbit": "Balai Pustaka",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALW t",
        "judul": "Tata Bahasa",
        "pengarang": "Alwi",
        "penerbit": "Balai Pustaka",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALW t",
        "judul": "Tata Bahasa",
        "pengarang": "Alwi",
        "penerbit": "Balai Pustaka",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 KRI k",
        "judul": "Kamus",
        "pengarang": "Krida",
        "penerbit": "Erlangga",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "411 ALE b",
        "judul": "Bahasa",
        "pengarang": "Alex",
        "penerbit": "Yrama Widya",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Bahasa"
    },
    {
        "kodeBuku": "500.03 TIM k",
        "judul": "Kamus",
        "pengarang": "Tim",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "500.03 TIM k",
        "judul": "Kamus",
        "pengarang": "Tim",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "500.03 TIM k",
        "judul": "Kamus",
        "pengarang": "Tim",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "501 SUG f",
        "judul": "Filsafat",
        "pengarang": "Sugiono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "501 SUR i",
        "judul": "Ilmu",
        "pengarang": "Surajiyo",
        "penerbit": "Bumi Aksara",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "507 AHM i",
        "judul": "Ilmu",
        "pengarang": "Ahmadi",
        "penerbit": "Bumi Aksara",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 KAB m",
        "judul": "Matematika",
        "pengarang": "Kabo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 TIM m",
        "judul": "Matematika",
        "pengarang": "Tim",
        "penerbit": "Pakar Raya",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 KAB m",
        "judul": "Matematika",
        "pengarang": "Kabo",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 DJU m",
        "judul": "Matematika",
        "pengarang": "Djumingin",
        "penerbit": "Pakar Raya",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 KAR s",
        "judul": "Statistika",
        "pengarang": "Kartono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUY m",
        "judul": "Metodologi",
        "pengarang": "Suyanto",
        "penerbit": "Andi",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUY m",
        "judul": "Metodologi",
        "pengarang": "Suyanto",
        "penerbit": "Andi",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUY p",
        "judul": "Penelitian",
        "pengarang": "Suyanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUB s",
        "judul": "Statistik",
        "pengarang": "Subagyo",
        "penerbit": "BPFE",
        "tahunTerbit": "2003",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 MAN s",
        "judul": "Statistika",
        "pengarang": "Mangkuatmodjo",
        "penerbit": "Rineka Cipta",
        "tahunTerbit": "2004",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 DJA s",
        "judul": "Statistika",
        "pengarang": "Djarwanto",
        "penerbit": "BPFE",
        "tahunTerbit": "2004",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 ANT p",
        "judul": "Probabilitas",
        "pengarang": "Anto",
        "penerbit": "BPFE",
        "tahunTerbit": "2000",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 BUD p",
        "judul": "Penelitian",
        "pengarang": "Budi",
        "penerbit": "BPFE",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUD s",
        "judul": "Statistik",
        "pengarang": "Sudjana",
        "penerbit": "Tarsito",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUD p",
        "judul": "Penelitian",
        "pengarang": "Sudjana",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 PAS s",
        "judul": "Statistik",
        "pengarang": "Pasaribu",
        "penerbit": "Ghalia",
        "tahunTerbit": "1983",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUD p",
        "judul": "Penelitian",
        "pengarang": "Sudjana",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 PAS s",
        "judul": "Statistik",
        "pengarang": "Pasaribu",
        "penerbit": "Ghalia",
        "tahunTerbit": "1983",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUD p",
        "judul": "Penelitian",
        "pengarang": "Sudjana",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 ARI p",
        "judul": "Penelitian",
        "pengarang": "Arikunto",
        "penerbit": "Rineka Cipta",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 ARI p",
        "judul": "Penelitian",
        "pengarang": "Arikunto",
        "penerbit": "Rineka Cipta",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 ARI m",
        "judul": "Manajemen",
        "pengarang": "Arikunto",
        "penerbit": "Rineka Cipta",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 FUR p",
        "judul": "Penelitian",
        "pengarang": "Furqon",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 ISK m",
        "judul": "Metodologi",
        "pengarang": "Iskandar",
        "penerbit": "Gaung Persada",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Memahami",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Memahami",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Memahami",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Metode",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Memahami",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG m",
        "judul": "Memahami",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2011",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUG s",
        "judul": "Statistika",
        "pengarang": "Sugiono",
        "penerbit": "Alfabeta",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUN s",
        "judul": "Statistik",
        "pengarang": "Sunyoto",
        "penerbit": "Refika",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "510 SUY m",
        "judul": "Metodologi",
        "pengarang": "Suyanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "574.03 TIM k",
        "judul": "Kamus",
        "pengarang": "Tim",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "574.03 TIM k",
        "judul": "Kamus",
        "pengarang": "Tim",
        "penerbit": "Bintang Indonesia",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Sains & Matematika"
    },
    {
        "kodeBuku": "603 TIM k",
        "judul": "Kamus",
        "pengarang": "Tim",
        "penerbit": "Pakar Raya",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 ANW g",
        "judul": "Gizi",
        "pengarang": "Anwar",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 GUN s",
        "judul": "Sehat",
        "pengarang": "Guntur",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 ANW g",
        "judul": "Gizi",
        "pengarang": "Anwar",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 HAR s",
        "judul": "Saat",
        "pengarang": "Hartono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 SUR s",
        "judul": "Sehat",
        "pengarang": "Suratman",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 HAN m",
        "judul": "Mengenal",
        "pengarang": "Handayani",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 SUR s",
        "judul": "Sehat",
        "pengarang": "Suratman",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 PRA s",
        "judul": "Siaga",
        "pengarang": "Pramono",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 PUR a",
        "judul": "Ayurveda",
        "pengarang": "Purwanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 WAH t",
        "judul": "Tubuh",
        "pengarang": "Wahyudin",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "613 WAH t",
        "judul": "Tubuh",
        "pengarang": "Wahyudin",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "615 SET t",
        "judul": "Tanaman",
        "pengarang": "Setiawan",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "615 PRA t",
        "judul": "Tanaman",
        "pengarang": "Prapti",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "615 WAH t",
        "judul": "Tumbuhan",
        "pengarang": "Wahyu",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "615 ROH d",
        "judul": "Dahsyatnya",
        "pengarang": "Rohma",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "615 WAH t",
        "judul": "Tumbuhan",
        "pengarang": "Wahyu",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "615 ROH d",
        "judul": "Dahsyatnya",
        "pengarang": "Rohma",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 SUH a",
        "judul": "Aneka",
        "pengarang": "Suharmi",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 SUH a",
        "judul": "Aneka",
        "pengarang": "Suharmi",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 SUD m",
        "judul": "Mengenal",
        "pengarang": "Sudewo",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 BUD p",
        "judul": "Penyakit",
        "pengarang": "Budi",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 SUD m",
        "judul": "Mengenal",
        "pengarang": "Sudewo",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 WAH p",
        "judul": "Penyakit",
        "pengarang": "Wahyu",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 YOD a",
        "judul": "Ancaman",
        "pengarang": "Yod",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 WAH p",
        "judul": "Penyakit",
        "pengarang": "Wahyu",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616 YOD a",
        "judul": "Ancaman",
        "pengarang": "Yod",
        "penerbit": "Multi Solusindo",
        "tahunTerbit": "2008",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "616.1 HAW j",
        "judul": "Jantung",
        "pengarang": "Hawari",
        "penerbit": "FKUI",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "621.3 SUW p",
        "judul": "Pengantar",
        "pengarang": "Suwanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "621.3 SUW p",
        "judul": "Pengantar",
        "pengarang": "Suwanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "621.3 SUW p",
        "judul": "Pengantar",
        "pengarang": "Suwanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "621.3 SUW p",
        "judul": "Pengantar",
        "pengarang": "Suwanto",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "630 PET b",
        "judul": "Beternak",
        "pengarang": "Petunjuk",
        "penerbit": "Karya Kita",
        "tahunTerbit": "2012",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "631.5 SUD b",
        "judul": "Budidaya",
        "pengarang": "Sudarmono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "631.5 TUG p",
        "judul": "Pupuk",
        "pengarang": "Tugiyono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2009",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "631.5 SUD b",
        "judul": "Budidaya",
        "pengarang": "Sudarmono",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "2010",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK p",
        "judul": "Petunjuk",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1994",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 SUN b",
        "judul": "Budidaya",
        "pengarang": "Sunarjono",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "2006",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 SUN b",
        "judul": "Bertanam",
        "pengarang": "Sunarjono",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "2007",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 PIN b",
        "judul": "Budidaya",
        "pengarang": "Pinus",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 PIN b",
        "judul": "Budidaya",
        "pengarang": "Pinus",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 SET b",
        "judul": "Budidaya",
        "pengarang": "Setiawan",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 SET b",
        "judul": "Budidaya",
        "pengarang": "Setiawan",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "2005",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 ROH b",
        "judul": "Budidaya",
        "pengarang": "Rahmat",
        "penerbit": "Penebar Swadaya",
        "tahunTerbit": "1993",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK 0",
        "kategori": "Teknologi"
    },
    {
        "kodeBuku": "633 AAK b",
        "judul": "Budidaya",
        "pengarang": "AAK",
        "penerbit": "Kanisius",
        "tahunTerbit": "1992",
        "lokasi": "RAK"
    }
    ];