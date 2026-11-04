/* =====================================================
   DATA-PENGANTAR.JS
   Data konten: Pengantar Shorof, Sejarah, Nahwu
   ===================================================== */

const DATA_PENGANTAR = {

  /* ============================================================
     HALAMAN: PENGERTIAN ILMU SHOROF
     ============================================================ */
  pengertian: {
    title: "Pengertian Ilmu Shorof",
    titleAr: "تَعْرِيفُ عِلْمِ الصَّرْف",
    subtitle: "Fondasi utama memahami bahasa Arab",
    content: [
      {
        type: "alert",
        variant: "success",
        text: "Ilmu Shorof adalah salah satu dari dua pilar utama tata bahasa Arab, bersama ilmu Nahwu. Keduanya wajib dikuasai oleh siapapun yang ingin memahami Al-Qur'an dan hadits dengan benar."
      },
      {
        type: "section",
        title: "Definisi Ilmu Shorof",
        body: `<p>Secara bahasa, kata <span class="ar ar-sm">صَرْف</span> berasal dari akar kata <span class="ar ar-sm">صَرَفَ - يَصْرِفُ</span> yang berarti <em>memalingkan</em>, <em>mengubah</em>, atau <em>memindahkan</em>. Dinamakan demikian karena ilmu ini mempelajari cara mengubah suatu kata dari satu bentuk ke bentuk yang lain.</p>
        <p class="mt-8">Secara istilah, para ulama memberikan beberapa definisi:</p>`
      },
      {
        type: "kaidah",
        label: "Definisi 1 — Ulama Klasik",
        ar: "عِلْمٌ بِأُصُوْلٍ يُعْرَفُ بِهَا أَبْنِيَةُ الْكَلِمَةِ وَأَحْوَالُهَا الَّتِيْ لَيْسَتْ بِإِعْرَابٍ وَلَا بِنَاءٍ",
        id: "\"Ilmu tentang dasar-dasar yang dengannya diketahui bentuk-bentuk kata dan kondisi-kondisinya yang bukan berupa i'rab dan bukan berupa bina'\""
      },
      {
        type: "kaidah",
        label: "Definisi 2 — Al-Imrithy",
        ar: "تَحْوِيْلُ الْأَصْلِ الْوَاحِدِ إِلَى أَمْثِلَةٍ مُخْتَلِفَةٍ لِمَعَانٍ مَقْصُوْدَةٍ",
        id: "\"Mengubah satu asal kata menjadi berbagai pola yang berbeda untuk makna-makna yang dimaksud\""
      },
      {
        type: "section",
        title: "Objek Kajian Ilmu Shorof",
        body: `<p>Objek utama ilmu Shorof adalah <strong>kata (الكلمة)</strong>, khususnya:</p>
        <ul class="mt-8" style="padding-left:18px; line-height:2.2;">
          <li>Fi'il (kata kerja) — yang dapat mengalami perubahan bentuk</li>
          <li>Isim yang musytaq (kata benda turunan) — seperti isim fa'il, isim maf'ul, masdar, dsb.</li>
          <li>Huruf <em>tidak</em> dikaji dalam shorof karena tidak berubah bentuk</li>
        </ul>`
      },
      {
        type: "compare",
        title: "Perbandingan Ilmu Shorof dan Ilmu Nahwu",
        headers: ["Aspek", "Ilmu Shorof", "Ilmu Nahwu"],
        rows: [
          ["Objek kajian", "Perubahan bentuk kata (mufrad)", "Susunan kata dalam kalimat"],
          ["Fokus", "Morfologi (bina' kata)", "Sintaksis (i'rab/kedudukan)"],
          ["Pertanyaan", "Bagaimana bentuk katanya?", "Apa kedudukannya dalam kalimat?"],
          ["Contoh masalah", "نَصَرَ → نَاصِر (isim fa'il)", "فَاعِلٌ مَرْفُوْعٌ (subjek dirafa'kan)"],
          ["Cakupan", "Perubahan huruf, harakat, tambahan", "Rafa', nashab, khafadh, jazm"],
          ["Julukan", "أُمُّ الْعُلُوْم (induk ilmu)", "أَبُ الْعُلُوْم (bapak ilmu)"]
        ]
      },
      {
        type: "section",
        title: "Hubungan Shorof dengan Al-Qur'an dan Bahasa Arab",
        body: `<p>Ilmu Shorof memiliki peran sangat vital dalam pemahaman Al-Qur'an:</p>
        <div class="accordion mt-12">
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              Memahami makna kosakata Al-Qur'an <span class="accordion-arrow">▼</span>
            </div>
            <div class="accordion-body">
              <p>Satu akar kata dalam bahasa Arab bisa menghasilkan puluhan turunan dengan makna berbeda. Misalnya akar <span class="ar ar-sm">ع-ل-م</span>: menghasilkan <span class="ar ar-sm">عَلِمَ</span> (mengetahui), <span class="ar ar-sm">عَالِم</span> (orang berilmu), <span class="ar ar-sm">مَعْلُوْم</span> (yang diketahui), <span class="ar ar-sm">تَعْلِيْم</span> (pengajaran), dst. Tanpa shorof, kita tidak bisa membedakan makna-makna ini.</p>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              Membedakan bentuk aktif dan pasif <span class="accordion-arrow">▼</span>
            </div>
            <div class="accordion-body">
              <p>Dalam Al-Qur'an, perbedaan antara fi'il ma'lum (aktif) dan majhul (pasif) sangat menentukan makna. Contoh: <span class="ar ar-sm">خُلِقَ الْإِنْسَانُ</span> (manusia <em>diciptakan</em>) vs <span class="ar ar-sm">خَلَقَ الْإِنْسَانُ</span> (manusia <em>menciptakan</em>) — hanya ilmu shorof yang bisa membedakan keduanya.</p>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
              Memahami bab dan wazan fi'il <span class="accordion-arrow">▼</span>
            </div>
            <div class="accordion-body">
              <p>Setiap wazan memiliki makna gramatikal tersendiri. Misalnya wazan <span class="ar ar-sm">أَفْعَلَ</span> sering bermakna menjadikan (ta'diyah), <span class="ar ar-sm">تَفَاعَلَ</span> sering bermakna saling melakukan (musyarakah), <span class="ar ar-sm">اِسْتَفْعَلَ</span> sering bermakna meminta/mencari. Mengetahui wazan = memahami nuansa makna.</p>
            </div>
          </div>
        </div>`
      }
    ]
  },

  /* ============================================================
     HALAMAN: TUJUAN & MANFAAT
     ============================================================ */
  tujuan: {
    title: "Tujuan & Manfaat Ilmu Shorof",
    titleAr: "فَوَائِدُ عِلْمِ الصَّرْف",
    subtitle: "Mengapa ilmu Shorof penting dipelajari?",
    content: [
      {
        type: "section",
        title: "Tujuan Mempelajari Ilmu Shorof",
        body: `<p>Para ulama menyebutkan bahwa tujuan pokok ilmu Shorof adalah:</p>
        <div class="kaidah mt-12">
          <div class="kaidah-label">Tujuan Pokok</div>
          <div class="kaidah-ar">صَوْنُ الْقَلَمِ وَاللِّسَانِ عَنِ الْخَطَأِ فِيْ أَبْنِيَةِ الْكَلِمَاتِ</div>
          <div class="kaidah-id">"Menjaga pena dan lisan dari kesalahan dalam pembentukan kata-kata"</div>
        </div>`
      },
      {
        type: "cards",
        items: [
          { title: "Memahami Al-Qur'an", body: "Membantu memahami makna setiap kata dalam Al-Qur'an secara tepat, karena satu akar kata bisa menghasilkan puluhan derivasi dengan makna berbeda." },
          { title: "Memahami Hadits", body: "Hadits Nabi ﷺ menggunakan bahasa Arab fasih. Shorof membantu memahami bentuk fi'il, isim fa'il, masdar, dan turunan kata dalam matan hadits." },
          { title: "Menulis Bahasa Arab", body: "Seseorang tidak bisa menulis bahasa Arab dengan benar tanpa mengetahui kaidah pembentukan kata yang diatur ilmu Shorof." },
          { title: "Berbicara Bahasa Arab", body: "Shorof menjadi dasar dalam memilih kata yang tepat saat berbicara, agar tidak terjadi kesalahan morfologis yang mengubah makna." },
          { title: "Membaca Kitab Kuning", body: "Kitab-kitab turath (klasik Islam) ditulis tanpa harakat (gundul). Ilmu shorof sangat membantu dalam membaca dan memahami kitab kuning." },
          { title: "Derivasi dan Tashrif", body: "Dengan shorof, kita bisa menurunkan berbagai bentuk kata dari satu akar: masdar, isim fa'il, isim maf'ul, isim zaman, isim makan, dll." }
        ]
      }
    ]
  },

  /* ============================================================
     HALAMAN: ISTILAH-ISTILAH DASAR
     ============================================================ */
  istilah: {
    title: "Istilah-Istilah Dasar Ilmu Shorof",
    titleAr: "مُصْطَلَحَاتُ عِلْمِ الصَّرْف",
    subtitle: "Kosakata teknis yang wajib dipahami",
    terms: [
      {
        ar: "الْوَزْن",
        latin: "Al-Wazan",
        def: "Pola atau cetakan kata. Wazan adalah kata yang digunakan sebagai patokan atau pola untuk mengukur kata lain. Contoh wazan: فَعَلَ، فَعَّلَ، أَفْعَلَ",
        note: "Huruf fa' (ف), 'ain (ع), dan lam (ل) dalam wazan adalah huruf pengganti yang mewakili huruf-huruf asli suatu kata."
      },
      {
        ar: "الْمَوْزُوْن",
        latin: "Al-Mauzun",
        def: "Kata yang diukur/ditimbang dengan wazan. Kata yang sebenarnya dipakai dalam percakapan. Contoh: نَصَرَ adalah mauzun dari wazan فَعَلَ",
        note: ""
      },
      {
        ar: "الْمُجَرَّد",
        latin: "Al-Mujarrad",
        def: "Fi'il atau isim yang semua hurufnya adalah huruf asli (tidak ada huruf tambahan). Contoh: كَتَبَ (3 huruf asli), دَحْرَجَ (4 huruf asli)",
        note: "Mujarrad dibagi menjadi tsulatsi mujarrad (3 huruf asli) dan ruba'i mujarrad (4 huruf asli)."
      },
      {
        ar: "الْمَزِيْد",
        latin: "Al-Mazid",
        def: "Fi'il atau isim yang memiliki huruf tambahan di luar huruf aslinya. Tambahan ini disebut huruf ziyadah. Contoh: أَكْرَمَ adalah mazid dari كَرُمَ (ditambah alif di depan)",
        note: "Huruf-huruf yang bisa menjadi ziyadah dirangkum dalam: سَأَلْتُمُوْنِيْهَا"
      },
      {
        ar: "الصَّحِيْح",
        latin: "Ash-Shahih",
        def: "Fi'il yang semua huruf aslinya bukan huruf 'illah (bukan alif, waw, ya'). Contoh: كَتَبَ، نَصَرَ، ضَرَبَ",
        note: "Shahih dibagi: salim (semua selamat), mudha'af (ada huruf yang sama), mahmuz (ada hamzah)."
      },
      {
        ar: "الْمُعْتَل",
        latin: "Al-Mu'tal",
        def: "Fi'il yang salah satu atau lebih huruf aslinya adalah huruf 'illah (alif, waw, ya'). Contoh: وَعَدَ (waw di fa' fi'il), قَالَ (alif di 'ain fi'il)",
        note: "Mu'tal dibagi: mitsal, ajwaf, naqish, lafif mafruq, lafif maqrun."
      },
      {
        ar: "التَّصْرِيْف",
        latin: "At-Tashrif",
        def: "Proses mengubah kata dari satu bentuk ke bentuk lain untuk menghasilkan makna yang dikehendaki. Ada dua jenis: tashrif istilahi dan tashrif lughawi.",
        note: ""
      },
      {
        ar: "الْمَصْدَر",
        latin: "Al-Masdar",
        def: "Akar kata / kata benda abstrak yang menjadi asal dari fi'il. Biasanya berpadanan dengan kata kerja infinitif dalam bahasa Indonesia. Contoh: ضَرْب (memukul), كِتَابَة (menulis)",
        note: "Menurut pendapat mayoritas ulama Bashrah, masdar adalah asal dari fi'il. Ulama Kufah berpendapat sebaliknya."
      },
      {
        ar: "الضَّمِيْر",
        latin: "Adh-Dhamir",
        def: "Kata ganti (pronoun) dalam bahasa Arab. Dalam tashrif lughawi, dhamir digunakan sebagai patokan konjugasi: هُوَ، هِيَ، هُمَا، هُمْ، هُنَّ، dst.",
        note: ""
      },
      {
        ar: "الْمَبْنِيّ لِلْمَعْلُوْم",
        latin: "Mabni lil-Ma'lum",
        def: "Fi'il aktif — pelakunya (fa'il) diketahui dan disebutkan secara eksplisit. Disebut juga fi'il ma'lum.",
        note: ""
      },
      {
        ar: "الْمَبْنِيّ لِلْمَجْهُوْل",
        latin: "Mabni lil-Majhul",
        def: "Fi'il pasif — pelakunya tidak disebutkan (tidak diketahui atau sengaja disembunyikan). Subjek gramatikalnya disebut naibul fa'il.",
        note: "Cara membentuk majhul: dhammah di huruf awal, kasrah di huruf sebelum akhir (untuk fi'il madhi), dan dhammah di awal + fathah di huruf sebelum akhir (untuk mudhari')."
      },
      {
        ar: "الثُّلَاثِيّ",
        latin: "Ats-Tsulatsi",
        def: "Fi'il yang memiliki tiga huruf asli. Ini adalah kelompok fi'il paling banyak dalam bahasa Arab.",
        note: ""
      },
      {
        ar: "الرُّبَاعِيّ",
        latin: "Ar-Ruba'i",
        def: "Fi'il yang memiliki empat huruf asli. Lebih sedikit dari tsulatsi.",
        note: ""
      }
    ]
  },

  /* ============================================================
     HALAMAN: PEMBAGIAN FI'IL
     ============================================================ */
  pembagianFiil: {
    title: "Pembagian Fi'il dalam Ilmu Shorof",
    titleAr: "أَقْسَامُ الْفِعْلِ",
    subtitle: "Klasifikasi fi'il dari berbagai sudut pandang",
    sections: [
      {
        title: "1. Berdasarkan Jumlah Huruf Asli",
        items: [
          { label: "Tsulatsi (ثلاثي)", ar: "كَتَبَ، نَصَرَ، فَتَحَ", desc: "3 huruf asli — kelompok terbesar" },
          { label: "Ruba'i (رباعي)", ar: "دَحْرَجَ، زَلْزَلَ، وَسْوَسَ", desc: "4 huruf asli" },
          { label: "Khumasi (خماسي)*", ar: "اِنْطَلَقَ، اِسْتَخْرَجَ", desc: "*sebenarnya ini tsulatsi/ruba'i mazid" }
        ]
      },
      {
        title: "2. Berdasarkan Ada/Tidaknya Huruf Tambahan",
        items: [
          { label: "Mujarrad (مجرد)", ar: "نَصَرَ، دَحْرَجَ", desc: "Semua hurufnya asli, tanpa tambahan" },
          { label: "Mazid (مزيد)", ar: "أَنْصَرَ، تَنَاصَرَ، اِنْتَصَرَ", desc: "Ada huruf tambahan (1, 2, atau 3 huruf)" }
        ]
      },
      {
        title: "3. Berdasarkan Kondisi Huruf Asli",
        items: [
          { label: "Shahih Salim (صحيح سالم)", ar: "نَصَرَ، كَتَبَ", desc: "Semua huruf asli selamat (bukan hamzah, bukan mudha'af, bukan 'illah)" },
          { label: "Shahih Mahmuz (صحيح مهموز)", ar: "أَكَلَ، أَمَرَ، سَأَلَ", desc: "Ada huruf hamzah di huruf aslinya" },
          { label: "Shahih Mudha'af (صحيح مضاعف)", ar: "مَدَّ، شَدَّ، رَدَّ", desc: "'Ain dan lam fi'il sama, kemudian diidghamkan" },
          { label: "Mu'tal Mitsal (معتل مثال)", ar: "وَجَدَ، وَصَلَ، يَسَرَ", desc: "Fa' fi'il berupa waw atau ya'" },
          { label: "Mu'tal Ajwaf (معتل أجوف)", ar: "قَالَ، بَاعَ، كَانَ", desc: "'Ain fi'il berupa alif (asalnya waw atau ya')" },
          { label: "Mu'tal Naqish (معتل ناقص)", ar: "دَعَا، رَمَى، نَسِيَ", desc: "Lam fi'il berupa alif (asalnya waw atau ya')" },
          { label: "Lafif Mafruq (لفيف مفروق)", ar: "وَفَى، وَقَى", desc: "Fa' dan lam fi'il berupa huruf 'illah" },
          { label: "Lafif Maqrun (لفيف مقرون)", ar: "رَوَى، طَوَى", desc: "'Ain dan lam fi'il berupa huruf 'illah" }
        ]
      },
      {
        title: "4. Berdasarkan Waktu",
        items: [
          { label: "Fi'il Madhi (فعل ماضي)", ar: "نَصَرَ", desc: "Kata kerja lampau" },
          { label: "Fi'il Mudhari' (فعل مضارع)", ar: "يَنْصُرُ", desc: "Kata kerja kini/akan datang" },
          { label: "Fi'il Amr (فعل أمر)", ar: "اُنْصُرْ", desc: "Kata kerja perintah" }
        ]
      },
      {
        title: "5. Berdasarkan Ada/Tidaknya Objek",
        items: [
          { label: "Lazim / Intransitif (لازم)", ar: "جَلَسَ، قَامَ، ذَهَبَ", desc: "Tidak membutuhkan objek (maf'ul)" },
          { label: "Muta'addi / Transitif (متعدي)", ar: "ضَرَبَ، كَتَبَ، أَكَلَ", desc: "Membutuhkan objek (maf'ul)" }
        ]
      }
    ]
  },

  /* ============================================================
     HALAMAN: TASHRIF ISTILAHI & LUGHAWI
     ============================================================ */
  tashrifUmum: {
    title: "Tashrif: Istilahi dan Lughawi",
    titleAr: "التَّصْرِيْفُ الِاصْطِلَاحِيّ وَاللُّغَوِيّ",
    subtitle: "Dua jenis tashrif dalam ilmu Shorof",
    content: [
      {
        type: "two-col",
        cols: [
          {
            title: "Tashrif Istilahi",
            titleAr: "التَّصْرِيْف الِاصْطِلَاحِيّ",
            desc: "Mengubah suatu kata dasar (kalimat) ke berbagai bentuk turunan untuk menghasilkan makna-makna tertentu. Contohnya: dari kata dasar <span class='ar ar-sm'>نَصَرَ</span>, kita dapat menurunkan isim fa'il <span class='ar ar-sm'>نَاصِر</span>, isim maf'ul <span class='ar ar-sm'>مَنْصُوْر</span>, masdar <span class='ar ar-sm'>نَصْر</span>, dan seterusnya.",
            items: ["Fi'il Madhi Ma'lum", "Fi'il Mudhari' Ma'lum", "Fi'il Amr", "Fi'il Nahyi", "Isim Fa'il", "Isim Maf'ul", "Masdar", "Fi'il Madhi Majhul", "Fi'il Mudhari' Majhul", "Isim Zaman / Makan", "Isim Alat"]
          },
          {
            title: "Tashrif Lughawi",
            titleAr: "التَّصْرِيْف اللُّغَوِيّ",
            desc: "Mengubah suatu kata sesuai dengan dhamir (kata ganti) yang berbeda-beda, mencakup seluruh persona (orang pertama, kedua, ketiga), jenis kelamin (mudzakkar/muannats), dan jumlah (mufrad/mutsanna/jama').",
            items: ["هُوَ (dia lk. tunggal)", "هِيَ (dia pr. tunggal)", "هُمَا (dia berdua lk.)", "هُمَا (dia berdua pr.)", "هُمْ (mereka lk.)", "هُنَّ (mereka pr.)", "أَنْتَ (kamu lk.)", "أَنْتِ (kamu pr.)", "أَنْتُمَا (kamu berdua)", "أَنْتُمْ (kamu semua lk.)", "أَنْتُنَّ (kamu semua pr.)", "أَنَا (saya)", "نَحْنُ (kami/kita)"]
          }
        ]
      },
      {
        type: "example",
        title: "Contoh: Tashrif Istilahi نَصَرَ",
        ar: "نَصَرَ",
        arti: "menolong",
        rows: [
          ["Fi'il Madhi Ma'lum", "نَصَرَ", "Ia (lk.) telah menolong"],
          ["Fi'il Mudhari' Ma'lum", "يَنْصُرُ", "Ia (lk.) sedang/akan menolong"],
          ["Masdar", "نَصْرًا", "pertolongan"],
          ["Fi'il Amr", "اُنْصُرْ", "Tolonglah!"],
          ["Fi'il Nahyi", "لَا تَنْصُرْ", "Jangan menolong!"],
          ["Isim Fa'il", "نَاصِرٌ", "orang yang menolong"],
          ["Isim Maf'ul", "مَنْصُوْرٌ", "orang yang ditolong"],
          ["Fi'il Madhi Majhul", "نُصِرَ", "Ia (lk.) telah ditolong"],
          ["Fi'il Mudhari' Majhul", "يُنْصَرُ", "Ia (lk.) sedang/akan ditolong"],
          ["Isim Zaman/Makan", "مَنْصَرٌ", "waktu/tempat pertolongan"],
          ["Isim Alat", "مِنْصَرٌ", "alat untuk menolong"]
        ]
      }
    ]
  },

  /* ============================================================
     HALAMAN: SEJARAH — LATAR BELAKANG
     ============================================================ */
  sejarahLatar: {
    title: "Latar Belakang Munculnya Ilmu Nahwu & Shorof",
    titleAr: "نَشْأَةُ عِلْمَيِ النَّحْوِ وَالصَّرْف",
    subtitle: "Asal-usul dan faktor pendorong kodifikasi ilmu bahasa Arab",
    content: [
      {
        type: "alert",
        variant: "info",
        text: "Para sejarawan dan ulama bahasa Arab berbeda pendapat dalam beberapa detail sejarah kodifikasi ilmu Nahwu. Perbedaan pendapat ini akan disajikan secara objektif dalam pembahasan berikut."
      },
      {
        type: "section",
        title: "Kondisi Bahasa Arab Sebelum Islam dan Awal Islam",
        body: `<p>Bahasa Arab pada masa Jahiliyah dan awal Islam dikenal sebagai bahasa yang <strong>fasih dan murni</strong>. Bangsa Arab Badui (pedalaman) berbicara dengan bahasa yang sesuai dengan naluri dan fitrah, tanpa tata bahasa yang tertulis namun tetap konsisten.</p>
        <p class="mt-8">Penyair-penyair Arab, seperti Imru'ul Qais, Zuhair bin Abi Sulma, dan lainnya menggunakan bahasa Arab yang sangat kaya dan terpola, meski kaidahnya belum dibukukan.</p>`
      },
      {
        type: "section",
        title: "Faktor Pendorong Munculnya Ilmu Nahwu",
        body: `<p>Setelah Islam tersebar luas dan banyak orang non-Arab ('ajam) memeluk Islam, mulailah terjadi:</p>
        <ul class="mt-8" style="padding-left:18px; line-height:2.2;">
          <li><strong>Lahn (اللحن)</strong> — kesalahan berbicara bahasa Arab, khususnya dalam membaca Al-Qur'an</li>
          <li>Percampuran bahasa Arab dengan bahasa Persia, Romawi, dan Nabath</li>
          <li>Kekhawatiran para sahabat dan ulama terhadap kemurnian Al-Qur'an</li>
          <li>Merebaknya kesalahan i'rab di kalangan orang awam</li>
        </ul>
        <div class="alert alert-warning mt-12">
          <strong>Riwayat Populer:</strong> Diriwayatkan bahwa seseorang membaca ayat Al-Qur'an dengan salah: membaca <span class="ar ar-sm">أَنَّ اللهَ بَرِيْءٌ مِنَ الْمُشْرِكِيْنَ وَرَسُوْلُهُ</span> dengan menurunkan harakat "رسول" menjadi kasrah, sehingga maknanya berubah fatal. Kejadian inilah (antara lain) yang mendorong Sayyidina Ali bin Abi Thalib memerintahkan Abu al-Aswad untuk menyusun kaidah bahasa Arab. (Riwayat ini masyhur meski ada perbedaan sanad dan konteks di kalangan sejarawan.)
        </div>`
      }
    ]
  },

  /* ============================================================
     HALAMAN: SEJARAH — TOKOH-TOKOH
     ============================================================ */
  sejarahTokoh: {
    title: "Tokoh-Tokoh Penting dalam Sejarah Ilmu Nahwu & Shorof",
    titleAr: "أَعْلَامُ عِلْمِ النَّحْوِ وَالصَّرْف",
    subtitle: "Para ulama yang berjasa meletakkan fondasi tata bahasa Arab",
    tokoh: [
      {
        nama: "Sayyidina Ali bin Abi Thalib",
        ar: "عَلِيّ بْنُ أَبِيْ طَالِب",
        wafat: "w. 40 H",
        peran: "Menurut pendapat yang masyhur (diriwayatkan oleh Ibn Sallam al-Jumahi dan lainnya), Sayyidina Ali adalah orang pertama yang menginstruksikan penyusunan kaidah bahasa Arab. Beliau meletakkan dasar-dasar klasifikasi kalam: isim, fi'il, dan huruf.",
        ref: "Al-Fihrist (Ibn al-Nadim), Bughyat al-Wu'at (al-Suyuthi)"
      },
      {
        nama: "Abu al-Aswad ad-Du'ali",
        ar: "أَبُوْ الْأَسْوَدِ الدُّؤَلِيّ",
        wafat: "w. sekitar 69 H",
        peran: "Dianggap sebagai 'bapak ilmu Nahwu'. Atas instruksi Ali bin Abi Thalib (atau Ziyad bin Abihi menurut riwayat lain), beliau menyusun kaidah-kaidah awal Nahwu. Beliau juga berjasa meletakkan sistem tanda harakat (fathah, kasrah, dhammah) sebagai titik-titik tinta berwarna pada mushaf Al-Qur'an.",
        ref: "Tarikh al-Adab al-Arabi (Jurji Zaydan), Nuzhat al-Alibba' (al-Anbari)"
      },
      {
        nama: "Al-Khalil bin Ahmad al-Farahidi",
        ar: "الْخَلِيْلُ بْنُ أَحْمَدَ الْفَرَاهِيْدِيّ",
        wafat: "w. 170 H/175 H (khilaf)",
        peran: "Salah satu genius terbesar dalam sejarah bahasa Arab. Beliau menyempurnakan sistem tanda baca (harakat) yang kita gunakan hingga sekarang. Menyusun kamus Arab pertama 'Kitab al-'Ain'. Menciptakan ilmu prosodi Arab ('Ilm al-'Arudh). Guru dari Sibawaih.",
        ref: "Mu'jam al-Udaba' (Yaqut al-Hamawi), Al-'Iqd al-Farid (Ibn Abd Rabbih)"
      },
      {
        nama: "Sibawaih",
        ar: "سِيْبَوَيْهِ",
        wafat: "w. sekitar 180 H",
        peran: "Nama asli: 'Amr bin Utsman bin Qanbar al-Bishri. Menyusun kitab tata bahasa Arab paling monumental: 'Al-Kitab' (الكتاب). Kitab ini menjadi rujukan utama para ahli nahwu selama berabad-abad dan masih dikaji hingga kini. Beliau berasal dari Persia namun menguasai bahasa Arab dengan sempurna.",
        ref: "Al-Kitab (Sibawaih), Tarikh Nahwiyyina al-Bashriyyin (Abu Sa'id al-Sirafi)"
      },
      {
        nama: "Al-Akhfasy al-Ausath",
        ar: "الْأَخْفَشُ الْأَوْسَط",
        wafat: "w. 215 H",
        peran: "Nama asli: Sa'id bin Mas'adah. Murid Sibawaih dan orang pertama yang membukukan dan mempopulerkan kitab Sibawaih. Beliau juga tokoh penting mazhab Bashrah dalam ilmu Nahwu.",
        ref: "Bughyat al-Wu'at (al-Suyuthi)"
      },
      {
        nama: "Al-Kisa'i",
        ar: "الْكِسَائِيّ",
        wafat: "w. 189 H",
        peran: "Nama asli: Ali bin Hamzah. Tokoh utama mazhab Kufah dalam ilmu Nahwu. Beliau adalah guru bahasa Arab Harun ar-Rasyid. Terkenal dalam perdebatan dengan para ahli Bashrah, terutama dalam masalah analogi (qiyas) vs sima' (riwayat).",
        ref: "Inbah al-Ruwat (al-Qifti)"
      },
      {
        nama: "Al-Farra'",
        ar: "الْفَرَّاء",
        wafat: "w. 207 H",
        peran: "Nama asli: Yahya bin Ziyad. Tokoh terbesar mazhab Kufah. Menulis 'Ma'ani al-Qur'an', karya tafsir bahasa pertama yang komprehensif. Murid Al-Kisa'i.",
        ref: "Mu'jam al-Udaba' (Yaqut al-Hamawi)"
      },
      {
        nama: "Ibn Jinni",
        ar: "ابْنُ جِنِّيّ",
        wafat: "w. 392 H",
        peran: "Nama asli: Abu al-Fath Utsman. Menulis 'Al-Khashais' — karya besar tentang filsafat bahasa Arab. Juga menulis 'Al-Munsif' yang merupakan syarah kitab tashrif Al-Mazini. Beliau adalah tokoh penting dalam ilmu Shorof.",
        ref: "Al-Khashais (Ibn Jinni), Al-Munsif (Ibn Jinni)"
      },
      {
        nama: "Ibn Malik al-Andalusi",
        ar: "ابْنُ مَالِك الْأَنْدَلُسِيّ",
        wafat: "w. 672 H",
        peran: "Nama asli: Muhammad bin Abdillah bin Malik al-Tha'i. Pengarang Alfiyah Ibn Malik — matan Nahwu 1000 bait yang paling masyhur dan paling banyak dihafalkan oleh para pelajar hingga saat ini.",
        ref: "Alfiyah Ibn Malik, Syarh Tashil al-Fawaid"
      },
      {
        nama: "Ibn Hisyam al-Anshari",
        ar: "ابْنُ هِشَامٍ الْأَنْصَارِيّ",
        wafat: "w. 761 H",
        peran: "Pengarang kitab Nahwu yang sangat populer di pesantren: 'Mughni al-Labib 'an Kutub al-A'arib' dan 'Qawa'id al-I'rab'. Sibawaih pernah berkata tentangnya: 'Ibn Hisyam lebih tahu Nahwu daripada Sibawaih sendiri' — meskipun klaim ini diperdebatkan.",
        ref: "Mughni al-Labib (Ibn Hisyam)"
      }
    ]
  },

  /* ============================================================
     HALAMAN: SEJARAH — KITAB-KITAB KLASIK
     ============================================================ */
  sejarahKitab: {
    title: "Kitab-Kitab Klasik Ilmu Nahwu & Shorof",
    titleAr: "كُتُبُ النَّحْوِ وَالصَّرْفِ الْكَلَاسِيْكِيَّة",
    subtitle: "Warisan intelektual para ulama bahasa Arab",
    kitab: [
      {
        judul: "الكتاب",
        penulis: "Sibawaih (w. ~180 H)",
        isi: "Ensiklopedia Nahwu pertama dan terlengkap. Ditulis dalam dua jilid besar. Menjadi rujukan utama semua mazhab Nahwu. Berisi kaidah i'rab, morfologi, fonetik, dan pragmatik bahasa Arab.",
        kategori: "Nahwu & Shorof"
      },
      {
        judul: "كِتَابُ التَّصْرِيْف",
        penulis: "Al-Mazini (w. 249 H)",
        isi: "Kitab khusus Shorof yang paling awal dan berpengaruh. Menjadi dasar perkembangan ilmu Shorof selanjutnya. Disyarah oleh Ibn Jinni dalam 'Al-Munsif'.",
        kategori: "Shorof"
      },
      {
        judul: "الْمُقَدِّمَة الْجَزُوْلِيَّة",
        penulis: "Al-Jazuli (w. ~607 H)",
        isi: "Mukadimah Nahwu yang sangat ringkas namun padat. Sering disyarah dan menjadi materi ajar di madrasah-madrasah.",
        kategori: "Nahwu"
      },
      {
        judul: "الْآجُرُّوْمِيَّة",
        penulis: "Ibn Ajurrum (w. 723 H)",
        isi: "Matan Nahwu yang paling banyak digunakan di pesantren seluruh dunia. Ringkas dan sistematis. Wajib dihafal sebagai pondasi Nahwu.",
        kategori: "Nahwu"
      },
      {
        judul: "أَلْفِيَّة ابْنِ مَالِك",
        penulis: "Ibn Malik (w. 672 H)",
        isi: "Matan Nahwu-Shorof dalam 1002 bait sya'ir. Merangkum hampir semua kaidah Nahwu dan Shorof. Banyak syarahnya, yang terkenal: Ibn Aqil, Ibn al-Nazim, Al-Asymuni.",
        kategori: "Nahwu & Shorof"
      },
      {
        judul: "الشَّافِيَة",
        penulis: "Ibn al-Hajib (w. 646 H)",
        isi: "Matan khusus ilmu Shorof yang sangat masyhur dan sering dikaji di pesantren. Disyarah dalam 'Al-Kafiyah al-Syafiyah' karya Ibn Malik.",
        kategori: "Shorof"
      },
      {
        judul: "الْمَقْصُوْد",
        penulis: "Nisbat kepada Imam Abu Hanifah (masyhur di pesantren)",
        isi: "Matan tashrif singkat yang sangat populer di pesantren Nusantara dan Asia Selatan. Berisi pola-pola tashrif dasar dari fi'il tsulatsi hingga ruba'i.",
        kategori: "Shorof"
      },
      {
        judul: "لَامِيَّة الْأَفْعَال",
        penulis: "Ibn Malik (w. 672 H)",
        isi: "Nadzham (puisi) khusus membahas fi'il, wazan-wazan, dan kaidah tashrif. Pelengkap Alfiyah dalam bidang morfologi fi'il.",
        kategori: "Shorof"
      },
      {
        judul: "مُغْنِي اللَّبِيْب",
        penulis: "Ibn Hisyam (w. 761 H)",
        isi: "Karya Nahwu yang komprehensif dan mendalam. Membahas partikel-partikel bahasa Arab secara mendetail. Rujukan bagi para peneliti dan ulama lanjutan.",
        kategori: "Nahwu"
      },
      {
        judul: "قَوَاعِدُ الصَّرْف الْكَافِيَة",
        penulis: "Berbagai ulama kontemporer",
        isi: "Kompilasi kaidah Shorof yang sistematis dan modern, dipakai di berbagai madrasah dan universitas Islam.",
        kategori: "Shorof"
      }
    ]
  },

  /* ============================================================
     HALAMAN: SEJARAH — MODERN
     ============================================================ */
  sejarahModern: {
    title: "Perkembangan Pembelajaran Ilmu Shorof & Nahwu hingga Masa Kini",
    titleAr: "تَطَوُّرُ تَعْلِيْمِ النَّحْوِ وَالصَّرْف فِيْ الْعَصْرِ الْحَدِيْث",
    subtitle: "Dari pesantren tradisional hingga era digital",
    timeline: [
      { year: "Abad 8-10 M", title: "Era Kodifikasi Klasik", body: "Masa penyusunan kitab-kitab besar Nahwu dan Shorof oleh Sibawaih, Al-Khalil, Al-Kisa'i, dan Al-Farra'. Mazhab Bashrah dan Kufah saling bersaing." },
      { year: "Abad 10-13 M", title: "Era Syarh dan Ringkasan", body: "Para ulama mulai menulis syarah (komentar) dan mukhtashar (ringkasan) dari kitab-kitab besar. Bermunculan karya seperti Al-Muqaddimah al-Ajurrumiyyah, matan-matan nadzham untuk memudahkan hafalan." },
      { year: "Abad 13-15 M", title: "Era Puncak & Sintesis", body: "Ibn Malik menulis Alfiyah (1002 bait). Ibn Hisyam menulis Mughni al-Labib. Al-Suyuthi (w. 911 H) menulis Al-Asyba' wa al-Nazhair dan Hama' al-Hawami'. Era sintesis besar ilmu bahasa Arab." },
      { year: "Abad 16-19 M", title: "Era Penyebaran ke Nusantara", body: "Ulama Nusantara seperti Syekh Nawawi al-Bantani (w. 1897) menulis syarah kitab Nahwu-Shorof dalam bahasa Arab. Pesantren di Jawa, Madura, Kalimantan, dan Aceh mulai mengajarkan Nahwu-Shorof secara sistematis." },
      { year: "Abad 20 M", title: "Modernisasi Kurikulum", body: "Universitas Al-Azhar Kairo dan lembaga-lembaga Islam modern mereformasi kurikulum Nahwu-Shorof. Di Indonesia, PTIQ, UIN, dan pesantren terpadu mengintegrasikan metode klasik dan modern." },
      { year: "Abad 21 M — Kini", title: "Era Digital", body: "Lahirnya berbagai aplikasi, website, dan platform digital pembelajaran Nahwu-Shorof. Al-Qur'an digital dengan analisis morfologi (seperti Quranic Arabic Corpus), program komputer untuk analisis teks Arab, kecerdasan buatan untuk parsing tata bahasa Arab." }
    ]
  },

  /* ============================================================
     HALAMAN: NAHWU — PENGERTIAN
     ============================================================ */
  nahwuPengertian: {
    title: "Pengertian Ilmu Nahwu",
    titleAr: "تَعْرِيْفُ عِلْمِ النَّحْو",
    subtitle: "Pengenalan ilmu tata bahasa Arab",
    content: [
      {
        type: "kaidah",
        label: "Definisi Ilmu Nahwu",
        ar: "عِلْمٌ بِأُصُوْلٍ تُعْرَفُ بِهَا أَحْوَالُ أَوَاخِرِ الْكَلِمِ الْعَرَبِيَّةِ إِعْرَابًا وَبِنَاءً",
        id: "\"Ilmu tentang dasar-dasar yang dengannya diketahui kondisi akhir kata-kata Arab, baik dari segi i'rab maupun bina'\""
      },
      {
        type: "section",
        title: "Perbedaan Nahwu dan Shorof",
        body: `<p>Secara sederhana:</p>
        <ul style="padding-left:18px; line-height:2.4; margin-top:8px;">
          <li><strong>Shorof</strong> mengkaji perubahan <em>bentuk kata</em> (morfologi) — dari satu akar menjadi berbagai turunan.</li>
          <li><strong>Nahwu</strong> mengkaji perubahan <em>akhiran kata</em> berdasarkan kedudukannya dalam kalimat (sintaksis).</li>
        </ul>
        <div class="alert alert-info mt-12">
          Para ulama biasanya menyebut Shorof sebagai <strong>أُمّ العلوم</strong> (ibu ilmu), dan Nahwu sebagai <strong>أَب العلوم</strong> (bapak ilmu). Keduanya berpadu membentuk fondasi pemahaman bahasa Arab.
        </div>`
      }
    ]
  },

  /* ============================================================
     HALAMAN: NAHWU — PEMBAGIAN KALAM
     ============================================================ */
  nahwuKalam: {
    title: "Pembagian Kalam dalam Ilmu Nahwu",
    titleAr: "أَقْسَامُ الْكَلَام",
    subtitle: "Isim, Fi'il, dan Huruf",
    content: [
      {
        type: "kaidah",
        label: "Definisi Kalam",
        ar: "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيْدُ بِالْوَضْعِ",
        id: "\"Kalam adalah lafadz yang tersusun, berfaidah (mengandung makna), dan disengaja\""
      },
      {
        type: "three-cards",
        items: [
          {
            title: "الِاسْم (Isim)",
            subtitle: "Kata Benda / Nomina",
            desc: "Kata yang menunjukkan makna pada dirinya sendiri tanpa terikat pada waktu.",
            tanda: ["Bisa menerima al-ta'rif (الـ)", "Bisa di-tanwin (ـٌ ـٍ ـًا)", "Bisa menjadi mudhafilah (إضافة)", "Bisa didahului huruf jar"],
            contoh: ["كِتَابٌ (kitab)", "مُحَمَّدٌ (Muhammad)", "الْمَسْجِدُ (masjid)", "عِلْمٌ (ilmu)"]
          },
          {
            title: "الْفِعْل (Fi'il)",
            subtitle: "Kata Kerja / Verba",
            desc: "Kata yang menunjukkan makna pada dirinya sendiri dan terikat pada waktu.",
            tanda: ["Bisa menerima ta' ta'nits sakinah (ت)", "Bisa menerima ta' fa'il (تَ)", "Bisa menerima ya' muannats mukhathabah (ي)", "Bisa menerima nun taukid (نَّ/نْ)"],
            contoh: ["كَتَبَ (telah menulis)", "يَكْتُبُ (sedang menulis)", "اُكْتُبْ (tulislah!)", "لَا تَكْتُبْ (jangan menulis!)"]
          },
          {
            title: "الْحَرْف (Huruf)",
            subtitle: "Partikel / Kata Tugas",
            desc: "Kata yang tidak menunjukkan makna kecuali apabila bersama dengan kata lain.",
            tanda: ["Tidak memiliki tanda isim maupun fi'il", "Tidak berubah bentuk", "Maknanya baru muncul dalam konteks kalimat"],
            contoh: ["مِنْ (dari)", "إِلَى (ke/kepada)", "فِيْ (di/dalam)", "عَلَى (atas/di atas)", "لَا (tidak/jangan)"]
          }
        ]
      }
    ]
  },

  /* ============================================================
     HALAMAN: NAHWU — I'RAB & BINA'
     ============================================================ */
  nahwuIrab: {
    title: "I'rab dan Bina'",
    titleAr: "الْإِعْرَابُ وَالْبِنَاء",
    subtitle: "Perubahan akhiran kata berdasarkan kedudukan dalam kalimat",
    content: [
      {
        type: "two-col",
        cols: [
          {
            title: "الْإِعْرَاب (I'rab)",
            desc: "Perubahan harakat akhir kata karena perbedaan 'amil (faktor) yang mempengaruhinya. I'rab ada 4: Rafa', Nashab, Khafadh (Jar), dan Jazm.",
            items: ["Rafa' (رَفْع) — harakat dhammah/waw/alif", "Nashab (نَصْب) — harakat fathah/ya'/alif", "Khafadh/Jar (خَفْض/جَرّ) — harakat kasrah/ya'", "Jazm (جَزْم) — sukun/hadzf huruf 'illah"]
          },
          {
            title: "الْبِنَاء (Bina')",
            desc: "Harakat akhir kata yang tetap/tidak berubah meskipun 'amil-nya berbeda. Kata yang demikian disebut mabni.",
            items: ["Semua huruf = mabni", "Fi'il madhi = mabni fathah", "Fi'il amr = mabni sukun (umumnya)", "Dhamir (kata ganti) = mabni", "Isim mabni: هَذَا، كَيْفَ، أَيْنَ، dsb."]
          }
        ]
      },
      {
        type: "section",
        title: "Empat Jenis I'rab dan Penggunaannya",
        body: `
        <div class="tashrif-wrapper">
          <table class="tashrif-table">
            <thead>
              <tr>
                <th>I'rab</th>
                <th>Tanda Asli</th>
                <th>Berlaku pada</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="col-bentuk">رَفْع</td><td>ـُ (dhammah)</td><td>Isim mu'rab, fi'il mudhari'</td><td class="col-bentuk">جَاءَ الطَّالِبُ</td></tr>
              <tr><td class="col-bentuk">نَصْب</td><td>ـَ (fathah)</td><td>Isim mu'rab, fi'il mudhari'</td><td class="col-bentuk">رَأَيْتُ الطَّالِبَ</td></tr>
              <tr><td class="col-bentuk">خَفْض/جَرّ</td><td>ـِ (kasrah)</td><td>Isim mu'rab saja</td><td class="col-bentuk">مَرَرْتُ بِالطَّالِبِ</td></tr>
              <tr><td class="col-bentuk">جَزْم</td><td>ـْ (sukun)</td><td>Fi'il mudhari' saja</td><td class="col-bentuk">لَمْ يَذْهَبْ</td></tr>
            </tbody>
          </table>
        </div>`
      }
    ]
  },

  /* ============================================================
     HALAMAN: NAHWU — TANDA I'RAB
     ============================================================ */
  nahwuTanda: {
    title: "Tanda-Tanda I'rab",
    titleAr: "عَلَامَاتُ الْإِعْرَاب",
    subtitle: "Harakat dan huruf sebagai tanda kedudukan kata",
    content: [
      {
        type: "alert",
        variant: "info",
        text: "Tanda i'rab ada dua jenis: tanda asli (lafzhiyyah) berupa harakat, dan tanda pengganti (niyabiyyah) berupa huruf atau penghapusan harakat."
      },
      {
        type: "irab-table",
        rows: [
          { irab: "رَفْع", asli: "ضَمَّة", asliEx: "جَاءَ الطَّالِبُ", niyabah: "وَاو → جمع مذكر سالم، أسماء ستة\nأَلِف → مثنى", niyabahEx: "الطَّالِبُوْنَ / أَبُوْكَ\nالطَّالِبَانِ" },
          { irab: "نَصْب", asli: "فَتْحَة", asliEx: "رَأَيْتُ الطَّالِبَ", niyabah: "يَاء → مثنى، جمع مذكر سالم، أسماء ستة\nكَسْرَة → جمع مؤنث سالم\nحَذْف نون → أفعال خمسة", niyabahEx: "الطَّالِبَيْنِ / الطَّالِبِيْنَ" },
          { irab: "جَرّ", asli: "كَسْرَة", asliEx: "مَرَرْتُ بِالطَّالِبِ", niyabah: "يَاء → مثنى، جمع مذكر سالم، أسماء ستة\nفَتْحَة → ممنوع من الصرف", niyabahEx: "بِالطَّالِبَيْنِ / بِالطَّالِبِيْنَ" },
          { irab: "جَزْم", asli: "سُكُوْن", asliEx: "لَمْ يَذْهَبْ", niyabah: "حَذْف حرف علة → فعل معتل\nحَذْف نون → أفعال خمسة", niyabahEx: "لَمْ يَدْعُ / لَمْ يَرْمِ\nلَمْ يَذْهَبَا" }
        ]
      }
    ]
  },

  /* ============================================================
     HALAMAN: NAHWU — CONTOH DALAM KALIMAT
     ============================================================ */
  nahwuContoh: {
    title: "Contoh Penerapan Nahwu dalam Kalimat",
    titleAr: "تَطْبِيْقُ قَوَاعِدِ النَّحْوِ فِيْ الْجُمَلِ",
    subtitle: "Analisis kalimat Arab dengan kaidah Nahwu",
    examples: [
      {
        ar: "نَصَرَ مُحَمَّدٌ الطَّالِبَ",
        trans: "Muhammad telah menolong pelajar itu",
        analisis: [
          { kata: "نَصَرَ", kedudukan: "Fi'il Madhi", irab: "mabni fathah" },
          { kata: "مُحَمَّدٌ", kedudukan: "Fa'il (Subjek)", irab: "Marfu', tanda: dhammah" },
          { kata: "الطَّالِبَ", kedudukan: "Maf'ul bih (Objek)", irab: "Mansub, tanda: fathah" }
        ]
      },
      {
        ar: "الْعِلْمُ نُوْرٌ",
        trans: "Ilmu adalah cahaya",
        analisis: [
          { kata: "الْعِلْمُ", kedudukan: "Mubtada' (Subjek nominal)", irab: "Marfu', tanda: dhammah" },
          { kata: "نُوْرٌ", kedudukan: "Khabar (Predikat nominal)", irab: "Marfu', tanda: dhammah tanwin" }
        ]
      },
      {
        ar: "ذَهَبَ الطُّلَّابُ إِلَى الْمَسْجِدِ",
        trans: "Para pelajar telah pergi ke masjid",
        analisis: [
          { kata: "ذَهَبَ", kedudukan: "Fi'il Madhi", irab: "mabni fathah" },
          { kata: "الطُّلَّابُ", kedudukan: "Fa'il", irab: "Marfu', tanda: dhammah" },
          { kata: "إِلَى", kedudukan: "Huruf Jar", irab: "mabni sukun" },
          { kata: "الْمَسْجِدِ", kedudukan: "Majrur (isim setelah huruf jar)", irab: "Majrur, tanda: kasrah" }
        ]
      },
      {
        ar: "لَمْ يَكْتُبِ الطَّالِبُ الدَّرْسَ",
        trans: "Pelajar itu belum/tidak menulis pelajaran",
        analisis: [
          { kata: "لَمْ", kedudukan: "Huruf Jazm", irab: "mabni sukun" },
          { kata: "يَكْتُبْ", kedudukan: "Fi'il Mudhari' Majzum", irab: "Majzum, tanda: sukun" },
          { kata: "الطَّالِبُ", kedudukan: "Fa'il", irab: "Marfu', tanda: dhammah" },
          { kata: "الدَّرْسَ", kedudukan: "Maf'ul bih", irab: "Mansub, tanda: fathah" }
        ]
      }
    ]
  },

  /* ============================================================
     HALAMAN: PENERAPAN SHOROF DALAM KALIMAT
     ============================================================ */
  penerapan: {
    title: "Penerapan Ilmu Shorof dalam Kalimat",
    titleAr: "تَطْبِيْقُ عِلْمِ الصَّرْفِ فِيْ الْجُمَلِ",
    subtitle: "Melihat shorof dalam konteks nyata",
    examples: [
      {
        ar: "إِنَّ اللهَ عَلِيْمٌ حَكِيْمٌ",
        source: "Al-Qur'an (banyak tempat)",
        analisis: [
          { kata: "عَلِيْمٌ", wazan: "فَعِيْلٌ", asal: "ع-ل-م (علم)", makna: "Maha Mengetahui — sighat mubalaghah (sangat mengetahui)" },
          { kata: "حَكِيْمٌ", wazan: "فَعِيْلٌ", asal: "ح-ك-م (حكم)", makna: "Maha Bijaksana — sighat mubalaghah" }
        ]
      },
      {
        ar: "خُلِقَ الْإِنْسَانُ مِنْ عَجَل",
        source: "QS. Al-Anbiya: 37",
        analisis: [
          { kata: "خُلِقَ", wazan: "فُعِلَ (fi'il madhi majhul)", asal: "خ-ل-ق", makna: "Diciptakan — bentuk pasif, fa'il tidak disebutkan (= Allah)" }
        ]
      },
      {
        ar: "الْمُعَلِّمُ يُعَلِّمُ الطُّلَّابَ",
        source: "Contoh kalimat",
        analisis: [
          { kata: "الْمُعَلِّمُ", wazan: "مُفَعِّلٌ", asal: "ع-ل-م", makna: "Guru — isim fa'il dari wazan فَعَّلَ (ta'lim/mengajarkan)" },
          { kata: "يُعَلِّمُ", wazan: "يُفَعِّلُ", asal: "ع-ل-م", makna: "Sedang mengajarkan — fi'il mudhari' dari wazan فَعَّلَ" },
          { kata: "الطُّلَّابَ", wazan: "فُعَّال (jama')", asal: "ط-ل-ب", makna: "Para pelajar — jama' taksir dari طَالِب" }
        ]
      }
    ]
  }

}; // end DATA_PENGANTAR
