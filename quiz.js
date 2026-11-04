/* =====================================================
   QUIZ.JS — Kuis & Latihan Interaktif
   ===================================================== */

/* ── Bank Soal ── */
const SOAL_BANK = [
  // === KATEGORI: Tashrif Istilahi ===
  {
    kategori: "Tashrif Istilahi",
    level: "pemula",
    soal: "Apakah isim fa'il dari fi'il نَصَرَ (menolong)?",
    soalAr: "نَصَرَ",
    jawaban: 1,
    pilihan: ["مَنْصُوْرٌ","نَاصِرٌ","نَصْرٌ","مَنْصَرٌ"],
    penjelasan: "Isim fa'il dari wazan فَعَلَ adalah فَاعِلٌ. Maka نَصَرَ → نَاصِرٌ (orang yang menolong). مَنْصُوْرٌ adalah isim maf'ul, نَصْرٌ adalah masdar."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "pemula",
    soal: "Apakah isim maf'ul dari fi'il ضَرَبَ (memukul)?",
    soalAr: "ضَرَبَ",
    jawaban: 0,
    pilihan: ["مَضْرُوْبٌ","ضَارِبٌ","ضَرْبٌ","مِضْرَبٌ"],
    penjelasan: "Isim maf'ul dari wazan فَعَلَ adalah مَفْعُوْلٌ. Maka ضَرَبَ → مَضْرُوْبٌ (yang dipukul). ضَارِبٌ adalah isim fa'il."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "pemula",
    soal: "Apakah fi'il amr dari فَتَحَ - يَفْتَحُ (membuka)?",
    soalAr: "فَتَحَ - يَفْتَحُ",
    jawaban: 2,
    pilihan: ["يَفْتَحُ","فَاتِحٌ","اِفْتَحْ","فَتَحَ"],
    penjelasan: "Fi'il amr dari bab III (فَعَلَ - يَفْعَلُ) dibentuk dengan: buang huruf mudhari' (ي), jika dimulai sukun tambahkan hamzah washl. Maka يَفْتَحُ → اِفْتَحْ."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "pemula",
    soal: "Apakah masdar dari fi'il عَلَّمَ - يُعَلِّمُ (mengajarkan) pada wazan فَعَّلَ?",
    soalAr: "عَلَّمَ - يُعَلِّمُ",
    jawaban: 3,
    pilihan: ["عِلْمًا","عَالِمٌ","تَعَلُّمٌ","تَعْلِيْمًا"],
    penjelasan: "Masdar dari wazan فَعَّلَ adalah تَفْعِيْلٌ. Maka عَلَّمَ → تَعْلِيْمًا. Jangan tertukar dengan عِلْمٌ (masdar dari عَلِمَ) atau تَعَلُّمٌ (masdar dari تَعَلَّمَ)."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "menengah",
    soal: "Apakah fi'il madhi majhul dari أَكْرَمَ (memuliakan)?",
    soalAr: "أَكْرَمَ",
    jawaban: 1,
    pilihan: ["كُرِمَ","أُكْرِمَ","يُكْرَمُ","مُكْرَمٌ"],
    penjelasan: "Fi'il madhi majhul dari أَفْعَلَ dibentuk dengan dhammah di awal dan kasrah sebelum akhir: أُكْرِمَ. Bukan كُرِمَ (itu majhul dari كَرُمَ)."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "menengah",
    soal: "Apakah isim fa'il dari wazan اِسْتَفْعَلَ? (contoh: اِسْتَغْفَرَ)",
    soalAr: "اِسْتَغْفَرَ",
    jawaban: 2,
    pilihan: ["مُسْتَغْفَرٌ","اِسْتِغْفَارٌ","مُسْتَغْفِرٌ","يَسْتَغْفِرُ"],
    penjelasan: "Isim fa'il dari اِسْتَفْعَلَ adalah مُسْتَفْعِلٌ. Maka اِسْتَغْفَرَ → مُسْتَغْفِرٌ (orang yang beristighfar). مُسْتَغْفَرٌ adalah isim maf'ul, اِسْتِغْفَارٌ adalah masdar."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "menengah",
    soal: "Apakah masdar dari fi'il اِجْتَمَعَ (berkumpul)?",
    soalAr: "اِجْتَمَعَ",
    jawaban: 0,
    pilihan: ["اِجْتِمَاعًا","تَجَمُّعًا","جَمْعًا","مُجْتَمَعٌ"],
    penjelasan: "Masdar dari اِفْتَعَلَ adalah اِفْتِعَالٌ. Maka اِجْتَمَعَ → اِجْتِمَاعًا. تَجَمُّعٌ adalah masdar dari تَجَمَّعَ (wazan تَفَعَّلَ), جَمْعٌ adalah masdar dari جَمَعَ."
  },
  {
    kategori: "Tashrif Istilahi",
    level: "lanjutan",
    soal: "Apakah masdar dari fi'il اِنْكَسَرَ (menjadi patah)?",
    soalAr: "اِنْكَسَرَ",
    jawaban: 3,
    pilihan: ["كَسْرًا","تَكَسُّرًا","مُنْكَسَرٌ","اِنْكِسَارًا"],
    penjelasan: "Masdar dari اِنْفَعَلَ adalah اِنْفِعَالٌ. Maka اِنْكَسَرَ → اِنْكِسَارًا. كَسْرٌ adalah masdar dari كَسَرَ, تَكَسُّرٌ dari تَكَسَّرَ."
  },

  // === KATEGORI: Tashrif Lughawi ===
  {
    kategori: "Tashrif Lughawi",
    level: "pemula",
    soal: "Manakah bentuk tashrif lughawi yang benar untuk dhamir هُمْ dari fi'il نَصَرَ (madhi ma'lum)?",
    soalAr: "نَصَرَ + هُمْ",
    jawaban: 2,
    pilihan: ["نَصَرُوْنَ","نَصَرْنَ","نَصَرُوْا","نَصَرَا"],
    penjelasan: "هُمْ (mereka laki-laki) + fi'il madhi → ditambahkan و + ا di akhir: نَصَرُوْا. نَصَرْنَ adalah untuk هُنَّ (mereka perempuan), نَصَرَا untuk هُمَا."
  },
  {
    kategori: "Tashrif Lughawi",
    level: "pemula",
    soal: "Manakah bentuk mudhari' yang benar untuk dhamir أَنَا dari fi'il فَتَحَ?",
    soalAr: "أَنَا + يَفْتَحُ",
    jawaban: 1,
    pilihan: ["يَفْتَحُ","أَفْتَحُ","تَفْتَحُ","نَفْتَحُ"],
    penjelasan: "Dhamir أَنَا (saya) untuk fi'il mudhari' menggunakan huruf mudhari' أَ (hamzah). Maka: أَفْتَحُ. يَفْتَحُ untuk هُوَ, تَفْتَحُ untuk هِيَ/أَنْتَ, نَفْتَحُ untuk نَحْنُ."
  },
  {
    kategori: "Tashrif Lughawi",
    level: "pemula",
    soal: "Manakah bentuk fi'il amr yang benar untuk dhamir أَنْتُمْ dari fi'il ضَرَبَ?",
    soalAr: "أَنْتُمْ + اِضْرِبْ",
    jawaban: 0,
    pilihan: ["اِضْرِبُوْا","اِضْرِبَا","اِضْرِبِيْ","اِضْرِبْ"],
    penjelasan: "Fi'il amr untuk أَنْتُمْ (kamu semua laki-laki) ditambahkan و + ا di akhir: اِضْرِبُوْا. اِضْرِبَا untuk أَنْتُمَا, اِضْرِبِيْ untuk أَنْتِ."
  },
  {
    kategori: "Tashrif Lughawi",
    level: "menengah",
    soal: "Manakah bentuk madhi majhul yang benar untuk dhamir هِيَ dari fi'il عَلِمَ?",
    soalAr: "هِيَ + عُلِمَ",
    jawaban: 3,
    pilihan: ["عُلِمُوْا","عُلِمَا","عُلِمَ","عُلِمَتْ"],
    penjelasan: "Fi'il madhi untuk dhamir هِيَ (dia perempuan) ditambahkan تْ di akhir. Maka عُلِمَ + تْ = عُلِمَتْ. عُلِمَ untuk هُوَ, عُلِمَا untuk هُمَا, عُلِمُوْا untuk هُمْ."
  },
  {
    kategori: "Tashrif Lughawi",
    level: "menengah",
    soal: "Manakah bentuk mudhari' majhul yang benar untuk dhamir هُمَا (lk.) dari fi'il ضَرَبَ?",
    soalAr: "هُمَا + يُضْرَبُ",
    jawaban: 2,
    pilihan: ["يُضْرَبُوْنَ","يُضْرَبُ","يُضْرَبَانِ","تُضْرَبَانِ"],
    penjelasan: "هُمَا (dua orang laki-laki) + mudhari' → ditambahkan انِ di akhir: يُضْرَبَانِ. يُضْرَبُ untuk هُوَ, يُضْرَبُوْنَ untuk هُمْ, تُضْرَبَانِ untuk هُمَا perempuan."
  },

  // === KATEGORI: Wazan & Makna ===
  {
    kategori: "Wazan & Makna",
    level: "pemula",
    soal: "Wazan أَفْعَلَ umumnya memiliki makna...",
    soalAr: "أَفْعَلَ",
    jawaban: 0,
    pilihan: ["Ta'diyah (menjadikan transitif)","Mutawa'ah (akibat tindakan)","Musyarakah (saling melakukan)","Thalab (meminta)"],
    penjelasan: "Wazan أَفْعَلَ paling sering bermakna ta'diyah: menjadikan fi'il lazim menjadi muta'addi, atau menyebabkan sesuatu. Contoh: كَرُمَ (mulia) → أَكْرَمَ (memuliakan orang lain)."
  },
  {
    kategori: "Wazan & Makna",
    level: "pemula",
    soal: "Wazan تَفَاعَلَ umumnya memiliki makna...",
    soalAr: "تَفَاعَلَ",
    jawaban: 1,
    pilihan: ["Thalab (meminta)","Musyarakah (saling melakukan)","Ta'diyah","Mutawa'ah dari فَعَّلَ"],
    penjelasan: "Wazan تَفَاعَلَ adalah mutawa'ah dari فَاعَلَ dan paling sering bermakna musyarakah (saling melakukan). Contoh: تَعَاوَنَ (bekerja sama), تَنَاصَرَ (saling menolong)."
  },
  {
    kategori: "Wazan & Makna",
    level: "menengah",
    soal: "Apakah wazan dari fi'il اِسْتَغْفَرَ?",
    soalAr: "اِسْتَغْفَرَ",
    jawaban: 3,
    pilihan: ["اِفْتَعَلَ","اِنْفَعَلَ","تَفَعَّلَ","اِسْتَفْعَلَ"],
    penjelasan: "اِسْتَغْفَرَ memiliki pola: hamzah washl + سـ + تـ + fa' + 'ain + lam. Ini adalah wazan اِسْتَفْعَلَ (mazid 3 huruf). Makna: meminta maghfirah/ampunan."
  },
  {
    kategori: "Wazan & Makna",
    level: "menengah",
    soal: "Fi'il تَعَلَّمَ adalah mutawa'ah (akibat/hasil) dari fi'il...",
    soalAr: "تَعَلَّمَ",
    jawaban: 0,
    pilihan: ["عَلَّمَ","عَلِمَ","أَعْلَمَ","اِعْتَلَمَ"],
    penjelasan: "تَعَلَّمَ (belajar) adalah mutawa'ah dari عَلَّمَ (mengajarkan). Wazan تَفَعَّلَ adalah mutawa'ah dari فَعَّلَ. Artinya: seseorang belajar karena ada yang mengajar."
  },
  {
    kategori: "Wazan & Makna",
    level: "lanjutan",
    soal: "Apakah perbedaan makna antara عَلِمَ dan أَعْلَمَ?",
    soalAr: "عَلِمَ vs أَعْلَمَ",
    jawaban: 2,
    pilihan: [
      "عَلِمَ = mengajarkan, أَعْلَمَ = mengetahui",
      "Keduanya bermakna sama: mengetahui",
      "عَلِمَ = mengetahui (lazim), أَعْلَمَ = memberitahu (muta'addi)",
      "عَلِمَ = belajar, أَعْلَمَ = berilmu"
    ],
    penjelasan: "عَلِمَ (bab IV, فَعِلَ يَفْعَلُ) = mengetahui sesuatu — fi'il lazim atau muta'addi ke 1 objek. أَعْلَمَ (wazan أَفْعَلَ) = memberitahu/menginformasikan seseorang — muta'addi ke 2 objek. Ini adalah contoh bagaimana ziyadah mengubah makna."
  },

  // === KATEGORI: Pembagian Fi'il ===
  {
    kategori: "Pembagian Fi'il",
    level: "pemula",
    soal: "Fi'il ذَهَبَ (pergi) termasuk fi'il...",
    soalAr: "ذَهَبَ",
    jawaban: 1,
    pilihan: ["Ruba'i Mujarrad","Tsulatsi Mujarrad","Tsulatsi Mazid","Ruba'i Mazid"],
    penjelasan: "ذَهَبَ memiliki tiga huruf asli: ذ - ه - ب, tanpa huruf tambahan. Maka ini adalah fi'il tsulatsi mujarrad. Bab II: فَعَلَ - يَفْعِلُ."
  },
  {
    kategori: "Pembagian Fi'il",
    level: "pemula",
    soal: "Fi'il دَحْرَجَ (menggelindingkan) termasuk fi'il...",
    soalAr: "دَحْرَجَ",
    jawaban: 0,
    pilihan: ["Ruba'i Mujarrad","Tsulatsi Mazid","Tsulatsi Mujarrad","Ruba'i Mazid"],
    penjelasan: "دَحْرَجَ memiliki empat huruf asli: د - ح - ر - ج, tanpa huruf tambahan. Maka ini adalah fi'il ruba'i mujarrad dengan wazan فَعْلَلَ."
  },
  {
    kategori: "Pembagian Fi'il",
    level: "menengah",
    soal: "Fi'il قَالَ (berkata) termasuk jenis fi'il mu'tal apa?",
    soalAr: "قَالَ",
    jawaban: 2,
    pilihan: ["Mu'tal Mitsal","Mu'tal Naqish","Mu'tal Ajwaf","Lafif Mafruq"],
    penjelasan: "قَالَ memiliki akar ق - و - ل. Huruf 'ain fi'ilnya (و) adalah huruf 'illah yang berubah menjadi alif. Fi'il yang 'ain-nya berupa huruf 'illah disebut mu'tal ajwaf (berongga di tengah)."
  },
  {
    kategori: "Pembagian Fi'il",
    level: "menengah",
    soal: "Fi'il وَصَلَ (sampai/tiba) termasuk jenis fi'il mu'tal apa?",
    soalAr: "وَصَلَ",
    jawaban: 0,
    pilihan: ["Mu'tal Mitsal","Mu'tal Ajwaf","Mu'tal Naqish","Shahih Salim"],
    penjelasan: "وَصَلَ memiliki akar و - ص - ل. Huruf fa' fi'ilnya (و) adalah huruf 'illah. Fi'il yang fa'-nya berupa huruf 'illah (waw atau ya') disebut mu'tal mitsal."
  },
  {
    kategori: "Pembagian Fi'il",
    level: "lanjutan",
    soal: "Fi'il كَتَبَ (menulis) adalah fi'il shahih jenis...",
    soalAr: "كَتَبَ",
    jawaban: 3,
    pilihan: ["Mahmuz","Mudha'af","Mu'tal Mitsal","Salim"],
    penjelasan: "كَتَبَ memiliki akar ك - ت - ب. Semua hurufnya bukan hamzah, tidak mudha'af, bukan 'illah. Maka termasuk shahih salim — paling 'selamat' dari perubahan."
  },

  // === KATEGORI: Sejarah & Tokoh ===
  {
    kategori: "Sejarah & Tokoh",
    level: "pemula",
    soal: "Siapakah yang dikenal sebagai 'bapak ilmu Nahwu'?",
    soalAr: "",
    jawaban: 1,
    pilihan: ["Sibawaih","Abu al-Aswad ad-Du'ali","Al-Khalil bin Ahmad","Ibn Malik"],
    penjelasan: "Abu al-Aswad ad-Du'ali (w. ~69 H) dikenal sebagai bapak ilmu Nahwu. Atas instruksi Sayyidina Ali bin Abi Thalib (menurut riwayat masyhur), beliau menyusun kaidah-kaidah pertama ilmu Nahwu dan meletakkan sistem tanda harakat."
  },
  {
    kategori: "Sejarah & Tokoh",
    level: "pemula",
    soal: "Kitab apakah yang ditulis oleh Sibawaih dan dianggap ensiklopedia Nahwu pertama?",
    soalAr: "",
    jawaban: 2,
    pilihan: ["الآجرومية","الألفية","الكتاب","الشافية"],
    penjelasan: "Sibawaih menulis 'الكتاب' (The Book) — kitab Nahwu paling monumental yang menjadi rujukan utama selama berabad-abad. Alfiyah ditulis oleh Ibn Malik, Ajurrumiyyah oleh Ibn Ajurrum, Syafiyah oleh Ibn al-Hajib."
  },
  {
    kategori: "Sejarah & Tokoh",
    level: "menengah",
    soal: "Alfiyah Ibn Malik terdiri dari berapa bait sya'ir?",
    soalAr: "ألفية ابن مالك",
    jawaban: 3,
    pilihan: ["500 bait","750 bait","999 bait","1002 bait"],
    penjelasan: "Alfiyah Ibn Malik terdiri dari 1002 bait sya'ir (rajaz), merangkum hampir seluruh kaidah Nahwu dan Shorof. Dinamakan 'Alfiyah' (seribu) karena mendekati 1000 bait."
  },
  {
    kategori: "Sejarah & Tokoh",
    level: "menengah",
    soal: "Al-Khalil bin Ahmad al-Farahidi dikenal berjasa dalam bidang...",
    soalAr: "الخليل بن أحمد الفراهيدي",
    jawaban: 0,
    pilihan: ["Menyempurnakan sistem harakat, kamus Arab, dan ilmu 'arudh","Menulis Alfiyah","Menyusun Ajurrumiyyah","Mendirikan mazhab Kufah"],
    penjelasan: "Al-Khalil (w. 170-175 H) berjasa dalam tiga hal besar: (1) menyempurnakan sistem tanda harakat yang kita gunakan sekarang, (2) menyusun kamus Arab pertama 'Kitab al-Ain', (3) menciptakan ilmu prosodi Arab ('Ilm al-'Arudh). Beliau juga guru Sibawaih."
  },

  // === KATEGORI: Nahwu Dasar ===
  {
    kategori: "Pengantar Nahwu",
    level: "pemula",
    soal: "Manakah dari berikut ini yang termasuk isim?",
    soalAr: "",
    jawaban: 0,
    pilihan: ["كِتَابٌ (kitab)","كَتَبَ (telah menulis)","مِنْ (dari)","يَكْتُبُ (sedang menulis)"],
    penjelasan: "كِتَابٌ adalah isim (kata benda) karena bisa menerima al-ta'rif (الكتاب), tanwin (كتابٌ), dan huruf jar. كَتَبَ dan يَكْتُبُ adalah fi'il, مِنْ adalah huruf."
  },
  {
    kategori: "Pengantar Nahwu",
    level: "pemula",
    soal: "Apa tanda i'rab rafa' yang paling umum?",
    soalAr: "",
    jawaban: 2,
    pilihan: ["Kasrah","Fathah","Dhammah","Sukun"],
    penjelasan: "Tanda asli rafa' adalah dhammah (ـُ). Tanda penggantinya: waw (untuk jama' mudzakkar salim dan asma' sittah), dan alif (untuk mutsanna)."
  },
  {
    kategori: "Pengantar Nahwu",
    level: "menengah",
    soal: "Dalam kalimat: جَاءَ الطَّالِبُ — apakah kedudukan kata الطَّالِبُ?",
    soalAr: "جَاءَ الطَّالِبُ",
    jawaban: 1,
    pilihan: ["Maf'ul bih (marfu')","Fa'il (marfu')","Mubtada' (marfu')","Khabar (marfu')"],
    penjelasan: "جَاءَ adalah fi'il, الطَّالِبُ adalah pelaku (fa'il) dari fi'il جَاءَ. Fa'il adalah marfu', tanda rafa'nya dhammah. Mubtada'-khabar digunakan pada jumlah ismiyyah (tanpa fi'il di awal)."
  },
  {
    kategori: "Pengantar Nahwu",
    level: "menengah",
    soal: "Kata mana yang mabni (tidak berubah harakatnya)?",
    soalAr: "",
    jawaban: 3,
    pilihan: ["الطَّالِبُ","كِتَابٌ","مُحَمَّدٌ","هُوَ"],
    penjelasan: "هُوَ (dhamir/kata ganti) adalah mabni — harakatnya tidak berubah meskipun kedudukannya dalam kalimat berbeda. الطَّالِبُ, كِتَابٌ, مُحَمَّدٌ adalah isim mu'rab yang bisa berubah harakatnya."
  },

  // === KATEGORI: Istilah Shorof ===
  {
    kategori: "Istilah Shorof",
    level: "pemula",
    soal: "Apakah yang dimaksud dengan 'wazan' dalam ilmu Shorof?",
    soalAr: "الْوَزْن",
    jawaban: 0,
    pilihan: [
      "Pola/cetakan kata yang dijadikan patokan untuk mengukur kata lain",
      "Kata yang digunakan dalam percakapan sehari-hari",
      "Tanda harakat pada huruf terakhir kata",
      "Huruf-huruf tambahan dalam suatu fi'il"
    ],
    penjelasan: "Wazan adalah pola atau cetakan kata yang digunakan untuk mengukur kata lain (mauzun). Contoh: فَعَلَ adalah wazan, نَصَرَ adalah mauzun-nya. Huruf ف, ع, ل dalam wazan adalah pengganti huruf asli kata."
  },
  {
    kategori: "Istilah Shorof",
    level: "pemula",
    soal: "Apakah yang dimaksud dengan fi'il mujarrad?",
    soalAr: "الْمُجَرَّد",
    jawaban: 2,
    pilihan: [
      "Fi'il yang memiliki huruf tambahan",
      "Fi'il yang berupa kata sifat",
      "Fi'il yang semua hurufnya adalah huruf asli tanpa tambahan",
      "Fi'il yang berasal dari bahasa asing"
    ],
    penjelasan: "Mujarrad artinya 'telanjang/bersih' — fi'il yang semua hurufnya adalah huruf asli, tanpa ada ziyadah (huruf tambahan). Lawan katanya adalah mazid (yang ada tambahan)."
  },
  {
    kategori: "Istilah Shorof",
    level: "menengah",
    soal: "Huruf-huruf yang bisa menjadi ziyadah (tambahan) dalam fi'il dirangkum dalam...",
    soalAr: "حروف الزيادة",
    jawaban: 1,
    pilihan: ["أَبْجَدٌ","سَأَلْتُمُوْنِيْهَا","الْهِجَائِيَّة","صَحِيْحٌ"],
    penjelasan: "Huruf ziyadah dirangkum dalam kalimat mnemonic: سَأَلْتُمُوْنِيْهَا — terdiri dari 10 huruf: س، أ، ل، ت، م، و، ن، ي، ه، ا. Dari 10 huruf inilah semua ziyadah diambil."
  },
  {
    kategori: "Istilah Shorof",
    level: "lanjutan",
    soal: "Manakah yang merupakan pernyataan benar tentang hubungan masdar dan fi'il menurut ulama Bashrah?",
    soalAr: "الْمَصْدَر",
    jawaban: 0,
    pilihan: [
      "Masdar adalah asal, fi'il diambil dari masdar",
      "Fi'il adalah asal, masdar diambil dari fi'il",
      "Keduanya tidak memiliki hubungan asal-turunan",
      "Masdar hanya berlaku untuk fi'il tsulatsi"
    ],
    penjelasan: "Mayoritas ulama Bashrah berpendapat bahwa masdar adalah asal, dan fi'il diambil darinya. Contoh: ضَرْبٌ (masdar) adalah asal, ضَرَبَ (fi'il) adalah turunan. Ulama Kufah justru sebaliknya. Perbedaan ini terkenal dalam sejarah ilmu Nahwu."
  }
];

