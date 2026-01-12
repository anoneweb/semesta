const numerologyData = {
    1: {
        label: "The Pioneer (Sang Perintis)",
        desc: "Angka 1 adalah energi permulaan. Anda memiliki jiwa kepemimpinan alami, mandiri, dan sering merasa berbeda dari orang kebanyakan.",
        career: "Cocok memimpin proyek sendiri, bisnis, atau inovator teknologi.",
        love: "Anda butuh pasangan yang tidak mengekang kebebasan Anda."
    },
    2: {
        label: "The Peacemaker (Sang Penyeimbang)",
        desc: "Anda memiliki intuisi tajam dan hati yang lembut. Kekuatan Anda ada pada diplomasi dan kemampuan memahami perasaan orang lain.",
        career: "Konselor, seniman, atau bidang kesehatan.",
        love: "Sangat setia, namun hati-hati agar tidak dimanfaatkan pasangan."
    },
    3: {
        label: "The Creative (Sang Ekspresif)",
        desc: "Semesta memberkati Anda dengan pesona dan kreativitas. Anda adalah pembawa keceriaan, namun sering sulit fokus pada satu hal.",
        career: "Entertainment, penulis, marketing, atau desain.",
        love: "Anda butuh hubungan yang penuh tawa dan tidak membosankan."
    },
    4: {
        label: "The Builder (Sang Pembangun)",
        desc: "Anda adalah fondasi yang kokoh. Disiplin, jujur, dan pekerja keras. Anda memandang dunia dengan logika dan keteraturan.",
        career: "Arsitek, akuntan, manajemen, atau teknik.",
        love: "Mencari kestabilan jangka panjang, bukan drama sesaat."
    },
    5: {
        label: "The Adventurer (Sang Petualang)",
        desc: "Kebebasan adalah napas Anda. Anda mudah beradaptasi dengan perubahan dan memiliki rasa ingin tahu yang tak terbatas.",
        career: "Travel, jurnalisme, sales, atau freelancer.",
        love: "Sulit berkomitmen kecuali pasangan Anda juga suka berpetualang."
    },
    6: {
        label: "The Nurturer (Sang Pengayom)",
        desc: "Energi 'Ibu/Bapak' ada pada Anda. Bertanggung jawab dan sangat peduli pada keluarga. Anda sering menjadi tempat curhat orang lain.",
        career: "Guru, dokter, pelayanan publik, atau kuliner.",
        love: "Tipe pasangan idaman untuk menikah dan berkeluarga."
    },
    7: {
        label: "The Seeker (Sang Pencari)",
        desc: "Anda memiliki pikiran filosofis dan analitis. Anda tidak mudah percaya pada kulit luar, selalu mencari kebenaran terdalam.",
        career: "Peneliti, programmer, analis data, atau ilmuwan.",
        love: "Butuh waktu sendiri (Me Time). Pasangan harus paham privasi Anda."
    },
    8: {
        label: "The Powerhouse (Sang Eksekutif)",
        desc: "Anda memiliki bakat alami dalam mengelola materi dan kekuasaan. Ambisius dan berorientasi pada hasil nyata.",
        career: "Bisnis besar, keuangan, hukum, atau pejabat.",
        love: "Butuh pasangan yang suportif dan tidak minder dengan kesuksesan Anda."
    },
    9: {
        label: "The Humanitarian (Sang Humanis)",
        desc: "Jiwa yang tua dan bijaksana. Anda peduli pada gambaran besar dan kemanusiaan. Sering rela berkorban demi orang banyak.",
        career: "Aktivis, seni murni, dokter hewan, atau relawan.",
        love: "Romantis dan idealis, mendambakan koneksi jiwa yang dalam."
    }
};

function revealDestiny() {
    const name = document.getElementById('name').value;
    const dateInput = document.getElementById('birthdate').value;

    if (!name || !dateInput) {
        alert("Mohon lengkapi nama dan tanggal lahir untuk memulai.");
        return;
    }

    // Efek Loading
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    setTimeout(() => {
        calculateLogic(name, dateInput);
    }, 1500); // Delay 1.5 detik agar terlihat "mikir"
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

    document.getElementById('user-greeting').innerText = `Halo, ${name}`;
    document.getElementById('path-number').innerText = sum;
    document.getElementById('description').innerText = data.desc;
    document.getElementById('career-text').innerText = data.career;
    document.getElementById('love-text').innerText = data.love;
}

function reset() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('name').value = '';
    document.getElementById('birthdate').value = '';
}
