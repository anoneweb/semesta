// DATABASE NARASI (Potongan-potongan paragraf)
// Kita buat banyak variasi agar hasilnya tidak pasaran.

const naskah = {
    // PARAGRAF 1: Sifat Dasar (Berdasarkan Tanggal Lahir / Life Path)
    core: [
        "Anda memiliki frekuensi energi yang sangat mandiri. Di dalam jiwa Anda, terdapat dorongan kuat untuk merintis jalan sendiri daripada mengikuti jejak orang lain. Semesta membentuk Anda sebagai inisiator, orang yang berani mengambil langkah pertama ketika orang lain ragu.",
        "Kepekaan emosional adalah kekuatan terbesar sekaligus kelemahan Anda. Anda diciptakan dengan sensor batin yang sangat halus, mampu menangkap nuansa perasaan orang di sekitar Anda tanpa mereka bicara. Anda adalah penyembuh alami bagi lingkungan Anda.",
        "Kreativitas mengalir deras dalam darah Anda. Anda tidak ditakdirkan untuk hidup dalam rutinitas yang kaku dan membosankan. Jiwa Anda selalu mencari cara untuk mengekspresikan diri, baik melalui kata-kata, seni, maupun ide-ide liar yang sering kali melampaui zaman.",
        "Keteraturan dan logika adalah fondasi hidup Anda. Anda adalah arsitek kehidupan yang melihat dunia sebagai struktur yang harus dibangun dengan kokoh. Orang lain mungkin melihat Anda kaku, namun sesungguhnya Anda hanya ingin memastikan keamanan bagi semua orang.",
        "Kebebasan adalah mata uang paling berharga bagi Anda. Jiwa Anda seperti angin yang tidak bisa ditangkap. Anda mudah beradaptasi, cepat belajar, namun juga cepat bosan. Tantangan terbesar Anda adalah menemukan satu hal untuk ditekuni hingga akhir.",
        "Tanggung jawab adalah nama tengah Anda. Semesta menitipkan energi 'pengasuh' dalam diri Anda. Anda sering kali merasa wajib membereskan masalah orang lain, dan kebahagiaan Anda sering kali bergantung pada keharmonisan lingkungan terdekat.",
        "Anda adalah pencari kebenaran sejati. Pikiran Anda analitis, filosofis, dan sering kali skeptis terhadap hal-hal yang terlihat di permukaan. Anda membutuhkan banyak waktu sendirian (solitude) untuk memproses kedalaman pikiran Anda yang jarang dipahami orang lain.",
        "Ambisi materi dan kekuasaan mengelilingi aura Anda. Anda memiliki potensi eksekutif yang kuat. Bagi Anda, hasil nyata adalah segalanya. Namun, ujian hidup Anda sering kali berkisar pada keseimbangan antara mengejar materi dan kepuasan batin.",
        "Anda adalah jiwa tua (Old Soul) yang humanis. Kepedulian Anda meluas melampaui diri sendiri dan keluarga, mencakup kemanusiaan. Anda sering merasa asing di dunia yang penuh kompetisi ini karena motivasi Anda adalah memberi, bukan mengambil."
    ],

    // PARAGRAF 2: Bawah Sadar & Emosi (Berdasarkan Jam Lahir)
    // Pagi (0-8), Siang (9-16), Malam (17-24)
    subconscious: [
        "Karena Anda lahir di bawah naungan energi fajar/pagi, bawah sadar Anda dipenuhi dengan harapan namun juga kecemasan akan masa depan. Anda sering kali merasa harus 'siap sedia', membuat Anda sulit untuk benar-benar rileks. Ada dorongan tersembunyi untuk membuktikan diri kepada dunia.",
        "Terlahir saat matahari tinggi (siang/sore), energi Anda bersifat ekspresif namun reaktif. Di permukaan Anda tampak tenang, namun di kedalaman batin, ada api yang mudah tersulut jika prinsip Anda dilanggar. Anda cenderung menyembunyikan luka batin di balik kesibukan aktivitas.",
        "Lahir di bawah naungan malam memberi Anda akses ke intuisi yang tajam namun misterius. Anda sering kali menyerap emosi negatif orang lain tanpa sadar. Sisi bayangan Anda adalah kecenderungan untuk overthinking dan menciptakan skenario buruk yang belum tentu terjadi."
    ],

    // PARAGRAF 3: Potensi & Karir (Gabungan Nama + Golongan Darah)
    career: [
        "Dalam aspek karir dan pencapaian, pola energi Anda menunjukkan kecocokan tinggi di bidang yang membutuhkan diplomasi dan strategi. Anda bukan tipe pekerja keras otot, melainkan pemikir taktis. Uang akan datang bukan dari seberapa keras Anda berkeringat, tapi seberapa pintar Anda membangun koneksi.",
        "Garis nasib Anda mengarah pada spesialisasi. Jangan menjadi generalis yang tahu sedikit tentang banyak hal. Pilihlah satu bidang unik, tekuni hingga ke akar-akarnya, dan di sanalah kelimpahan materi menunggu Anda. Dunia profesional Anda membutuhkan keahlian teknis yang mendalam.",
        "Anda memiliki 'Tangan Midas' dalam hal komunikasi dan persuasi. Bidang yang melibatkan negosiasi, penjualan, atau public speaking adalah ladang emas Anda. Namun hati-hati, inkonsistensi adalah musuh utama yang bisa menghancurkan karir yang sudah dibangun bertahun-tahun.",
        "Peta karir Anda unik: Anda lebih cocok bekerja dalam sistem yang sudah mapan atau institusi besar daripada merintis dari nol sendirian. Struktur memberi Anda rasa aman untuk berkembang. Rezeki Anda cenderung stabil dan meningkat perlahan seiring usia.",
        "Ada potensi wirausaha yang kuat, namun bercampur dengan risiko tinggi. Insting bisnis Anda tajam, tapi sering kali terburu-buru. Jika Anda bisa bermitra dengan seseorang yang detail dan hati-hati, potensi kesuksesan finansial Anda tidak terbatas."
    ],

    // PARAGRAF 4: Pesan Semesta / Saran (Randomized salt)
    advice: [
        "Pesan untuk fase hidup Anda saat ini: Berhentilah berlari. Apa yang Anda cari sesungguhnya sudah ada di dalam diri, hanya tertutup oleh kebisingan ambisi Anda sendiri. Cobalah untuk diam sejenak dan dengarkan intuisi pertama yang muncul.",
        "Semesta mengingatkan: Jangan takut melepaskan apa yang memang sudah tidak tumbuh lagi. Baik itu hubungan, pekerjaan, atau pola pikir lama. Sesuatu yang lebih baik sedang menunggu antrian untuk masuk, tapi tangan Anda masih terlalu penuh memegang masa lalu.",
        "Kunci keberuntungan Anda tahun ini terletak pada 'Memberi'. Ada sumbatan energi pada aliran rezeki Anda yang hanya bisa dibuka dengan keikhlasan membantu orang lain tanpa mengharap kembali. Hoki Anda tersembunyi di senyum orang yang Anda bantu.",
        "Waspadalah terhadap 'Vampir Energi' di lingkungan dekat Anda. Ada seseorang yang secara halus menguras kepercayaan diri Anda. Saatnya membuat batasan tegas. Prioritaskan kesehatan mental Anda di atas kesopanan basa-basi.",
        "Fokuslah pada penyelesaian. Anda punya banyak ide hebat, tapi sedikit yang tuntas. Satu proyek yang selesai jauh lebih berharga daripada sepuluh ide brilian yang hanya ada di kepala. Disiplin adalah jembatan antara impian dan kenyataan Anda."
    ]
};

