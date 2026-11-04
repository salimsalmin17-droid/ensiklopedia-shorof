/* =====================================================
   TASHRIF ENGINE v3.0
   Mesin morfologi Arab otomatis — mengenali & men-generate
   tashrif fi'il: tsulatsi/ruba'i, mujarrad/mazid, shahih/mu'tal
   ===================================================== */
'use strict';

/* ─────────────────────────────────────────────────────
   KONSTANTA
   ───────────────────────────────────────────────────── */
const FATHA  = '\u064E'; // َ
const KASRA  = '\u0650'; // ِ
const DAMMA  = '\u064F'; // ُ
const SUKUN  = '\u0652'; // ْ
const SHADDA = '\u0651'; // ّ
const TANWIN_D = '\u064C'; // ٌ
const TANWIN_K = '\u064D'; // ٍ
const TANWIN_F = '\u064B'; // ً

const HURUF_ILLAH   = ['ا','و','ي','ى'];
const HURUF_HAMZAT  = ['ء','أ','إ','ؤ','ئ','آ'];

function isIllah(h)  { return HURUF_ILLAH.includes(h); }
function isHamzah(h) { return HURUF_HAMZAT.includes(h); }

/* ─────────────────────────────────────────────────────
   STRIPPING & ANALISIS HARAKAT
   ───────────────────────────────────────────────────── */
const DIAC_RE = /[\u064B-\u0652\u0670]/;

function stripDiac(s) {
  return (s || '').replace(/[\u064B-\u0652\u0670]/g, '');
}

/** Kembalikan array [{c, h}] dari string berharakat.
 *  c = huruf, h = harakat/tanda yang menempel pada huruf itu. */
function parseWord(word) {
  const result = [];
  let cur = null;
  for (const ch of (word || '')) {
    if (ch === '\u0640') continue;          // tatweel
    if (DIAC_RE.test(ch)) {
      if (cur) cur.h += ch;
    } else {
      if (cur) result.push(cur);
      cur = { c: ch, h: '' };
    }
  }
  if (cur) result.push(cur);
  return result;
}

/** Kerangka huruf konsonan. Syaddah dihitung sebagai huruf ganda.
 *  Contoh: مَدَّ → [م, د, د] ; عَلَّمَ → [ع, ل, ل, م] */
function skeleton(word) {
  const out = [];
  for (const ch of (word || '')) {
    if (ch === '\u0640') continue;
    if (DIAC_RE.test(ch)) {
      if (ch === SHADDA && out.length) out.push(out[out.length - 1]);
      continue;
    }
    out.push(ch);
  }
  return out;
}

/** Ambil harakat huruf ke-n (0-based) dari kata berharakat */
function getDiacAt(word, n) {
  const p = parseWord(word);
  return p[n] ? p[n].h : '';
}

/** Pilih satu harakat pokok dari string harakat */
function pickVowel(h, fallback) {
  h = h || '';
  if (h.includes(DAMMA)) return DAMMA;
  if (h.includes(KASRA)) return KASRA;
  if (h.includes(FATHA)) return FATHA;
  return fallback;
}

function defaultMud(bab) {
  if (bab === 2 || bab === 6) return KASRA;
  if (bab === 3 || bab === 4) return FATHA;
  return DAMMA;
}

/** Cari huruf 'illah asal (و/ي) di dalam mudhari' */
function cariIllahAsal(mudhari, fallback) {
  const sk = skeleton(mudhari || '');
  // lewati huruf mudhara'ah di awal
  for (let i = 1; i < sk.length; i++) {
    if (sk[i] === 'و') return 'و';
    if (sk[i] === 'ي') return 'ي';
  }
  return fallback;
}

/* ─────────────────────────────────────────────────────
   DETEKSI WAZAN & KLASIFIKASI
   ───────────────────────────────────────────────────── */

/**
 * Fungsi utama: analisis fi'il madhi → kembalikan info lengkap
 * @param {string} madhi   - fi'il madhi (boleh berharakat atau tidak)
 * @param {string} mudhari - opsional, untuk menentukan bab
 */