/* =====================================================
   RENDER KUIS
   ===================================================== */
function renderKuis(c) {
  c.innerHTML = `
  <div class="page-header">
    <h1>Kuis &amp; Latihan Interaktif</h1>
    <p class="subtitle">Uji pemahaman ilmu Shorof dan Nahwu Anda.</p>
  </div>
  <div class="card">
    <div class="card-title">Pengaturan Kuis</div>
    <div class="form-row">
      <label class="form-label">Kategori Soal:</label>
      <select class="form-select" id="quiz-kategori">
        <option value="semua">Semua Kategori</option>
        <option value="Tashrif Istilahi">Tashrif Istilahi</option>
        <option value="Tashrif Lughawi">Tashrif Lughawi</option>
        <option value="Wazan & Makna">Wazan &amp; Makna</option>
        <option value="Pembagian Fi'il">Pembagian Fi'il</option>
        <option value="Sejarah & Tokoh">Sejarah &amp; Tokoh</option>
        <option value="Pengantar Nahwu">Pengantar Nahwu</option>
        <option value="Istilah Shorof">Istilah Shorof</option>
      </select>
    </div>
    <div class="form-row">
      <label class="form-label">Level:</label>
      <select class="form-select" id="quiz-level">
        <option value="semua">Semua Level</option>
        <option value="pemula">Pemula</option>
        <option value="menengah">Menengah</option>
        <option value="lanjutan">Lanjutan</option>
      </select>
    </div>
    <div class="form-row">
      <label class="form-label">Jumlah Soal:</label>
      <select class="form-select" id="quiz-jumlah">
        <option value="5">5 soal</option>
        <option value="10" selected>10 soal</option>
        <option value="15">15 soal</option>
        <option value="20">20 soal</option>
      </select>
    </div>
    <button class="btn btn-primary btn-lg" onclick="startQuiz()">Mulai Kuis</button>
  </div>
  <div id="quiz-area"></div>`;
}