function revealDestiny() {
    // 1. Ambil Data
    const name = document.getElementById('name').value;
    const dateInput = document.getElementById('birthdate').value;
    const timeInput = document.getElementById('birthtime').value;
    const bloodType = document.getElementById('bloodtype').value;

    // Validasi
    if (!name || !dateInput || !timeInput) {
        alert("Mohon lengkapi Nama, Tanggal Lahir, dan Jam Lahir untuk akurasi analisis.");
        return;
    }

    // Efek Loading
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    
    // Ubah teks loading biar seru
    const loadingTexts = [
        "Membaca konfigurasi bintang...", 
        "Menghitung numerologi nama...", 
        "Menyelaraskan energi...", 
        "Menyusun blueprint jiwa..."
    ];
    let step = 0;
    const interval = setInterval(() => {
        document.getElementById('loading-text').innerText = loadingTexts[step % loadingTexts.length];
        step++;
    }, 800);

    // Proses Kalkulasi (Simulasi "Mikir" 3 detik)
    setTimeout(() => {
        clearInterval(interval);
        generateAnalysis(name, dateInput, timeInput, bloodType);
    }, 3000);
}

function generateAnalysis(name, date, time, blood) {
    // 2. LOGIKA PEMILIHAN PARAGRAF (ALGORITMA)
    
    // A. Hitung Life Path (Untuk Paragraf 1)
    let digits = date.replace(/-/g, '');
    let sumDate = 0;
    for (let char of digits) sumDate += parseInt(char);
    // Reduksi ke 1-9
    while (sumDate > 9) {
        let temp = 0;
        for (let c of sumDate.toString()) temp += parseInt(c);
        sumDate = temp;
    }
    // Index array dimulai dari 0, jadi kurangi 1. (Jika hasil 9, ambil index 8)
    // Jika hasil 0 (error handling), default ke 0.
    let indexCore = (sumDate === 0) ? 0 : sumDate - 1;


    // B. Hitung Jam Lahir (Untuk Paragraf 2)
    const hour = parseInt(time.split(':')[0]);
    let indexSub = 0;
    if (hour >= 0 && hour < 9) indexSub = 0; // Pagi
    else if (hour >= 9 && hour < 17) indexSub = 1; // Siang
    else indexSub = 2; // Malam


    // C. Hitung Hash Nama + Gol Darah (Untuk Paragraf 3)
    let nameSum = 0;
    for (let i = 0; i < name.length; i++) {
        nameSum += name.charCodeAt(i);
    }
    // Tambah variasi dari Gol Darah
    if (blood === 'A') nameSum += 10;
    if (blood === 'B') nameSum += 20;
    if (blood === 'AB') nameSum += 30;
    if (blood === 'O') nameSum += 40;
    
    // Modulo dengan jumlah opsi karir (ada 5 opsi)
    let indexCareer = nameSum % 5;


    // D. Pesan Semesta (Untuk Paragraf 4)
    // Kombinasi Tanggal + Jam agar random tapi tetap sama untuk orang yang sama
    let uniqueSeed = sumDate + hour + nameSum;
    let indexAdvice = uniqueSeed % 5; // Modulo jumlah opsi advice


    // 3. TAMPILKAN HASIL
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    
    document.getElementById('result-name').innerText = name.toUpperCase();
    
    // Masukkan teks ke elemen paragraf
    document.getElementById('paragraf-1').innerText = naskah.core[indexCore];
    document.getElementById('paragraf-2').innerText = naskah.subconscious[indexSub];
    document.getElementById('paragraf-3').innerText = naskah.career[indexCareer];
    document.getElementById('paragraf-4').innerText = naskah.advice[indexAdvice];
}

function reset() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('name').value = '';
}