function analyzeFiil(madhi, mudhari) {
  const raw = (madhi || '').trim();
  if (!raw) return { valid: false, error: 'Masukkan fi\'il terlebih dahulu.' };

  const sk = skeleton(raw);
  const n  = sk.length;

  if (n < 3 || n > 8) {
    return { valid: false, error: `Panjang fi'il (${n} huruf) di luar rentang 3–8 huruf.` };
  }

  const parsed    = parseWord(raw);
  const hasShadda = parsed.some(p => p.h.includes(SHADDA));

  /* ── 3 huruf: Tsulatsi Mujarrad ── */
  if (n === 3) return analyzeTsulatsiMujarrad(raw, sk, parsed, mudhari);

  /* ── 4 huruf ── */
  if (n === 4) {
    // فَعَّلَ : ada tasydid pada 'ain (عَلَّمَ)
    if (hasShadda && sk[1] === sk[2]) {
      return makeInfo('فَعَّلَ', 'fa33ala', 'tsulatsi_mazid', 1, 'tasydid di \'ain',
        [sk[0], sk[1], sk[3]],
        'Ta\'diyah, taksir (berulang), ta\'rif, tasybih', raw, mudhari);
    }
    // أَفْعَلَ : diawali hamzah qath'
    if (isHamzah(sk[0])) {
      return makeInfo('أَفْعَلَ', 'if3al', 'tsulatsi_mazid', 1, 'أ',
        [sk[1], sk[2], sk[3]],
        'Ta\'diyah, masuk ke kondisi/waktu, menemukan sifat', raw, mudhari);
    }
    // فَاعَلَ : huruf kedua alif
    if (sk[1] === 'ا') {
      return makeInfo('فَاعَلَ', 'faa3ala', 'tsulatsi_mazid', 1, 'ا',
        [sk[0], sk[2], sk[3]],
        'Musyarakah (saling melakukan), mubalaghah', raw, mudhari);
    }
    // فَعْلَلَ : ruba'i mujarrad
    return makeInfo('فَعْلَلَ', 'fa3lala', 'rubai_mujarrad', 0, '-',
      [sk[0], sk[1], sk[2], sk[3]],
      'Fi\'il ruba\'i mujarrad (4 huruf asli)', raw, mudhari);
  }

  /* ── 5 huruf ── */
  if (n === 5) {
    // اِنْفَعَلَ
    if (sk[0] === 'ا' && sk[1] === 'ن') {
      return makeInfo('اِنْفَعَلَ', 'infa3al', 'tsulatsi_mazid', 2, 'ا،ن',
        [sk[2], sk[3], sk[4]], 'Mutawa\'ah dari فَعَلَ', raw, mudhari);
    }
    // اِفْتَعَلَ
    if (sk[0] === 'ا' && sk[2] === 'ت') {
      return makeInfo('اِفْتَعَلَ', 'ifta3al', 'tsulatsi_mazid', 2, 'ا،ت',
        [sk[1], sk[3], sk[4]],
        'Mutawa\'ah, ittikhadz untuk diri sendiri, musyarakah', raw, mudhari);
    }
    // اِفْعَلَّ (اِحْمَرَّ)
    if (sk[0] === 'ا' && sk[3] === sk[4]) {
      return makeInfo('اِفْعَلَّ', 'if3all', 'tsulatsi_mazid', 2, 'ا،tasydid',
        [sk[1], sk[2], sk[3]], 'Menyatakan warna atau cacat fisik', raw, mudhari);
    }
    // تَفَعَّلَ
    if (sk[0] === 'ت' && hasShadda && sk[2] === sk[3]) {
      return makeInfo('تَفَعَّلَ', 'tafa33al', 'tsulatsi_mazid', 2, 'ت،tasydid',
        [sk[1], sk[2], sk[4]],
        'Mutawa\'ah dari فَعَّلَ, tafakkur, takalluf', raw, mudhari);
    }
    // تَفَاعَلَ
    if (sk[0] === 'ت' && sk[2] === 'ا') {
      return makeInfo('تَفَاعَلَ', 'tafaa3al', 'tsulatsi_mazid', 2, 'ت،ا',
        [sk[1], sk[3], sk[4]],
        'Mutawa\'ah dari فَاعَلَ, musyarakah (saling melakukan)', raw, mudhari);
    }
    // تَفَعْلَلَ : ruba'i mazid (تَدَحْرَجَ)
    if (sk[0] === 'ت') {
      return makeInfo('تَفَعْلَلَ', 'tafa3lal', 'rubai_mazid', 1, 'ت',
        [sk[1], sk[2], sk[3], sk[4]], 'Mutawa\'ah dari فَعْلَلَ', raw, mudhari);
    }
  }

  /* ── 6 huruf ── */
  if (n === 6) {
    // اِسْتَفْعَلَ
    if (sk[0] === 'ا' && sk[1] === 'س' && sk[2] === 'ت') {
      return makeInfo('اِسْتَفْعَلَ', 'istaf3al', 'tsulatsi_mazid', 3, 'ا،س،ت',
        [sk[3], sk[4], sk[5]],
        'Thalab (meminta/mencari), ta\'ajjub, tahawwul', raw, mudhari);
    }
    // اِفْعَنْلَلَ
    if (sk[0] === 'ا' && sk[3] === 'ن') {
      return makeInfo('اِفْعَنْلَلَ', 'if3anlal', 'rubai_mazid', 2, 'ا،ن',
        [sk[1], sk[2], sk[4], sk[5]], 'Mutawa\'ah dari فَعْلَلَ', raw, mudhari);
    }
    // اِفْعَوَّلَ
    if (sk[0] === 'ا' && sk[3] === 'و' && sk[4] === 'و') {
      return makeInfo('اِفْعَوَّلَ', 'if3awwal', 'tsulatsi_mazid', 3, 'ا،و،و',
        [sk[1], sk[2], sk[5]], 'Mubalaghah dari فَعَلَ', raw, mudhari);
    }
    // تَفَاعَلَ dengan akar 4 huruf (تَدَارَكَ)
    if (sk[0] === 'ت' && sk[2] === 'ا') {
      return makeInfo('تَفَاعَلَ', 'tafaa3al', 'tsulatsi_mazid', 2, 'ت،ا',
        [sk[1], sk[3], sk[4]],
        'Mutawa\'ah dari فَاعَلَ, musyarakah (saling melakukan)', raw, mudhari);
    }
    // تَفَعَّلَ dengan akar 4 huruf
    if (sk[0] === 'ت' && hasShadda) {
      return makeInfo('تَفَعَّلَ', 'tafa33al', 'tsulatsi_mazid', 2, 'ت،tasydid',
        [sk[1], sk[2], sk[4]],
        'Mutawa\'ah dari فَعَّلَ, tafakkur, takalluf', raw, mudhari);
    }
  }

  return {
    valid: false,
    error: `Tidak dapat mengenali pola fi'il "${raw}". Periksa penulisan dan harakat.`
  };
}

function makeInfo(wazan, wazanKey, jenis, ziyadah, ziyadahHuruf, hurufAsli, makna, raw, mudhari) {
  return {
    valid: true,
    wazan, wazanKey, jenis, ziyadah, ziyadahHuruf,
    hurufAsli,
    jenisMutal: detectJenisMutal(hurufAsli),
    makna,
    raw,
    mudhari: mudhari || ''
  };
}

/**
 * Analisis tsulatsi mujarrad: tentukan bab & jenis mu'tal
 */
function analyzeTsulatsiMujarrad(raw, sk, parsed, mudhari) {
  const [fa, ain, lam] = sk;
  const jenisMutal = detectJenisMutal([fa, ain, lam]);

  const madhiAinRaw = parsed[1] ? parsed[1].h : '';
  let madhiAinHar = pickVowel(madhiAinRaw, null);

  let mudAinHar = null;
  if (mudhari) {
    const mp  = parseWord(mudhari);
    const idx = mp.length >= 4 ? 2 : 1;
    mudAinHar = pickVowel(mp[idx] ? mp[idx].h : '', null);
  }

  let bab = null, babLabel = '', wazanFull = '', assumed = false;

  if (madhiAinHar === null) {
    // Tidak ada harakat sama sekali → asumsikan Bab I agar mesin tetap jalan
    bab = 1;
    babLabel = 'Bab I (asumsi — harakat tidak terbaca)';
    wazanFull = 'فَعَلَ - يَفْعُلُ';
    madhiAinHar = FATHA;
    if (mudAinHar === null) mudAinHar = DAMMA;
    assumed = true;
  } else if (madhiAinHar === DAMMA) {
    bab = 5;
    babLabel = 'Bab V';
    wazanFull = 'فَعُلَ - يَفْعُلُ';
    mudAinHar = DAMMA;
  } else if (mudAinHar === null) {
    if (madhiAinHar === FATHA) {
      bab = 'ambig_fatha';
      babLabel = 'Bab I/II/III (fathah di madhi)';
      wazanFull = 'فَعَلَ - يَفْعُلُ/يَفْعِلُ/يَفْعَلُ';
    } else {
      bab = 'ambig_kasra';
      babLabel = 'Bab IV/VI (kasrah di madhi)';
      wazanFull = 'فَعِلَ - يَفْعَلُ/يَفْعِلُ';
    }
  } else if (madhiAinHar === FATHA) {
    if (mudAinHar === DAMMA)      { bab=1; babLabel='Bab I';   wazanFull='فَعَلَ - يَفْعُلُ'; }
    else if (mudAinHar === KASRA){ bab=2; babLabel='Bab II';  wazanFull='فَعَلَ - يَفْعِلُ'; }
    else                          { bab=3; babLabel='Bab III'; wazanFull='فَعَلَ - يَفْعَلُ'; }
  } else if (madhiAinHar === KASRA) {
    if (mudAinHar === KASRA) { bab=6; babLabel='Bab VI'; wazanFull='فَعِلَ - يَفْعِلُ'; }
    else                     { bab=4; babLabel='Bab IV'; wazanFull='فَعِلَ - يَفْعَلُ'; }
  }

  return {
    valid: true,
    wazan: wazanFull || 'فَعَلَ',
    wazanKey: 'tsulatsi_mujarrad',
    jenis: 'tsulatsi_mujarrad',
    jenisMutal,
    hurufAsli: [fa, ain, lam],
    ziyadah: 0,
    ziyadahHuruf: '-',
    bab,
    babLabel,
    assumed,
    madhiAinHar,
    mudAinHar,
    makna: 'Fi\'il tsulatsi mujarrad',
    raw,
    mudhari: mudhari || ''
  };
}

