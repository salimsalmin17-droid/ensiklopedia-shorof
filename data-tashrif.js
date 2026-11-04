/* =====================================================
   DATA-TASHRIF.JS — Bagian 1: Struktur & Tsulatsi Mujarrad
   ===================================================== */

/* ── Helper: dhamir labels ── */
const DHAMIR_MADHI = [
  "هُوَ","هِيَ","هُمَا (lk.)","هُمَا (pr.)","هُمْ","هُنَّ",
  "أَنْتَ","أَنْتِ","أَنْتُمَا","أَنْتُمْ","أَنْتُنَّ","أَنَا","نَحْنُ"
];
const DHAMIR_MUDHARI = [
  "هُوَ","هِيَ","هُمَا (lk.)","هُمَا (pr.)","هُمْ","هُنَّ",
  "أَنْتَ","أَنْتِ","أَنْتُمَا","أَنْتُمْ","أَنْتُنَّ","أَنَا","نَحْنُ"
];
const DHAMIR_AMR = [
  "أَنْتَ","أَنْتِ","أَنْتُمَا (lk.)","أَنْتُمَا (pr.)","أَنْتُمْ","أَنْتُنَّ"
];

/* =====================================================
   TSULATSI MUJARRAD — 6 BAB
   ===================================================== */
const TSULATSI_MUJARRAD = {

  overview: {
    title: "Fi'il Tsulatsi Mujarrad",
    titleAr: "الْفِعْلُ الثُّلَاثِيُّ الْمُجَرَّد",
    desc: "Fi'il yang terdiri dari tiga huruf asli tanpa huruf tambahan. Kelompok ini adalah yang paling banyak dalam kosakata bahasa Arab.",
    kaidah: "Fi'il tsulatsi mujarrad memiliki 6 bab (wazn), dibedakan berdasarkan harakat huruf 'ain fi'il pada madhi dan mudhari'.",
    bab: [
      { num:1, wazan:"فَعَلَ - يَفْعُلُ", harakat:"Fathah - Dhammah", contoh:"نَصَرَ - يَنْصُرُ", arti:"menolong" },
      { num:2, wazan:"فَعَلَ - يَفْعِلُ", harakat:"Fathah - Kasrah",   contoh:"ضَرَبَ - يَضْرِبُ", arti:"memukul" },
      { num:3, wazan:"فَعَلَ - يَفْعَلُ", harakat:"Fathah - Fathah",   contoh:"فَتَحَ - يَفْتَحُ", arti:"membuka" },
      { num:4, wazan:"فَعِلَ - يَفْعَلُ", harakat:"Kasrah - Fathah",   contoh:"عَلِمَ - يَعْلَمُ", arti:"mengetahui" },
      { num:5, wazan:"فَعُلَ - يَفْعُلُ", harakat:"Dhammah - Dhammah", contoh:"كَرُمَ - يَكْرُمُ", arti:"mulia" },
      { num:6, wazan:"فَعِلَ - يَفْعِلُ", harakat:"Kasrah - Kasrah",   contoh:"حَسِبَ - يَحْسِبُ", arti:"mengira" }
    ]
  },

  bab1: {
    id:"tm-bab1",
    num:1,
    wazan:"فَعَلَ - يَفْعُلُ",
    harakat:"Fathah - Dhammah",
    penjelasan:"Bab pertama: huruf 'ain fi'il berharakat fathah pada madhi dan dhammah pada mudhari'. Ini adalah bab yang paling produktif dalam bahasa Arab.",
    contohFiil:[
      { ar:"نَصَرَ - يَنْصُرُ", arti:"menolong",     root:"ن-ص-ر" },
      { ar:"دَخَلَ - يَدْخُلُ", arti:"masuk",        root:"د-خ-ل" },
      { ar:"خَرَجَ - يَخْرُجُ", arti:"keluar",       root:"خ-ر-ج" },
      { ar:"كَتَبَ - يَكْتُبُ", arti:"menulis",      root:"ك-ت-ب" },
      { ar:"سَكَنَ - يَسْكُنُ", arti:"tinggal/diam", root:"س-ك-ن" },
      { ar:"قَتَلَ - يَقْتُلُ", arti:"membunuh",     root:"ق-ت-ل" }
    ],
    utama:{ ar:"نَصَرَ", arti:"menolong", root:"ن-ص-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"نَصَرَ",         arti:"telah menolong" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَنْصُرُ",       arti:"sedang/akan menolong" },
        { label:"Masdar",                ar:"نَصْرًا",         arti:"pertolongan" },
        { label:"Fi'il Amr",             ar:"اُنْصُرْ",        arti:"tolonglah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَنْصُرْ",   arti:"jangan menolong!" },
        { label:"Isim Fa'il",            ar:"نَاصِرٌ",         arti:"penolong" },
        { label:"Isim Maf'ul",           ar:"مَنْصُوْرٌ",      arti:"yang ditolong" },
        { label:"Fi'il Madhi Majhul",    ar:"نُصِرَ",          arti:"telah ditolong" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُنْصَرُ",        arti:"sedang/akan ditolong" },
        { label:"Isim Zaman/Makan",      ar:"مَنْصَرٌ",        arti:"waktu/tempat pertolongan" },
        { label:"Isim Alat",             ar:"مِنْصَرٌ",        arti:"alat menolong" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","نَصَرَ","nashara","dia (lk.) telah menolong"],
          ["هِيَ","نَصَرَتْ","nasharat","dia (pr.) telah menolong"],
          ["هُمَا","نَصَرَا","nashara","keduanya (lk.) telah menolong"],
          ["هُمَا","نَصَرَتَا","nasharata","keduanya (pr.) telah menolong"],
          ["هُمْ","نَصَرُوْا","nasharuu","mereka (lk.) telah menolong"],
          ["هُنَّ","نَصَرْنَ","nasharna","mereka (pr.) telah menolong"],
          ["أَنْتَ","نَصَرْتَ","nasharta","kamu (lk.) telah menolong"],
          ["أَنْتِ","نَصَرْتِ","nasharti","kamu (pr.) telah menolong"],
          ["أَنْتُمَا","نَصَرْتُمَا","nashartuma","kamu berdua telah menolong"],
          ["أَنْتُمْ","نَصَرْتُمْ","nashartum","kamu semua (lk.) telah menolong"],
          ["أَنْتُنَّ","نَصَرْتُنَّ","nashartunna","kamu semua (pr.) telah menolong"],
          ["أَنَا","نَصَرْتُ","nashartu","saya telah menolong"],
          ["نَحْنُ","نَصَرْنَا","nasharna","kami/kita telah menolong"]
        ],
        mudhari_malum:[
          ["هُوَ","يَنْصُرُ","yanshuru","dia (lk.) menolong"],
          ["هِيَ","تَنْصُرُ","tanshuru","dia (pr.) menolong"],
          ["هُمَا","يَنْصُرَانِ","yanshurani","keduanya (lk.) menolong"],
          ["هُمَا","تَنْصُرَانِ","tanshurani","keduanya (pr.) menolong"],
          ["هُمْ","يَنْصُرُوْنَ","yanshuruuna","mereka (lk.) menolong"],
          ["هُنَّ","يَنْصُرْنَ","yanshurna","mereka (pr.) menolong"],
          ["أَنْتَ","تَنْصُرُ","tanshuru","kamu (lk.) menolong"],
          ["أَنْتِ","تَنْصُرِيْنَ","tanshuuriina","kamu (pr.) menolong"],
          ["أَنْتُمَا","تَنْصُرَانِ","tanshurani","kamu berdua menolong"],
          ["أَنْتُمْ","تَنْصُرُوْنَ","tanshuruuna","kamu semua (lk.) menolong"],
          ["أَنْتُنَّ","تَنْصُرْنَ","tanshurna","kamu semua (pr.) menolong"],
          ["أَنَا","أَنْصُرُ","anshuru","saya menolong"],
          ["نَحْنُ","نَنْصُرُ","nanshuru","kami/kita menolong"]
        ],
        amr:[
          ["أَنْتَ","اُنْصُرْ","unshur","tolonglah! (lk.)"],
          ["أَنْتِ","اُنْصُرِيْ","unshurii","tolonglah! (pr.)"],
          ["أَنْتُمَا","اُنْصُرَا","unshuura","tolonglah kamu berdua!"],
          ["أَنْتُمْ","اُنْصُرُوْا","unshuruuu","tolonglah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اُنْصُرْنَ","unshurana","tolonglah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","نُصِرَ","nushira","dia (lk.) telah ditolong"],
          ["هِيَ","نُصِرَتْ","nushirat","dia (pr.) telah ditolong"],
          ["هُمَا","نُصِرَا","nushiraa","keduanya (lk.) telah ditolong"],
          ["هُمَا","نُصِرَتَا","nushirataa","keduanya (pr.) telah ditolong"],
          ["هُمْ","نُصِرُوْا","nushiruu","mereka (lk.) telah ditolong"],
          ["هُنَّ","نُصِرْنَ","nushirna","mereka (pr.) telah ditolong"],
          ["أَنْتَ","نُصِرْتَ","nushirta","kamu (lk.) telah ditolong"],
          ["أَنْتِ","نُصِرْتِ","nushirti","kamu (pr.) telah ditolong"],
          ["أَنْتُمَا","نُصِرْتُمَا","nushirtumaa","kamu berdua telah ditolong"],
          ["أَنْتُمْ","نُصِرْتُمْ","nushirtum","kamu semua (lk.) telah ditolong"],
          ["أَنْتُنَّ","نُصِرْتُنَّ","nushirtunna","kamu semua (pr.) telah ditolong"],
          ["أَنَا","نُصِرْتُ","nushirtu","saya telah ditolong"],
          ["نَحْنُ","نُصِرْنَا","nushirnaa","kami/kita telah ditolong"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُنْصَرُ","yunshaaru","dia (lk.) ditolong"],
          ["هِيَ","تُنْصَرُ","tunshaaru","dia (pr.) ditolong"],
          ["هُمَا","يُنْصَرَانِ","yunsharani","keduanya (lk.) ditolong"],
          ["هُمَا","تُنْصَرَانِ","tunsharani","keduanya (pr.) ditolong"],
          ["هُمْ","يُنْصَرُوْنَ","yunsharuuna","mereka (lk.) ditolong"],
          ["هُنَّ","يُنْصَرْنَ","yunsharana","mereka (pr.) ditolong"],
          ["أَنْتَ","تُنْصَرُ","tunshaaru","kamu (lk.) ditolong"],
          ["أَنْتِ","تُنْصَرِيْنَ","tunshaariina","kamu (pr.) ditolong"],
          ["أَنْتُمَا","تُنْصَرَانِ","tunsharani","kamu berdua ditolong"],
          ["أَنْتُمْ","تُنْصَرُوْنَ","tunsharuuna","kamu semua (lk.) ditolong"],
          ["أَنْتُنَّ","تُنْصَرْنَ","tunsharana","kamu semua (pr.) ditolong"],
          ["أَنَا","أُنْصَرُ","unsharu","saya ditolong"],
          ["نَحْنُ","نُنْصَرُ","nunsharu","kami/kita ditolong"]
        ]
      }
    }
  },

  bab2: {
    id:"tm-bab2",
    num:2,
    wazan:"فَعَلَ - يَفْعِلُ",
    harakat:"Fathah - Kasrah",
    penjelasan:"Bab kedua: huruf 'ain fi'il berharakat fathah pada madhi dan kasrah pada mudhari'. Banyak fi'il yang berkaitan dengan gerakan fisik.",
    contohFiil:[
      { ar:"ضَرَبَ - يَضْرِبُ", arti:"memukul",    root:"ض-ر-ب" },
      { ar:"جَلَسَ - يَجْلِسُ", arti:"duduk",      root:"ج-ل-س" },
      { ar:"ذَهَبَ - يَذْهَبُ", arti:"pergi",      root:"ذ-ه-ب" },
      { ar:"نَزَلَ - يَنْزِلُ", arti:"turun",      root:"ن-ز-ل" },
      { ar:"حَمَلَ - يَحْمِلُ", arti:"membawa",    root:"ح-م-ل" },
      { ar:"رَكِبَ - يَرْكَبُ", arti:"menaiki",    root:"ر-ك-ب" }
    ],
    utama:{ ar:"ضَرَبَ", arti:"memukul", root:"ض-ر-ب" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"ضَرَبَ",        arti:"telah memukul" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَضْرِبُ",      arti:"sedang/akan memukul" },
        { label:"Masdar",                ar:"ضَرْبًا",        arti:"pukulan" },
        { label:"Fi'il Amr",             ar:"اِضْرِبْ",      arti:"pukullah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَضْرِبْ",  arti:"jangan memukul!" },
        { label:"Isim Fa'il",            ar:"ضَارِبٌ",        arti:"yang memukul" },
        { label:"Isim Maf'ul",           ar:"مَضْرُوْبٌ",     arti:"yang dipukul" },
        { label:"Fi'il Madhi Majhul",    ar:"ضُرِبَ",         arti:"telah dipukul" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُضْرَبُ",       arti:"sedang/akan dipukul" },
        { label:"Isim Zaman/Makan",      ar:"مَضْرَبٌ",       arti:"waktu/tempat memukul" },
        { label:"Isim Alat",             ar:"مِضْرَبٌ",       arti:"alat pemukul" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","ضَرَبَ","dharaba","dia (lk.) telah memukul"],
          ["هِيَ","ضَرَبَتْ","dharabat","dia (pr.) telah memukul"],
          ["هُمَا","ضَرَبَا","dharabaa","keduanya (lk.) telah memukul"],
          ["هُمَا","ضَرَبَتَا","dharabataa","keduanya (pr.) telah memukul"],
          ["هُمْ","ضَرَبُوْا","dharabuu","mereka (lk.) telah memukul"],
          ["هُنَّ","ضَرَبْنَ","dharabna","mereka (pr.) telah memukul"],
          ["أَنْتَ","ضَرَبْتَ","dharabta","kamu (lk.) telah memukul"],
          ["أَنْتِ","ضَرَبْتِ","dharabti","kamu (pr.) telah memukul"],
          ["أَنْتُمَا","ضَرَبْتُمَا","dharabtumaa","kamu berdua telah memukul"],
          ["أَنْتُمْ","ضَرَبْتُمْ","dharabtum","kamu semua (lk.) telah memukul"],
          ["أَنْتُنَّ","ضَرَبْتُنَّ","dharabtunna","kamu semua (pr.) telah memukul"],
          ["أَنَا","ضَرَبْتُ","dharabtu","saya telah memukul"],
          ["نَحْنُ","ضَرَبْنَا","dharabnaa","kami/kita telah memukul"]
        ],
        mudhari_malum:[
          ["هُوَ","يَضْرِبُ","yadhribu","dia (lk.) memukul"],
          ["هِيَ","تَضْرِبُ","tadhribu","dia (pr.) memukul"],
          ["هُمَا","يَضْرِبَانِ","yadhribani","keduanya (lk.) memukul"],
          ["هُمَا","تَضْرِبَانِ","tadhribani","keduanya (pr.) memukul"],
          ["هُمْ","يَضْرِبُوْنَ","yadhribuuna","mereka (lk.) memukul"],
          ["هُنَّ","يَضْرِبْنَ","yadhribna","mereka (pr.) memukul"],
          ["أَنْتَ","تَضْرِبُ","tadhribu","kamu (lk.) memukul"],
          ["أَنْتِ","تَضْرِبِيْنَ","tadhribiina","kamu (pr.) memukul"],
          ["أَنْتُمَا","تَضْرِبَانِ","tadhribani","kamu berdua memukul"],
          ["أَنْتُمْ","تَضْرِبُوْنَ","tadhribuuna","kamu semua (lk.) memukul"],
          ["أَنْتُنَّ","تَضْرِبْنَ","tadhribna","kamu semua (pr.) memukul"],
          ["أَنَا","أَضْرِبُ","adhribu","saya memukul"],
          ["نَحْنُ","نَضْرِبُ","nadhribu","kami/kita memukul"]
        ],
        amr:[
          ["أَنْتَ","اِضْرِبْ","idhrib","pukullah! (lk.)"],
          ["أَنْتِ","اِضْرِبِيْ","idhribii","pukullah! (pr.)"],
          ["أَنْتُمَا","اِضْرِبَا","idhribaa","pukullah kamu berdua!"],
          ["أَنْتُمْ","اِضْرِبُوْا","idhribuu","pukullah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِضْرِبْنَ","idhribna","pukullah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","ضُرِبَ","dhuriba","dia (lk.) telah dipukul"],
          ["هِيَ","ضُرِبَتْ","dhuribat","dia (pr.) telah dipukul"],
          ["هُمَا","ضُرِبَا","dhuribaa","keduanya (lk.) telah dipukul"],
          ["هُمَا","ضُرِبَتَا","dhuribataa","keduanya (pr.) telah dipukul"],
          ["هُمْ","ضُرِبُوْا","dhuribuu","mereka (lk.) telah dipukul"],
          ["هُنَّ","ضُرِبْنَ","dhuribna","mereka (pr.) telah dipukul"],
          ["أَنْتَ","ضُرِبْتَ","dhuribta","kamu (lk.) telah dipukul"],
          ["أَنْتِ","ضُرِبْتِ","dhuribti","kamu (pr.) telah dipukul"],
          ["أَنْتُمَا","ضُرِبْتُمَا","dhuribtumaa","kamu berdua telah dipukul"],
          ["أَنْتُمْ","ضُرِبْتُمْ","dhuribtum","kamu semua (lk.) telah dipukul"],
          ["أَنْتُنَّ","ضُرِبْتُنَّ","dhuribtunna","kamu semua (pr.) telah dipukul"],
          ["أَنَا","ضُرِبْتُ","dhuribtu","saya telah dipukul"],
          ["نَحْنُ","ضُرِبْنَا","dhuribnaa","kami/kita telah dipukul"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُضْرَبُ","yudhrabu","dia (lk.) dipukul"],
          ["هِيَ","تُضْرَبُ","tudhrabu","dia (pr.) dipukul"],
          ["هُمَا","يُضْرَبَانِ","yudhrabani","keduanya (lk.) dipukul"],
          ["هُمَا","تُضْرَبَانِ","tudhrabani","keduanya (pr.) dipukul"],
          ["هُمْ","يُضْرَبُوْنَ","yudhrabuuna","mereka (lk.) dipukul"],
          ["هُنَّ","يُضْرَبْنَ","yudhrabna","mereka (pr.) dipukul"],
          ["أَنْتَ","تُضْرَبُ","tudhrabu","kamu (lk.) dipukul"],
          ["أَنْتِ","تُضْرَبِيْنَ","tudhrabiina","kamu (pr.) dipukul"],
          ["أَنْتُمَا","تُضْرَبَانِ","tudhrabani","kamu berdua dipukul"],
          ["أَنْتُمْ","تُضْرَبُوْنَ","tudhrabuuna","kamu semua (lk.) dipukul"],
          ["أَنْتُنَّ","تُضْرَبْنَ","tudhrabna","kamu semua (pr.) dipukul"],
          ["أَنَا","أُضْرَبُ","udhrabu","saya dipukul"],
          ["نَحْنُ","نُضْرَبُ","nudhrabu","kami/kita dipukul"]
        ]
      }
    }
  },

  bab3: {
    id:"tm-bab3",
    num:3,
    wazan:"فَعَلَ - يَفْعَلُ",
    harakat:"Fathah - Fathah",
    penjelasan:"Bab ketiga: huruf 'ain fi'il berharakat fathah pada madhi dan mudhari'. Banyak fi'il dalam bab ini adalah fi'il lazim (intransitif). Sering ditemukan pada fi'il yang fa' atau lam-nya berupa huruf tenggorokan (حروف الحلق).",
    contohFiil:[
      { ar:"فَتَحَ - يَفْتَحُ", arti:"membuka",    root:"ف-ت-ح" },
      { ar:"ذَهَبَ - يَذْهَبُ", arti:"pergi",      root:"ذ-ه-ب" },
      { ar:"قَرَأَ - يَقْرَأُ", arti:"membaca",    root:"ق-ر-أ" },
      { ar:"سَأَلَ - يَسْأَلُ", arti:"bertanya",   root:"س-أ-ل" },
      { ar:"مَنَعَ - يَمْنَعُ", arti:"mencegah",   root:"م-ن-ع" },
      { ar:"أَكَلَ - يَأْكُلُ", arti:"makan",      root:"أ-ك-ل" }
    ],
    utama:{ ar:"فَتَحَ", arti:"membuka", root:"ف-ت-ح" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"فَتَحَ",        arti:"telah membuka" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَفْتَحُ",      arti:"sedang/akan membuka" },
        { label:"Masdar",                ar:"فَتْحًا",        arti:"pembukaan" },
        { label:"Fi'il Amr",             ar:"اِفْتَحْ",      arti:"bukalah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَفْتَحْ",  arti:"jangan membuka!" },
        { label:"Isim Fa'il",            ar:"فَاتِحٌ",        arti:"yang membuka" },
        { label:"Isim Maf'ul",           ar:"مَفْتُوْحٌ",     arti:"yang dibuka" },
        { label:"Fi'il Madhi Majhul",    ar:"فُتِحَ",         arti:"telah dibuka" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُفْتَحُ",       arti:"sedang/akan dibuka" },
        { label:"Isim Zaman/Makan",      ar:"مَفْتَحٌ",       arti:"waktu/tempat pembukaan" },
        { label:"Isim Alat",             ar:"مِفْتَحٌ",       arti:"kunci/alat membuka" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","فَتَحَ","fataha","dia (lk.) telah membuka"],
          ["هِيَ","فَتَحَتْ","fatahat","dia (pr.) telah membuka"],
          ["هُمَا","فَتَحَا","fatahaa","keduanya (lk.) telah membuka"],
          ["هُمَا","فَتَحَتَا","fatahataa","keduanya (pr.) telah membuka"],
          ["هُمْ","فَتَحُوْا","fatahuu","mereka (lk.) telah membuka"],
          ["هُنَّ","فَتَحْنَ","fatahna","mereka (pr.) telah membuka"],
          ["أَنْتَ","فَتَحْتَ","fatahta","kamu (lk.) telah membuka"],
          ["أَنْتِ","فَتَحْتِ","fatahti","kamu (pr.) telah membuka"],
          ["أَنْتُمَا","فَتَحْتُمَا","fatahtumaa","kamu berdua telah membuka"],
          ["أَنْتُمْ","فَتَحْتُمْ","fatahtum","kamu semua (lk.) telah membuka"],
          ["أَنْتُنَّ","فَتَحْتُنَّ","fatahtunna","kamu semua (pr.) telah membuka"],
          ["أَنَا","فَتَحْتُ","fatahtu","saya telah membuka"],
          ["نَحْنُ","فَتَحْنَا","fatahnaa","kami/kita telah membuka"]
        ],
        mudhari_malum:[
          ["هُوَ","يَفْتَحُ","yaftahu","dia (lk.) membuka"],
          ["هِيَ","تَفْتَحُ","taftahu","dia (pr.) membuka"],
          ["هُمَا","يَفْتَحَانِ","yaftahani","keduanya (lk.) membuka"],
          ["هُمَا","تَفْتَحَانِ","taftahani","keduanya (pr.) membuka"],
          ["هُمْ","يَفْتَحُوْنَ","yaftahuuna","mereka (lk.) membuka"],
          ["هُنَّ","يَفْتَحْنَ","yaftahna","mereka (pr.) membuka"],
          ["أَنْتَ","تَفْتَحُ","taftahu","kamu (lk.) membuka"],
          ["أَنْتِ","تَفْتَحِيْنَ","taftahiina","kamu (pr.) membuka"],
          ["أَنْتُمَا","تَفْتَحَانِ","taftahani","kamu berdua membuka"],
          ["أَنْتُمْ","تَفْتَحُوْنَ","taftahuuna","kamu semua (lk.) membuka"],
          ["أَنْتُنَّ","تَفْتَحْنَ","taftahna","kamu semua (pr.) membuka"],
          ["أَنَا","أَفْتَحُ","aftahu","saya membuka"],
          ["نَحْنُ","نَفْتَحُ","naftahu","kami/kita membuka"]
        ],
        amr:[
          ["أَنْتَ","اِفْتَحْ","iftah","bukalah! (lk.)"],
          ["أَنْتِ","اِفْتَحِيْ","iftahii","bukalah! (pr.)"],
          ["أَنْتُمَا","اِفْتَحَا","iftahaa","bukalah kamu berdua!"],
          ["أَنْتُمْ","اِفْتَحُوْا","iftahuu","bukalah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِفْتَحْنَ","iftahna","bukalah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","فُتِحَ","futiha","dia (lk.) telah dibuka"],
          ["هِيَ","فُتِحَتْ","futihat","dia (pr.) telah dibuka"],
          ["هُمَا","فُتِحَا","futihaa","keduanya (lk.) telah dibuka"],
          ["هُمَا","فُتِحَتَا","futihataa","keduanya (pr.) telah dibuka"],
          ["هُمْ","فُتِحُوْا","futihuu","mereka (lk.) telah dibuka"],
          ["هُنَّ","فُتِحْنَ","futihna","mereka (pr.) telah dibuka"],
          ["أَنْتَ","فُتِحْتَ","futihta","kamu (lk.) telah dibuka"],
          ["أَنْتِ","فُتِحْتِ","futihti","kamu (pr.) telah dibuka"],
          ["أَنْتُمَا","فُتِحْتُمَا","futihtumaa","kamu berdua telah dibuka"],
          ["أَنْتُمْ","فُتِحْتُمْ","futihtum","kamu semua (lk.) telah dibuka"],
          ["أَنْتُنَّ","فُتِحْتُنَّ","futihtunna","kamu semua (pr.) telah dibuka"],
          ["أَنَا","فُتِحْتُ","futihtu","saya telah dibuka"],
          ["نَحْنُ","فُتِحْنَا","futihnaa","kami/kita telah dibuka"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُفْتَحُ","yuftahu","dia (lk.) dibuka"],
          ["هِيَ","تُفْتَحُ","tuftahu","dia (pr.) dibuka"],
          ["هُمَا","يُفْتَحَانِ","yuftahani","keduanya (lk.) dibuka"],
          ["هُمَا","تُفْتَحَانِ","tuftahani","keduanya (pr.) dibuka"],
          ["هُمْ","يُفْتَحُوْنَ","yuftahuuna","mereka (lk.) dibuka"],
          ["هُنَّ","يُفْتَحْنَ","yuftahna","mereka (pr.) dibuka"],
          ["أَنْتَ","تُفْتَحُ","tuftahu","kamu (lk.) dibuka"],
          ["أَنْتِ","تُفْتَحِيْنَ","tuftahiina","kamu (pr.) dibuka"],
          ["أَنْتُمَا","تُفْتَحَانِ","tuftahani","kamu berdua dibuka"],
          ["أَنْتُمْ","تُفْتَحُوْنَ","tuftahuuna","kamu semua (lk.) dibuka"],
          ["أَنْتُنَّ","تُفْتَحْنَ","tuftahna","kamu semua (pr.) dibuka"],
          ["أَنَا","أُفْتَحُ","uftahu","saya dibuka"],
          ["نَحْنُ","نُفْتَحُ","nuftahu","kami/kita dibuka"]
        ]
      }
    }
  },

  bab4: {
    id:"tm-bab4",
    num:4,
    wazan:"فَعِلَ - يَفْعَلُ",
    harakat:"Kasrah - Fathah",
    penjelasan:"Bab keempat: huruf 'ain fi'il berharakat kasrah pada madhi dan fathah pada mudhari'. Banyak fi'il yang menyatakan keadaan atau sifat.",
    contohFiil:[
      { ar:"عَلِمَ - يَعْلَمُ", arti:"mengetahui",  root:"ع-ل-م" },
      { ar:"سَمِعَ - يَسْمَعُ", arti:"mendengar",   root:"س-م-ع" },
      { ar:"فَهِمَ - يَفْهَمُ", arti:"memahami",    root:"ف-ه-م" },
      { ar:"شَرِبَ - يَشْرَبُ", arti:"minum",       root:"ش-ر-ب" },
      { ar:"حَمِدَ - يَحْمَدُ", arti:"memuji",      root:"ح-م-د" },
      { ar:"رَكِبَ - يَرْكَبُ", arti:"menaiki",     root:"ر-ك-ب" }
    ],
    utama:{ ar:"عَلِمَ", arti:"mengetahui", root:"ع-ل-م" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"عَلِمَ",        arti:"telah mengetahui" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَعْلَمُ",      arti:"sedang/akan mengetahui" },
        { label:"Masdar",                ar:"عِلْمًا",        arti:"ilmu/pengetahuan" },
        { label:"Fi'il Amr",             ar:"اِعْلَمْ",      arti:"ketahuilah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَعْلَمْ",  arti:"jangan mengetahui!" },
        { label:"Isim Fa'il",            ar:"عَالِمٌ",        arti:"orang berilmu" },
        { label:"Isim Maf'ul",           ar:"مَعْلُوْمٌ",     arti:"yang diketahui" },
        { label:"Fi'il Madhi Majhul",    ar:"عُلِمَ",         arti:"telah diketahui" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُعْلَمُ",       arti:"sedang/akan diketahui" },
        { label:"Isim Zaman/Makan",      ar:"مَعْلَمٌ",       arti:"tempat ilmu/tanda" },
        { label:"Isim Alat",             ar:"مِعْلَمٌ",       arti:"alat penanda" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","عَلِمَ","'alima","dia (lk.) telah mengetahui"],
          ["هِيَ","عَلِمَتْ","'alimat","dia (pr.) telah mengetahui"],
          ["هُمَا","عَلِمَا","'alimaa","keduanya (lk.) telah mengetahui"],
          ["هُمَا","عَلِمَتَا","'alimataa","keduanya (pr.) telah mengetahui"],
          ["هُمْ","عَلِمُوْا","'alimuu","mereka (lk.) telah mengetahui"],
          ["هُنَّ","عَلِمْنَ","'alimna","mereka (pr.) telah mengetahui"],
          ["أَنْتَ","عَلِمْتَ","'alimta","kamu (lk.) telah mengetahui"],
          ["أَنْتِ","عَلِمْتِ","'alimti","kamu (pr.) telah mengetahui"],
          ["أَنْتُمَا","عَلِمْتُمَا","'alimtumaa","kamu berdua telah mengetahui"],
          ["أَنْتُمْ","عَلِمْتُمْ","'alimtum","kamu semua (lk.) telah mengetahui"],
          ["أَنْتُنَّ","عَلِمْتُنَّ","'alimtunna","kamu semua (pr.) telah mengetahui"],
          ["أَنَا","عَلِمْتُ","'alimtu","saya telah mengetahui"],
          ["نَحْنُ","عَلِمْنَا","'alimnaa","kami/kita telah mengetahui"]
        ],
        mudhari_malum:[
          ["هُوَ","يَعْلَمُ","ya'lamu","dia (lk.) mengetahui"],
          ["هِيَ","تَعْلَمُ","ta'lamu","dia (pr.) mengetahui"],
          ["هُمَا","يَعْلَمَانِ","ya'lamani","keduanya (lk.) mengetahui"],
          ["هُمَا","تَعْلَمَانِ","ta'lamani","keduanya (pr.) mengetahui"],
          ["هُمْ","يَعْلَمُوْنَ","ya'lamuuna","mereka (lk.) mengetahui"],
          ["هُنَّ","يَعْلَمْنَ","ya'lamna","mereka (pr.) mengetahui"],
          ["أَنْتَ","تَعْلَمُ","ta'lamu","kamu (lk.) mengetahui"],
          ["أَنْتِ","تَعْلَمِيْنَ","ta'lamiina","kamu (pr.) mengetahui"],
          ["أَنْتُمَا","تَعْلَمَانِ","ta'lamani","kamu berdua mengetahui"],
          ["أَنْتُمْ","تَعْلَمُوْنَ","ta'lamuuna","kamu semua (lk.) mengetahui"],
          ["أَنْتُنَّ","تَعْلَمْنَ","ta'lamna","kamu semua (pr.) mengetahui"],
          ["أَنَا","أَعْلَمُ","a'lamu","saya mengetahui"],
          ["نَحْنُ","نَعْلَمُ","na'lamu","kami/kita mengetahui"]
        ],
        amr:[
          ["أَنْتَ","اِعْلَمْ","i'lam","ketahuilah! (lk.)"],
          ["أَنْتِ","اِعْلَمِيْ","i'lamii","ketahuilah! (pr.)"],
          ["أَنْتُمَا","اِعْلَمَا","i'lamaa","ketahuilah kamu berdua!"],
          ["أَنْتُمْ","اِعْلَمُوْا","i'lamuu","ketahuilah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِعْلَمْنَ","i'lamna","ketahuilah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","عُلِمَ","'ulima","dia (lk.) telah diketahui"],
          ["هِيَ","عُلِمَتْ","'ulimat","dia (pr.) telah diketahui"],
          ["هُمَا","عُلِمَا","'ulimaa","keduanya (lk.) telah diketahui"],
          ["هُمَا","عُلِمَتَا","'ulimataa","keduanya (pr.) telah diketahui"],
          ["هُمْ","عُلِمُوْا","'ulimuu","mereka (lk.) telah diketahui"],
          ["هُنَّ","عُلِمْنَ","'ulimna","mereka (pr.) telah diketahui"],
          ["أَنْتَ","عُلِمْتَ","'ulimta","kamu (lk.) telah diketahui"],
          ["أَنْتِ","عُلِمْتِ","'ulimti","kamu (pr.) telah diketahui"],
          ["أَنْتُمَا","عُلِمْتُمَا","'ulimtumaa","kamu berdua telah diketahui"],
          ["أَنْتُمْ","عُلِمْتُمْ","'ulimtum","kamu semua (lk.) telah diketahui"],
          ["أَنْتُنَّ","عُلِمْتُنَّ","'ulimtunna","kamu semua (pr.) telah diketahui"],
          ["أَنَا","عُلِمْتُ","'ulimtu","saya telah diketahui"],
          ["نَحْنُ","عُلِمْنَا","'ulimnaa","kami/kita telah diketahui"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُعْلَمُ","yu'lamu","dia (lk.) diketahui"],
          ["هِيَ","تُعْلَمُ","tu'lamu","dia (pr.) diketahui"],
          ["هُمَا","يُعْلَمَانِ","yu'lamani","keduanya (lk.) diketahui"],
          ["هُمَا","تُعْلَمَانِ","tu'lamani","keduanya (pr.) diketahui"],
          ["هُمْ","يُعْلَمُوْنَ","yu'lamuuna","mereka (lk.) diketahui"],
          ["هُنَّ","يُعْلَمْنَ","yu'lamna","mereka (pr.) diketahui"],
          ["أَنْتَ","تُعْلَمُ","tu'lamu","kamu (lk.) diketahui"],
          ["أَنْتِ","تُعْلَمِيْنَ","tu'lamiina","kamu (pr.) diketahui"],
          ["أَنْتُمَا","تُعْلَمَانِ","tu'lamani","kamu berdua diketahui"],
          ["أَنْتُمْ","تُعْلَمُوْنَ","tu'lamuuna","kamu semua (lk.) diketahui"],
          ["أَنْتُنَّ","تُعْلَمْنَ","tu'lamna","kamu semua (pr.) diketahui"],
          ["أَنَا","أُعْلَمُ","u'lamu","saya diketahui"],
          ["نَحْنُ","نُعْلَمُ","nu'lamu","kami/kita diketahui"]
        ]
      }
    }
  },

  bab5: {
    id:"tm-bab5",
    num:5,
    wazan:"فَعُلَ - يَفْعُلُ",
    harakat:"Dhammah - Dhammah",
    penjelasan:"Bab kelima: huruf 'ain fi'il berharakat dhammah pada madhi dan mudhari'. Bab ini HANYA untuk fi'il lazim (intransitif) yang menyatakan sifat permanen atau karakter bawaan, sehingga tidak memiliki isim maf'ul dan fi'il majhul.",
    contohFiil:[
      { ar:"كَرُمَ - يَكْرُمُ", arti:"mulia",         root:"ك-ر-م" },
      { ar:"حَسُنَ - يَحْسُنُ", arti:"bagus/cantik",  root:"ح-س-ن" },
      { ar:"عَظُمَ - يَعْظُمُ", arti:"agung",         root:"ع-ظ-م" },
      { ar:"صَغُرَ - يَصْغُرُ", arti:"kecil",         root:"ص-غ-ر" },
      { ar:"كَبُرَ - يَكْبُرُ", arti:"besar/dewasa",  root:"ك-ب-ر" },
      { ar:"شَرُفَ - يَشْرُفُ", arti:"mulia/terhormat",root:"ش-ر-ف" }
    ],
    utama:{ ar:"كَرُمَ", arti:"mulia", root:"ك-ر-م" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"كَرُمَ",        arti:"telah mulia" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَكْرُمُ",      arti:"sedang/akan mulia" },
        { label:"Masdar",                ar:"كَرَمًا",        arti:"kemuliaan" },
        { label:"Fi'il Amr",             ar:"اُكْرُمْ",      arti:"jadilah mulia!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَكْرُمْ",  arti:"jangan menjadi mulia" },
        { label:"Isim Fa'il",            ar:"كَرِيْمٌ",       arti:"orang mulia" },
        { label:"Isim Maf'ul",           ar:"-",              arti:"(tidak ada — fi'il lazim)" },
        { label:"Fi'il Madhi Majhul",    ar:"-",              arti:"(tidak ada — fi'il lazim)" },
        { label:"Fi'il Mudhari' Majhul", ar:"-",              arti:"(tidak ada — fi'il lazim)" },
        { label:"Isim Zaman/Makan",      ar:"مَكْرَمٌ",       arti:"tempat kemuliaan" },
        { label:"Isim Alat",             ar:"-",              arti:"(tidak ada)" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","كَرُمَ","karuma","dia (lk.) mulia"],
          ["هِيَ","كَرُمَتْ","karumat","dia (pr.) mulia"],
          ["هُمَا","كَرُمَا","karumaa","keduanya (lk.) mulia"],
          ["هُمَا","كَرُمَتَا","karumataa","keduanya (pr.) mulia"],
          ["هُمْ","كَرُمُوْا","karumuu","mereka (lk.) mulia"],
          ["هُنَّ","كَرُمْنَ","karumna","mereka (pr.) mulia"],
          ["أَنْتَ","كَرُمْتَ","karumta","kamu (lk.) mulia"],
          ["أَنْتِ","كَرُمْتِ","karumti","kamu (pr.) mulia"],
          ["أَنْتُمَا","كَرُمْتُمَا","karumtumaa","kamu berdua mulia"],
          ["أَنْتُمْ","كَرُمْتُمْ","karumtum","kamu semua (lk.) mulia"],
          ["أَنْتُنَّ","كَرُمْتُنَّ","karumtunna","kamu semua (pr.) mulia"],
          ["أَنَا","كَرُمْتُ","karumtu","saya mulia"],
          ["نَحْنُ","كَرُمْنَا","karumanaa","kami/kita mulia"]
        ],
        mudhari_malum:[
          ["هُوَ","يَكْرُمُ","yakrumu","dia (lk.) mulia"],
          ["هِيَ","تَكْرُمُ","takrumu","dia (pr.) mulia"],
          ["هُمَا","يَكْرُمَانِ","yakrumani","keduanya (lk.) mulia"],
          ["هُمَا","تَكْرُمَانِ","takrumani","keduanya (pr.) mulia"],
          ["هُمْ","يَكْرُمُوْنَ","yakrumuuna","mereka (lk.) mulia"],
          ["هُنَّ","يَكْرُمْنَ","yakrumna","mereka (pr.) mulia"],
          ["أَنْتَ","تَكْرُمُ","takrumu","kamu (lk.) mulia"],
          ["أَنْتِ","تَكْرُمِيْنَ","takrumiina","kamu (pr.) mulia"],
          ["أَنْتُمَا","تَكْرُمَانِ","takrumani","kamu berdua mulia"],
          ["أَنْتُمْ","تَكْرُمُوْنَ","takrumuuna","kamu semua (lk.) mulia"],
          ["أَنْتُنَّ","تَكْرُمْنَ","takrumna","kamu semua (pr.) mulia"],
          ["أَنَا","أَكْرُمُ","akrumu","saya mulia"],
          ["نَحْنُ","نَكْرُمُ","nakrumu","kami/kita mulia"]
        ],
        amr:[
          ["أَنْتَ","اُكْرُمْ","ukrum","jadilah mulia! (lk.)"],
          ["أَنْتِ","اُكْرُمِيْ","ukrumii","jadilah mulia! (pr.)"],
          ["أَنْتُمَا","اُكْرُمَا","ukrumaa","jadilah mulia kamu berdua!"],
          ["أَنْتُمْ","اُكْرُمُوْا","ukrumuu","jadilah mulia kamu semua (lk.)!"],
          ["أَنْتُنَّ","اُكْرُمْنَ","ukrumna","jadilah mulia kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  bab6: {
    id:"tm-bab6",
    num:6,
    wazan:"فَعِلَ - يَفْعِلُ",
    harakat:"Kasrah - Kasrah",
    penjelasan:"Bab keenam: huruf 'ain fi'il berharakat kasrah pada madhi dan mudhari'. Bab ini paling sedikit fi'ilnya dan hampir semua berupa fi'il mahmuz (memiliki hamzah) atau mu'tal.",
    contohFiil:[
      { ar:"حَسِبَ - يَحْسِبُ", arti:"mengira",      root:"ح-س-ب" },
      { ar:"وَرِثَ - يَرِثُ",   arti:"mewarisi",     root:"و-ر-ث" },
      { ar:"وَلِيَ - يَلِيْ",   arti:"memerintah",   root:"و-ل-ي" },
      { ar:"وَثِقَ - يَثِقُ",   arti:"mempercayai",  root:"و-ث-ق" }
    ],
    utama:{ ar:"حَسِبَ", arti:"mengira", root:"ح-س-ب" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"حَسِبَ",        arti:"telah mengira" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَحْسِبُ",      arti:"sedang/akan mengira" },
        { label:"Masdar",                ar:"حِسْبَانًا",     arti:"perkiraan/perhitungan" },
        { label:"Fi'il Amr",             ar:"اِحْسِبْ",      arti:"kiralah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَحْسِبْ",  arti:"jangan mengira!" },
        { label:"Isim Fa'il",            ar:"حَاسِبٌ",        arti:"yang mengira/penghitung" },
        { label:"Isim Maf'ul",           ar:"مَحْسُوْبٌ",     arti:"yang diperhitungkan" },
        { label:"Fi'il Madhi Majhul",    ar:"حُسِبَ",         arti:"telah diperkirakan" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُحْسَبُ",       arti:"sedang/akan diperhitungkan" },
        { label:"Isim Zaman/Makan",      ar:"مَحْسَبٌ",       arti:"tempat perhitungan" },
        { label:"Isim Alat",             ar:"مِحْسَبٌ",       arti:"alat perhitungan" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","حَسِبَ","hasiba","dia (lk.) telah mengira"],
          ["هِيَ","حَسِبَتْ","hasibat","dia (pr.) telah mengira"],
          ["هُمَا","حَسِبَا","hasibaa","keduanya (lk.) telah mengira"],
          ["هُمَا","حَسِبَتَا","hasibataa","keduanya (pr.) telah mengira"],
          ["هُمْ","حَسِبُوْا","hasibuu","mereka (lk.) telah mengira"],
          ["هُنَّ","حَسِبْنَ","hasibna","mereka (pr.) telah mengira"],
          ["أَنْتَ","حَسِبْتَ","hasibta","kamu (lk.) telah mengira"],
          ["أَنْتِ","حَسِبْتِ","hasibti","kamu (pr.) telah mengira"],
          ["أَنْتُمَا","حَسِبْتُمَا","hasibtumaa","kamu berdua telah mengira"],
          ["أَنْتُمْ","حَسِبْتُمْ","hasibtum","kamu semua (lk.) telah mengira"],
          ["أَنْتُنَّ","حَسِبْتُنَّ","hasibtunna","kamu semua (pr.) telah mengira"],
          ["أَنَا","حَسِبْتُ","hasibtu","saya telah mengira"],
          ["نَحْنُ","حَسِبْنَا","hasibnaa","kami/kita telah mengira"]
        ],
        mudhari_malum:[
          ["هُوَ","يَحْسِبُ","yahsibu","dia (lk.) mengira"],
          ["هِيَ","تَحْسِبُ","tahsibu","dia (pr.) mengira"],
          ["هُمَا","يَحْسِبَانِ","yahsibani","keduanya (lk.) mengira"],
          ["هُمَا","تَحْسِبَانِ","tahsibani","keduanya (pr.) mengira"],
          ["هُمْ","يَحْسِبُوْنَ","yahsibuuna","mereka (lk.) mengira"],
          ["هُنَّ","يَحْسِبْنَ","yahsibna","mereka (pr.) mengira"],
          ["أَنْتَ","تَحْسِبُ","tahsibu","kamu (lk.) mengira"],
          ["أَنْتِ","تَحْسِبِيْنَ","tahsibiina","kamu (pr.) mengira"],
          ["أَنْتُمَا","تَحْسِبَانِ","tahsibani","kamu berdua mengira"],
          ["أَنْتُمْ","تَحْسِبُوْنَ","tahsibuuna","kamu semua (lk.) mengira"],
          ["أَنْتُنَّ","تَحْسِبْنَ","tahsibna","kamu semua (pr.) mengira"],
          ["أَنَا","أَحْسِبُ","ahsibu","saya mengira"],
          ["نَحْنُ","نَحْسِبُ","nahsibu","kami/kita mengira"]
        ],
        amr:[
          ["أَنْتَ","اِحْسِبْ","ihsib","kiralah! (lk.)"],
          ["أَنْتِ","اِحْسِبِيْ","ihsibii","kiralah! (pr.)"],
          ["أَنْتُمَا","اِحْسِبَا","ihsibaa","kiralah kamu berdua!"],
          ["أَنْتُمْ","اِحْسِبُوْا","ihsibuu","kiralah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِحْسِبْنَ","ihsibna","kiralah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","حُسِبَ","husiba","dia (lk.) telah diperkirakan"],
          ["هِيَ","حُسِبَتْ","husiibat","dia (pr.) telah diperkirakan"],
          ["هُمَا","حُسِبَا","husibaa","keduanya (lk.) telah diperkirakan"],
          ["هُمَا","حُسِبَتَا","husibataa","keduanya (pr.) telah diperkirakan"],
          ["هُمْ","حُسِبُوْا","husibuu","mereka (lk.) telah diperkirakan"],
          ["هُنَّ","حُسِبْنَ","husibna","mereka (pr.) telah diperkirakan"],
          ["أَنْتَ","حُسِبْتَ","husibta","kamu (lk.) telah diperkirakan"],
          ["أَنْتِ","حُسِبْتِ","husibti","kamu (pr.) telah diperkirakan"],
          ["أَنْتُمَا","حُسِبْتُمَا","husibtumaa","kamu berdua telah diperkirakan"],
          ["أَنْتُمْ","حُسِبْتُمْ","husibtum","kamu semua (lk.) telah diperkirakan"],
          ["أَنْتُنَّ","حُسِبْتُنَّ","husibtunna","kamu semua (pr.) telah diperkirakan"],
          ["أَنَا","حُسِبْتُ","husibtu","saya telah diperkirakan"],
          ["نَحْنُ","حُسِبْنَا","husibnaa","kami/kita telah diperkirakan"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُحْسَبُ","yuhsabu","dia (lk.) diperkirakan"],
          ["هِيَ","تُحْسَبُ","tuhsabu","dia (pr.) diperkirakan"],
          ["هُمَا","يُحْسَبَانِ","yuhsabani","keduanya (lk.) diperkirakan"],
          ["هُمَا","تُحْسَبَانِ","tuhsabani","keduanya (pr.) diperkirakan"],
          ["هُمْ","يُحْسَبُوْنَ","yuhsabuuna","mereka (lk.) diperkirakan"],
          ["هُنَّ","يُحْسَبْنَ","yuhsabna","mereka (pr.) diperkirakan"],
          ["أَنْتَ","تُحْسَبُ","tuhsabu","kamu (lk.) diperkirakan"],
          ["أَنْتِ","تُحْسَبِيْنَ","tuhsabiina","kamu (pr.) diperkirakan"],
          ["أَنْتُمَا","تُحْسَبَانِ","tuhsabani","kamu berdua diperkirakan"],
          ["أَنْتُمْ","تُحْسَبُوْنَ","tuhsabuuna","kamu semua (lk.) diperkirakan"],
          ["أَنْتُنَّ","تُحْسَبْنَ","tuhsabna","kamu semua (pr.) diperkirakan"],
          ["أَنَا","أُحْسَبُ","uhsabu","saya diperkirakan"],
          ["نَحْنُ","نُحْسَبُ","nuhsabu","kami/kita diperkirakan"]
        ]
      }
    }
  }

}; // end TSULATSI_MUJARRAD

/* =====================================================
   TSULATSI MAZID — Wazan-wazan utama
   ===================================================== */
const TSULATSI_MAZID = {

  overview: {
    title: "Fi'il Tsulatsi Mazid",
    titleAr: "الْفِعْلُ الثُّلَاثِيُّ الْمَزِيْد",
    desc: "Fi'il tsulatsi yang mendapat huruf tambahan (ziyadah) 1, 2, atau 3 huruf di luar huruf aslinya. Total 12 wazan: 3 + 5 + 4.",
    kelompok: [
      { num:"1 huruf tambahan", wazanList:["أَفْعَلَ","فَعَّلَ","فَاعَلَ"] },
      { num:"2 huruf tambahan", wazanList:["اِنْفَعَلَ","اِفْتَعَلَ","اِفْعَلَّ","تَفَعَّلَ","تَفَاعَلَ"] },
      { num:"3 huruf tambahan", wazanList:["اِسْتَفْعَلَ","اِفْعَالَّ","اِفْعَوْعَلَ","اِفْعَوَّلَ"] }
    ]
  },

  /* ── 1. أَفْعَلَ ── */
  if3al: {
    id:"tmz-if3al",
    wazan:"أَفْعَلَ - يُفْعِلُ",
    wazanAr:"أَفْعَلَ",
    ziyadah:"1 huruf (hamzah di awal)",
    makna:"Ta'diyah (menjadikan transitif), masuk ke suatu kondisi, memasuki waktu, atau menemukan sifat pada sesuatu.",
    penjelasan:"Wazan أَفْعَلَ adalah yang paling umum di antara mazid 1 huruf. Cirinya: madhi dibuka dengan hamzah qath' berharakat fathah.",
    contohFiil:[
      { ar:"أَكْرَمَ - يُكْرِمُ",  arti:"memuliakan",   root:"ك-ر-م" },
      { ar:"أَعْلَمَ - يُعْلِمُ",  arti:"memberitahu",  root:"ع-ل-م" },
      { ar:"أَخْرَجَ - يُخْرِجُ",  arti:"mengeluarkan", root:"خ-ر-ج" },
      { ar:"أَدْخَلَ - يُدْخِلُ",  arti:"memasukkan",   root:"د-خ-ل" },
      { ar:"أَنْزَلَ - يُنْزِلُ",  arti:"menurunkan",   root:"ن-ز-ل" },
      { ar:"أَسْلَمَ - يُسْلِمُ",  arti:"masuk Islam",  root:"س-ل-م" }
    ],
    utama:{ ar:"أَكْرَمَ", arti:"memuliakan", root:"ك-ر-م" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"أَكْرَمَ",       arti:"telah memuliakan" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يُكْرِمُ",       arti:"sedang/akan memuliakan" },
        { label:"Masdar",                ar:"إِكْرَامًا",      arti:"pemuliaan" },
        { label:"Fi'il Amr",             ar:"أَكْرِمْ",       arti:"mulaikanlah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تُكْرِمْ",   arti:"jangan memuliakan!" },
        { label:"Isim Fa'il",            ar:"مُكْرِمٌ",        arti:"yang memuliakan" },
        { label:"Isim Maf'ul",           ar:"مُكْرَمٌ",        arti:"yang dimuliakan" },
        { label:"Fi'il Madhi Majhul",    ar:"أُكْرِمَ",        arti:"telah dimuliakan" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُكْرَمُ",        arti:"sedang/akan dimuliakan" },
        { label:"Isim Zaman/Makan",      ar:"مُكْرَمٌ",        arti:"waktu/tempat pemuliaan" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","أَكْرَمَ","akrama","dia (lk.) telah memuliakan"],
          ["هِيَ","أَكْرَمَتْ","akramat","dia (pr.) telah memuliakan"],
          ["هُمَا","أَكْرَمَا","akramaa","keduanya (lk.) telah memuliakan"],
          ["هُمَا","أَكْرَمَتَا","akramataa","keduanya (pr.) telah memuliakan"],
          ["هُمْ","أَكْرَمُوْا","akramuu","mereka (lk.) telah memuliakan"],
          ["هُنَّ","أَكْرَمْنَ","akramna","mereka (pr.) telah memuliakan"],
          ["أَنْتَ","أَكْرَمْتَ","akramta","kamu (lk.) telah memuliakan"],
          ["أَنْتِ","أَكْرَمْتِ","akramti","kamu (pr.) telah memuliakan"],
          ["أَنْتُمَا","أَكْرَمْتُمَا","akramtumaa","kamu berdua telah memuliakan"],
          ["أَنْتُمْ","أَكْرَمْتُمْ","akramtum","kamu semua (lk.) telah memuliakan"],
          ["أَنْتُنَّ","أَكْرَمْتُنَّ","akramtunna","kamu semua (pr.) telah memuliakan"],
          ["أَنَا","أَكْرَمْتُ","akramtu","saya telah memuliakan"],
          ["نَحْنُ","أَكْرَمْنَا","akramnaa","kami/kita telah memuliakan"]
        ],
        mudhari_malum:[
          ["هُوَ","يُكْرِمُ","yukrimu","dia (lk.) memuliakan"],
          ["هِيَ","تُكْرِمُ","tukrimu","dia (pr.) memuliakan"],
          ["هُمَا","يُكْرِمَانِ","yukrimani","keduanya (lk.) memuliakan"],
          ["هُمَا","تُكْرِمَانِ","tukrimani","keduanya (pr.) memuliakan"],
          ["هُمْ","يُكْرِمُوْنَ","yukrimuuna","mereka (lk.) memuliakan"],
          ["هُنَّ","يُكْرِمْنَ","yukrimna","mereka (pr.) memuliakan"],
          ["أَنْتَ","تُكْرِمُ","tukrimu","kamu (lk.) memuliakan"],
          ["أَنْتِ","تُكْرِمِيْنَ","tukriminaa","kamu (pr.) memuliakan"],
          ["أَنْتُمَا","تُكْرِمَانِ","tukrimani","kamu berdua memuliakan"],
          ["أَنْتُمْ","تُكْرِمُوْنَ","tukrimuuna","kamu semua (lk.) memuliakan"],
          ["أَنْتُنَّ","تُكْرِمْنَ","tukrimna","kamu semua (pr.) memuliakan"],
          ["أَنَا","أُكْرِمُ","ukrimu","saya memuliakan"],
          ["نَحْنُ","نُكْرِمُ","nukrimu","kami/kita memuliakan"]
        ],
        amr:[
          ["أَنْتَ","أَكْرِمْ","akrim","mulaikanlah! (lk.)"],
          ["أَنْتِ","أَكْرِمِيْ","akrimii","mulaikanlah! (pr.)"],
          ["أَنْتُمَا","أَكْرِمَا","akrimaa","mulaikanlah kamu berdua!"],
          ["أَنْتُمْ","أَكْرِمُوْا","akrimuu","mulaikanlah kamu semua (lk.)!"],
          ["أَنْتُنَّ","أَكْرِمْنَ","akrimna","mulaikanlah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","أُكْرِمَ","ukrima","dia (lk.) telah dimuliakan"],
          ["هِيَ","أُكْرِمَتْ","ukrimat","dia (pr.) telah dimuliakan"],
          ["هُمَا","أُكْرِمَا","ukrimaa","keduanya (lk.) telah dimuliakan"],
          ["هُمَا","أُكْرِمَتَا","ukrimataa","keduanya (pr.) telah dimuliakan"],
          ["هُمْ","أُكْرِمُوْا","ukrimuu","mereka (lk.) telah dimuliakan"],
          ["هُنَّ","أُكْرِمْنَ","ukrimna","mereka (pr.) telah dimuliakan"],
          ["أَنْتَ","أُكْرِمْتَ","ukrimta","kamu (lk.) telah dimuliakan"],
          ["أَنْتِ","أُكْرِمْتِ","ukrimti","kamu (pr.) telah dimuliakan"],
          ["أَنْتُمَا","أُكْرِمْتُمَا","ukrimtumaa","kamu berdua telah dimuliakan"],
          ["أَنْتُمْ","أُكْرِمْتُمْ","ukrimtum","kamu semua (lk.) telah dimuliakan"],
          ["أَنْتُنَّ","أُكْرِمْتُنَّ","ukrimtunna","kamu semua (pr.) telah dimuliakan"],
          ["أَنَا","أُكْرِمْتُ","ukrimtu","saya telah dimuliakan"],
          ["نَحْنُ","أُكْرِمْنَا","ukrimnaa","kami/kita telah dimuliakan"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُكْرَمُ","yukramu","dia (lk.) dimuliakan"],
          ["هِيَ","تُكْرَمُ","tukramu","dia (pr.) dimuliakan"],
          ["هُمَا","يُكْرَمَانِ","yukramani","keduanya (lk.) dimuliakan"],
          ["هُمَا","تُكْرَمَانِ","tukramani","keduanya (pr.) dimuliakan"],
          ["هُمْ","يُكْرَمُوْنَ","yukramuuna","mereka (lk.) dimuliakan"],
          ["هُنَّ","يُكْرَمْنَ","yukramna","mereka (pr.) dimuliakan"],
          ["أَنْتَ","تُكْرَمُ","tukramu","kamu (lk.) dimuliakan"],
          ["أَنْتِ","تُكْرَمِيْنَ","tukramiina","kamu (pr.) dimuliakan"],
          ["أَنْتُمَا","تُكْرَمَانِ","tukramani","kamu berdua dimuliakan"],
          ["أَنْتُمْ","تُكْرَمُوْنَ","tukramuuna","kamu semua (lk.) dimuliakan"],
          ["أَنْتُنَّ","تُكْرَمْنَ","tukramna","kamu semua (pr.) dimuliakan"],
          ["أَنَا","أُكْرَمُ","ukramu","saya dimuliakan"],
          ["نَحْنُ","نُكْرَمُ","nukramu","kami/kita dimuliakan"]
        ]
      }
    }
  },

  /* ── 2. فَعَّلَ ── */
  faala: {
    id:"tmz-faala",
    wazan:"فَعَّلَ - يُفَعِّلُ",
    wazanAr:"فَعَّلَ",
    ziyadah:"1 huruf (tasydid/'ain digandakan)",
    makna:"Ta'diyah (menjadikan muta'addi), taksir (menyatakan banyak/berulang), ta'rif (menisbatkan), tashyir (menjadikan).",
    penjelasan:"Wazan فَعَّلَ ditandai dengan tasydid pada 'ain fi'il. Sering digunakan untuk kata kerja pengajaran, pengobatan, atau tindakan berulang.",
    contohFiil:[
      { ar:"عَلَّمَ - يُعَلِّمُ",  arti:"mengajarkan",    root:"ع-ل-م" },
      { ar:"كَسَّرَ - يُكَسِّرُ",  arti:"memecah-mecah",  root:"ك-س-ر" },
      { ar:"قَدَّسَ - يُقَدِّسُ",  arti:"mensucikan",     root:"ق-د-س" },
      { ar:"نَزَّلَ - يُنَزِّلُ",  arti:"menurunkan",     root:"ن-ز-ل" },
      { ar:"كَرَّمَ - يُكَرِّمُ",  arti:"sangat memuliakan",root:"ك-ر-م" },
      { ar:"فَرَّقَ - يُفَرِّقُ",  arti:"memisahkan",     root:"ف-ر-ق" }
    ],
    utama:{ ar:"عَلَّمَ", arti:"mengajarkan", root:"ع-ل-م" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"عَلَّمَ",       arti:"telah mengajarkan" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يُعَلِّمُ",     arti:"sedang/akan mengajarkan" },
        { label:"Masdar",                ar:"تَعْلِيْمًا",    arti:"pengajaran" },
        { label:"Fi'il Amr",             ar:"عَلِّمْ",       arti:"ajarkanlah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تُعَلِّمْ", arti:"jangan mengajarkan!" },
        { label:"Isim Fa'il",            ar:"مُعَلِّمٌ",      arti:"pengajar/guru" },
        { label:"Isim Maf'ul",           ar:"مُعَلَّمٌ",      arti:"yang diajarkan" },
        { label:"Fi'il Madhi Majhul",    ar:"عُلِّمَ",        arti:"telah diajarkan" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُعَلَّمُ",      arti:"sedang/akan diajarkan" },
        { label:"Isim Zaman/Makan",      ar:"مُعَلَّمٌ",      arti:"tempat pengajaran" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","عَلَّمَ","'allama","dia (lk.) telah mengajarkan"],
          ["هِيَ","عَلَّمَتْ","'allamat","dia (pr.) telah mengajarkan"],
          ["هُمَا","عَلَّمَا","'allamaa","keduanya (lk.) telah mengajarkan"],
          ["هُمَا","عَلَّمَتَا","'allamataa","keduanya (pr.) telah mengajarkan"],
          ["هُمْ","عَلَّمُوْا","'allamuu","mereka (lk.) telah mengajarkan"],
          ["هُنَّ","عَلَّمْنَ","'allamna","mereka (pr.) telah mengajarkan"],
          ["أَنْتَ","عَلَّمْتَ","'allamta","kamu (lk.) telah mengajarkan"],
          ["أَنْتِ","عَلَّمْتِ","'allamti","kamu (pr.) telah mengajarkan"],
          ["أَنْتُمَا","عَلَّمْتُمَا","'allamtumaa","kamu berdua telah mengajarkan"],
          ["أَنْتُمْ","عَلَّمْتُمْ","'allamtum","kamu semua (lk.) telah mengajarkan"],
          ["أَنْتُنَّ","عَلَّمْتُنَّ","'allamtunna","kamu semua (pr.) telah mengajarkan"],
          ["أَنَا","عَلَّمْتُ","'allamtu","saya telah mengajarkan"],
          ["نَحْنُ","عَلَّمْنَا","'allamnaa","kami/kita telah mengajarkan"]
        ],
        mudhari_malum:[
          ["هُوَ","يُعَلِّمُ","yu'allimu","dia (lk.) mengajarkan"],
          ["هِيَ","تُعَلِّمُ","tu'allimu","dia (pr.) mengajarkan"],
          ["هُمَا","يُعَلِّمَانِ","yu'allimani","keduanya (lk.) mengajarkan"],
          ["هُمَا","تُعَلِّمَانِ","tu'allimani","keduanya (pr.) mengajarkan"],
          ["هُمْ","يُعَلِّمُوْنَ","yu'allimuuna","mereka (lk.) mengajarkan"],
          ["هُنَّ","يُعَلِّمْنَ","yu'allimna","mereka (pr.) mengajarkan"],
          ["أَنْتَ","تُعَلِّمُ","tu'allimu","kamu (lk.) mengajarkan"],
          ["أَنْتِ","تُعَلِّمِيْنَ","tu'allimiina","kamu (pr.) mengajarkan"],
          ["أَنْتُمَا","تُعَلِّمَانِ","tu'allimani","kamu berdua mengajarkan"],
          ["أَنْتُمْ","تُعَلِّمُوْنَ","tu'allimuuna","kamu semua (lk.) mengajarkan"],
          ["أَنْتُنَّ","تُعَلِّمْنَ","tu'allimna","kamu semua (pr.) mengajarkan"],
          ["أَنَا","أُعَلِّمُ","u'allimu","saya mengajarkan"],
          ["نَحْنُ","نُعَلِّمُ","nu'allimu","kami/kita mengajarkan"]
        ],
        amr:[
          ["أَنْتَ","عَلِّمْ","'allim","ajarkanlah! (lk.)"],
          ["أَنْتِ","عَلِّمِيْ","'allimii","ajarkanlah! (pr.)"],
          ["أَنْتُمَا","عَلِّمَا","'allimaa","ajarkanlah kamu berdua!"],
          ["أَنْتُمْ","عَلِّمُوْا","'allimuu","ajarkanlah kamu semua (lk.)!"],
          ["أَنْتُنَّ","عَلِّمْنَ","'allimna","ajarkanlah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","عُلِّمَ","'ullima","dia (lk.) telah diajarkan"],
          ["هِيَ","عُلِّمَتْ","'ullimat","dia (pr.) telah diajarkan"],
          ["هُمَا","عُلِّمَا","'ullimaa","keduanya (lk.) telah diajarkan"],
          ["هُمَا","عُلِّمَتَا","'ullimataa","keduanya (pr.) telah diajarkan"],
          ["هُمْ","عُلِّمُوْا","'ullimuu","mereka (lk.) telah diajarkan"],
          ["هُنَّ","عُلِّمْنَ","'ullimna","mereka (pr.) telah diajarkan"],
          ["أَنْتَ","عُلِّمْتَ","'ullimta","kamu (lk.) telah diajarkan"],
          ["أَنْتِ","عُلِّمْتِ","'ullimti","kamu (pr.) telah diajarkan"],
          ["أَنْتُمَا","عُلِّمْتُمَا","'ullimtumaa","kamu berdua telah diajarkan"],
          ["أَنْتُمْ","عُلِّمْتُمْ","'ullimtum","kamu semua (lk.) telah diajarkan"],
          ["أَنْتُنَّ","عُلِّمْتُنَّ","'ullimtunna","kamu semua (pr.) telah diajarkan"],
          ["أَنَا","عُلِّمْتُ","'ullimtu","saya telah diajarkan"],
          ["نَحْنُ","عُلِّمْنَا","'ullimnaa","kami/kita telah diajarkan"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُعَلَّمُ","yu'allamu","dia (lk.) diajarkan"],
          ["هِيَ","تُعَلَّمُ","tu'allamu","dia (pr.) diajarkan"],
          ["هُمَا","يُعَلَّمَانِ","yu'allamani","keduanya (lk.) diajarkan"],
          ["هُمَا","تُعَلَّمَانِ","tu'allamani","keduanya (pr.) diajarkan"],
          ["هُمْ","يُعَلَّمُوْنَ","yu'allamuuna","mereka (lk.) diajarkan"],
          ["هُنَّ","يُعَلَّمْنَ","yu'allamna","mereka (pr.) diajarkan"],
          ["أَنْتَ","تُعَلَّمُ","tu'allamu","kamu (lk.) diajarkan"],
          ["أَنْتِ","تُعَلَّمِيْنَ","tu'allamiina","kamu (pr.) diajarkan"],
          ["أَنْتُمَا","تُعَلَّمَانِ","tu'allamani","kamu berdua diajarkan"],
          ["أَنْتُمْ","تُعَلَّمُوْنَ","tu'allamuuna","kamu semua (lk.) diajarkan"],
          ["أَنْتُنَّ","تُعَلَّمْنَ","tu'allamna","kamu semua (pr.) diajarkan"],
          ["أَنَا","أُعَلَّمُ","u'allamu","saya diajarkan"],
          ["نَحْنُ","نُعَلَّمُ","nu'allamu","kami/kita diajarkan"]
        ]
      }
    }
  },

  /* ── 3. فَاعَلَ ── */
  faaala: {
    id:"tmz-faaala",
    wazan:"فَاعَلَ - يُفَاعِلُ",
    wazanAr:"فَاعَلَ",
    ziyadah:"1 huruf (alif setelah fa')",
    makna:"Musyarakah (saling melakukan), mubalagah (sungguh-sungguh melakukan).",
    penjelasan:"Wazan فَاعَلَ ditandai dengan alif setelah fa' fi'il. Makna paling umum adalah 'saling melakukan' antara dua pihak.",
    contohFiil:[
      { ar:"قَاتَلَ - يُقَاتِلُ", arti:"memerangi/berperang", root:"ق-ت-ل" },
      { ar:"كَاتَبَ - يُكَاتِبُ", arti:"saling berkirim surat",root:"ك-ت-ب" },
      { ar:"جَاهَدَ - يُجَاهِدُ", arti:"berjihad",            root:"ج-ه-د" },
      { ar:"سَاعَدَ - يُسَاعِدُ", arti:"menolong/membantu",   root:"س-ع-د" },
      { ar:"حَاسَبَ - يُحَاسِبُ", arti:"menghisab/mengaudit", root:"ح-س-ب" },
      { ar:"عَامَلَ - يُعَامِلُ", arti:"bergaul/bertransaksi",root:"ع-م-ل" }
    ],
    utama:{ ar:"قَاتَلَ", arti:"memerangi", root:"ق-ت-ل" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"قَاتَلَ",        arti:"telah memerangi" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يُقَاتِلُ",      arti:"sedang/akan memerangi" },
        { label:"Masdar",                ar:"قِتَالًا",        arti:"peperangan" },
        { label:"Fi'il Amr",             ar:"قَاتِلْ",        arti:"perangilah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تُقَاتِلْ",  arti:"jangan memerangi!" },
        { label:"Isim Fa'il",            ar:"مُقَاتِلٌ",       arti:"yang memerangi/pejuang" },
        { label:"Isim Maf'ul",           ar:"مُقَاتَلٌ",       arti:"yang diperangi" },
        { label:"Fi'il Madhi Majhul",    ar:"قُوْتِلَ",        arti:"telah diperangi" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُقَاتَلُ",       arti:"sedang/akan diperangi" },
        { label:"Isim Zaman/Makan",      ar:"مُقَاتَلٌ",       arti:"medan perang" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","قَاتَلَ","qaatala","dia (lk.) telah memerangi"],
          ["هِيَ","قَاتَلَتْ","qaaталат","dia (pr.) telah memerangi"],
          ["هُمَا","قَاتَلَا","qaataлаа","keduanya (lk.) telah memerangi"],
          ["هُمَا","قَاتَلَتَا","qaatalataa","keduanya (pr.) telah memerangi"],
          ["هُمْ","قَاتَلُوْا","qaataluu","mereka (lk.) telah memerangi"],
          ["هُنَّ","قَاتَلْنَ","qaatalna","mereka (pr.) telah memerangi"],
          ["أَنْتَ","قَاتَلْتَ","qaatalta","kamu (lk.) telah memerangi"],
          ["أَنْتِ","قَاتَلْتِ","qaatalti","kamu (pr.) telah memerangi"],
          ["أَنْتُمَا","قَاتَلْتُمَا","qaataltumaa","kamu berdua telah memerangi"],
          ["أَنْتُمْ","قَاتَلْتُمْ","qaataltum","kamu semua (lk.) telah memerangi"],
          ["أَنْتُنَّ","قَاتَلْتُنَّ","qaataltunna","kamu semua (pr.) telah memerangi"],
          ["أَنَا","قَاتَلْتُ","qaataltu","saya telah memerangi"],
          ["نَحْنُ","قَاتَلْنَا","qaatalnaa","kami/kita telah memerangi"]
        ],
        mudhari_malum:[
          ["هُوَ","يُقَاتِلُ","yuqaatilu","dia (lk.) memerangi"],
          ["هِيَ","تُقَاتِلُ","tuqaatilu","dia (pr.) memerangi"],
          ["هُمَا","يُقَاتِلَانِ","yuqaatilani","keduanya (lk.) memerangi"],
          ["هُمَا","تُقَاتِلَانِ","tuqaatilani","keduanya (pr.) memerangi"],
          ["هُمْ","يُقَاتِلُوْنَ","yuqaatiluuna","mereka (lk.) memerangi"],
          ["هُنَّ","يُقَاتِلْنَ","yuqaatilna","mereka (pr.) memerangi"],
          ["أَنْتَ","تُقَاتِلُ","tuqaatilu","kamu (lk.) memerangi"],
          ["أَنْتِ","تُقَاتِلِيْنَ","tuqaatiliina","kamu (pr.) memerangi"],
          ["أَنْتُمَا","تُقَاتِلَانِ","tuqaatilani","kamu berdua memerangi"],
          ["أَنْتُمْ","تُقَاتِلُوْنَ","tuqaatiluuna","kamu semua (lk.) memerangi"],
          ["أَنْتُنَّ","تُقَاتِلْنَ","tuqaatilna","kamu semua (pr.) memerangi"],
          ["أَنَا","أُقَاتِلُ","uqaatilu","saya memerangi"],
          ["نَحْنُ","نُقَاتِلُ","nuqaatilu","kami/kita memerangi"]
        ],
        amr:[
          ["أَنْتَ","قَاتِلْ","qaatil","perangilah! (lk.)"],
          ["أَنْتِ","قَاتِلِيْ","qaatilii","perangilah! (pr.)"],
          ["أَنْتُمَا","قَاتِلَا","qaatilaa","perangilah kamu berdua!"],
          ["أَنْتُمْ","قَاتِلُوْا","qaatiluu","perangilah kamu semua (lk.)!"],
          ["أَنْتُنَّ","قَاتِلْنَ","qaatilna","perangilah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","قُوْتِلَ","quutila","dia (lk.) telah diperangi"],
          ["هِيَ","قُوْتِلَتْ","quutiлат","dia (pr.) telah diperangi"],
          ["هُمَا","قُوْتِلَا","quutilaa","keduanya (lk.) telah diperangi"],
          ["هُمَا","قُوْتِلَتَا","quutilataa","keduanya (pr.) telah diperangi"],
          ["هُمْ","قُوْتِلُوْا","quutiluu","mereka (lk.) telah diperangi"],
          ["هُنَّ","قُوْتِلْنَ","quutilna","mereka (pr.) telah diperangi"],
          ["أَنْتَ","قُوْتِلْتَ","quutilta","kamu (lk.) telah diperangi"],
          ["أَنْتِ","قُوْتِلْتِ","quutilti","kamu (pr.) telah diperangi"],
          ["أَنْتُمَا","قُوْتِلْتُمَا","quutiltumaa","kamu berdua telah diperangi"],
          ["أَنْتُمْ","قُوْتِلْتُمْ","quutiltum","kamu semua (lk.) telah diperangi"],
          ["أَنْتُنَّ","قُوْتِلْتُنَّ","quutiltunna","kamu semua (pr.) telah diperangi"],
          ["أَنَا","قُوْتِلْتُ","quutiltu","saya telah diperangi"],
          ["نَحْنُ","قُوْتِلْنَا","quutilnaa","kami/kita telah diperangi"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُقَاتَلُ","yuqaatalu","dia (lk.) diperangi"],
          ["هِيَ","تُقَاتَلُ","tuqaatalu","dia (pr.) diperangi"],
          ["هُمَا","يُقَاتَلَانِ","yuqaatalani","keduanya (lk.) diperangi"],
          ["هُمَا","تُقَاتَلَانِ","tuqaatalani","keduanya (pr.) diperangi"],
          ["هُمْ","يُقَاتَلُوْنَ","yuqaataluuna","mereka (lk.) diperangi"],
          ["هُنَّ","يُقَاتَلْنَ","yuqaatalana","mereka (pr.) diperangi"],
          ["أَنْتَ","تُقَاتَلُ","tuqaatalu","kamu (lk.) diperangi"],
          ["أَنْتِ","تُقَاتَلِيْنَ","tuqaataliina","kamu (pr.) diperangi"],
          ["أَنْتُمَا","تُقَاتَلَانِ","tuqaatalani","kamu berdua diperangi"],
          ["أَنْتُمْ","تُقَاتَلُوْنَ","tuqaataluuna","kamu semua (lk.) diperangi"],
          ["أَنْتُنَّ","تُقَاتَلْنَ","tuqaatalana","kamu semua (pr.) diperangi"],
          ["أَنَا","أُقَاتَلُ","uqaatalu","saya diperangi"],
          ["نَحْنُ","نُقَاتَلُ","nuqaatalu","kami/kita diperangi"]
        ]
      }
    }
  },

  /* ── 4. اِنْفَعَلَ ── */
  infa3al: {
    id:"tmz-infa3al",
    wazan:"اِنْفَعَلَ - يَنْفَعِلُ",
    wazanAr:"اِنْفَعَلَ",
    ziyadah:"2 huruf (hamzah washl + nun)",
    makna:"Mutawa'ah (akibat/hasil dari فَعَلَ) — menyatakan keadaan yang terjadi akibat tindakan fi'il mujarradnya.",
    penjelasan:"اِنْفَعَلَ adalah mutawa'ah dari فَعَلَ. Hampir selalu lazim (intransitif), tidak memiliki maf'ul. Majhul-nya jarang digunakan.",
    contohFiil:[
      { ar:"اِنْكَسَرَ - يَنْكَسِرُ", arti:"(menjadi) patah/pecah",  root:"ك-س-ر", mutawa:"كَسَرَ (mematahkan)" },
      { ar:"اِنْطَلَقَ - يَنْطَلِقُ", arti:"(mulai) berangkat",      root:"ط-ل-ق", mutawa:"طَلَّقَ" },
      { ar:"اِنْقَطَعَ - يَنْقَطِعُ", arti:"(menjadi) terputus",     root:"ق-ط-ع", mutawa:"قَطَعَ (memutus)" },
      { ar:"اِنْفَتَحَ - يَنْفَتِحُ", arti:"(menjadi) terbuka",      root:"ف-ت-ح", mutawa:"فَتَحَ (membuka)" },
      { ar:"اِنْقَلَبَ - يَنْقَلِبُ", arti:"berbalik/terbalik",      root:"ق-ل-ب", mutawa:"قَلَبَ (membalik)" }
    ],
    utama:{ ar:"اِنْكَسَرَ", arti:"(menjadi) patah", root:"ك-س-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِنْكَسَرَ",     arti:"telah patah" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَنْكَسِرُ",     arti:"sedang/akan patah" },
        { label:"Masdar",                ar:"اِنْكِسَارًا",    arti:"kepatahannya" },
        { label:"Fi'il Amr",             ar:"اِنْكَسِرْ",     arti:"patahlah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَنْكَسِرْ", arti:"jangan patah!" },
        { label:"Isim Fa'il",            ar:"مُنْكَسِرٌ",      arti:"yang (sedang) patah" },
        { label:"Isim Maf'ul",           ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Fi'il Madhi Majhul",    ar:"-",               arti:"(lazim — jarang)" },
        { label:"Fi'il Mudhari' Majhul", ar:"-",               arti:"(lazim — jarang)" },
        { label:"Isim Zaman/Makan",      ar:"مُنْكَسَرٌ",      arti:"tempat patahannya" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِنْكَسَرَ","inkasara","dia (lk.) telah patah"],
          ["هِيَ","اِنْكَسَرَتْ","inkasarat","dia (pr.) telah patah"],
          ["هُمَا","اِنْكَسَرَا","inkasaraa","keduanya (lk.) telah patah"],
          ["هُمَا","اِنْكَسَرَتَا","inkasarataa","keduanya (pr.) telah patah"],
          ["هُمْ","اِنْكَسَرُوْا","inkasaruu","mereka (lk.) telah patah"],
          ["هُنَّ","اِنْكَسَرْنَ","inkasarna","mereka (pr.) telah patah"],
          ["أَنْتَ","اِنْكَسَرْتَ","inkasarta","kamu (lk.) telah patah"],
          ["أَنْتِ","اِنْكَسَرْتِ","inkasarti","kamu (pr.) telah patah"],
          ["أَنْتُمَا","اِنْكَسَرْتُمَا","inkasartumaa","kamu berdua telah patah"],
          ["أَنْتُمْ","اِنْكَسَرْتُمْ","inkasartum","kamu semua (lk.) telah patah"],
          ["أَنْتُنَّ","اِنْكَسَرْتُنَّ","inkasartunna","kamu semua (pr.) telah patah"],
          ["أَنَا","اِنْكَسَرْتُ","inkasartu","saya telah patah"],
          ["نَحْنُ","اِنْكَسَرْنَا","inkasarnaa","kami/kita telah patah"]
        ],
        mudhari_malum:[
          ["هُوَ","يَنْكَسِرُ","yankasiru","dia (lk.) patah"],
          ["هِيَ","تَنْكَسِرُ","tankasiru","dia (pr.) patah"],
          ["هُمَا","يَنْكَسِرَانِ","yankasiraani","keduanya (lk.) patah"],
          ["هُمَا","تَنْكَسِرَانِ","tankasiraani","keduanya (pr.) patah"],
          ["هُمْ","يَنْكَسِرُوْنَ","yankasiruuna","mereka (lk.) patah"],
          ["هُنَّ","يَنْكَسِرْنَ","yankasirna","mereka (pr.) patah"],
          ["أَنْتَ","تَنْكَسِرُ","tankasiru","kamu (lk.) patah"],
          ["أَنْتِ","تَنْكَسِرِيْنَ","tankasiriina","kamu (pr.) patah"],
          ["أَنْتُمَا","تَنْكَسِرَانِ","tankasiraani","kamu berdua patah"],
          ["أَنْتُمْ","تَنْكَسِرُوْنَ","tankasiruuna","kamu semua (lk.) patah"],
          ["أَنْتُنَّ","تَنْكَسِرْنَ","tankasirna","kamu semua (pr.) patah"],
          ["أَنَا","أَنْكَسِرُ","ankasiru","saya patah"],
          ["نَحْنُ","نَنْكَسِرُ","nankasiru","kami/kita patah"]
        ],
        amr:[
          ["أَنْتَ","اِنْكَسِرْ","inkasir","patahlah! (lk.)"],
          ["أَنْتِ","اِنْكَسِرِيْ","inkasiriii","patahlah! (pr.)"],
          ["أَنْتُمَا","اِنْكَسِرَا","inkasiraa","patahlah kamu berdua!"],
          ["أَنْتُمْ","اِنْكَسِرُوْا","inkasiruu","patahlah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِنْكَسِرْنَ","inkasirna","patahlah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  /* ── 5. اِفْتَعَلَ ── */
  ifta3al: {
    id:"tmz-ifta3al",
    wazan:"اِفْتَعَلَ - يَفْتَعِلُ",
    wazanAr:"اِفْتَعَلَ",
    ziyadah:"2 huruf (hamzah washl + ta' di antara fa' dan 'ain)",
    makna:"Mutawa'ah (hasil tindakan), ittikhadz (menjadikan untuk diri sendiri), musyarakah, atau mubalagah.",
    penjelasan:"اِفْتَعَلَ ditandai dengan hamzah washl di awal dan ta' ziyadah setelah fa' fi'il. Perhatikan kaidah ibdal: jika fa' fi'il berupa ذ، ز، د maka ta' berubah menjadi د atau ط.",
    contohFiil:[
      { ar:"اِجْتَمَعَ - يَجْتَمِعُ", arti:"berkumpul/berhimpun",  root:"ج-م-ع" },
      { ar:"اِكْتَسَبَ - يَكْتَسِبُ", arti:"berusaha/memperoleh",  root:"ك-س-ب" },
      { ar:"اِسْتَمَعَ - يَسْتَمِعُ", arti:"mendengarkan",         root:"س-م-ع" },
      { ar:"اِخْتَارَ - يَخْتَارُ",  arti:"memilih",               root:"خ-ي-ر" },
      { ar:"اِنْتَظَرَ - يَنْتَظِرُ", arti:"menunggu",              root:"ن-ظ-ر" },
      { ar:"اِحْتَرَمَ - يَحْتَرِمُ", arti:"menghormati",           root:"ح-ر-م" }
    ],
    utama:{ ar:"اِجْتَمَعَ", arti:"berkumpul", root:"ج-م-ع" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِجْتَمَعَ",     arti:"telah berkumpul" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَجْتَمِعُ",     arti:"sedang/akan berkumpul" },
        { label:"Masdar",                ar:"اِجْتِمَاعًا",    arti:"perkumpulan/pertemuan" },
        { label:"Fi'il Amr",             ar:"اِجْتَمِعْ",     arti:"berkumpullah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَجْتَمِعْ", arti:"jangan berkumpul!" },
        { label:"Isim Fa'il",            ar:"مُجْتَمِعٌ",      arti:"yang berkumpul" },
        { label:"Isim Maf'ul",           ar:"مُجْتَمَعٌ",      arti:"tempat berkumpul" },
        { label:"Fi'il Madhi Majhul",    ar:"اُجْتُمِعَ",      arti:"telah dikumpulkan" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُجْتَمَعُ",      arti:"sedang dikumpulkan" },
        { label:"Isim Zaman/Makan",      ar:"مُجْتَمَعٌ",      arti:"tempat pertemuan" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِجْتَمَعَ","ijtama'a","dia (lk.) telah berkumpul"],
          ["هِيَ","اِجْتَمَعَتْ","ijtama'at","dia (pr.) telah berkumpul"],
          ["هُمَا","اِجْتَمَعَا","ijtama'aa","keduanya (lk.) telah berkumpul"],
          ["هُمَا","اِجْتَمَعَتَا","ijtama'ataa","keduanya (pr.) telah berkumpul"],
          ["هُمْ","اِجْتَمَعُوْا","ijtama'uu","mereka (lk.) telah berkumpul"],
          ["هُنَّ","اِجْتَمَعْنَ","ijtama'na","mereka (pr.) telah berkumpul"],
          ["أَنْتَ","اِجْتَمَعْتَ","ijtama'ta","kamu (lk.) telah berkumpul"],
          ["أَنْتِ","اِجْتَمَعْتِ","ijtama'ti","kamu (pr.) telah berkumpul"],
          ["أَنْتُمَا","اِجْتَمَعْتُمَا","ijtama'tumaa","kamu berdua telah berkumpul"],
          ["أَنْتُمْ","اِجْتَمَعْتُمْ","ijtama'tum","kamu semua (lk.) telah berkumpul"],
          ["أَنْتُنَّ","اِجْتَمَعْتُنَّ","ijtama'tunna","kamu semua (pr.) telah berkumpul"],
          ["أَنَا","اِجْتَمَعْتُ","ijtama'tu","saya telah berkumpul"],
          ["نَحْنُ","اِجْتَمَعْنَا","ijtama'naa","kami/kita telah berkumpul"]
        ],
        mudhari_malum:[
          ["هُوَ","يَجْتَمِعُ","yajtami'u","dia (lk.) berkumpul"],
          ["هِيَ","تَجْتَمِعُ","tajtami'u","dia (pr.) berkumpul"],
          ["هُمَا","يَجْتَمِعَانِ","yajtami'ani","keduanya (lk.) berkumpul"],
          ["هُمَا","تَجْتَمِعَانِ","tajtami'ani","keduanya (pr.) berkumpul"],
          ["هُمْ","يَجْتَمِعُوْنَ","yajtami'uuna","mereka (lk.) berkumpul"],
          ["هُنَّ","يَجْتَمِعْنَ","yajtami'na","mereka (pr.) berkumpul"],
          ["أَنْتَ","تَجْتَمِعُ","tajtami'u","kamu (lk.) berkumpul"],
          ["أَنْتِ","تَجْتَمِعِيْنَ","tajtami'iina","kamu (pr.) berkumpul"],
          ["أَنْتُمَا","تَجْتَمِعَانِ","tajtami'ani","kamu berdua berkumpul"],
          ["أَنْتُمْ","تَجْتَمِعُوْنَ","tajtami'uuna","kamu semua (lk.) berkumpul"],
          ["أَنْتُنَّ","تَجْتَمِعْنَ","tajtami'na","kamu semua (pr.) berkumpul"],
          ["أَنَا","أَجْتَمِعُ","ajtami'u","saya berkumpul"],
          ["نَحْنُ","نَجْتَمِعُ","najtami'u","kami/kita berkumpul"]
        ],
        amr:[
          ["أَنْتَ","اِجْتَمِعْ","ijtami'","berkumpullah! (lk.)"],
          ["أَنْتِ","اِجْتَمِعِيْ","ijtami'ii","berkumpullah! (pr.)"],
          ["أَنْتُمَا","اِجْتَمِعَا","ijtami'aa","berkumpullah kamu berdua!"],
          ["أَنْتُمْ","اِجْتَمِعُوْا","ijtami'uu","berkumpullah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِجْتَمِعْنَ","ijtami'na","berkumpullah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","اُجْتُمِعَ","ujtumi'a","dia (lk.) telah dikumpulkan"],
          ["هِيَ","اُجْتُمِعَتْ","ujtumi'at","dia (pr.) telah dikumpulkan"],
          ["هُمَا","اُجْتُمِعَا","ujtumi'aa","keduanya (lk.) telah dikumpulkan"],
          ["هُمَا","اُجْتُمِعَتَا","ujtumi'ataa","keduanya (pr.) telah dikumpulkan"],
          ["هُمْ","اُجْتُمِعُوْا","ujtumi'uu","mereka (lk.) telah dikumpulkan"],
          ["هُنَّ","اُجْتُمِعْنَ","ujtumi'na","mereka (pr.) telah dikumpulkan"],
          ["أَنْتَ","اُجْتُمِعْتَ","ujtumi'ta","kamu (lk.) telah dikumpulkan"],
          ["أَنْتِ","اُجْتُمِعْتِ","ujtumi'ti","kamu (pr.) telah dikumpulkan"],
          ["أَنْتُمَا","اُجْتُمِعْتُمَا","ujtumi'tumaa","kamu berdua telah dikumpulkan"],
          ["أَنْتُمْ","اُجْتُمِعْتُمْ","ujtumi'tum","kamu semua (lk.) telah dikumpulkan"],
          ["أَنْتُنَّ","اُجْتُمِعْتُنَّ","ujtumi'tunna","kamu semua (pr.) telah dikumpulkan"],
          ["أَنَا","اُجْتُمِعْتُ","ujtumi'tu","saya telah dikumpulkan"],
          ["نَحْنُ","اُجْتُمِعْنَا","ujtumi'naa","kami/kita telah dikumpulkan"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُجْتَمَعُ","yujtama'u","dia (lk.) dikumpulkan"],
          ["هِيَ","تُجْتَمَعُ","tujtama'u","dia (pr.) dikumpulkan"],
          ["هُمَا","يُجْتَمَعَانِ","yujtama'ani","keduanya (lk.) dikumpulkan"],
          ["هُمَا","تُجْتَمَعَانِ","tujtama'ani","keduanya (pr.) dikumpulkan"],
          ["هُمْ","يُجْتَمَعُوْنَ","yujtama'uuna","mereka (lk.) dikumpulkan"],
          ["هُنَّ","يُجْتَمَعْنَ","yujtama'na","mereka (pr.) dikumpulkan"],
          ["أَنْتَ","تُجْتَمَعُ","tujtama'u","kamu (lk.) dikumpulkan"],
          ["أَنْتِ","تُجْتَمَعِيْنَ","tujtama'iina","kamu (pr.) dikumpulkan"],
          ["أَنْتُمَا","تُجْتَمَعَانِ","tujtama'ani","kamu berdua dikumpulkan"],
          ["أَنْتُمْ","تُجْتَمَعُوْنَ","tujtama'uuna","kamu semua (lk.) dikumpulkan"],
          ["أَنْتُنَّ","تُجْتَمَعْنَ","tujtama'na","kamu semua (pr.) dikumpulkan"],
          ["أَنَا","أُجْتَمَعُ","ujtama'u","saya dikumpulkan"],
          ["نَحْنُ","نُجْتَمَعُ","nujtama'u","kami/kita dikumpulkan"]
        ]
      }
    }
  },

  /* ── 6. تَفَعَّلَ ── */
  tafa3al: {
    id:"tmz-tafa3al",
    wazan:"تَفَعَّلَ - يَتَفَعَّلُ",
    wazanAr:"تَفَعَّلَ",
    ziyadah:"2 huruf (ta' di awal + tasydid 'ain)",
    makna:"Mutawa'ah dari فَعَّلَ, tafakkur/tadabbur (melakukan secara perlahan dan bertahap), takalluf (berpura-pura/memaksakan diri).",
    penjelasan:"تَفَعَّلَ adalah mutawa'ah dari فَعَّلَ. Contoh: عَلَّمَ (mengajarkan) → تَعَلَّمَ (belajar, menerima pengajaran).",
    contohFiil:[
      { ar:"تَعَلَّمَ - يَتَعَلَّمُ", arti:"belajar",           root:"ع-ل-م", mutawa:"عَلَّمَ (mengajarkan)" },
      { ar:"تَكَلَّمَ - يَتَكَلَّمُ", arti:"berbicara",         root:"ك-ل-م" },
      { ar:"تَقَدَّمَ - يَتَقَدَّمُ", arti:"maju/berkembang",   root:"ق-د-م" },
      { ar:"تَوَضَّأَ - يَتَوَضَّأُ", arti:"berwudhu",          root:"و-ض-أ" },
      { ar:"تَأَمَّلَ - يَتَأَمَّلُ", arti:"merenungkan",       root:"أ-م-ل" },
      { ar:"تَصَبَّرَ - يَتَصَبَّرُ", arti:"bersabar (memaksa diri)",root:"ص-ب-ر" }
    ],
    utama:{ ar:"تَعَلَّمَ", arti:"belajar", root:"ع-ل-م" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"تَعَلَّمَ",       arti:"telah belajar" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَتَعَلَّمُ",     arti:"sedang/akan belajar" },
        { label:"Masdar",                ar:"تَعَلُّمًا",       arti:"proses belajar" },
        { label:"Fi'il Amr",             ar:"تَعَلَّمْ",       arti:"belajarlah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَتَعَلَّمْ", arti:"jangan belajar!" },
        { label:"Isim Fa'il",            ar:"مُتَعَلِّمٌ",      arti:"pelajar/yang belajar" },
        { label:"Isim Maf'ul",           ar:"مُتَعَلَّمٌ",      arti:"yang dipelajari" },
        { label:"Fi'il Madhi Majhul",    ar:"تُعُلِّمَ",        arti:"telah dipelajari" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُتَعَلَّمُ",      arti:"sedang/akan dipelajari" },
        { label:"Isim Zaman/Makan",      ar:"مُتَعَلَّمٌ",      arti:"tempat belajar" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","تَعَلَّمَ","ta'allama","dia (lk.) telah belajar"],
          ["هِيَ","تَعَلَّمَتْ","ta'allamat","dia (pr.) telah belajar"],
          ["هُمَا","تَعَلَّمَا","ta'allamaa","keduanya (lk.) telah belajar"],
          ["هُمَا","تَعَلَّمَتَا","ta'allamataa","keduanya (pr.) telah belajar"],
          ["هُمْ","تَعَلَّمُوْا","ta'allamuu","mereka (lk.) telah belajar"],
          ["هُنَّ","تَعَلَّمْنَ","ta'allamna","mereka (pr.) telah belajar"],
          ["أَنْتَ","تَعَلَّمْتَ","ta'allamta","kamu (lk.) telah belajar"],
          ["أَنْتِ","تَعَلَّمْتِ","ta'allamti","kamu (pr.) telah belajar"],
          ["أَنْتُمَا","تَعَلَّمْتُمَا","ta'allamtumaa","kamu berdua telah belajar"],
          ["أَنْتُمْ","تَعَلَّمْتُمْ","ta'allamtum","kamu semua (lk.) telah belajar"],
          ["أَنْتُنَّ","تَعَلَّمْتُنَّ","ta'allamtunna","kamu semua (pr.) telah belajar"],
          ["أَنَا","تَعَلَّمْتُ","ta'allamtu","saya telah belajar"],
          ["نَحْنُ","تَعَلَّمْنَا","ta'allamnaa","kami/kita telah belajar"]
        ],
        mudhari_malum:[
          ["هُوَ","يَتَعَلَّمُ","yata'allamu","dia (lk.) belajar"],
          ["هِيَ","تَتَعَلَّمُ","tata'allamu","dia (pr.) belajar"],
          ["هُمَا","يَتَعَلَّمَانِ","yata'allamani","keduanya (lk.) belajar"],
          ["هُمَا","تَتَعَلَّمَانِ","tata'allamani","keduanya (pr.) belajar"],
          ["هُمْ","يَتَعَلَّمُوْنَ","yata'allamuuna","mereka (lk.) belajar"],
          ["هُنَّ","يَتَعَلَّمْنَ","yata'allamna","mereka (pr.) belajar"],
          ["أَنْتَ","تَتَعَلَّمُ","tata'allamu","kamu (lk.) belajar"],
          ["أَنْتِ","تَتَعَلَّمِيْنَ","tata'allamiina","kamu (pr.) belajar"],
          ["أَنْتُمَا","تَتَعَلَّمَانِ","tata'allamani","kamu berdua belajar"],
          ["أَنْتُمْ","تَتَعَلَّمُوْنَ","tata'allamuuna","kamu semua (lk.) belajar"],
          ["أَنْتُنَّ","تَتَعَلَّمْنَ","tata'allamna","kamu semua (pr.) belajar"],
          ["أَنَا","أَتَعَلَّمُ","ata'allamu","saya belajar"],
          ["نَحْنُ","نَتَعَلَّمُ","nata'allamu","kami/kita belajar"]
        ],
        amr:[
          ["أَنْتَ","تَعَلَّمْ","ta'allam","belajarlah! (lk.)"],
          ["أَنْتِ","تَعَلَّمِيْ","ta'allamii","belajarlah! (pr.)"],
          ["أَنْتُمَا","تَعَلَّمَا","ta'allamaa","belajarlah kamu berdua!"],
          ["أَنْتُمْ","تَعَلَّمُوْا","ta'allamuu","belajarlah kamu semua (lk.)!"],
          ["أَنْتُنَّ","تَعَلَّمْنَ","ta'allamna","belajarlah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","تُعُلِّمَ","tu'ullima","dia (lk.) telah diajarkan/dipelajari"],
          ["هِيَ","تُعُلِّمَتْ","tu'ullimat","dia (pr.) telah dipelajari"],
          ["هُمَا","تُعُلِّمَا","tu'ullimaa","keduanya (lk.) telah dipelajari"],
          ["هُمَا","تُعُلِّمَتَا","tu'ullimataa","keduanya (pr.) telah dipelajari"],
          ["هُمْ","تُعُلِّمُوْا","tu'ullimuu","mereka (lk.) telah dipelajari"],
          ["هُنَّ","تُعُلِّمْنَ","tu'ullimna","mereka (pr.) telah dipelajari"],
          ["أَنْتَ","تُعُلِّمْتَ","tu'ullimta","kamu (lk.) telah dipelajari"],
          ["أَنْتِ","تُعُلِّمْتِ","tu'ullimti","kamu (pr.) telah dipelajari"],
          ["أَنْتُمَا","تُعُلِّمْتُمَا","tu'ullimtumaa","kamu berdua telah dipelajari"],
          ["أَنْتُمْ","تُعُلِّمْتُمْ","tu'ullimtum","kamu semua (lk.) telah dipelajari"],
          ["أَنْتُنَّ","تُعُلِّمْتُنَّ","tu'ullimtunna","kamu semua (pr.) telah dipelajari"],
          ["أَنَا","تُعُلِّمْتُ","tu'ullimtu","saya telah dipelajari"],
          ["نَحْنُ","تُعُلِّمْنَا","tu'ullimnaa","kami/kita telah dipelajari"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُتَعَلَّمُ","yuta'allamu","dia (lk.) dipelajari"],
          ["هِيَ","تُتَعَلَّمُ","tuta'allamu","dia (pr.) dipelajari"],
          ["هُمَا","يُتَعَلَّمَانِ","yuta'allamani","keduanya (lk.) dipelajari"],
          ["هُمَا","تُتَعَلَّمَانِ","tuta'allamani","keduanya (pr.) dipelajari"],
          ["هُمْ","يُتَعَلَّمُوْنَ","yuta'allamuuna","mereka (lk.) dipelajari"],
          ["هُنَّ","يُتَعَلَّمْنَ","yuta'allamna","mereka (pr.) dipelajari"],
          ["أَنْتَ","تُتَعَلَّمُ","tuta'allamu","kamu (lk.) dipelajari"],
          ["أَنْتِ","تُتَعَلَّمِيْنَ","tuta'allamiina","kamu (pr.) dipelajari"],
          ["أَنْتُمَا","تُتَعَلَّمَانِ","tuta'allamani","kamu berdua dipelajari"],
          ["أَنْتُمْ","تُتَعَلَّمُوْنَ","tuta'allamuuna","kamu semua (lk.) dipelajari"],
          ["أَنْتُنَّ","تُتَعَلَّمْنَ","tuta'allamna","kamu semua (pr.) dipelajari"],
          ["أَنَا","أُتَعَلَّمُ","uta'allamu","saya dipelajari"],
          ["نَحْنُ","نُتَعَلَّمُ","nuta'allamu","kami/kita dipelajari"]
        ]
      }
    }
  },

  /* ── 7. تَفَاعَلَ ── */
  tafaaal: {
    id:"tmz-tafaaal",
    wazan:"تَفَاعَلَ - يَتَفَاعَلُ",
    wazanAr:"تَفَاعَلَ",
    ziyadah:"2 huruf (ta' di awal + alif setelah fa')",
    makna:"Mutawa'ah dari فَاعَلَ (saling melakukan), iddi'a (pura-pura), tatabu' (berturut-turut).",
    contohFiil:[
      { ar:"تَنَاصَرَ - يَتَنَاصَرُ", arti:"saling menolong",    root:"ن-ص-ر" },
      { ar:"تَبَادَلَ - يَتَبَادَلُ", arti:"saling bertukar",    root:"ب-د-ل" },
      { ar:"تَفَاهَمَ - يَتَفَاهَمُ", arti:"saling memahami",    root:"ف-ه-م" },
      { ar:"تَعَاوَنَ - يَتَعَاوَنُ", arti:"bekerja sama",       root:"ع-و-ن" },
      { ar:"تَكَاسَلَ - يَتَكَاسَلُ", arti:"pura-pura malas",    root:"ك-س-ل" }
    ],
    utama:{ ar:"تَنَاصَرَ", arti:"saling menolong", root:"ن-ص-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"تَنَاصَرَ",      arti:"telah saling menolong" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَتَنَاصَرُ",    arti:"sedang/akan saling menolong" },
        { label:"Masdar",                ar:"تَنَاصُرًا",      arti:"tolong-menolong" },
        { label:"Fi'il Amr",             ar:"تَنَاصَرْ",      arti:"saling menolonglah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَتَنَاصَرْ",arti:"jangan saling menolong!" },
        { label:"Isim Fa'il",            ar:"مُتَنَاصِرٌ",     arti:"yang saling menolong" },
        { label:"Isim Maf'ul",           ar:"مُتَنَاصَرٌ",     arti:"yang dibantu bersama" },
        { label:"Fi'il Madhi Majhul",    ar:"تُنُوْصِرَ",      arti:"telah saling ditolong" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُتَنَاصَرُ",     arti:"saling ditolong" },
        { label:"Isim Zaman/Makan",      ar:"مُتَنَاصَرٌ",     arti:"tempat tolong-menolong" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","تَنَاصَرَ","tanaashara","dia (lk.) telah saling menolong"],
          ["هِيَ","تَنَاصَرَتْ","tanaasharat","dia (pr.) telah saling menolong"],
          ["هُمَا","تَنَاصَرَا","tanaasharaa","keduanya (lk.) telah saling menolong"],
          ["هُمَا","تَنَاصَرَتَا","tanaasharataa","keduanya (pr.) telah saling menolong"],
          ["هُمْ","تَنَاصَرُوْا","tanaasharuu","mereka (lk.) telah saling menolong"],
          ["هُنَّ","تَنَاصَرْنَ","tanaasharna","mereka (pr.) telah saling menolong"],
          ["أَنْتَ","تَنَاصَرْتَ","tanaasharta","kamu (lk.) telah saling menolong"],
          ["أَنْتِ","تَنَاصَرْتِ","tanaasharti","kamu (pr.) telah saling menolong"],
          ["أَنْتُمَا","تَنَاصَرْتُمَا","tanaashartumaa","kamu berdua telah saling menolong"],
          ["أَنْتُمْ","تَنَاصَرْتُمْ","tanaashartum","kamu semua (lk.) telah saling menolong"],
          ["أَنْتُنَّ","تَنَاصَرْتُنَّ","tanaashartunna","kamu semua (pr.) telah saling menolong"],
          ["أَنَا","تَنَاصَرْتُ","tanaashartu","saya telah saling menolong"],
          ["نَحْنُ","تَنَاصَرْنَا","tanaasharnaa","kami/kita telah saling menolong"]
        ],
        mudhari_malum:[
          ["هُوَ","يَتَنَاصَرُ","yatanaasharu","dia (lk.) saling menolong"],
          ["هِيَ","تَتَنَاصَرُ","tatanaasharu","dia (pr.) saling menolong"],
          ["هُمَا","يَتَنَاصَرَانِ","yatanaasharani","keduanya (lk.) saling menolong"],
          ["هُمَا","تَتَنَاصَرَانِ","tatanaasharani","keduanya (pr.) saling menolong"],
          ["هُمْ","يَتَنَاصَرُوْنَ","yatanaasharuuna","mereka (lk.) saling menolong"],
          ["هُنَّ","يَتَنَاصَرْنَ","yatanaasharna","mereka (pr.) saling menolong"],
          ["أَنْتَ","تَتَنَاصَرُ","tatanaasharu","kamu (lk.) saling menolong"],
          ["أَنْتِ","تَتَنَاصَرِيْنَ","tatanaashariina","kamu (pr.) saling menolong"],
          ["أَنْتُمَا","تَتَنَاصَرَانِ","tatanaasharani","kamu berdua saling menolong"],
          ["أَنْتُمْ","تَتَنَاصَرُوْنَ","tatanaasharuuna","kamu semua (lk.) saling menolong"],
          ["أَنْتُنَّ","تَتَنَاصَرْنَ","tatanaasharna","kamu semua (pr.) saling menolong"],
          ["أَنَا","أَتَنَاصَرُ","atanaasharu","saya saling menolong"],
          ["نَحْنُ","نَتَنَاصَرُ","natanaasharu","kami/kita saling menolong"]
        ],
        amr:[
          ["أَنْتَ","تَنَاصَرْ","tanaashar","saling menolonglah! (lk.)"],
          ["أَنْتِ","تَنَاصَرِيْ","tanaasharii","saling menolonglah! (pr.)"],
          ["أَنْتُمَا","تَنَاصَرَا","tanaasharaa","saling menolonglah kamu berdua!"],
          ["أَنْتُمْ","تَنَاصَرُوْا","tanaasharuu","saling menolonglah kamu semua (lk.)!"],
          ["أَنْتُنَّ","تَنَاصَرْنَ","tanaasharna","saling menolonglah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  /* ── 8. اِسْتَفْعَلَ ── */
  istaf3al: {
    id:"tmz-istaf3al",
    wazan:"اِسْتَفْعَلَ - يَسْتَفْعِلُ",
    wazanAr:"اِسْتَفْعَلَ",
    ziyadah:"3 huruf (hamzah washl + sin + ta')",
    makna:"Thalab (meminta/mencari), wujud (menganggap ada sifat), tahawwul (berubah menjadi).",
    penjelasan:"اِسْتَفْعَلَ adalah wazan mazid 3 huruf yang paling umum. Makna paling khas: 'meminta' atau 'mencari' sesuatu.",
    contohFiil:[
      { ar:"اِسْتَغْفَرَ - يَسْتَغْفِرُ", arti:"meminta ampun",     root:"غ-ف-ر" },
      { ar:"اِسْتَعَانَ - يَسْتَعِيْنُ", arti:"meminta pertolongan",root:"ع-و-ن" },
      { ar:"اِسْتَخْرَجَ - يَسْتَخْرِجُ",arti:"mengeluarkan",       root:"خ-ر-ج" },
      { ar:"اِسْتَقْبَلَ - يَسْتَقْبِلُ",arti:"menyambut/menghadap", root:"ق-ب-ل" },
      { ar:"اِسْتَوْجَبَ - يَسْتَوْجِبُ",arti:"mewajibkan diri",    root:"و-ج-ب" },
      { ar:"اِسْتَحَقَّ - يَسْتَحِقُّ",  arti:"berhak/pantas",      root:"ح-ق-ق" }
    ],
    utama:{ ar:"اِسْتَغْفَرَ", arti:"meminta ampun", root:"غ-ف-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِسْتَغْفَرَ",     arti:"telah meminta ampun" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَسْتَغْفِرُ",     arti:"sedang/akan meminta ampun" },
        { label:"Masdar",                ar:"اِسْتِغْفَارًا",    arti:"istighfar/permintaan ampun" },
        { label:"Fi'il Amr",             ar:"اِسْتَغْفِرْ",     arti:"mintalah ampun!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَسْتَغْفِرْ", arti:"jangan meminta ampun!" },
        { label:"Isim Fa'il",            ar:"مُسْتَغْفِرٌ",      arti:"yang meminta ampun" },
        { label:"Isim Maf'ul",           ar:"مُسْتَغْفَرٌ",      arti:"yang dimintai ampun" },
        { label:"Fi'il Madhi Majhul",    ar:"اُسْتُغْفِرَ",      arti:"telah dimintai ampun (kpd-Nya)" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُسْتَغْفَرُ",      arti:"sedang dimintai ampun" },
        { label:"Isim Zaman/Makan",      ar:"مُسْتَغْفَرٌ",      arti:"tempat/waktu beristighfar" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِسْتَغْفَرَ","istaghfara","dia (lk.) telah meminta ampun"],
          ["هِيَ","اِسْتَغْفَرَتْ","istaghfarat","dia (pr.) telah meminta ampun"],
          ["هُمَا","اِسْتَغْفَرَا","istaghfaraa","keduanya (lk.) telah meminta ampun"],
          ["هُمَا","اِسْتَغْفَرَتَا","istaghfarataa","keduanya (pr.) telah meminta ampun"],
          ["هُمْ","اِسْتَغْفَرُوْا","istaghfaruu","mereka (lk.) telah meminta ampun"],
          ["هُنَّ","اِسْتَغْفَرْنَ","istaghfarna","mereka (pr.) telah meminta ampun"],
          ["أَنْتَ","اِسْتَغْفَرْتَ","istaghfarta","kamu (lk.) telah meminta ampun"],
          ["أَنْتِ","اِسْتَغْفَرْتِ","istaghfarti","kamu (pr.) telah meminta ampun"],
          ["أَنْتُمَا","اِسْتَغْفَرْتُمَا","istaghfartumaa","kamu berdua telah meminta ampun"],
          ["أَنْتُمْ","اِسْتَغْفَرْتُمْ","istaghfartum","kamu semua (lk.) telah meminta ampun"],
          ["أَنْتُنَّ","اِسْتَغْفَرْتُنَّ","istaghfartunna","kamu semua (pr.) telah meminta ampun"],
          ["أَنَا","اِسْتَغْفَرْتُ","istaghfartu","saya telah meminta ampun"],
          ["نَحْنُ","اِسْتَغْفَرْنَا","istaghfarnaa","kami/kita telah meminta ampun"]
        ],
        mudhari_malum:[
          ["هُوَ","يَسْتَغْفِرُ","yastaghfiru","dia (lk.) meminta ampun"],
          ["هِيَ","تَسْتَغْفِرُ","tastaghfiru","dia (pr.) meminta ampun"],
          ["هُمَا","يَسْتَغْفِرَانِ","yastaghfirani","keduanya (lk.) meminta ampun"],
          ["هُمَا","تَسْتَغْفِرَانِ","tastaghfirani","keduanya (pr.) meminta ampun"],
          ["هُمْ","يَسْتَغْفِرُوْنَ","yastaghfiruuna","mereka (lk.) meminta ampun"],
          ["هُنَّ","يَسْتَغْفِرْنَ","yastaghfirna","mereka (pr.) meminta ampun"],
          ["أَنْتَ","تَسْتَغْفِرُ","tastaghfiru","kamu (lk.) meminta ampun"],
          ["أَنْتِ","تَسْتَغْفِرِيْنَ","tastaghfiriina","kamu (pr.) meminta ampun"],
          ["أَنْتُمَا","تَسْتَغْفِرَانِ","tastaghfirani","kamu berdua meminta ampun"],
          ["أَنْتُمْ","تَسْتَغْفِرُوْنَ","tastaghfiruuna","kamu semua (lk.) meminta ampun"],
          ["أَنْتُنَّ","تَسْتَغْفِرْنَ","tastaghfirna","kamu semua (pr.) meminta ampun"],
          ["أَنَا","أَسْتَغْفِرُ","astaghfiru","saya meminta ampun"],
          ["نَحْنُ","نَسْتَغْفِرُ","nastaghfiru","kami/kita meminta ampun"]
        ],
        amr:[
          ["أَنْتَ","اِسْتَغْفِرْ","istaghfir","mintalah ampun! (lk.)"],
          ["أَنْتِ","اِسْتَغْفِرِيْ","istaghfirii","mintalah ampun! (pr.)"],
          ["أَنْتُمَا","اِسْتَغْفِرَا","istaghfiraa","mintalah ampun kamu berdua!"],
          ["أَنْتُمْ","اِسْتَغْفِرُوْا","istaghfiruu","mintalah ampun kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِسْتَغْفِرْنَ","istaghfirna","mintalah ampun kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","اُسْتُغْفِرَ","ustughfira","dia (lk.) telah dimintai ampun"],
          ["هِيَ","اُسْتُغْفِرَتْ","ustughfirat","dia (pr.) telah dimintai ampun"],
          ["هُمَا","اُسْتُغْفِرَا","ustughfiraa","keduanya (lk.) telah dimintai ampun"],
          ["هُمَا","اُسْتُغْفِرَتَا","ustughfirataa","keduanya (pr.) telah dimintai ampun"],
          ["هُمْ","اُسْتُغْفِرُوْا","ustughfiruu","mereka (lk.) telah dimintai ampun"],
          ["هُنَّ","اُسْتُغْفِرْنَ","ustughfirna","mereka (pr.) telah dimintai ampun"],
          ["أَنْتَ","اُسْتُغْفِرْتَ","ustughfirta","kamu (lk.) telah dimintai ampun"],
          ["أَنْتِ","اُسْتُغْفِرْتِ","ustughfirati","kamu (pr.) telah dimintai ampun"],
          ["أَنْتُمَا","اُسْتُغْفِرْتُمَا","ustughfirtumaa","kamu berdua telah dimintai ampun"],
          ["أَنْتُمْ","اُسْتُغْفِرْتُمْ","ustughfirtum","kamu semua (lk.) telah dimintai ampun"],
          ["أَنْتُنَّ","اُسْتُغْفِرْتُنَّ","ustughfirtunna","kamu semua (pr.) telah dimintai ampun"],
          ["أَنَا","اُسْتُغْفِرْتُ","ustughfirtu","saya telah dimintai ampun"],
          ["نَحْنُ","اُسْتُغْفِرْنَا","ustughfirnaa","kami/kita telah dimintai ampun"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُسْتَغْفَرُ","yustaghfaru","dia (lk.) dimintai ampun"],
          ["هِيَ","تُسْتَغْفَرُ","tustaghfaru","dia (pr.) dimintai ampun"],
          ["هُمَا","يُسْتَغْفَرَانِ","yustaghfarani","keduanya (lk.) dimintai ampun"],
          ["هُمَا","تُسْتَغْفَرَانِ","tustaghfarani","keduanya (pr.) dimintai ampun"],
          ["هُمْ","يُسْتَغْفَرُوْنَ","yustaghfaruuna","mereka (lk.) dimintai ampun"],
          ["هُنَّ","يُسْتَغْفَرْنَ","yustaghfarna","mereka (pr.) dimintai ampun"],
          ["أَنْتَ","تُسْتَغْفَرُ","tustaghfaru","kamu (lk.) dimintai ampun"],
          ["أَنْتِ","تُسْتَغْفَرِيْنَ","tustaghfariina","kamu (pr.) dimintai ampun"],
          ["أَنْتُمَا","تُسْتَغْفَرَانِ","tustaghfarani","kamu berdua dimintai ampun"],
          ["أَنْتُمْ","تُسْتَغْفَرُوْنَ","tustaghfaruuna","kamu semua (lk.) dimintai ampun"],
          ["أَنْتُنَّ","تُسْتَغْفَرْنَ","tustaghfarna","kamu semua (pr.) dimintai ampun"],
          ["أَنَا","أُسْتَغْفَرُ","ustaghfaru","saya dimintai ampun"],
          ["نَحْنُ","نُسْتَغْفَرُ","nustaghfaru","kami/kita dimintai ampun"]
        ]
      }
    }
  },

  /* ── 9. اِفْعَلَّ ── */
  if3alla: {
    id:"tmz-ifaal",
    wazan:"اِفْعَلَّ - يَفْعَلُّ",
    wazanAr:"اِفْعَلَّ",
    ziyadah:"2 huruf (hamzah washl + tasydid pada lam)",
    makna:"Menyatakan warna atau cacat fisik; biasanya lazim (intransitif).",
    penjelasan:"اِفْعَلَّ adalah wazan mazid 2 huruf yang khas untuk warna dan cacat fisik. Contoh: اِحْمَرَّ (menjadi merah). Karena lazim, bentuk majhul dan isim maf'ul tidak digunakan.",
    contohFiil:[
      { ar:"اِحْمَرَّ - يَحْمَرُّ", arti:"menjadi merah",  root:"ح-م-ر" },
      { ar:"اِخْضَرَّ - يَخْضَرُّ", arti:"menjadi hijau",  root:"خ-ض-ر" },
      { ar:"اِصْفَرَّ - يَصْفَرُّ", arti:"menjadi kuning", root:"ص-ف-ر" },
      { ar:"اِسْوَدَّ - يَسْوَدُّ", arti:"menjadi hitam",  root:"س-و-د" },
      { ar:"اِبْيَضَّ - يَبْيَضُّ", arti:"menjadi putih",  root:"ب-ي-ض" },
      { ar:"اِزْرَقَّ - يَزْرَقُّ", arti:"menjadi biru",   root:"ز-ر-ق" }
    ],
    utama:{ ar:"اِحْمَرَّ", arti:"menjadi merah", root:"ح-م-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِحْمَرَّ",      arti:"telah menjadi merah" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَحْمَرُّ",      arti:"sedang/akan menjadi merah" },
        { label:"Masdar",                ar:"اِحْمِرَارًا",   arti:"kemerahan" },
        { label:"Fi'il Amr",             ar:"اِحْمَرِرْ",     arti:"jadilah merah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَحْمَرِرْ", arti:"jangan menjadi merah!" },
        { label:"Isim Fa'il",            ar:"مُحْمَرٌّ",       arti:"yang merah" },
        { label:"Isim Maf'ul",           ar:"-",              arti:"(lazim — tidak ada)" },
        { label:"Fi'il Madhi Majhul",    ar:"-",              arti:"(lazim — tidak ada)" },
        { label:"Fi'il Mudhari' Majhul", ar:"-",              arti:"(lazim — tidak ada)" },
        { label:"Isim Zaman/Makan",      ar:"-",              arti:"(tidak berlaku)" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِحْمَرَّ","ihmarra","dia (lk.) telah menjadi merah"],
          ["هِيَ","اِحْمَرَّتْ","ihmarrat","dia (pr.) telah menjadi merah"],
          ["هُمَا","اِحْمَرَّا","ihmarraa","keduanya (lk.) telah menjadi merah"],
          ["هُمَا","اِحْمَرَّتَا","ihmarrataa","keduanya (pr.) telah menjadi merah"],
          ["هُمْ","اِحْمَرُّوْا","ihmarruu","mereka (lk.) telah menjadi merah"],
          ["هُنَّ","اِحْمَرَرْنَ","ihmararna","mereka (pr.) telah menjadi merah"],
          ["أَنْتَ","اِحْمَرَرْتَ","ihmararta","kamu (lk.) telah menjadi merah"],
          ["أَنْتِ","اِحْمَرَرْتِ","ihmararti","kamu (pr.) telah menjadi merah"],
          ["أَنْتُمَا","اِحْمَرَرْتُمَا","ihmarartumaa","kamu berdua telah menjadi merah"],
          ["أَنْتُمْ","اِحْمَرَرْتُمْ","ihmarartum","kamu semua (lk.) telah menjadi merah"],
          ["أَنْتُنَّ","اِحْمَرَرْتُنَّ","ihmarartunna","kamu semua (pr.) telah menjadi merah"],
          ["أَنَا","اِحْمَرَرْتُ","ihmarartu","saya telah menjadi merah"],
          ["نَحْنُ","اِحْمَرَرْنَا","ihmararnaa","kami/kita telah menjadi merah"]
        ],
        mudhari_malum:[
          ["هُوَ","يَحْمَرُّ","yahmarru","dia (lk.) menjadi merah"],
          ["هِيَ","تَحْمَرُّ","tahmarru","dia (pr.) menjadi merah"],
          ["هُمَا","يَحْمَرَّانِ","yahmarraani","keduanya (lk.) menjadi merah"],
          ["هُمَا","تَحْمَرَّانِ","tahmarraani","keduanya (pr.) menjadi merah"],
          ["هُمْ","يَحْمَرُّوْنَ","yahmarruuna","mereka (lk.) menjadi merah"],
          ["هُنَّ","يَحْمَرِرْنَ","yahmarirna","mereka (pr.) menjadi merah"],
          ["أَنْتَ","تَحْمَرُّ","tahmarru","kamu (lk.) menjadi merah"],
          ["أَنْتِ","تَحْمَرِّيْنَ","tahmarriina","kamu (pr.) menjadi merah"],
          ["أَنْتُمَا","تَحْمَرَّانِ","tahmarraani","kamu berdua menjadi merah"],
          ["أَنْتُمْ","تَحْمَرُّوْنَ","tahmarruuna","kamu semua (lk.) menjadi merah"],
          ["أَنْتُنَّ","تَحْمَرِرْنَ","tahmarirna","kamu semua (pr.) menjadi merah"],
          ["أَنَا","أَحْمَرُّ","ahmarru","saya menjadi merah"],
          ["نَحْنُ","نَحْمَرُّ","nahmarru","kami/kita menjadi merah"]
        ],
        amr:[
          ["أَنْتَ","اِحْمَرِرْ","ihmarir","jadilah merah! (lk.)"],
          ["أَنْتِ","اِحْمَرِّيْ","ihmarrii","jadilah merah! (pr.)"],
          ["أَنْتُمَا","اِحْمَرِّا","ihmarriaa","jadilah merah kamu berdua!"],
          ["أَنْتُمْ","اِحْمَرُّوْا","ihmarruu","jadilah merah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِحْمَرِرْنَ","ihmarirna","jadilah merah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  /* ── 10. اِفْعَوَّلَ ── */
  if3awwal: {
    id:"tmz-if3awwal",
    wazan:"اِفْعَوَّلَ - يَفْعَوِّلُ",
    wazanAr:"اِفْعَوَّلَ",
    ziyadah:"3 huruf (hamzah washl + waw + tasydid pada waw)",
    makna:"Mubalaghah dan terkadang menunjukkan gerakan atau keadaan tertentu; biasanya lazim.",
    penjelasan:"اِفْعَوَّلَ adalah wazan mazid 3 huruf yang jarang. Cirinya: setelah fa' dan 'ain terdapat waw bertasydid. Contoh: اِجْلَوَّذَ (berjalan cepat).",
    contohFiil:[
      { ar:"اِجْلَوَّذَ - يَجْلَوِّذُ", arti:"berjalan cepat", root:"ج-ل-ذ" },
      { ar:"اِعْلَوَّطَ - يَعْلَوِّطُ", arti:"berpegang/naik unta tanpa pelana", root:"ع-ل-ط" },
      { ar:"اِخْرَوَّطَ - يَخْرَوِّطُ", arti:"memanjang; berlangsung lama", root:"خ-ر-ط" }
    ],
    utama:{ ar:"اِجْلَوَّذَ", arti:"berjalan cepat", root:"ج-ل-ذ" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِجْلَوَّذَ",      arti:"telah berjalan cepat" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَجْلَوِّذُ",      arti:"sedang/akan berjalan cepat" },
        { label:"Masdar",                ar:"اِجْلِوَّاذًا",    arti:"kecepatan/kelangsungan" },
        { label:"Fi'il Amr",             ar:"اِجْلَوِّذْ",      arti:"berjalan cepatlah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَجْلَوِّذْ",  arti:"jangan berjalan cepat!" },
        { label:"Isim Fa'il",            ar:"مُجْلَوِّذٌ",      arti:"yang berjalan cepat" },
        { label:"Isim Maf'ul",           ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Fi'il Madhi Majhul",    ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Fi'il Mudhari' Majhul", ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Isim Zaman/Makan",      ar:"-",               arti:"(tidak berlaku)" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِجْلَوَّذَ","ijlawwadza","dia (lk.) telah berjalan cepat"],
          ["هِيَ","اِجْلَوَّذَتْ","ijlawwadzat","dia (pr.) telah berjalan cepat"],
          ["هُمَا","اِجْلَوَّذَا","ijlawwadzaa","keduanya (lk.) telah berjalan cepat"],
          ["هُمَا","اِجْلَوَّذَتَا","ijlawwadzataa","keduanya (pr.) telah berjalan cepat"],
          ["هُمْ","اِجْلَوَّذُوْا","ijlawwadzuu","mereka (lk.) telah berjalan cepat"],
          ["هُنَّ","اِجْلَوَّذْنَ","ijlawwadzna","mereka (pr.) telah berjalan cepat"],
          ["أَنْتَ","اِجْلَوَّذْتَ","ijlawwadzta","kamu (lk.) telah berjalan cepat"],
          ["أَنْتِ","اِجْلَوَّذْتِ","ijlawwadzti","kamu (pr.) telah berjalan cepat"],
          ["أَنْتُمَا","اِجْلَوَّذْتُمَا","ijlawwadztumaa","kamu berdua telah berjalan cepat"],
          ["أَنْتُمْ","اِجْلَوَّذْتُمْ","ijlawwadztum","kamu semua (lk.) telah berjalan cepat"],
          ["أَنْتُنَّ","اِجْلَوَّذْتُنَّ","ijlawwadztunna","kamu semua (pr.) telah berjalan cepat"],
          ["أَنَا","اِجْلَوَّذْتُ","ijlawwadztu","saya telah berjalan cepat"],
          ["نَحْنُ","اِجْلَوَّذْنَا","ijlawwadznaa","kami/kita telah berjalan cepat"]
        ],
        mudhari_malum:[
          ["هُوَ","يَجْلَوِّذُ","yajlawwidzu","dia (lk.) berjalan cepat"],
          ["هِيَ","تَجْلَوِّذُ","tajlawwidzu","dia (pr.) berjalan cepat"],
          ["هُمَا","يَجْلَوِّذَانِ","yajlawwidzaani","keduanya (lk.) berjalan cepat"],
          ["هُمَا","تَجْلَوِّذَانِ","tajlawwidzaani","keduanya (pr.) berjalan cepat"],
          ["هُمْ","يَجْلَوِّذُوْنَ","yajlawwidzuuna","mereka (lk.) berjalan cepat"],
          ["هُنَّ","يَجْلَوِّذْنَ","yajlawwidzna","mereka (pr.) berjalan cepat"],
          ["أَنْتَ","تَجْلَوِّذُ","tajlawwidzu","kamu (lk.) berjalan cepat"],
          ["أَنْتِ","تَجْلَوِّذِيْنَ","tajlawwidziina","kamu (pr.) berjalan cepat"],
          ["أَنْتُمَا","تَجْلَوِّذَانِ","tajlawwidzaani","kamu berdua berjalan cepat"],
          ["أَنْتُمْ","تَجْلَوِّذُوْنَ","tajlawwidzuuna","kamu semua (lk.) berjalan cepat"],
          ["أَنْتُنَّ","تَجْلَوِّذْنَ","tajlawwidzna","kamu semua (pr.) berjalan cepat"],
          ["أَنَا","أَجْلَوِّذُ","ajlawwidzu","saya berjalan cepat"],
          ["نَحْنُ","نَجْلَوِّذُ","najlawwidzu","kami/kita berjalan cepat"]
        ],
        amr:[
          ["أَنْتَ","اِجْلَوِّذْ","ijlawwidz","berjalan cepatlah! (lk.)"],
          ["أَنْتِ","اِجْلَوِّذِيْ","ijlawwidzii","berjalan cepatlah! (pr.)"],
          ["أَنْتُمَا","اِجْلَوِّذَا","ijlawwidzaa","berjalan cepatlah kamu berdua!"],
          ["أَنْتُمْ","اِجْلَوِّذُوْا","ijlawwidzuu","berjalan cepatlah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِجْلَوِّذْنَ","ijlawwidzna","berjalan cepatlah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  /* ── 11. اِفْعَالَّ ── */
  if3aal: {
    id:"tmz-if3aal",
    wazan:"اِفْعَالَّ - يَفْعَالُّ",
    wazanAr:"اِفْعَالَّ",
    ziyadah:"3 huruf (hamzah washl + alif + tasydid pada lam)",
    makna:"Menyatakan warna atau cacat fisik yang sangat intens; biasanya lazim.",
    penjelasan:"اِفْعَالَّ adalah wazan mazid 3 huruf yang menunjukkan intensitas warna atau sifat fisik, lebih kuat daripada اِفْعَلَّ. Contoh: اِحْمَارَّ (menjadi sangat merah).",
    contohFiil:[
      { ar:"اِحْمَارَّ - يَحْمَارُّ", arti:"menjadi sangat merah", root:"ح-م-ر" },
      { ar:"اِخْضَارَّ - يَخْضَارُّ", arti:"menjadi sangat hijau", root:"خ-ض-ر" },
      { ar:"اِدْهَامَّ - يَدْهَامُّ", arti:"menjadi sangat hitam", root:"د-ه-م" },
      { ar:"اِشْعَانَّ - يَشْعَانُّ", arti:"rambut menjadi acak-acakan", root:"ش-ع-ن" }
    ],
    utama:{ ar:"اِحْمَارَّ", arti:"menjadi sangat merah", root:"ح-م-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِحْمَارَّ",      arti:"telah menjadi sangat merah" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَحْمَارُّ",      arti:"sedang/akan menjadi sangat merah" },
        { label:"Masdar",                ar:"اِحْمِيرَارًا",   arti:"kemerahan yang sangat" },
        { label:"Fi'il Amr",             ar:"اِحْمَارِرْ",     arti:"jadilah sangat merah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَحْمَارِرْ", arti:"jangan menjadi sangat merah!" },
        { label:"Isim Fa'il",            ar:"مُحْمَارٌّ",      arti:"yang sangat merah" },
        { label:"Isim Maf'ul",           ar:"-",              arti:"(lazim — tidak ada)" },
        { label:"Fi'il Madhi Majhul",    ar:"-",              arti:"(lazim — tidak ada)" },
        { label:"Fi'il Mudhari' Majhul", ar:"-",              arti:"(lazim — tidak ada)" },
        { label:"Isim Zaman/Makan",      ar:"-",              arti:"(tidak berlaku)" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِحْمَارَّ","ihmaarra","dia (lk.) telah menjadi sangat merah"],
          ["هِيَ","اِحْمَارَّتْ","ihmaarrat","dia (pr.) telah menjadi sangat merah"],
          ["هُمَا","اِحْمَارَّا","ihmaarraa","keduanya (lk.) telah menjadi sangat merah"],
          ["هُمَا","اِحْمَارَّتَا","ihmaarrataa","keduanya (pr.) telah menjadi sangat merah"],
          ["هُمْ","اِحْمَارُّوْا","ihmaarruu","mereka (lk.) telah menjadi sangat merah"],
          ["هُنَّ","اِحْمَارَرْنَ","ihmaararna","mereka (pr.) telah menjadi sangat merah"],
          ["أَنْتَ","اِحْمَارَرْتَ","ihmaararta","kamu (lk.) telah menjadi sangat merah"],
          ["أَنْتِ","اِحْمَارَرْتِ","ihmaararti","kamu (pr.) telah menjadi sangat merah"],
          ["أَنْتُمَا","اِحْمَارَرْتُمَا","ihmaarartumaa","kamu berdua telah menjadi sangat merah"],
          ["أَنْتُمْ","اِحْمَارَرْتُمْ","ihmaarartum","kamu semua (lk.) telah menjadi sangat merah"],
          ["أَنْتُنَّ","اِحْمَارَرْتُنَّ","ihmaarartunna","kamu semua (pr.) telah menjadi sangat merah"],
          ["أَنَا","اِحْمَارَرْتُ","ihmaarartu","saya telah menjadi sangat merah"],
          ["نَحْنُ","اِحْمَارَرْنَا","ihmaararnaa","kami/kita telah menjadi sangat merah"]
        ],
        mudhari_malum:[
          ["هُوَ","يَحْمَارُّ","yahmaarru","dia (lk.) menjadi sangat merah"],
          ["هِيَ","تَحْمَارُّ","tahmaarru","dia (pr.) menjadi sangat merah"],
          ["هُمَا","يَحْمَارَّانِ","yahmaarraani","keduanya (lk.) menjadi sangat merah"],
          ["هُمَا","تَحْمَارَّانِ","tahmaarraani","keduanya (pr.) menjadi sangat merah"],
          ["هُمْ","يَحْمَارُّوْنَ","yahmaarruuna","mereka (lk.) menjadi sangat merah"],
          ["هُنَّ","يَحْمَارِرْنَ","yahmaarirna","mereka (pr.) menjadi sangat merah"],
          ["أَنْتَ","تَحْمَارُّ","tahmaarru","kamu (lk.) menjadi sangat merah"],
          ["أَنْتِ","تَحْمَارِّيْنَ","tahmaarriina","kamu (pr.) menjadi sangat merah"],
          ["أَنْتُمَا","تَحْمَارَّانِ","tahmaarraani","kamu berdua menjadi sangat merah"],
          ["أَنْتُمْ","تَحْمَارُّوْنَ","tahmaarruuna","kamu semua (lk.) menjadi sangat merah"],
          ["أَنْتُنَّ","تَحْمَارِرْنَ","tahmaarirna","kamu semua (pr.) menjadi sangat merah"],
          ["أَنَا","أَحْمَارُّ","ahmaarru","saya menjadi sangat merah"],
          ["نَحْنُ","نَحْمَارُّ","nahmaarru","kami/kita menjadi sangat merah"]
        ],
        amr:[
          ["أَنْتَ","اِحْمَارِرْ","ihmaarir","jadilah sangat merah! (lk.)"],
          ["أَنْتِ","اِحْمَارِّيْ","ihmaarrii","jadilah sangat merah! (pr.)"],
          ["أَنْتُمَا","اِحْمَارِّا","ihmaarriaa","jadilah sangat merah kamu berdua!"],
          ["أَنْتُمْ","اِحْمَارُّوْا","ihmaarruu","jadilah sangat merah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِحْمَارِرْنَ","ihmaarirna","jadilah sangat merah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  /* ── 12. اِفْعَوْعَلَ ── */
  if3awal: {
    id:"tmz-if3awal",
    wazan:"اِفْعَوْعَلَ - يَفْعَوْعِلُ",
    wazanAr:"اِفْعَوْعَلَ",
    ziyadah:"3 huruf (hamzah washl + waw + pengulangan 'ain)",
    makna:"Menyatakan keadaan atau sifat fisik, warna, atau gerakan; biasanya lazim.",
    penjelasan:"اِفْعَوْعَلَ adalah wazan mazid 3 huruf yang jarang. Cirinya: 'ain fi'il diulang setelah waw sukun. Contoh: اِحْدَوْدَبَ (menjadi bungkuk).",
    contohFiil:[
      { ar:"اِحْدَوْدَبَ - يَحْدَوْدِبُ", arti:"menjadi bungkuk", root:"ح-د-ب" },
      { ar:"اِغْرَوْرَقَ - يَغْرَوْرِقُ", arti:"berlinang air mata", root:"غ-ر-ق" },
      { ar:"اِغْدَوْدَنَ - يَغْدَوْدِنُ", arti:"tumbuh lebat", root:"غ-د-ن" },
      { ar:"اِخْشَوْشَنَ - يَخْشَوْشِنُ", arti:"menjadi kasar", root:"خ-ش-ن" }
    ],
    utama:{ ar:"اِحْدَوْدَبَ", arti:"menjadi bungkuk", root:"ح-د-ب" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِحْدَوْدَبَ",      arti:"telah menjadi bungkuk" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَحْدَوْدِبُ",      arti:"sedang/akan menjadi bungkuk" },
        { label:"Masdar",                ar:"اِحْدِيْدَابًا",    arti:"kebungkukan" },
        { label:"Fi'il Amr",             ar:"اِحْدَوْدِبْ",      arti:"jadilah bungkuk!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَحْدَوْدِبْ",  arti:"jangan menjadi bungkuk!" },
        { label:"Isim Fa'il",            ar:"مُحْدَوْدِبٌ",      arti:"yang bungkuk" },
        { label:"Isim Maf'ul",           ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Fi'il Madhi Majhul",    ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Fi'il Mudhari' Majhul", ar:"-",               arti:"(lazim — tidak ada)" },
        { label:"Isim Zaman/Makan",      ar:"-",               arti:"(tidak berlaku)" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِحْدَوْدَبَ","ihdawdaba","dia (lk.) telah menjadi bungkuk"],
          ["هِيَ","اِحْدَوْدَبَتْ","ihdawdabat","dia (pr.) telah menjadi bungkuk"],
          ["هُمَا","اِحْدَوْدَبَا","ihdawdabaa","keduanya (lk.) telah menjadi bungkuk"],
          ["هُمَا","اِحْدَوْدَبَتَا","ihdawdabataa","keduanya (pr.) telah menjadi bungkuk"],
          ["هُمْ","اِحْدَوْدَبُوْا","ihdawdabuu","mereka (lk.) telah menjadi bungkuk"],
          ["هُنَّ","اِحْدَوْدَبْنَ","ihdawdabna","mereka (pr.) telah menjadi bungkuk"],
          ["أَنْتَ","اِحْدَوْدَبْتَ","ihdawdabta","kamu (lk.) telah menjadi bungkuk"],
          ["أَنْتِ","اِحْدَوْدَبْتِ","ihdawdabti","kamu (pr.) telah menjadi bungkuk"],
          ["أَنْتُمَا","اِحْدَوْدَبْتُمَا","ihdawdabtumaa","kamu berdua telah menjadi bungkuk"],
          ["أَنْتُمْ","اِحْدَوْدَبْتُمْ","ihdawdabtum","kamu semua (lk.) telah menjadi bungkuk"],
          ["أَنْتُنَّ","اِحْدَوْدَبْتُنَّ","ihdawdabtunna","kamu semua (pr.) telah menjadi bungkuk"],
          ["أَنَا","اِحْدَوْدَبْتُ","ihdawdabtu","saya telah menjadi bungkuk"],
          ["نَحْنُ","اِحْدَوْدَبْنَا","ihdawdabnaa","kami/kita telah menjadi bungkuk"]
        ],
        mudhari_malum:[
          ["هُوَ","يَحْدَوْدِبُ","yahdawdibu","dia (lk.) menjadi bungkuk"],
          ["هِيَ","تَحْدَوْدِبُ","tahdawdibu","dia (pr.) menjadi bungkuk"],
          ["هُمَا","يَحْدَوْدِبَانِ","yahdawdibaani","keduanya (lk.) menjadi bungkuk"],
          ["هُمَا","تَحْدَوْدِبَانِ","tahdawdibaani","keduanya (pr.) menjadi bungkuk"],
          ["هُمْ","يَحْدَوْدِبُوْنَ","yahdawdibuuna","mereka (lk.) menjadi bungkuk"],
          ["هُنَّ","يَحْدَوْدِبْنَ","yahdawdibna","mereka (pr.) menjadi bungkuk"],
          ["أَنْتَ","تَحْدَوْدِبُ","tahdawdibu","kamu (lk.) menjadi bungkuk"],
          ["أَنْتِ","تَحْدَوْدِبِيْنَ","tahdawdibiina","kamu (pr.) menjadi bungkuk"],
          ["أَنْتُمَا","تَحْدَوْدِبَانِ","tahdawdibaani","kamu berdua menjadi bungkuk"],
          ["أَنْتُمْ","تَحْدَوْدِبُوْنَ","tahdawdibuuna","kamu semua (lk.) menjadi bungkuk"],
          ["أَنْتُنَّ","تَحْدَوْدِبْنَ","tahdawdibna","kamu semua (pr.) menjadi bungkuk"],
          ["أَنَا","أَحْدَوْدِبُ","ahdawdibu","saya menjadi bungkuk"],
          ["نَحْنُ","نَحْدَوْدِبُ","nahdawdibu","kami/kita menjadi bungkuk"]
        ],
        amr:[
          ["أَنْتَ","اِحْدَوْدِبْ","ihdawdib","jadilah bungkuk! (lk.)"],
          ["أَنْتِ","اِحْدَوْدِبِيْ","ihdawdibii","jadilah bungkuk! (pr.)"],
          ["أَنْتُمَا","اِحْدَوْدِبَا","ihdawdibaa","jadilah bungkuk kamu berdua!"],
          ["أَنْتُمْ","اِحْدَوْدِبُوْا","ihdawdibuu","jadilah bungkuk kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِحْدَوْدِبْنَ","ihdawdibna","jadilah bungkuk kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  }

}; // end TSULATSI_MAZID

/* =====================================================
   RUBA'I MUJARRAD & MAZID
   ===================================================== */
const RUBAI = {

  overview: {
    title: "Fi'il Ruba'i Mujarrad & Mazid",
    titleAr: "الْفِعْلُ الرُّبَاعِيُّ الْمُجَرَّدُ وَالْمَزِيْد",
    desc: "Fi'il yang memiliki empat huruf asli. Lebih sedikit dari tsulatsi, tetapi tetap produktif dalam bahasa Arab.",
    babList: [
      { wazan:"فَعْلَلَ - يُفَعْلِلُ", label:"Ruba'i Mujarrad", contoh:"دَحْرَجَ" },
      { wazan:"تَفَعْلَلَ - يَتَفَعْلَلُ", label:"Mazid 1 huruf", contoh:"تَدَحْرَجَ" },
      { wazan:"اِفْعَنْلَلَ - يَفْعَنْلِلُ", label:"Mazid 2 huruf", contoh:"اِحْرَنْجَمَ" },
      { wazan:"اِفْعَلَلَّ - يَفْعَلِلُّ", label:"Mazid 2 huruf", contoh:"اِقْشَعَرَّ" }
    ]
  },

  mujarrad: {
    id:"rm-mujarrad",
    wazan:"فَعْلَلَ - يُفَعْلِلُ",
    wazanAr:"فَعْلَلَ",
    jenis:"Ruba'i Mujarrad",
    penjelasan:"Fi'il ruba'i mujarrad hanya memiliki satu bab/wazan, yaitu فَعْلَلَ - يُفَعْلِلُ. Mirip dengan wazan فَعَّلَ dari tsulatsi dalam pola masdar dan derivasinya.",
    contohFiil:[
      { ar:"دَحْرَجَ - يُدَحْرِجُ", arti:"menggelindingkan",  root:"د-ح-ر-ج" },
      { ar:"زَلْزَلَ - يُزَلْزِلُ", arti:"mengguncang",       root:"ز-ل-ز-ل" },
      { ar:"وَسْوَسَ - يُوَسْوِسُ", arti:"membisikkan",       root:"و-س-و-س" },
      { ar:"طَمْأَنَ - يُطَمْئِنُ", arti:"menenangkan",       root:"ط-م-أ-ن" },
      { ar:"بَعْثَرَ - يُبَعْثِرُ", arti:"mengacak-acak",     root:"ب-ع-ث-ر" },
      { ar:"سَيْطَرَ - يُسَيْطِرُ", arti:"menguasai",         root:"س-ي-ط-ر" }
    ],
    utama:{ ar:"دَحْرَجَ", arti:"menggelindingkan", root:"د-ح-ر-ج" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"دَحْرَجَ",       arti:"telah menggelindingkan" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يُدَحْرِجُ",     arti:"sedang/akan menggelindingkan" },
        { label:"Masdar",                ar:"دَحْرَجَةً",      arti:"penggelindingkan" },
        { label:"Fi'il Amr",             ar:"دَحْرِجْ",       arti:"gelindingkanlah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تُدَحْرِجْ", arti:"jangan menggelindingkan!" },
        { label:"Isim Fa'il",            ar:"مُدَحْرِجٌ",      arti:"yang menggelindingkan" },
        { label:"Isim Maf'ul",           ar:"مُدَحْرَجٌ",      arti:"yang digelindingkan" },
        { label:"Fi'il Madhi Majhul",    ar:"دُحْرِجَ",        arti:"telah digelindingkan" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُدَحْرَجُ",      arti:"sedang/akan digelindingkan" },
        { label:"Isim Zaman/Makan",      ar:"مُدَحْرَجٌ",      arti:"tempat menggelindingkan" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","دَحْرَجَ","dahraja","dia (lk.) telah menggelindingkan"],
          ["هِيَ","دَحْرَجَتْ","dahrajat","dia (pr.) telah menggelindingkan"],
          ["هُمَا","دَحْرَجَا","dahrajaa","keduanya (lk.) telah menggelindingkan"],
          ["هُمَا","دَحْرَجَتَا","dahrajataa","keduanya (pr.) telah menggelindingkan"],
          ["هُمْ","دَحْرَجُوْا","dahrajuu","mereka (lk.) telah menggelindingkan"],
          ["هُنَّ","دَحْرَجْنَ","dahrjna","mereka (pr.) telah menggelindingkan"],
          ["أَنْتَ","دَحْرَجْتَ","dahrajta","kamu (lk.) telah menggelindingkan"],
          ["أَنْتِ","دَحْرَجْتِ","dahrajti","kamu (pr.) telah menggelindingkan"],
          ["أَنْتُمَا","دَحْرَجْتُمَا","dahrjtumaa","kamu berdua telah menggelindingkan"],
          ["أَنْتُمْ","دَحْرَجْتُمْ","dahrjtum","kamu semua (lk.) telah menggelindingkan"],
          ["أَنْتُنَّ","دَحْرَجْتُنَّ","dahrjtunna","kamu semua (pr.) telah menggelindingkan"],
          ["أَنَا","دَحْرَجْتُ","dahrajtu","saya telah menggelindingkan"],
          ["نَحْنُ","دَحْرَجْنَا","dahrjanaa","kami/kita telah menggelindingkan"]
        ],
        mudhari_malum:[
          ["هُوَ","يُدَحْرِجُ","yudahriju","dia (lk.) menggelindingkan"],
          ["هِيَ","تُدَحْرِجُ","tudahriju","dia (pr.) menggelindingkan"],
          ["هُمَا","يُدَحْرِجَانِ","yudahrijani","keduanya (lk.) menggelindingkan"],
          ["هُمَا","تُدَحْرِجَانِ","tudahrijani","keduanya (pr.) menggelindingkan"],
          ["هُمْ","يُدَحْرِجُوْنَ","yudahrijuuna","mereka (lk.) menggelindingkan"],
          ["هُنَّ","يُدَحْرِجْنَ","yudahrijna","mereka (pr.) menggelindingkan"],
          ["أَنْتَ","تُدَحْرِجُ","tudahriju","kamu (lk.) menggelindingkan"],
          ["أَنْتِ","تُدَحْرِجِيْنَ","tudahrijiina","kamu (pr.) menggelindingkan"],
          ["أَنْتُمَا","تُدَحْرِجَانِ","tudahrijani","kamu berdua menggelindingkan"],
          ["أَنْتُمْ","تُدَحْرِجُوْنَ","tudahrijuuna","kamu semua (lk.) menggelindingkan"],
          ["أَنْتُنَّ","تُدَحْرِجْنَ","tudahrijna","kamu semua (pr.) menggelindingkan"],
          ["أَنَا","أُدَحْرِجُ","udahriju","saya menggelindingkan"],
          ["نَحْنُ","نُدَحْرِجُ","nudahriju","kami/kita menggelindingkan"]
        ],
        amr:[
          ["أَنْتَ","دَحْرِجْ","dahrij","gelindingkanlah! (lk.)"],
          ["أَنْتِ","دَحْرِجِيْ","dahrijii","gelindingkanlah! (pr.)"],
          ["أَنْتُمَا","دَحْرِجَا","dahrijaa","gelindingkanlah kamu berdua!"],
          ["أَنْتُمْ","دَحْرِجُوْا","dahrijuu","gelindingkanlah kamu semua (lk.)!"],
          ["أَنْتُنَّ","دَحْرِجْنَ","dahrijna","gelindingkanlah kamu semua (pr.)!"]
        ],
        madhi_majhul:[
          ["هُوَ","دُحْرِجَ","duhrijа","dia (lk.) telah digelindingkan"],
          ["هِيَ","دُحْرِجَتْ","duhrijat","dia (pr.) telah digelindingkan"],
          ["هُمَا","دُحْرِجَا","duhrijaa","keduanya (lk.) telah digelindingkan"],
          ["هُمَا","دُحْرِجَتَا","duhrijataa","keduanya (pr.) telah digelindingkan"],
          ["هُمْ","دُحْرِجُوْا","duhrijuu","mereka (lk.) telah digelindingkan"],
          ["هُنَّ","دُحْرِجْنَ","duhrijna","mereka (pr.) telah digelindingkan"],
          ["أَنْتَ","دُحْرِجْتَ","duhrijta","kamu (lk.) telah digelindingkan"],
          ["أَنْتِ","دُحْرِجْتِ","duhrijti","kamu (pr.) telah digelindingkan"],
          ["أَنْتُمَا","دُحْرِجْتُمَا","duhrijtumaa","kamu berdua telah digelindingkan"],
          ["أَنْتُمْ","دُحْرِجْتُمْ","duhrijtum","kamu semua (lk.) telah digelindingkan"],
          ["أَنْتُنَّ","دُحْرِجْتُنَّ","duhrijtunna","kamu semua (pr.) telah digelindingkan"],
          ["أَنَا","دُحْرِجْتُ","duhrijtu","saya telah digelindingkan"],
          ["نَحْنُ","دُحْرِجْنَا","duhrijnaa","kami/kita telah digelindingkan"]
        ],
        mudhari_majhul:[
          ["هُوَ","يُدَحْرَجُ","yudahraju","dia (lk.) digelindingkan"],
          ["هِيَ","تُدَحْرَجُ","tudahraju","dia (pr.) digelindingkan"],
          ["هُمَا","يُدَحْرَجَانِ","yudahrajani","keduanya (lk.) digelindingkan"],
          ["هُمَا","تُدَحْرَجَانِ","tudahrajani","keduanya (pr.) digelindingkan"],
          ["هُمْ","يُدَحْرَجُوْنَ","yudahrajuuna","mereka (lk.) digelindingkan"],
          ["هُنَّ","يُدَحْرَجْنَ","yudahrаjna","mereka (pr.) digelindingkan"],
          ["أَنْتَ","تُدَحْرَجُ","tudahraju","kamu (lk.) digelindingkan"],
          ["أَنْتِ","تُدَحْرَجِيْنَ","tudahrajiina","kamu (pr.) digelindingkan"],
          ["أَنْتُمَا","تُدَحْرَجَانِ","tudahrajani","kamu berdua digelindingkan"],
          ["أَنْتُمْ","تُدَحْرَجُوْنَ","tudahrajuuna","kamu semua (lk.) digelindingkan"],
          ["أَنْتُنَّ","تُدَحْرَجْنَ","tudahrаjna","kamu semua (pr.) digelindingkan"],
          ["أَنَا","أُدَحْرَجُ","udahraju","saya digelindingkan"],
          ["نَحْنُ","نُدَحْرَجُ","nudahraju","kami/kita digelindingkan"]
        ]
      }
    }
  },

  tafa3lal: {
    id:"rm-tafa3lal",
    wazan:"تَفَعْلَلَ - يَتَفَعْلَلُ",
    wazanAr:"تَفَعْلَلَ",
    jenis:"Ruba'i Mazid 1 huruf (ta')",
    makna:"Mutawa'ah dari فَعْلَلَ, atau tafakkur/tadabbur.",
    penjelasan:"تَفَعْلَلَ adalah mutawa'ah dari فَعْلَلَ, dengan penambahan ta' di awal kata.",
    contohFiil:[
      { ar:"تَدَحْرَجَ - يَتَدَحْرَجُ", arti:"(menjadi) berguling",  root:"د-ح-ر-ج" },
      { ar:"تَزَلْزَلَ - يَتَزَلْزَلُ", arti:"(menjadi) terguncang", root:"ز-ل-ز-ل" },
      { ar:"تَوَسْوَسَ - يَتَوَسْوَسُ", arti:"dibisiki (setan)",     root:"و-س-و-س" }
    ],
    utama:{ ar:"تَدَحْرَجَ", arti:"berguling", root:"د-ح-ر-ج" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"تَدَحْرَجَ",     arti:"telah berguling" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَتَدَحْرَجُ",   arti:"sedang/akan berguling" },
        { label:"Masdar",                ar:"تَدَحْرُجًا",     arti:"berguliran" },
        { label:"Fi'il Amr",             ar:"تَدَحْرَجْ",     arti:"bergulinglah!" },
        { label:"Fi'il Nahyi",           ar:"لَا تَتَدَحْرَجْ",arti:"jangan berguling!" },
        { label:"Isim Fa'il",            ar:"مُتَدَحْرِجٌ",    arti:"yang berguling" },
        { label:"Isim Maf'ul",           ar:"مُتَدَحْرَجٌ",    arti:"yang digelindingkan" },
        { label:"Fi'il Madhi Majhul",    ar:"تُدُحْرِجَ",      arti:"telah digelindingkan" },
        { label:"Fi'il Mudhari' Majhul", ar:"يُتَدَحْرَجُ",    arti:"sedang/akan digelindingkan" },
        { label:"Isim Zaman/Makan",      ar:"مُتَدَحْرَجٌ",    arti:"tempat berguling" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","تَدَحْرَجَ","tadahraja","dia (lk.) telah berguling"],
          ["هِيَ","تَدَحْرَجَتْ","tadahrajat","dia (pr.) telah berguling"],
          ["هُمَا","تَدَحْرَجَا","tadahrajaa","keduanya (lk.) telah berguling"],
          ["هُمَا","تَدَحْرَجَتَا","tadahrajataa","keduanya (pr.) telah berguling"],
          ["هُمْ","تَدَحْرَجُوْا","tadahrajuu","mereka (lk.) telah berguling"],
          ["هُنَّ","تَدَحْرَجْنَ","tadahrjna","mereka (pr.) telah berguling"],
          ["أَنْتَ","تَدَحْرَجْتَ","tadahrajta","kamu (lk.) telah berguling"],
          ["أَنْتِ","تَدَحْرَجْتِ","tadahrajti","kamu (pr.) telah berguling"],
          ["أَنْتُمَا","تَدَحْرَجْتُمَا","tadahrjtumaa","kamu berdua telah berguling"],
          ["أَنْتُمْ","تَدَحْرَجْتُمْ","tadahrjtum","kamu semua (lk.) telah berguling"],
          ["أَنْتُنَّ","تَدَحْرَجْتُنَّ","tadahrjtunna","kamu semua (pr.) telah berguling"],
          ["أَنَا","تَدَحْرَجْتُ","tadahrajtu","saya telah berguling"],
          ["نَحْنُ","تَدَحْرَجْنَا","tadahrjanaa","kami/kita telah berguling"]
        ],
        mudhari_malum:[
          ["هُوَ","يَتَدَحْرَجُ","yatadahraju","dia (lk.) berguling"],
          ["هِيَ","تَتَدَحْرَجُ","tatadahraju","dia (pr.) berguling"],
          ["هُمَا","يَتَدَحْرَجَانِ","yatadahrajani","keduanya (lk.) berguling"],
          ["هُمَا","تَتَدَحْرَجَانِ","tatadahrajani","keduanya (pr.) berguling"],
          ["هُمْ","يَتَدَحْرَجُوْنَ","yatadahrajuuna","mereka (lk.) berguling"],
          ["هُنَّ","يَتَدَحْرَجْنَ","yatadahrаjna","mereka (pr.) berguling"],
          ["أَنْتَ","تَتَدَحْرَجُ","tatadahraju","kamu (lk.) berguling"],
          ["أَنْتِ","تَتَدَحْرَجِيْنَ","tatadahrajiina","kamu (pr.) berguling"],
          ["أَنْتُمَا","تَتَدَحْرَجَانِ","tatadahrajani","kamu berdua berguling"],
          ["أَنْتُمْ","تَتَدَحْرَجُوْنَ","tatadahrajuuna","kamu semua (lk.) berguling"],
          ["أَنْتُنَّ","تَتَدَحْرَجْنَ","tatadahrаjna","kamu semua (pr.) berguling"],
          ["أَنَا","أَتَدَحْرَجُ","atadahraju","saya berguling"],
          ["نَحْنُ","نَتَدَحْرَجُ","natadahraju","kami/kita berguling"]
        ],
        amr:[
          ["أَنْتَ","تَدَحْرَجْ","tadahraj","bergulinglah! (lk.)"],
          ["أَنْتِ","تَدَحْرَجِيْ","tadahrajii","bergulinglah! (pr.)"],
          ["أَنْتُمَا","تَدَحْرَجَا","tadahrajaa","bergulinglah kamu berdua!"],
          ["أَنْتُمْ","تَدَحْرَجُوْا","tadahrajuu","bergulinglah kamu semua (lk.)!"],
          ["أَنْتُنَّ","تَدَحْرَجْنَ","tadahrjna","bergulinglah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  if3anlal: {
    id:"rm-if3anlal",
    wazan:"اِفْعَنْلَلَ - يَفْعَنْلِلُ",
    wazanAr:"اِفْعَنْلَلَ",
    jenis:"Ruba'i Mazid 2 huruf",
    makna:"Mutawa'ah atau mubalagah. Jarang digunakan.",
    penjelasan:"Ditambah hamzah washl + nun di antara fa' dan 'ain. Sangat terbatas penggunaannya dalam bahasa Arab.",
    contohFiil:[
      { ar:"اِحْرَنْجَمَ - يَحْرَنْجِمُ", arti:"berkumpul/berhimpun (banyak)", root:"ح-ر-ج-م" },
      { ar:"اِقْعَنْسَسَ - يَقْعَنْسِسُ", arti:"menyandarkan diri",            root:"ق-ع-س-س" }
    ],
    utama:{ ar:"اِحْرَنْجَمَ", arti:"berkumpul (banyak)", root:"ح-ر-ج-م" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِحْرَنْجَمَ",   arti:"telah berkumpul" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَحْرَنْجِمُ",   arti:"sedang berkumpul" },
        { label:"Masdar",                ar:"اِحْرِنْجَامًا",  arti:"perkumpulan (massal)" },
        { label:"Isim Fa'il",            ar:"مُحْرَنْجِمٌ",    arti:"yang berkumpul" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِحْرَنْجَمَ","ihranjama","dia (lk.) telah berkumpul"],
          ["هِيَ","اِحْرَنْجَمَتْ","ihranjamat","dia (pr.) telah berkumpul"],
          ["هُمَا","اِحْرَنْجَمَا","ihranjamaa","keduanya (lk.) telah berkumpul"],
          ["هُمَا","اِحْرَنْجَمَتَا","ihranjamataa","keduanya (pr.) telah berkumpul"],
          ["هُمْ","اِحْرَنْجَمُوْا","ihranjamuu","mereka (lk.) telah berkumpul"],
          ["هُنَّ","اِحْرَنْجَمْنَ","ihranjamna","mereka (pr.) telah berkumpul"],
          ["أَنْتَ","اِحْرَنْجَمْتَ","ihranjamta","kamu (lk.) telah berkumpul"],
          ["أَنْتِ","اِحْرَنْجَمْتِ","ihranjamti","kamu (pr.) telah berkumpul"],
          ["أَنْتُمَا","اِحْرَنْجَمْتُمَا","ihranjamtumaa","kamu berdua telah berkumpul"],
          ["أَنْتُمْ","اِحْرَنْجَمْتُمْ","ihranjamtum","kamu semua (lk.) telah berkumpul"],
          ["أَنْتُنَّ","اِحْرَنْجَمْتُنَّ","ihranjamtunna","kamu semua (pr.) telah berkumpul"],
          ["أَنَا","اِحْرَنْجَمْتُ","ihranjamtu","saya telah berkumpul"],
          ["نَحْنُ","اِحْرَنْجَمْنَا","ihranajamnaa","kami/kita telah berkumpul"]
        ],
        mudhari_malum:[
          ["هُوَ","يَحْرَنْجِمُ","yahranjim","dia (lk.) berkumpul"],
          ["هِيَ","تَحْرَنْجِمُ","tahranjim","dia (pr.) berkumpul"],
          ["هُمَا","يَحْرَنْجِمَانِ","yahranjimaani","keduanya (lk.) berkumpul"],
          ["هُمَا","تَحْرَنْجِمَانِ","tahranjimaani","keduanya (pr.) berkumpul"],
          ["هُمْ","يَحْرَنْجِمُوْنَ","yahranjimuuna","mereka (lk.) berkumpul"],
          ["هُنَّ","يَحْرَنْجِمْنَ","yahranjimna","mereka (pr.) berkumpul"],
          ["أَنْتَ","تَحْرَنْجِمُ","tahranjim","kamu (lk.) berkumpul"],
          ["أَنْتِ","تَحْرَنْجِمِيْنَ","tahranjimiina","kamu (pr.) berkumpul"],
          ["أَنْتُمَا","تَحْرَنْجِمَانِ","tahranjimaani","kamu berdua berkumpul"],
          ["أَنْتُمْ","تَحْرَنْجِمُوْنَ","tahranjimuuna","kamu semua (lk.) berkumpul"],
          ["أَنْتُنَّ","تَحْرَنْجِمْنَ","tahranjimna","kamu semua (pr.) berkumpul"],
          ["أَنَا","أَحْرَنْجِمُ","ahranjim","saya berkumpul"],
          ["نَحْنُ","نَحْرَنْجِمُ","nahranjim","kami/kita berkumpul"]
        ],
        amr:[
          ["أَنْتَ","اِحْرَنْجِمْ","ihranjim","berkumpullah! (lk.)"],
          ["أَنْتِ","اِحْرَنْجِمِيْ","ihranjimiiii","berkumpullah! (pr.)"],
          ["أَنْتُمَا","اِحْرَنْجِمَا","ihranjimaa","berkumpullah kamu berdua!"],
          ["أَنْتُمْ","اِحْرَنْجِمُوْا","ihranjimuu","berkumpullah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِحْرَنْجِمْنَ","ihranjimna","berkumpullah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  },

  if3alal: {
    id:"rm-if3alal",
    wazan:"اِفْعَلَلَّ - يَفْعَلِلُّ",
    wazanAr:"اِفْعَلَلَّ",
    jenis:"Ruba'i Mazid 2 huruf",
    makna:"Mutawa'ah atau mubalagah. Untuk fi'il yang menggambarkan keadaan yang kuat.",
    penjelasan:"Ditambah hamzah washl di awal dan tasydid di lam kedua. Menggambarkan intensitas keadaan.",
    contohFiil:[
      { ar:"اِقْشَعَرَّ - يَقْشَعِرُّ", arti:"merinding",       root:"ق-ش-ع-ر" },
      { ar:"اِطْمَأَنَّ - يَطْمَئِنُّ", arti:"menjadi tenang",  root:"ط-م-أ-ن" }
    ],
    utama:{ ar:"اِقْشَعَرَّ", arti:"merinding", root:"ق-ش-ع-ر" },
    tashrif:{
      ushuli:[
        { label:"Fi'il Madhi Ma'lum",    ar:"اِقْشَعَرَّ",    arti:"telah merinding" },
        { label:"Fi'il Mudhari' Ma'lum", ar:"يَقْشَعِرُّ",    arti:"sedang merinding" },
        { label:"Masdar",                ar:"اِقْشِعْرَارًا",  arti:"rasa merinding" },
        { label:"Isim Fa'il",            ar:"مُقْشَعِرٌّ",     arti:"yang merinding" }
      ],
      lughawi:{
        madhi_malum:[
          ["هُوَ","اِقْشَعَرَّ","iqsha'arra","dia (lk.) telah merinding"],
          ["هِيَ","اِقْشَعَرَّتْ","iqsha'arrat","dia (pr.) telah merinding"],
          ["هُمَا","اِقْشَعَرَّا","iqsha'arraa","keduanya (lk.) telah merinding"],
          ["هُمَا","اِقْشَعَرَّتَا","iqsha'arrataa","keduanya (pr.) telah merinding"],
          ["هُمْ","اِقْشَعَرُّوْا","iqsha'arruu","mereka (lk.) telah merinding"],
          ["هُنَّ","اِقْشَعْرَرْنَ","iqsha'rarna","mereka (pr.) telah merinding"],
          ["أَنْتَ","اِقْشَعْرَرْتَ","iqsha'rarta","kamu (lk.) telah merinding"],
          ["أَنْتِ","اِقْشَعْرَرْتِ","iqsha'rarti","kamu (pr.) telah merinding"],
          ["أَنْتُمَا","اِقْشَعْرَرْتُمَا","iqsha'rartumaa","kamu berdua telah merinding"],
          ["أَنْتُمْ","اِقْشَعْرَرْتُمْ","iqsha'rartum","kamu semua (lk.) telah merinding"],
          ["أَنْتُنَّ","اِقْشَعْرَرْتُنَّ","iqsha'rartunna","kamu semua (pr.) telah merinding"],
          ["أَنَا","اِقْشَعْرَرْتُ","iqsha'rartu","saya telah merinding"],
          ["نَحْنُ","اِقْشَعْرَرْنَا","iqsha'rarnaa","kami/kita telah merinding"]
        ],
        mudhari_malum:[
          ["هُوَ","يَقْشَعِرُّ","yaqsha'irru","dia (lk.) merinding"],
          ["هِيَ","تَقْشَعِرُّ","taqsha'irru","dia (pr.) merinding"],
          ["هُمَا","يَقْشَعِرَّانِ","yaqsha'irraan","keduanya (lk.) merinding"],
          ["هُمَا","تَقْشَعِرَّانِ","taqsha'irraan","keduanya (pr.) merinding"],
          ["هُمْ","يَقْشَعِرُّوْنَ","yaqsha'irruuna","mereka (lk.) merinding"],
          ["هُنَّ","يَقْشَعْرِرْنَ","yaqsha'rirna","mereka (pr.) merinding"],
          ["أَنْتَ","تَقْشَعِرُّ","taqsha'irru","kamu (lk.) merinding"],
          ["أَنْتِ","تَقْشَعِرِّيْنَ","taqsha'irriina","kamu (pr.) merinding"],
          ["أَنْتُمَا","تَقْشَعِرَّانِ","taqsha'irraan","kamu berdua merinding"],
          ["أَنْتُمْ","تَقْشَعِرُّوْنَ","taqsha'irruuna","kamu semua (lk.) merinding"],
          ["أَنْتُنَّ","تَقْشَعْرِرْنَ","taqsha'rirna","kamu semua (pr.) merinding"],
          ["أَنَا","أَقْشَعِرُّ","aqsha'irru","saya merinding"],
          ["نَحْنُ","نَقْشَعِرُّ","naqsha'irru","kami/kita merinding"]
        ],
        amr:[
          ["أَنْتَ","اِقْشَعِرَّ","iqsha'irra","merindingah! (lk.)"],
          ["أَنْتِ","اِقْشَعِرِّيْ","iqsha'irri","merindinglah! (pr.)"],
          ["أَنْتُمَا","اِقْشَعِرَّا","iqsha'irraa","merindinglah kamu berdua!"],
          ["أَنْتُمْ","اِقْشَعِرُّوْا","iqsha'irruu","merindinglah kamu semua (lk.)!"],
          ["أَنْتُنَّ","اِقْشَعْرِرْنَ","iqsha'rirna","merindinglah kamu semua (pr.)!"]
        ],
        madhi_majhul:[], mudhari_majhul:[]
      }
    }
  }

}; // end RUBAI

/* =====================================================
   INDEX PENCARIAN — gabungan semua fi'il
   ===================================================== */
const SEARCH_INDEX = [
  // Tsulatsi Mujarrad Bab 1
  { ar:"نَصَرَ - يَنْصُرُ", arti:"menolong", wazan:"فَعَلَ - يَفْعُلُ", page:"tm-bab1", grup:"Tsulatsi Mujarrad Bab I" },
  { ar:"كَتَبَ - يَكْتُبُ", arti:"menulis",  wazan:"فَعَلَ - يَفْعُلُ", page:"tm-bab1", grup:"Tsulatsi Mujarrad Bab I" },
  { ar:"خَرَجَ - يَخْرُجُ", arti:"keluar",   wazan:"فَعَلَ - يَفْعُلُ", page:"tm-bab1", grup:"Tsulatsi Mujarrad Bab I" },
  { ar:"دَخَلَ - يَدْخُلُ", arti:"masuk",    wazan:"فَعَلَ - يَفْعُلُ", page:"tm-bab1", grup:"Tsulatsi Mujarrad Bab I" },
  { ar:"قَتَلَ - يَقْتُلُ", arti:"membunuh", wazan:"فَعَلَ - يَفْعُلُ", page:"tm-bab1", grup:"Tsulatsi Mujarrad Bab I" },
  // Tsulatsi Mujarrad Bab 2
  { ar:"ضَرَبَ - يَضْرِبُ", arti:"memukul",  wazan:"فَعَلَ - يَفْعِلُ", page:"tm-bab2", grup:"Tsulatsi Mujarrad Bab II" },
  { ar:"جَلَسَ - يَجْلِسُ", arti:"duduk",    wazan:"فَعَلَ - يَفْعِلُ", page:"tm-bab2", grup:"Tsulatsi Mujarrad Bab II" },
  { ar:"ذَهَبَ - يَذْهَبُ", arti:"pergi",    wazan:"فَعَلَ - يَفْعِلُ", page:"tm-bab2", grup:"Tsulatsi Mujarrad Bab II" },
  { ar:"نَزَلَ - يَنْزِلُ", arti:"turun",    wazan:"فَعَلَ - يَفْعِلُ", page:"tm-bab2", grup:"Tsulatsi Mujarrad Bab II" },
  // Tsulatsi Mujarrad Bab 3
  { ar:"فَتَحَ - يَفْتَحُ", arti:"membuka",  wazan:"فَعَلَ - يَفْعَلُ", page:"tm-bab3", grup:"Tsulatsi Mujarrad Bab III" },
  { ar:"قَرَأَ - يَقْرَأُ", arti:"membaca",  wazan:"فَعَلَ - يَفْعَلُ", page:"tm-bab3", grup:"Tsulatsi Mujarrad Bab III" },
  { ar:"مَنَعَ - يَمْنَعُ", arti:"mencegah", wazan:"فَعَلَ - يَفْعَلُ", page:"tm-bab3", grup:"Tsulatsi Mujarrad Bab III" },
  // Tsulatsi Mujarrad Bab 4
  { ar:"عَلِمَ - يَعْلَمُ", arti:"mengetahui", wazan:"فَعِلَ - يَفْعَلُ", page:"tm-bab4", grup:"Tsulatsi Mujarrad Bab IV" },
  { ar:"سَمِعَ - يَسْمَعُ", arti:"mendengar",  wazan:"فَعِلَ - يَفْعَلُ", page:"tm-bab4", grup:"Tsulatsi Mujarrad Bab IV" },
  { ar:"فَهِمَ - يَفْهَمُ", arti:"memahami",   wazan:"فَعِلَ - يَفْعَلُ", page:"tm-bab4", grup:"Tsulatsi Mujarrad Bab IV" },
  { ar:"شَرِبَ - يَشْرَبُ", arti:"minum",      wazan:"فَعِلَ - يَفْعَلُ", page:"tm-bab4", grup:"Tsulatsi Mujarrad Bab IV" },
  // Tsulatsi Mujarrad Bab 5
  { ar:"كَرُمَ - يَكْرُمُ", arti:"mulia",      wazan:"فَعُلَ - يَفْعُلُ", page:"tm-bab5", grup:"Tsulatsi Mujarrad Bab V" },
  { ar:"حَسُنَ - يَحْسُنُ", arti:"bagus",      wazan:"فَعُلَ - يَفْعُلُ", page:"tm-bab5", grup:"Tsulatsi Mujarrad Bab V" },
  { ar:"عَظُمَ - يَعْظُمُ", arti:"agung",      wazan:"فَعُلَ - يَفْعُلُ", page:"tm-bab5", grup:"Tsulatsi Mujarrad Bab V" },
  // Tsulatsi Mujarrad Bab 6
  { ar:"حَسِبَ - يَحْسِبُ", arti:"mengira",    wazan:"فَعِلَ - يَفْعِلُ", page:"tm-bab6", grup:"Tsulatsi Mujarrad Bab VI" },
  // Tsulatsi Mazid
  { ar:"أَكْرَمَ - يُكْرِمُ",  arti:"memuliakan",   wazan:"أَفْعَلَ",    page:"tmz-if3al",   grup:"Tsulatsi Mazid" },
  { ar:"أَعْلَمَ - يُعْلِمُ",  arti:"memberitahu",  wazan:"أَفْعَلَ",    page:"tmz-if3al",   grup:"Tsulatsi Mazid" },
  { ar:"عَلَّمَ - يُعَلِّمُ",  arti:"mengajarkan",  wazan:"فَعَّلَ",     page:"tmz-faala",   grup:"Tsulatsi Mazid" },
  { ar:"كَسَّرَ - يُكَسِّرُ",  arti:"memecah-mecah",wazan:"فَعَّلَ",     page:"tmz-faala",   grup:"Tsulatsi Mazid" },
  { ar:"قَاتَلَ - يُقَاتِلُ",  arti:"memerangi",    wazan:"فَاعَلَ",     page:"tmz-faaala",  grup:"Tsulatsi Mazid" },
  { ar:"جَاهَدَ - يُجَاهِدُ",  arti:"berjihad",     wazan:"فَاعَلَ",     page:"tmz-faaala",  grup:"Tsulatsi Mazid" },
  { ar:"اِنْكَسَرَ - يَنْكَسِرُ",arti:"(menjadi) patah",wazan:"اِنْفَعَلَ",page:"tmz-infa3al",grup:"Tsulatsi Mazid" },
  { ar:"اِنْفَتَحَ - يَنْفَتِحُ",arti:"(menjadi) terbuka",wazan:"اِنْفَعَلَ",page:"tmz-infa3al",grup:"Tsulatsi Mazid" },
  { ar:"اِجْتَمَعَ - يَجْتَمِعُ",arti:"berkumpul",   wazan:"اِفْتَعَلَ",  page:"tmz-ifta3al", grup:"Tsulatsi Mazid" },
  { ar:"اِحْتَرَمَ - يَحْتَرِمُ",arti:"menghormati", wazan:"اِفْتَعَلَ",  page:"tmz-ifta3al", grup:"Tsulatsi Mazid" },
  { ar:"تَعَلَّمَ - يَتَعَلَّمُ",arti:"belajar",     wazan:"تَفَعَّلَ",   page:"tmz-tafa3al", grup:"Tsulatsi Mazid" },
  { ar:"تَكَلَّمَ - يَتَكَلَّمُ",arti:"berbicara",   wazan:"تَفَعَّلَ",   page:"tmz-tafa3al", grup:"Tsulatsi Mazid" },
  { ar:"تَنَاصَرَ - يَتَنَاصَرُ",arti:"saling menolong",wazan:"تَفَاعَلَ",page:"tmz-tafaaal", grup:"Tsulatsi Mazid" },
  { ar:"تَعَاوَنَ - يَتَعَاوَنُ",arti:"bekerja sama", wazan:"تَفَاعَلَ",  page:"tmz-tafaaal", grup:"Tsulatsi Mazid" },
  { ar:"اِسْتَغْفَرَ - يَسْتَغْفِرُ",arti:"meminta ampun",wazan:"اِسْتَفْعَلَ",page:"tmz-istaf3al",grup:"Tsulatsi Mazid" },
  { ar:"اِسْتَعَانَ - يَسْتَعِيْنُ",arti:"meminta pertolongan",wazan:"اِسْتَفْعَلَ",page:"tmz-istaf3al",grup:"Tsulatsi Mazid" },
  { ar:"اِحْمَرَّ - يَحْمَرُّ",arti:"menjadi merah",wazan:"اِفْعَلَّ",page:"tmz-ifaal",grup:"Tsulatsi Mazid" },
  { ar:"اِحْمَارَّ - يَحْمَارُّ",arti:"menjadi sangat merah",wazan:"اِفْعَالَّ",page:"tmz-if3aal",grup:"Tsulatsi Mazid" },
  { ar:"اِحْدَوْدَبَ - يَحْدَوْدِبُ",arti:"menjadi bungkuk",wazan:"اِفْعَوْعَلَ",page:"tmz-if3awal",grup:"Tsulatsi Mazid" },
  { ar:"اِجْلَوَّذَ - يَجْلَوِّذُ",arti:"berjalan cepat",wazan:"اِفْعَوَّلَ",page:"tmz-if3awwal",grup:"Tsulatsi Mazid" },
  // Ruba'i
  { ar:"دَحْرَجَ - يُدَحْرِجُ", arti:"menggelindingkan",wazan:"فَعْلَلَ", page:"rm-mujarrad",grup:"Ruba'i Mujarrad" },
  { ar:"زَلْزَلَ - يُزَلْزِلُ", arti:"mengguncang",    wazan:"فَعْلَلَ", page:"rm-mujarrad",grup:"Ruba'i Mujarrad" },
  { ar:"تَدَحْرَجَ - يَتَدَحْرَجُ",arti:"berguling",   wazan:"تَفَعْلَلَ",page:"rm-tafa3lal",grup:"Ruba'i Mazid" },
  { ar:"اِقْشَعَرَّ - يَقْشَعِرُّ",arti:"merinding",   wazan:"اِفْعَلَلَّ",page:"rm-if3alal",grup:"Ruba'i Mazid" }
];

/* =====================================================
   REFERENSI KITAB
   ===================================================== */
const DATA_REFERENSI = [
  { judul:"الكتاب", penulis:"Sibawaih (w. ~180 H)", isi:"Ensiklopedia Nahwu-Shorof pertama. Rujukan utama semua mazhab.", kategori:"Nahwu & Shorof" },
  { judul:"كتاب التصريف", penulis:"Al-Mazini (w. 249 H)", isi:"Kitab Shorof pertama yang dikhususkan. Dasar pengembangan ilmu Shorof.", kategori:"Shorof" },
  { judul:"الشافية", penulis:"Ibn al-Hajib (w. 646 H)", isi:"Matan Shorof yang populer di pesantren. Disyarah oleh Ibn Malik.", kategori:"Shorof" },
  { judul:"الآجرومية", penulis:"Ibn Ajurrum (w. 723 H)", isi:"Matan Nahwu paling populer di pesantren seluruh dunia.", kategori:"Nahwu" },
  { judul:"ألفية ابن مالك", penulis:"Ibn Malik (w. 672 H)", isi:"1002 bait sya'ir merangkum Nahwu-Shorof lengkap.", kategori:"Nahwu & Shorof" },
  { judul:"لامية الأفعال", penulis:"Ibn Malik (w. 672 H)", isi:"Nadzham khusus fi'il dan wazan-wazannya.", kategori:"Shorof" },
  { judul:"المقصود", penulis:"Masyhur di pesantren (nisbat kepada Imam Abu Hanifah)", isi:"Matan tashrif singkat populer di pesantren Nusantara.", kategori:"Shorof" },
  { judul:"مغني اللبيب", penulis:"Ibn Hisyam (w. 761 H)", isi:"Karya Nahwu komprehensif, rujukan para ulama lanjutan.", kategori:"Nahwu" },
  { judul:"المنصف", penulis:"Ibn Jinni (w. 392 H)", isi:"Syarah Kitab Tashrif al-Mazini. Referensi penting ilmu Shorof.", kategori:"Shorof" },
  { judul:"شرح ابن عقيل", penulis:"Ibn Aqil (w. 769 H)", isi:"Syarah Alfiyah Ibn Malik yang paling populer di pesantren.", kategori:"Nahwu" }
];