/* ── Quiz State ── */
let quizState = {
  soal: [],
  current: 0,
  score: 0,
  answered: false,
  answers: []
};

function startQuiz() {
  const kat   = document.getElementById('quiz-kategori').value;
  const level = document.getElementById('quiz-level').value;
  const jml   = parseInt(document.getElementById('quiz-jumlah').value);

  let pool = SOAL_BANK.filter(s =>
    (kat   === 'semua' || s.kategori === kat) &&
    (level === 'semua' || s.level    === level)
  );

  if (pool.length < 3) {
    document.getElementById('quiz-area').innerHTML =
      `<div class="alert alert-warning">Tidak cukup soal untuk kombinasi ini. Coba pilih kategori atau level lain.</div>`;
    return;
  }

  // Acak dan ambil sejumlah soal
  pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(jml, pool.length));

  quizState = { soal: pool, current: 0, score: 0, answered: false, answers: [] };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById('quiz-area');
  if (!area) return;
  const { soal, current } = quizState;
  if (current >= soal.length) { renderQuizResult(); return; }

  const s = soal[current];
  const pct = Math.round((current / soal.length) * 100);

  const opts = s.pilihan.map((p, i) => `
    <button class="quiz-option" onclick="answerQuiz(${i})" id="opt-${i}">
      <span class="opt-letter">${String.fromCharCode(65+i)}</span>
      <span>${p}</span>
      ${p.match(/[\u0600-\u06FF]/) ? `<span class="opt-ar">${p}</span>` : ''}
    </button>`).join('');

  area.innerHTML = `
  <div class="quiz-container">
    <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${pct}%"></div></div>
    <div class="quiz-question">
      <div class="quiz-q-num">Soal ${current+1} dari ${soal.length} &nbsp;·&nbsp;
        <span class="badge badge-${s.level==='pemula'?'success':s.level==='menengah'?'warning':'primary'}">${s.level}</span>
        &nbsp;<span class="badge badge-muted">${s.kategori}</span>
      </div>
      <div class="quiz-q-text">${s.soal}</div>
      ${s.soalAr ? `<div class="quiz-q-ar">${s.soalAr}</div>` : ''}
    </div>
    <div class="quiz-options">${opts}</div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <div class="quiz-nav">
      <span style="font-size:.85rem;color:var(--text-muted);">Skor: ${quizState.score}/${current}</span>
      <button class="btn btn-primary" id="btn-next" onclick="nextQuestion()" style="display:none;">
        ${current+1 >= soal.length ? 'Lihat Hasil →' : 'Soal Berikutnya →'}
      </button>
    </div>
  </div>`;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;

  const s = quizState.soal[quizState.current];
  const isCorrect = idx === s.jawaban;
  if (isCorrect) quizState.score++;
  quizState.answers.push({ soal: s, pilihan: idx, correct: isCorrect });

  // Visual feedback
  document.querySelectorAll('.quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === s.jawaban) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  fb.className = `quiz-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
  fb.innerHTML = `
    <strong>${isCorrect ? 'Benar!' : 'Kurang tepat.'}</strong><br/>
    <em>Jawaban benar:</em> ${s.pilihan[s.jawaban]}<br/>
    <em>Penjelasan:</em> ${s.penjelasan}`;

  document.getElementById('btn-next').style.display = 'inline-flex';
}