/** Deteksi jenis mu'tal dari array huruf asli */
function detectJenisMutal(root) {
  if (!root || root.length < 3) return 'shahih_salim';
  const [fa, ain, lam] = root;
  const faI  = isIllah(fa);
  const ainI = isIllah(ain);
  const lamI = isIllah(lam);
  const faH  = isHamzah(fa);
  const ainH = isHamzah(ain);
  const lamH = isHamzah(lam);
  const mudh = (ain === lam);

  if (mudh)         return 'shahih_mudhaaf';
  if (faI && lamI)  return 'mutal_lafif_mafruq';
  if (ainI && lamI) return 'mutal_lafif_maqrun';
  if (faI)          return 'mutal_mitsal';
  if (ainI)         return 'mutal_ajwaf';
  if (lamI)         return 'mutal_naqish';
  if (faH || ainH || lamH) return 'shahih_mahmuz';
  return 'shahih_salim';
}

/* ─────────────────────────────────────────────────────
   GENERATOR TASHRIF USHULI
   ───────────────────────────────────────────────────── */

function generateUshuli(info) {
  if (!info || !info.valid) return [];

  if (info.jenis === 'tsulatsi_mujarrad') return gen_TM_ushuli(info);
  if (info.jenis === 'tsulatsi_mazid')    return gen_TMZ_ushuli(info);
  if (info.jenis === 'rubai_mujarrad' || info.jenis === 'rubai_mazid') return gen_R_ushuli(info);
  return [];
}

/* ── Tsulatsi Mujarrad ── */
function gen_TM_ushuli(info) {
  const [f, a, l] = info.hurufAsli;
  const jm  = info.jenisMutal;
  const bab = typeof info.bab === 'number' ? info.bab : 1;

  const mHar = pickVowel(info.madhiAinHar,
    bab === 5 ? DAMMA : (bab === 4 || bab === 6 ? KASRA : FATHA));
  const dHar = pickVowel(info.mudAinHar, defaultMud(bab));

  if (jm === 'shahih_mudhaaf')          return genMudhaaf(f, a, dHar);
  if (jm === 'mutal_mitsal')            return genMitsal(f, a, l, mHar, dHar);
  if (jm === 'mutal_ajwaf')             return genAjwaf(f, a, l, info, dHar);
  if (jm === 'mutal_naqish')            return genNaqish(f, a, l, info, dHar);
  if (jm === 'mutal_lafif_mafruq')      return genLafifMafruq(f, a, l);
  if (jm === 'mutal_lafif_maqrun')      return genLafifMaqrun(f, a, l);

  return genSalim(f, a, l, bab, mHar, dHar);
}

/* ── Shahih Salim / Mahmuz ── */
function genSalim(f, a, l, bab, mHar, dHar) {
  const masdar = buildMasdar_TM(f, a, l, bab);
  const amrPfx = dHar === DAMMA ? 'اُ' : 'اِ';

  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${mHar}${l}${FATHA}`],
    ['Fi\'il Mudhari\' Ma\'lum', `يَ${f}${SUKUN}${a}${dHar}${l}${DAMMA}`],
    ['Masdar',                   masdar],
    ['Fi\'il Amr',               `${amrPfx}${f}${SUKUN}${a}${dHar}${l}${SUKUN}`],
    ['Fi\'il Nahyi',             `لَا تَ${f}${SUKUN}${a}${dHar}${l}${SUKUN}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${a}${KASRA}${l}${TANWIN_D}`],
    ['Isim Maf\'ul',             `مَ${f}${SUKUN}${a}${DAMMA}و${l}${TANWIN_D}`],
    ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${KASRA}${l}${FATHA}`],
    ['Fi\'il Mudhari\' Majhul',  `يُ${f}${SUKUN}${a}${FATHA}${l}${DAMMA}`],
    ['Isim Zaman / Makan',       `مَ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
    ['Isim Alat',                `مِ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
  ]);
}

/* ── Shahih Mudha'af ── */
function genMudhaaf(f, a, dHar) {
  const amrHar = dHar === DAMMA ? DAMMA : KASRA;

  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${SHADDA}${FATHA}`],
    ['Fi\'il Mudhari\' Ma\'lum', `يَ${f}${dHar}${a}${SHADDA}${DAMMA}`],
    ['Masdar',                   `${f}${FATHA}${a}${SHADDA}${TANWIN_D}`],
    ['Fi\'il Amr',               `${f}${amrHar}${a}${SHADDA}${FATHA}`],
    ['Fi\'il Nahyi',             `لَا تَ${f}${dHar}${a}${SHADDA}${FATHA}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${a}${SHADDA}${TANWIN_D}`],
    ['Isim Maf\'ul',             `مَ${f}${SUKUN}${a}${DAMMA}و${a}${TANWIN_D}`],
    ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${SHADDA}${FATHA}`],
    ['Fi\'il Mudhari\' Majhul',  `يُ${f}${FATHA}${a}${SHADDA}${DAMMA}`],
    ['Isim Zaman / Makan',       `مَ${f}${FATHA}${a}${SHADDA}${TANWIN_D}`],
    ['Isim Alat',                `مِ${f}${FATHA}${a}${SHADDA}${TANWIN_D}`],
  ]);
}

