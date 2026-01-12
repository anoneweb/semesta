const numerologyData = {
    1: {
        label: "The Pioneer (Sang Perintis)",
        desc: "Angka 1 adalah energi permulaan. Anda memiliki jiwa kepemimpinan alami, mandiri, dan sering merasa berbeda dari orang kebanyakan.",
        career: "CEO, Wirausahawan, Manajer, Inovator.",
        love: "Butuh pasangan yang tidak mengekang kebebasan.",
        finance: "Anda pandai mencari uang dengan cara unik, tapi cenderung impulsif dalam belanja. Investasi jangka panjang adalah kunci.",
        challenge: "Ego dan keras kepala. Belajarlah mendengarkan saran orang lain.",
        luck: "Merah, Hari Minggu, Batu Ruby."
    },
    2: {
        label: "The Peacemaker (Sang Penyeimbang)",
        desc: "Anda memiliki intuisi tajam dan hati yang lembut. Kekuatan Anda ada pada diplomasi dan kemampuan memahami perasaan orang lain.",
        career: "Konselor, Seniman, Kesehatan, HRD.",
        love: "Sangat setia, namun hati-hati dimanfaatkan.",
        finance: "Rezeki Anda mengalir melalui kemitraan atau kerjasama. Hindari spekulasi berisiko tinggi sendirian.",
        challenge: "Terlalu sensitif dan sulit berkata 'Tidak'.",
        luck: "Putih/Krem, Hari Senin, Mutiara."
    },
    3: {
        label: "The Creative (Sang Ekspresif)",
        desc: "Semesta memberkati Anda dengan pesona. Anda adalah pembawa keceriaan, namun sering sulit fokus pada satu hal.",
        career: "Entertainment, Penulis, Marketing, Desain.",
        love: "Butuh hubungan yang penuh tawa dan tidak membosankan.",
        finance: "Uang datang dengan mudah saat Anda gembira, tapi cepat habis untuk kesenangan sesaat.",
        challenge: "Kurang disiplin dan sering tidak menyelesaikan apa yang dimulai.",
        luck: "Kuning, Hari Kamis, Topaz."
    },
    4: {
        label: "The Builder (Sang Pembangun)",
        desc: "Anda adalah fondasi yang kokoh. Disiplin, jujur, dan pekerja keras. Anda memandang dunia dengan logika.",
        career: "Arsitek, Akuntan, Manajemen, Teknik.",
        love: "Mencari kestabilan, bukan drama sesaat.",
        finance: "Kekayaan Anda dibangun perlahan tapi sangat kokoh. Anda tipe penabung sejati.",
        challenge: "Kaku dan sulit menerima perubahan mendadak.",
        luck: "Hijau, Hari Minggu, Zamrud."
    },
    5: {
        label: "The Adventurer (Sang Petualang)",
        desc: "Kebebasan adalah napas Anda. Anda mudah beradaptasi dengan perubahan dan memiliki rasa ingin tahu tinggi.",
        career: "Travel, Sales, Jurnalis, Freelancer.",
        love: "Sulit berkomitmen kecuali pasangan juga suka berpetualang.",
        finance: "Rezeki fluktuatif (naik-turun). Berani ambil risiko membawa untung besar, tapi harus punya dana darurat.",
        challenge: "Tidak sabaran dan cepat bosan.",
        luck: "Biru Langit, Hari Rabu, Turquoise."
    },
    6: {
        label: "The Nurturer (Sang Pengayom)",
        desc: "Energi 'Orang Tua' ada pada Anda. Bertanggung jawab dan sangat peduli pada keluarga.",
        career: "Guru, Dokter, Pelayanan Publik, Kuliner.",
        love: "Tipe pasangan idaman untuk menikah.",
        finance: "Keuangan stabil karena Anda bertanggung jawab. Sering keluar uang justru untuk membantu orang lain.",
        challenge: "Terlalu mencampuri urusan orang lain (perfeksionis).",
        luck: "Biru Tua/Indigo, Hari Jumat, Safir."
    },
    7: {
        label: "The Seeker (Sang Pencari)",
        desc: "Anda memiliki pikiran filosofis. Anda tidak mudah percaya pada kulit luar, selalu mencari kebenaran.",
        career: "Peneliti, Programmer, Analis Data, Ilmuwan.",
        love: "Butuh 'Me Time'. Pasangan harus paham privasi.",
        finance: "Anda tidak terlalu materialistis, tapi intuisi tajam Anda bisa membawa hoki dalam investasi aset.",
        challenge: "Cenderung menarik diri (introvert) dan sinis.",
        luck: "Ungu, Hari Senin, Amethyst."
    },
    8: {
        label: "The Powerhouse (Sang Eksekutif)",
        desc: "Anda memiliki bakat alami mengelola kekuasaan. Ambisius dan berorientasi pada hasil nyata.",
        career: "Bisnis Besar, Keuangan, Hukum, Pejabat.",
        love: "Butuh pasangan suportif yang tidak minder.",
        finance: "Potensi jadi yang paling kaya di antara angka lain. Uang adalah alat kekuasaan bagi Anda.",
        challenge: "Gila kerja dan terkadang lupa istirahat.",
        luck: "Hitam/Abu-abu, Hari Sabtu, Berlian."
    },
    9: {
        label: "The Humanitarian (Sang Humanis)",
        desc: "Jiwa yang bijaksana. Anda peduli pada gambaran besar dan kemanusiaan. Rela berkorban.",
        career: "Aktivis, Seni Murni, Dokter Hewan, Relawan.",
        love: "Romantis dan idealis, mendambakan koneksi jiwa.",
        finance: "Rezeki datang saat Anda ikhlas memberi. Semakin pelit, semakin seret rezeki Anda.",
        challenge: "Terlalu emosional dan sering kecewa pada realita.",
        luck: "Emas/Tembaga, Hari Selasa, Opal."
    }
};

function revealDestiny() {
    const name = document.getElementById('name').value;
    const dateInput = document.getElementById('birthdate').value;

    if (!name || !dateInput) {
        alert("Mohon lengkapi nama dan tanggal lahir.");
        return;
    }

    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    setTimeout(() => {
        calculateLogic(name, dateInput);
    }, 1500);
}

function calculateLogic(name, dateInput) {
    let digits = dateInput.replace(/-/g, '');
    let sum = 0;
    for (let char of digits) sum += parseInt(char);
    while (sum > 9) {
        let tempSum = 0;
        let sumString = sum.toString();
        for (let char of sumString) tempSum += parseInt(char);
        sum = tempSum;
    }

    const data = numerologyData[sum];

    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    document.getElementById('user-greeting').innerText = `Peta Hidup: ${name}`;
    document.getElementById('path-number').innerText = sum;
    document.getElementById('path-label').innerText = data.label; // Label baru
    document.getElementById('description').innerText = data.desc;
    
    // Isi data ke elemen HTML
    document.getElementById('career-text').innerText = data.career;
    document.getElementById('love-text').innerText = data.love;
    document.getElementById('finance-text').innerText = data.finance;
    document.getElementById('challenge-text').innerText = data.challenge;
    document.getElementById('luck-text').innerText = data.luck;
}

function reset() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('name').value = '';
    document.getElementById('birthdate').value = '';
}