function nextQuestion() {
  quizState.current++;
  quizState.answered = false;
  renderQuizQuestion();
}

function renderQuizResult() {
  const area = document.getElementById('quiz-area');
  const { score, soal, answers } = quizState;
  const total = soal.length;
  const pct   = Math.round((score / total) * 100);
  const grade = pct >= 90 ? 'Mumtaz (Sangat Baik)' :
                pct >= 70 ? 'Jayyid Jiddan (Baik Sekali)' :
                pct >= 60 ? 'Jayyid (Baik)' :
                pct >= 50 ? 'Maqbul (Cukup)' : 'Perlu Belajar Lagi';

  let reviewHtml = answers.map((a, i) => `
    <div class="card" style="margin-bottom:10px;border-left:4px solid ${a.correct?'#16a34a':'#dc2626'}">
      <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px;">Soal ${i+1} — ${a.soal.kategori}</div>
      <div style="font-weight:600;margin-bottom:6px;">${a.soal.soal}</div>
      ${a.soal.soalAr ? `<div class="ar" style="font-size:1.2rem;margin-bottom:6px;">${a.soal.soalAr}</div>` : ''}
      <div style="font-size:.85rem;">
        Jawaban Anda: <span style="color:${a.correct?'#16a34a':'#dc2626'};font-weight:600;">${a.soal.pilihan[a.pilihan]}</span><br/>
        ${!a.correct ? `Jawaban benar: <span style="color:#16a34a;font-weight:600;">${a.soal.pilihan[a.soal.jawaban]}</span><br/>` : ''}
        <em style="color:var(--text-muted);">${a.soal.penjelasan}</em>
      </div>
    </div>`).join('');

  area.innerHTML = `
  <div class="quiz-score">
    <div class="score-circle">${pct}%</div>
    <h2>${grade}</h2>
    <p style="color:var(--text-muted);margin-bottom:20px;">Anda menjawab benar <strong>${score}</strong> dari <strong>${total}</strong> soal.</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="startQuiz()">Ulangi Kuis</button>
      <button class="btn btn-outline" onclick="navigateTo('kuis')">Ganti Pengaturan</button>
    </div>
  </div>
  <div style="margin-top:24px;">
    <h3 style="margin-bottom:16px;font-size:1rem;color:var(--primary);">Review Jawaban</h3>
    ${reviewHtml}
  </div>`;
}