/* ── Mu'tal Mitsal (fa' = و / ي) ── */
function genMitsal(f, a, l, mHar, dHar) {
  const dropFa = (f === 'و');               // وعد → يعد (fa' gugur)
  const mudh   = dropFa
    ? `يَ${a}${dHar}${l}${DAMMA}`
    : `يَ${f}${SUKUN}${a}${dHar}${l}${DAMMA}`;
  const amrHar = dHar === DAMMA ? KASRA : dHar;
  const amr    = dropFa
    ? `${a}${amrHar}${l}${SUKUN}`
    : `اِ${f}${SUKUN}${a}${KASRA}${l}${SUKUN}`;

  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${mHar}${l}${FATHA}`],
    ['Fi\'il Mudhari\' Ma\'lum', mudh],
    ['Masdar',                   `${f}${FATHA}${a}${SUKUN}${l}${TANWIN_D}`],
    ['Fi\'il Amr',               amr],
    ['Fi\'il Nahyi',             dropFa ? `لَا تَ${a}${dHar}${l}${SUKUN}` : `لَا تَ${f}${SUKUN}${a}${dHar}${l}${SUKUN}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${a}${KASRA}${l}${TANWIN_D}`],
    ['Isim Maf\'ul',             `مَ${f}${SUKUN}${a}${DAMMA}و${l}${TANWIN_D}`],
    ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${KASRA}${l}${FATHA}`],
    ['Fi\'il Mudhari\' Majhul',  `يُ${f}${SUKUN}${a}${FATHA}${l}${DAMMA}`],
    ['Isim Zaman / Makan',       `مَ${f}${SUKUN}${a}${KASRA}${l}${TANWIN_D}`],
    ['Isim Alat',                `مِ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
  ]);
}

/* ── Mu'tal Ajwaf (ain = و / ي) ── */
function genAjwaf(f, a, l, info, dHar) {
  const ainAsal = cariIllahAsal(info.mudhari, a === 'ي' ? 'ي' : 'و');

  let mudh, amr, maf, majhulMadhi, majhulMudh, masdar;
  if (dHar === KASRA) {
    mudh = `يَ${f}${KASRA}ي${SUKUN}${l}${DAMMA}`;   // يبيع
    amr  = `${f}${KASRA}${l}${SUKUN}`;               // بع
    maf  = `مَ${f}${KASRA}ي${SUKUN}${l}${TANWIN_D}`; // مبيع
    masdar = `${f}${FATHA}${ainAsal}${SUKUN}${l}${TANWIN_D}`;
  } else if (dHar === FATHA) {
    mudh = `يَ${f}${FATHA}ا${l}${DAMMA}`;            // يخاف
    amr  = `${f}${FATHA}${l}${SUKUN}`;                // خف
    maf  = `مَ${f}${DAMMA}و${l}${TANWIN_D}`;
    masdar = `${f}${FATHA}${ainAsal}${SUKUN}${l}${TANWIN_D}`;
  } else {
    mudh = `يَ${f}${DAMMA}و${SUKUN}${l}${DAMMA}`;   // يقول
    amr  = `${f}${DAMMA}${l}${SUKUN}`;               // قل
    maf  = `مَ${f}${DAMMA}و${l}${TANWIN_D}`;         // مقول
    masdar = `${f}${FATHA}${ainAsal}${SUKUN}${l}${TANWIN_D}`;
  }

  majhulMadhi = `${f}${KASRA}ي${SUKUN}${l}${FATHA}`;  // قيل / بيع
  majhulMudh  = `يُ${f}${FATHA}ا${l}${DAMMA}`;        // يقال / يباع

  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}ا${l}${FATHA}`],
    ['Fi\'il Mudhari\' Ma\'lum', mudh],
    ['Masdar',                   masdar],
    ['Fi\'il Amr',               amr],
    ['Fi\'il Nahyi',             `لَا تَ${f}${dHar}${l}${SUKUN}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${'ئ'}${KASRA}${l}${TANWIN_D}`],
    ['Isim Maf\'ul',             maf],
    ['Fi\'il Madhi Majhul',      majhulMadhi],
    ['Fi\'il Mudhari\' Majhul',  majhulMudh],
    ['Isim Zaman / Makan',       `مَ${f}${FATHA}ا${l}${TANWIN_D}`],
    ['Isim Alat',                `مِ${f}${FATHA}ا${l}${TANWIN_D}`],
  ]);
}

/* ── Mu'tal Naqish (lam = و / ي) ── */
function genNaqish(f, a, l, info, dHar) {
  let lamAsal = (l === 'ى' || l === 'ي') ? 'ي' : 'و';
  if (info.mudhari) {
    const sk = skeleton(info.mudhari);
    const last = sk[sk.length - 1];
    if (last === 'و') lamAsal = 'و';
    else if (last === 'ي' || last === 'ى') lamAsal = 'ي';
  }
  const waw = lamAsal === 'و';

  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${FATHA}${waw ? 'ا' : 'ى'}`],
    ['Fi\'il Mudhari\' Ma\'lum', waw ? `يَ${f}${SUKUN}${a}${DAMMA}و${SUKUN}`
                                     : `يَ${f}${SUKUN}${a}${KASRA}ي${SUKUN}`],
    ['Masdar',                   waw ? `${f}${FATHA}${a}${SUKUN}و${TANWIN_F}ا`
                                     : `${f}${FATHA}${a}${SUKUN}ي${TANWIN_F}ا`],
    ['Fi\'il Amr',               waw ? `اُ${f}${SUKUN}${a}${DAMMA}`
                                     : `اِ${f}${SUKUN}${a}${KASRA}`],
    ['Fi\'il Nahyi',             `لَا تَ${f}${SUKUN}${a}${waw ? DAMMA : KASRA}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${a}${TANWIN_K}`],
    ['Isim Maf\'ul',             waw ? `مَ${f}${SUKUN}${a}${DAMMA}و${SHADDA}${TANWIN_D}`
                                     : `مَ${f}${SUKUN}${a}${KASRA}ي${SHADDA}${TANWIN_D}`],
    ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${KASRA}ي${FATHA}`],
    ['Fi\'il Mudhari\' Majhul',  `يُ${f}${SUKUN}${a}${FATHA}ى`],
    ['Isim Zaman / Makan',       `مَ${f}${SUKUN}${a}${TANWIN_F}ى`],
    ['Isim Alat',                `مِ${f}${SUKUN}${a}${TANWIN_F}ى`],
  ]);
}

/* ── Lafif Mafruq (fa' & lam illah) ── */
function genLafifMafruq(f, a, l) {
  const lamYa = (l === 'ى' || l === 'ي');
  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${FATHA}${lamYa ? 'ى' : 'ا'}`],
    ['Fi\'il Mudhari\' Ma\'lum', `يَ${a}${KASRA}ي${SUKUN}`],
    ['Masdar',                   `${f}${FATHA}${a}${FATHA}ا${'ء'}${TANWIN_D}`],
    ['Fi\'il Amr',               `${a}${KASRA}`],
    ['Fi\'il Nahyi',             `لَا تَ${a}${KASRA}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${a}${TANWIN_K}`],
    ['Isim Maf\'ul',             `مَ${f}${SUKUN}${a}${KASRA}ي${SHADDA}${TANWIN_D}`],
    ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${KASRA}ي${FATHA}`],
    ['Fi\'il Mudhari\' Majhul',  `يُ${f}${FATHA}ا${a}${FATHA}ى`],
    ['Isim Zaman / Makan',       `مَ${f}${SUKUN}${a}${TANWIN_F}ى`],
    ['Isim Alat',                `مِ${f}${SUKUN}${a}${TANWIN_F}ى`],
  ]);
}

/* ── Lafif Maqrun ('ain & lam illah) ── */
function genLafifMaqrun(f, a, l) {
  return finish([
    ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${FATHA}ى`],
    ['Fi\'il Mudhari\' Ma\'lum', `يَ${f}${SUKUN}${a}${KASRA}ي${SUKUN}`],
    ['Masdar',                   `${f}${KASRA}${a}${FATHA}ا${KASRA}ي${FATHA}ة${TANWIN_D}`],
    ['Fi\'il Amr',               `اِ${f}${SUKUN}${a}${KASRA}`],
    ['Fi\'il Nahyi',             `لَا تَ${f}${SUKUN}${a}${KASRA}`],
    ['Isim Fa\'il',              `${f}${FATHA}ا${a}${TANWIN_K}`],
    ['Isim Maf\'ul',             `مَ${f}${SUKUN}${a}${KASRA}ي${SHADDA}${TANWIN_D}`],
    ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${KASRA}ي${FATHA}`],
    ['Fi\'il Mudhari\' Majhul',  `يُ${f}${SUKUN}${a}${FATHA}ى`],
    ['Isim Zaman / Makan',       `مَ${f}${SUKUN}${a}${TANWIN_F}ى`],
    ['Isim Alat',                `مِ${f}${SUKUN}${a}${TANWIN_F}ى`],
  ]);
}

/* ── Tsulatsi Mazid ── */
function gen_TMZ_ushuli(info) {
  const [f, a, l] = info.hurufAsli;
  const key = info.wazanKey;

  const tpl = {
    'if3al': [
      ['Fi\'il Madhi Ma\'lum',     `أَ${f}${SUKUN}${a}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يُ${f}${SUKUN}${a}${KASRA}${l}${DAMMA}`],
      ['Masdar',                   `إِ${f}${SUKUN}${a}${FATHA}ا${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `أَ${f}${SUKUN}${a}${KASRA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تُ${f}${SUKUN}${a}${KASRA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُ${f}${SUKUN}${a}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `أُ${f}${SUKUN}${a}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُ${f}${SUKUN}${a}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'fa33ala': [
      ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${SHADDA}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يُ${f}${FATHA}${a}${SHADDA}${KASRA}${l}${DAMMA}`],
      ['Masdar',                   `تَ${f}${SUKUN}${a}${KASRA}ي${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `${f}${FATHA}${a}${SHADDA}${KASRA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تُ${f}${FATHA}${a}${SHADDA}${KASRA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُ${f}${FATHA}${a}${SHADDA}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${SHADDA}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'faa3ala': [
      ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}ا${a}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يُ${f}${FATHA}ا${a}${KASRA}${l}${DAMMA}`],
      ['Masdar',                   `${f}${KASRA}${a}${FATHA}ا${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `${f}${FATHA}ا${a}${KASRA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تُ${f}${FATHA}ا${a}${KASRA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُ${f}${FATHA}ا${a}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُ${f}${FATHA}ا${a}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `${f}${DAMMA}و${a}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُ${f}${FATHA}ا${a}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُ${f}${FATHA}ا${a}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'infa3al': [
      ['Fi\'il Madhi Ma\'lum',     `اِنْ${f}${FATHA}${a}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يَنْ${f}${FATHA}${a}${KASRA}${l}${DAMMA}`],
      ['Masdar',                   `اِنْ${f}${KASRA}${a}${FATHA}ا${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `اِنْ${f}${FATHA}${a}${KASRA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تَنْ${f}${FATHA}${a}${KASRA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُنْ${f}${FATHA}${a}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُنْ${f}${FATHA}${a}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `اُنْ${f}${DAMMA}${a}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُنْ${f}${FATHA}${a}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُنْ${f}${FATHA}${a}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'ifta3al': [
      ['Fi\'il Madhi Ma\'lum',     `اِ${f}${SUKUN}تَ${a}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يَ${f}${SUKUN}تَ${a}${KASRA}${l}${DAMMA}`],
      ['Masdar',                   `اِ${f}${SUKUN}تِ${a}${FATHA}ا${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `اِ${f}${SUKUN}تَ${a}${KASRA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تَ${f}${SUKUN}تَ${a}${KASRA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُ${f}${SUKUN}تَ${a}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُ${f}${SUKUN}تَ${a}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `اُ${f}${SUKUN}تُ${a}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُ${f}${SUKUN}تَ${a}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُ${f}${SUKUN}تَ${a}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'tafa33al': [
      ['Fi\'il Madhi Ma\'lum',     `تَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يَتَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${DAMMA}`],
      ['Masdar',                   `تَ${f}${FATHA}${a}${SHADDA}${DAMMA}${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `تَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تَتَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُتَ${f}${FATHA}${a}${SHADDA}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُتَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `تُ${f}${DAMMA}${a}${SHADDA}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُتَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُتَ${f}${FATHA}${a}${SHADDA}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'tafaa3al': [
      ['Fi\'il Madhi Ma\'lum',     `تَ${f}${FATHA}ا${a}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يَتَ${f}${FATHA}ا${a}${FATHA}${l}${DAMMA}`],
      ['Masdar',                   `تَ${f}${FATHA}ا${a}${DAMMA}${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `تَ${f}${FATHA}ا${a}${FATHA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تَتَ${f}${FATHA}ا${a}${FATHA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُتَ${f}${FATHA}ا${a}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُتَ${f}${FATHA}ا${a}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `تُ${f}${DAMMA}و${a}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُتَ${f}${FATHA}ا${a}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُتَ${f}${FATHA}ا${a}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
    'istaf3al': [
      ['Fi\'il Madhi Ma\'lum',     `اِسْتَ${f}${SUKUN}${a}${FATHA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يَسْتَ${f}${SUKUN}${a}${KASRA}${l}${DAMMA}`],
      ['Masdar',                   `اِسْتِ${f}${SUKUN}${a}${FATHA}ا${l}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `اِسْتَ${f}${SUKUN}${a}${KASRA}${l}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تَسْتَ${f}${SUKUN}${a}${KASRA}${l}${SUKUN}`],
      ['Isim Fa\'il',              `مُسْتَ${f}${SUKUN}${a}${KASRA}${l}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُسْتَ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `اُسْتُ${f}${SUKUN}${a}${KASRA}${l}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُسْتَ${f}${SUKUN}${a}${FATHA}${l}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُسْتَ${f}${SUKUN}${a}${FATHA}${l}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ],
  };

  return finish(tpl[key] || []);
}

/* ── Ruba'i ── */
function gen_R_ushuli(info) {
  const root = info.hurufAsli;
  const [f, a, l1, l2] = root.length >= 4 ? root : [...root, root[root.length - 1]];
  const key = info.wazanKey;
  let rows = [];

  if (key === 'fa3lala') {
    rows = [
      ['Fi\'il Madhi Ma\'lum',     `${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يُ${f}${FATHA}${a}${SUKUN}${l1}${KASRA}${l2}${DAMMA}`],
      ['Masdar',                   `${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${FATHA}ةً`],
      ['Fi\'il Amr',               `${f}${FATHA}${a}${SUKUN}${l1}${KASRA}${l2}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تُ${f}${FATHA}${a}${SUKUN}${l1}${KASRA}${l2}${SUKUN}`],
      ['Isim Fa\'il',              `مُ${f}${FATHA}${a}${SUKUN}${l1}${KASRA}${l2}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `${f}${DAMMA}${a}${SUKUN}${l1}${KASRA}${l2}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ];
  } else if (key === 'tafa3lal') {
    rows = [
      ['Fi\'il Madhi Ma\'lum',     `تَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${FATHA}`],
      ['Fi\'il Mudhari\' Ma\'lum', `يَتَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${DAMMA}`],
      ['Masdar',                   `تَ${f}${FATHA}${a}${SUKUN}${l1}${DAMMA}${l2}${TANWIN_F}ا`],
      ['Fi\'il Amr',               `تَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${SUKUN}`],
      ['Fi\'il Nahyi',             `لَا تَتَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${SUKUN}`],
      ['Isim Fa\'il',              `مُتَ${f}${FATHA}${a}${SUKUN}${l1}${KASRA}${l2}${TANWIN_D}`],
      ['Isim Maf\'ul',             `مُتَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${TANWIN_D}`],
      ['Fi\'il Madhi Majhul',      `تُ${f}${DAMMA}${a}${SUKUN}${l1}${KASRA}${l2}${FATHA}`],
      ['Fi\'il Mudhari\' Majhul',  `يُتَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${DAMMA}`],
      ['Isim Zaman / Makan',       `مُتَ${f}${FATHA}${a}${SUKUN}${l1}${FATHA}${l2}${TANWIN_D}`],
      ['Isim Alat',                '-'],
    ];
  }

  return finish(rows);
}

/** Ubah [label, arab] → objek lengkap dengan transliterasi */
function finish(rows) {
  return rows.map(([label, ar]) => ({ label, ar, latin: arabToLatin(ar) }));
}

/* ─────────────────────────────────────────────────────
   GENERATOR TASHRIF LUGHAWI
   (13 baris; urutan "lama" — UI akan menyusun ulang)
   ───────────────────────────────────────────────────── */

const ARTI_DHAMIR = [
  'dia (lk.)', 'dia (pr.)', 'keduanya (lk.)', 'keduanya (pr.)',
  'mereka (lk.)', 'mereka (pr.)', 'kamu (lk.)', 'kamu (pr.)',
  'kamu berdua', 'kamu semua (lk.)', 'kamu semua (pr.)',
  'saya', 'kami/kita'
];

function generateLughawi(info) {
  const ushuli = generateUshuli(info);
  if (!ushuli.length) return {};

  const madhi_ar = ushuli[0].ar;
  const mudh_ar  = ushuli[1].ar;
  const amr_ar   = ushuli[3].ar;
  const madhiMj  = ushuli[7].ar;
  const mudhMj   = ushuli[8].ar;

  return {
    madhi_malum:    genMadhi(madhi_ar, info),
    mudhari_malum:  genMudhari(mudh_ar),
    amr:            genAmr(amr_ar, info),
    madhi_majhul:   (madhiMj && madhiMj !== '-') ? genMadhi(madhiMj, info) : [],
    mudhari_majhul: (mudhMj  && mudhMj  !== '-') ? genMudhari(mudhMj) : [],
  };
}

/** Baris 13 dhamir (urutan lama: هو هي هما هما هم هن ...) */
function rows13(forms) {
  // forms = array 13 bentuk Arab, urut: هو, هي, هما(lk), هما(pr), هم, هن,
  //         أنتَ, أنتِ, أنتما, أنتم, أنتن, أنا, نحن
  const dh = ['هُوَ','هِيَ','هُمَا','هُمَا','هُمْ','هُنَّ',
              'أَنْتَ','أَنْتِ','أَنْتُمَا','أَنْتُمْ','أَنْتُنَّ','أَنَا','نَحْنُ'];
  return forms.map((ar, i) => [dh[i], ar, arabToLatin(ar), ARTI_DHAMIR[i]]);
}

/* ── Konjugasi Madhi ── */
function genMadhi(base, info) {
  // Ajwaf: madhi berisi alif/ya panjang di tengah (قَالَ / قِيْلَ)
  if (info && info.jenisMutal === 'mutal_ajwaf') {
    const p = parseWord(base);
    if (p.length === 3 && (p[1].c === 'ا' || p[1].c === 'ي')) {
      return genMadhiAjwaf(base, p, info);
    }
  }

  // Cek mudha'af: diakhiri huruf + syaddah
  const shaddaMatch = base.match(new RegExp('(.)' + SHADDA + '([\\u064B-\\u0652]?)$'));
  if (shaddaMatch) return genMadhiMudhaaf(base);

  // Ambil stem: buang harakat akhir
  const stem = base.replace(/[\u064B-\u0652]$/, '');
  const last = stem[stem.length - 1];

  // Naqish: berakhiran alif / alif maqsurah
  if (last === 'ا' || last === 'ى') return genMadhiNaqish(stem, last);

  const s = stem;
  const pp = parseWord(base);
  // Madhi majhul naqish: دُعِيَ → هُمْ دُعُوا (bukan دُعِيُوْا)
  let humForm = s + DAMMA + 'وْا';
  if (pp.length === 3 && pp[2].c === 'ي' && pp[0].h === DAMMA && pp[1].h === KASRA) {
    humForm = `${pp[0].c}${pp[0].h}${pp[1].c}${DAMMA}وْا`;
  }

  return rows13([
    base,
    s + FATHA + 'تْ',
    s + FATHA + 'ا',
    s + FATHA + 'تَا',
    humForm,
    s + SUKUN + 'نَ',
    s + SUKUN + 'تَ',
    s + SUKUN + 'تِ',
    s + SUKUN + 'تُمَا',
    s + SUKUN + 'تُمْ',
    s + SUKUN + 'تُنَّ',
    s + SUKUN + 'تُ',
    s + SUKUN + 'نَا',
  ]);
}

/* Mu'tal ajwaf: alif/ya panjang di tengah (قَالَ، بَاعَ، خَافَ، قِيْلَ) */
function genMadhiAjwaf(base, parsed, info) {
  const fa  = parsed[0].c;
  const mid = parsed[1].c;
  const lam = parsed[2].c;
  const majhul = (mid === 'ي');

  // Vokal fa' sebelum sukun: قال → قُلْ، باع/خاف → بِعْ/خِفْ
  let v = KASRA;
  if (!majhul && pickVowel(info.mudAinHar, DAMMA) === DAMMA) v = DAMMA;
  const shortStem = `${fa}${v}${lam}`;                 // قُل / بِع / خِف

  const stem = base.replace(/[\u064B-\u0652]$/, '');   // قَال / بَاع / خَاف / قِيْل

  return rows13([
    base,
    stem + FATHA + 'تْ',       // قَالَتْ
    stem + FATHA + 'ا',        // قَالَا
    stem + FATHA + 'تَا',      // قَالَتَا
    stem + DAMMA + 'وْا',      // قَالُوْا
    shortStem + SUKUN + 'نَ',  // قُلْنَ
    shortStem + SUKUN + 'تَ',  // قُلْتَ
    shortStem + SUKUN + 'تِ',  // قُلْتِ
    shortStem + SUKUN + 'تُمَا',
    shortStem + SUKUN + 'تُمْ',
    shortStem + SUKUN + 'تُنَّ',
    shortStem + SUKUN + 'تُ',
    shortStem + SUKUN + 'نَا',
  ]);
}

function genMadhiMudhaaf(base) {
  // contoh: مَدَّ
  const stem = base.replace(/[\u064B-\u0652]$/, '');      // مَدّ
  const root = stem.replace(new RegExp(SHADDA + '$'), ''); // مَد
  const c = root[root.length - 1];
  const pp = parseWord(base);
  const innerHar = (pp[0] && pp[0].h === DAMMA) ? KASRA : FATHA;
  const expanded = root + innerHar + c;                    // مَدَد / مُدِد

  return rows13([
    base,
    base + 'تْ',              // مَدَّتْ
    base + 'ا',               // مَدَّا
    base + 'تَا',             // مَدَّتَا
    stem + DAMMA + 'وْا',     // مَدُّوْا
    expanded + SUKUN + 'نَ',  // مَدَدْنَ
    expanded + SUKUN + 'تَ',
    expanded + SUKUN + 'تِ',
    expanded + SUKUN + 'تُمَا',
    expanded + SUKUN + 'تُمْ',
    expanded + SUKUN + 'تُنَّ',
    expanded + SUKUN + 'تُ',
    expanded + SUKUN + 'نَا',
  ]);
}

function genMadhiNaqish(stem, lastChar) {
  // stem contoh: دَعَا / رَمَى  → buang alif/ya di akhir
  const s = stem.slice(0, -1);   // دَعَ / رَمَ
  const illah = (lastChar === 'ى') ? 'ي' : 'و';

  const withIllah = (suffix) => s + illah + SUKUN + suffix;

  return rows13([
    stem,
    s + 'تْ',
    s + illah + FATHA + 'ا',
    s + 'تَا',
    s + 'وْا',
    withIllah('نَ'),
    withIllah('تَ'),
    withIllah('تِ'),
    withIllah('تُمَا'),
    withIllah('تُمْ'),
    withIllah('تُنَّ'),
    withIllah('تُ'),
    withIllah('نَا'),
  ]);
}

/* ── Konjugasi Mudhari' ── */
function genMudhari(base) {
  const parsed = parseWord(base);
  if (!parsed.length) return [];
  const prefixLetter = parsed[0].c;
  const prefixHar    = parsed[0].h || FATHA;

  let rest = base.slice(prefixLetter.length + parsed[0].h.length);
  // buang harakat akhir (dhamma/fatha)
  const finalHar = rest.match(/[\u064B-\u0652]$/) ? rest[rest.length - 1] : DAMMA;
  rest = rest.replace(/[\u064B-\u0652]$/, '');

  const p = prefixLetter;
  const p2 = p === 'ي' ? 'ت' : p;

  // Mudha'af: core diakhiri syaddah
  if (rest.includes(SHADDA) && new RegExp(SHADDA + '$').test(rest)) {
    return genMudhariMudhaaf(`${p}${prefixHar}${rest}${finalHar}`, rest, finalHar, p, prefixHar);
  }

  // Naqish: core berakhiran و / ي / ى
  const coreLast = rest[rest.length - 1];
  if (coreLast === 'و' || coreLast === 'ي' || coreLast === 'ى') {
    return genMudhariNaqish(p, prefixHar, rest, finalHar);
  }

  // Ajwaf dengan alif panjang: bentuk هن/أنتن memendekkan alif (يَقُالُ → يَقَلْنَ)
  const restHun = rest.replace(/ا(.)$/, '$1');

  return rows13([
    `${p}${prefixHar}${rest}${finalHar}`,
    `${p2}${prefixHar}${rest}${finalHar}`,
    `${p}${prefixHar}${rest}${FATHA}انِ`,
    `${p2}${prefixHar}${rest}${FATHA}انِ`,
    `${p}${prefixHar}${rest}${DAMMA}وْنَ`,
    `${p}${prefixHar}${restHun}${SUKUN}نَ`,
    `${p2}${prefixHar}${rest}${finalHar}`,
    `${p2}${prefixHar}${rest}${KASRA}يْنَ`,
    `${p2}${prefixHar}${rest}${FATHA}انِ`,
    `${p2}${prefixHar}${rest}${DAMMA}وْنَ`,
    `${p2}${prefixHar}${restHun}${SUKUN}نَ`,
    `أ${prefixHar}${rest}${finalHar}`,
    `ن${prefixHar}${rest}${finalHar}`,
  ]);
}

function genMudhariNaqish(p, prefixHar, core, finalHar) {
  const p2 = p === 'ي' ? 'ت' : p;
  const last = core[core.length - 1];

  if (last === 'و') {
    const femCore = core.replace(new RegExp(DAMMA + 'و$'), KASRA + 'ي');
    return rows13([
      `${p}${prefixHar}${core}${SUKUN}`,
      `${p2}${prefixHar}${core}${SUKUN}`,
      `${p}${prefixHar}${core}${FATHA}انِ`,
      `${p2}${prefixHar}${core}${FATHA}انِ`,
      `${p}${prefixHar}${core}${SUKUN}نَ`,
      `${p}${prefixHar}${core}${SUKUN}نَ`,
      `${p2}${prefixHar}${core}${SUKUN}`,
      `${p2}${prefixHar}${femCore}${SUKUN}نَ`,
      `${p2}${prefixHar}${core}${FATHA}انِ`,
      `${p2}${prefixHar}${core}${SUKUN}نَ`,
      `${p2}${prefixHar}${core}${SUKUN}نَ`,
      `أ${prefixHar}${core}${SUKUN}`,
      `ن${prefixHar}${core}${SUKUN}`,
    ]);
  }

  // ي / ى
  const isMaqsurah = /ى$/.test(core);
  if (isMaqsurah) {
    const dual  = core.replace(/ى$/, 'يَ') + 'انِ';
    const plural = core.replace(/ى$/, 'وْ') + 'نَ';
    const fem   = core.replace(/ى$/, 'يْ') + 'نَ';
    return rows13([
      `${p}${prefixHar}${core}`,
      `${p2}${prefixHar}${core}`,
      `${p}${prefixHar}${dual}`,
      `${p2}${prefixHar}${dual}`,
      `${p}${prefixHar}${plural}`,
      `${p}${prefixHar}${plural}`,
      `${p2}${prefixHar}${core}`,
      `${p2}${prefixHar}${fem}`,
      `${p2}${prefixHar}${dual}`,
      `${p2}${prefixHar}${plural}`,
      `${p2}${prefixHar}${plural}`,
      `أ${prefixHar}${core}`,
      `ن${prefixHar}${core}`,
    ]);
  }

  const yaCore = core;
  return rows13([
    `${p}${prefixHar}${yaCore}`,
    `${p2}${prefixHar}${yaCore}`,
    `${p}${prefixHar}${yaCore}${FATHA}انِ`,
    `${p2}${prefixHar}${yaCore}${FATHA}انِ`,
    `${p}${prefixHar}${yaCore}${SUKUN}نَ`,
    `${p}${prefixHar}${yaCore}${SUKUN}نَ`,
    `${p2}${prefixHar}${yaCore}`,
    `${p2}${prefixHar}${yaCore}${SUKUN}نَ`,
    `${p2}${prefixHar}${yaCore}${FATHA}انِ`,
    `${p2}${prefixHar}${yaCore}${SUKUN}نَ`,
    `${p2}${prefixHar}${yaCore}${SUKUN}نَ`,
    `أ${prefixHar}${yaCore}`,
    `ن${prefixHar}${yaCore}`,
  ]);
}

function genMudhariMudhaaf(full, rest, finalHar, p, prefixHar) {
  // full = يَمُدُّ ; rest = مُدُّ
  const parsed = parseWord(rest);
  if (parsed.length < 2) return [];
  const c1 = parsed[0];
  const c2 = parsed[1];
  const p2 = p === 'ي' ? 'ت' : p;
  const stem2 = `${c1.c}${SUKUN}${c2.c}${c1.h}${c2.c}`; // مْدُد

  return rows13([
    full,
    `${p2}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${finalHar}`,
    `${p}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${FATHA}انِ`,
    `${p2}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${FATHA}انِ`,
    `${p}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${finalHar}وْنَ`,
    `${p}${prefixHar}${stem2}${SUKUN}نَ`,
    `${p2}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${finalHar}`,
    `${p2}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${KASRA}يْنَ`,
    `${p2}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${FATHA}انِ`,
    `${p2}${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${finalHar}وْنَ`,
    `${p2}${prefixHar}${stem2}${SUKUN}نَ`,
    `أ${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${finalHar}`,
    `ن${prefixHar}${c1.c}${c1.h}${c2.c}${SHADDA}${finalHar}`,
  ]);
}

/* ── Konjugasi Amr (5 dhamir: mukhatab) ── */
function genAmr(base, info) {
  const parsed = parseWord(base);
  if (!parsed.length) return [];

  // Pisahkan prefix (hamzat wasl/qath' + harakatnya) dari inti fi'il
  const first = parsed[0];
  const hasPrefix = (first.c === 'ا' || first.c === 'أ' || first.c === 'إ');
  const prefix = hasPrefix ? first.c + (first.h || '') : '';
  const rest   = base.slice(prefix.length);

  const core   = rest.replace(/[\u064B-\u0652]$/, '');
  const coreNoHar = core.replace(/[\u064B-\u0652]+$/, '');
  const lastHar = base[base.length - 1];

  const mk = (arr) => arr.map((ar, i) => {
    const dh = ['أَنْتَ','أَنْتِ','أَنْتُمَا','أَنْتُمْ','أَنْتُنَّ'][i];
    const arti = ['kamu (lk.)','kamu (pr.)','kamu berdua','kamu semua (lk.)','kamu semua (pr.)'][i];
    return [dh, ar, arabToLatin(ar), arti];
  });

  // Amr ajwaf: قُلْ → قُولِيْ / بِعْ → بِيعِيْ / خَفْ → خَافِيْ
  if (info && info.jenisMutal === 'mutal_ajwaf' && !hasPrefix && parsed.length === 2) {
    const fa = parsed[0].c;
    const fh = pickVowel(parsed[0].h, FATHA);
    const lam = parsed[1].c;
    const long = fh === DAMMA ? 'و' : (fh === KASRA ? 'ي' : 'ا');
    const longStem = `${fa}${fh}${long}${lam}`;   // قُول / بِيع / خَاف
    return mk([
      base,
      `${longStem}${KASRA}يْ`,
      `${longStem}${FATHA}ا`,
      `${longStem}${DAMMA}وْا`,
      `${fa}${fh}${lam}${SUKUN}نَ`,
    ]);
  }

  // Amr naqish: berakhiran harakat dhamma (و) atau kasra (ي)
  if (lastHar === DAMMA) {
    return mk([
      base,
      `${prefix}${coreNoHar}${KASRA}يْ`,
      `${prefix}${coreNoHar}${DAMMA}وَا`,
      `${prefix}${coreNoHar}${DAMMA}وْا`,
      `${prefix}${coreNoHar}${DAMMA}وْنَ`,
    ]);
  }
  if (lastHar === KASRA) {
    return mk([
      base,
      `${prefix}${core}يْ`,
      `${prefix}${coreNoHar}${KASRA}يَا`,
      `${prefix}${coreNoHar}${DAMMA}وْا`,
      `${prefix}${coreNoHar}${KASRA}يْنَ`,
    ]);
  }

  let lastForm = `${prefix}${core}${SUKUN}نَ`;
  if (!hasPrefix && new RegExp(SHADDA + '$').test(core) && parsed.length >= 2) {
    const c1 = parsed[0];
    const c2 = parsed[1];
    const v = (info && info.mudAinHar === DAMMA) ? DAMMA : KASRA;
    lastForm = `ا${v}${c1.c}${SUKUN}${c2.c}${v}${c2.c}${SUKUN}نَ`;
  }

  return mk([
    base,
    `${prefix}${core}${KASRA}يْ`,
    `${prefix}${core}${FATHA}ا`,
    `${prefix}${core}${DAMMA}وْا`,
    lastForm,
  ]);
}

/* ─────────────────────────────────────────────────────
   BUILDER MASDAR
   ───────────────────────────────────────────────────── */
function buildMasdar_TM(f, a, l, bab) {
  if (bab === 5) return `${f}${FATHA}${a}${FATHA}ا${l}${FATHA}ة${TANWIN_F}`; // كَرَامَةً
  if (bab === 4 || bab === 6) return `${f}${KASRA}${a}${SUKUN}${l}${TANWIN_D}`; // عِلْمٌ
  return `${f}${FATHA}${a}${SUKUN}${l}${TANWIN_D}`; // نَصْرٌ
}

/* ─────────────────────────────────────────────────────
   TRANSLITERASI ARAB → LATIN (sederhana)
   ───────────────────────────────────────────────────── */

const LATIN_MAP = {
  'ا':'a','ب':'b','ت':'t','ث':'ts','ج':'j','ح':'h','خ':'kh','د':'d',
  'ذ':'dz','ر':'r','ز':'z','س':'s','ش':'sy','ص':'sh','ض':'dh','ط':'th',
  'ظ':'zh','ع':'\'','غ':'gh','ف':'f','ق':'q','ك':'k','ل':'l','م':'m',
  'ن':'n','ه':'h','و':'w','ي':'y','ء':'\'','أ':'a','إ':'i','ؤ':'w',
  'ئ':'y','آ':'aa','ة':'h','ى':'a',
};

const HAR_LATIN = {
  [FATHA]:'a', [KASRA]:'i', [DAMMA]:'u', [SUKUN]:'',
  [TANWIN_D]:'un', [TANWIN_K]:'in', [TANWIN_F]:'an',
};

function arabToLatin(str) {
  if (!str || str === '-') return str;
  let result = '';
  const parsed = parseWord(str);
  for (const { c, h } of parsed) {
    const base = LATIN_MAP[c] || c;
    if (h.includes(SHADDA)) {
      result += base + base;
      const rest = h.replace(SHADDA, '');
      for (const dh of rest) result += HAR_LATIN[dh] || '';
    } else {
      result += base;
      for (const dh of h) result += HAR_LATIN[dh] || '';
    }
  }
  return result;
}

/* ─────────────────────────────────────────────────────
   LABEL & DESKRIPSI UNTUK UI
   ───────────────────────────────────────────────────── */

const JENIS_LABEL = {
  'tsulatsi_mujarrad': 'Tsulatsi Mujarrad (ثلاثي مجرد)',
  'tsulatsi_mazid':    'Tsulatsi Mazid (ثلاثي مزيد)',
  'rubai_mujarrad':    'Ruba\'i Mujarrad (رباعي مجرد)',
  'rubai_mazid':       'Ruba\'i Mazid (رباعي مزيد)',
};

const MUTAL_LABEL = {
  'shahih_salim':        'Shahih Salim (صحيح سالم) — semua huruf asli, tidak ada illah/hamzah/mudha\'af',
  'shahih_mahmuz':       'Shahih Mahmuz (صحيح مهموز) — ada huruf hamzah di huruf aslinya',
  'shahih_mudhaaf':      'Shahih Mudha\'af (صحيح مضعّف) — \'ain dan lam fi\'il sama',
  'mutal_mitsal':        'Mu\'tal Mitsal (معتل مثال) — fa\' fi\'il berupa waw atau ya\'',
  'mutal_ajwaf':         'Mu\'tal Ajwaf (معتل أجوف) — \'ain fi\'il berupa huruf illah',
  'mutal_naqish':        'Mu\'tal Naqish (معتل ناقص) — lam fi\'il berupa huruf illah',
  'mutal_lafif_mafruq':  'Lafif Mafruq (لفيف مفروق) — fa\' dan lam fi\'il berupa huruf illah',
  'mutal_lafif_maqrun':  'Lafif Maqrun (لفيف مقرون) — \'ain dan lam fi\'il berupa huruf illah',
};

/* ─────────────────────────────────────────────────────
   EXPORT (dipakai oleh app.js)
   ───────────────────────────────────────────────────── */

const TashrifEngine = {
  analyze:         analyzeFiil,
  ushuli:          generateUshuli,
  lughawi:         generateLughawi,
  stripDiac,
  parseWord,
  skeleton,
  arabToLatin,
  JENIS_LABEL,
  MUTAL_LABEL,
  detectJenisMutal,
};
