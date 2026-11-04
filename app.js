/* =====================================================
   APP.JS — Navigasi, Rendering, Pencarian, Kalkulator
   ===================================================== */

/* ── State ── */
const APP_HISTORY_ID = 'ensiklopedia-shorof';
let currentPage = 'beranda';
let darkMode = false;
let appHistoryDepth = 0;

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  setupSearch();
  setupDarkMode();
  setupModal();
  setupMobileMenu();
  setupHistory();
  const initialPage = getPageFromHash() || 'beranda';
  navigateTo(initialPage, { history: 'replace' });
});

/* =====================================================
   NAVIGASI
   ===================================================== */
function setupNav() {
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    el.addEventListener('click', () => {
      const page = el.dataset.page;
      navigateTo(page);
      // tutup sidebar di mobile
      if (window.innerWidth < 1024) closeSidebar();
    });
  });
  document.querySelectorAll('.mobile-nav-item[data-page]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.page));
  });
}

function navigateTo(page, options = {}) {
  const historyMode = options.history || 'push';
  if (!isKnownPage(page)) page = 'beranda';

  const samePage = page === currentPage;
  currentPage = page;

  // update active state
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const activeEl = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (activeEl) {
    activeEl.classList.add('active');
    activeEl.scrollIntoView({ block: 'nearest' });
  }
  document.querySelectorAll('.mobile-nav-item[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  // render
  const content = document.getElementById('page-content');
  content.innerHTML = '';
  content.classList.remove('fade-in');
  void content.offsetWidth; // reflow
  content.classList.add('fade-in');
  renderPage(page, content);
  // topbar title
  document.getElementById('topbar-title').textContent = activeEl ? activeEl.textContent.trim() : page;
  window.scrollTo(0, 0);

  // Simpan halaman ke history browser agar tombol back HP kembali ke
  // halaman sebelumnya, bukan keluar dari aplikasi.
  if (historyMode === 'push' && !samePage) {
    const nextDepth = appHistoryDepth + 1;
    try {
      history.pushState({ app: APP_HISTORY_ID, page, depth: nextDepth }, '', '#' + page);
      appHistoryDepth = nextDepth;
    } catch (err) {
      // Abaikan jika browser membatasi History API (misalnya file://).
    }
  } else if (historyMode === 'replace') {
    try {
      history.replaceState({ app: APP_HISTORY_ID, page, depth: appHistoryDepth }, '', '#' + page);
    } catch (err) {
      // Abaikan jika browser membatasi History API (misalnya file://).
    }
  }

  updateBackButton();
}

function isKnownPage(page) {
  if (!page) return false;
  return Array.from(document.querySelectorAll('.nav-item[data-page]'))
    .some(el => el.dataset.page === page);
}

function getPageFromHash() {
  const raw = (window.location.hash || '').replace(/^#/, '');
  if (!raw) return '';
  try {
    const page = decodeURIComponent(raw);
    return isKnownPage(page) ? page : '';
  } catch (err) {
    return '';
  }
}

function setupHistory() {
  window.addEventListener('popstate', (event) => {
    const state = event.state;
    const page = (state && state.app === APP_HISTORY_ID && isKnownPage(state.page))
      ? state.page
      : (getPageFromHash() || 'beranda');

    appHistoryDepth = (state && state.app === APP_HISTORY_ID && Number.isInteger(state.depth))
      ? state.depth
      : 0;

    navigateTo(page, { history: 'none' });
  });
}

function updateBackButton() {
  const btn = document.getElementById('back-btn');
  if (!btn) return;
  const show = currentPage !== 'beranda';
  btn.classList.toggle('hidden', !show);
  btn.setAttribute('aria-hidden', show ? 'false' : 'true');
  btn.tabIndex = show ? 0 : -1;
}

function goBack() {
  if (appHistoryDepth > 0) {
    history.back();
    return;
  }
  navigateTo('beranda', { history: 'replace' });
}

/* =====================================================
   ROUTER
   ===================================================== */
function renderPage(page, container) {
  switch(page) {
    case 'beranda':         return renderBeranda(container);
    case 'pengertian':      return renderPengertian(container);
    case 'tujuan':          return renderTujuan(container);
    case 'istilah':         return renderIstilah(container);
    case 'pembagian-fiil':  return renderPembagianFiil(container);
    case 'tashrif-umum':    return renderTashrifUmum(container);
    case 'penerapan':       return renderPenerapan(container);
    case 'sejarah-latar':   return renderSejarahLatar(container);
    case 'sejarah-tokoh':   return renderSejarahTokoh(container);
    case 'sejarah-kitab':   return renderSejarahKitab(container);
    case 'sejarah-modern':  return renderSejarahModern(container);
    case 'nahwu-pengertian':return renderNahwuPengertian(container);
    case 'nahwu-kalam':     return renderNahwuKalam(container);
    case 'nahwu-irab':      return renderNahwuIrab(container);
    case 'nahwu-tanda':     return renderNahwuTanda(container);
    case 'nahwu-contoh':    return renderNahwuContoh(container);
    case 'tm-overview':     return renderTMOverview(container);
    case 'tm-bab1': case 'tm-bab2': case 'tm-bab3':
    case 'tm-bab4': case 'tm-bab5': case 'tm-bab6':
      return renderTMBab(page, container);
    case 'tmz-overview':    return renderTMZOverview(container);
    case 'tmz-if3al':       return renderMazid('if3al', container);
    case 'tmz-faala':       return renderMazid('faala', container);
    case 'tmz-faaala':      return renderMazid('faaala', container);
    case 'tmz-infa3al':     return renderMazid('infa3al', container);
    case 'tmz-ifta3al':     return renderMazid('ifta3al', container);
    case 'tmz-tafa3al':     return renderMazid('tafa3al', container);
    case 'tmz-tafaaal':     return renderMazid('tafaaal', container);
    case 'tmz-istaf3al':    return renderMazid('istaf3al', container);
    case 'tmz-ifaal':       return renderMazid('if3alla', container);
    case 'tmz-if3awal':     return renderMazid('if3awal', container);
    case 'tmz-if3awwal':    return renderMazid('if3awwal', container);
    case 'tmz-if3aal':      return renderMazid('if3aal', container);
    case 'rm-overview':     return renderRMOverview(container);
    case 'rm-mujarrad':     return renderRubai('mujarrad', container);
    case 'rm-tafa3lal':     return renderRubai('tafa3lal', container);
    case 'rm-if3anlal':     return renderRubai('if3anlal', container);
    case 'rm-if3alal':      return renderRubai('if3alal', container);
    case 'mesin-tashrif':   return renderMesinTashrif(container);
    case 'kalkulator':      return renderKalkulator(container);
    case 'pencarian':       return renderPencarian(container);
    case 'kuis':            return renderKuis(container);
    case 'referensi':       return renderReferensi(container);
    default:
      container.innerHTML = `<div class="card"><p>Halaman tidak ditemukan.</p></div>`;
  }
}

/* =====================================================
   BERANDA
   ===================================================== */
function renderBeranda(c) {
  c.innerHTML = `
  <div class="hero">
    <span class="hero-ar">عِلْمُ الصَّرْف</span>
    <h1>Ensiklopedia Shorof</h1>
    <p>Belajar ilmu tashrif secara lengkap, sistematis, dan mudah dipahami — dari pengantar hingga seluruh wazan fi'il.</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button class="btn btn-accent" onclick="navigateTo('pengertian')">Mulai Belajar</button>
      <button class="btn btn-outline" onclick="navigateTo('kuis')">Kuis &amp; Latihan</button>
    </div>
  </div>

  <div class="stat-grid">
    <div class="stat-card" onclick="navigateTo('tm-overview')">
      <div class="stat-num">6</div>
      <div class="stat-label">Bab Tsulatsi Mujarrad</div>
    </div>
    <div class="stat-card" onclick="navigateTo('tmz-overview')">
      <div class="stat-num">12</div>
      <div class="stat-label">Wazan Tsulatsi Mazid</div>
    </div>
    <div class="stat-card" onclick="navigateTo('rm-overview')">
      <div class="stat-num">4</div>
      <div class="stat-label">Wazan Ruba'i</div>
    </div>
    <div class="stat-card" onclick="navigateTo('sejarah-tokoh')">
      <div class="stat-num">10+</div>
      <div class="stat-label">Tokoh Ulama Bahasa</div>
    </div>
    <div class="stat-card" onclick="navigateTo('kuis')">
      <div class="stat-num">60+</div>
      <div class="stat-label">Soal Kuis</div>
    </div>
    <div class="stat-card" onclick="navigateTo('referensi')">
      <div class="stat-num">10</div>
      <div class="stat-label">Kitab Referensi</div>
    </div>
  </div>

  <h3 style="margin-bottom:14px;color:var(--text-muted);font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;">Jelajahi Materi</h3>
  <div class="quick-nav">
    <div class="qnav-card" onclick="navigateTo('pengertian')">
      <span class="qnav-icon">P</span>
      <span class="qnav-title">Pengantar Shorof</span>
      <span class="qnav-sub">Definisi, tujuan, istilah dasar</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('sejarah-latar')">
      <span class="qnav-icon">S</span>
      <span class="qnav-title">Sejarah Ilmu Bahasa</span>
      <span class="qnav-sub">Tokoh, kitab, perkembangan</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('nahwu-pengertian')">
      <span class="qnav-icon">N</span>
      <span class="qnav-title">Pengenalan Nahwu</span>
      <span class="qnav-sub">Isim, fi'il, huruf, i'rab</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('tm-overview')">
      <span class="qnav-icon">T</span>
      <span class="qnav-title">Tsulatsi Mujarrad</span>
      <span class="qnav-sub">6 bab dengan tashrif lengkap</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('tmz-overview')">
      <span class="qnav-icon">M</span>
      <span class="qnav-title">Tsulatsi Mazid</span>
      <span class="qnav-sub">12 wazan + contoh fi'il nyata</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('rm-overview')">
      <span class="qnav-icon">R</span>
      <span class="qnav-title">Ruba'i Mujarrad &amp; Mazid</span>
      <span class="qnav-sub">دَحْرَجَ dan derivasinya</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('kalkulator')">
      <span class="qnav-icon">K</span>
      <span class="qnav-title">Kalkulator Tashrif</span>
      <span class="qnav-sub">Input fi'il, lihat seluruh tashrif</span>
    </div>
    <div class="qnav-card" onclick="navigateTo('kuis')">
      <span class="qnav-icon">L</span>
      <span class="qnav-title">Kuis &amp; Latihan</span>
      <span class="qnav-sub">Uji pemahaman dengan soal interaktif</span>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Cara Menggunakan Aplikasi</div>
    <ul style="padding-left:18px;line-height:2.2;font-size:.88rem;color:var(--text-muted);">
      <li>Gunakan <strong>menu sidebar</strong> (kiri) untuk navigasi antar halaman.</li>
      <li>Klik kartu fi'il untuk melihat <strong>tabel tashrif lengkap</strong> (lughawi).</li>
      <li>Gunakan <strong>Kalkulator Tashrif</strong> untuk melihat tashrif fi'il pilihan Anda.</li>
      <li>Gunakan <strong>tombol pencarian</strong> di topbar untuk mencari fi'il atau materi.</li>
      <li>Gunakan <strong>tombol mode gelap</strong> di topbar untuk beralih tema.</li>
      <li>Di HP, tekan <strong>tombol menu</strong> di kiri atas untuk membuka navigasi.</li>
    </ul>
  </div>`;
}

/* =====================================================
   HALAMAN PENGANTAR (generic renderer)
   ===================================================== */
function renderPengertian(c) { renderGenericPage(DATA_PENGANTAR.pengertian, c); }
function renderTujuan(c) { renderTujuanPage(c); }
function renderIstilah(c) { renderIstilahPage(c); }
function renderPembagianFiil(c) { renderPembagianFiilPage(c); }
function renderTashrifUmum(c) { renderTashrifUmumPage(c); }
function renderPenerapan(c) { renderPenerapanPage(c); }
function renderSejarahLatar(c) { renderSejarahLatarPage(c); }
function renderSejarahTokoh(c) { renderSejarahTokohPage(c); }
function renderSejarahKitab(c) { renderSejarahKitabPage(c); }
function renderSejarahModern(c) { renderSejarahModernPage(c); }
function renderNahwuPengertian(c) { renderNahwuPengertianPage(c); }
function renderNahwuKalam(c) { renderNahwuKalamPage(c); }
function renderNahwuIrab(c) { renderNahwuIrabPage(c); }
function renderNahwuTanda(c) { renderNahwuTandaPage(c); }
function renderNahwuContoh(c) { renderNahwuContohPage(c); }

/* =====================================================
   HELPERS: Render blok konten generik
   ===================================================== */
function renderGenericPage(data, c) {
  let html = `<div class="page-header">
    ${data.titleAr ? `<span class="ar-title">${data.titleAr}</span>` : ''}
    <h1>${data.title}</h1>
    ${data.subtitle ? `<p class="subtitle">${data.subtitle}</p>` : ''}
  </div>`;
  (data.content || []).forEach(block => {
    html += renderBlock(block);
  });
  c.innerHTML = html;
}

function renderBlock(block) {
  switch(block.type) {
    case 'alert':
      return `<div class="alert alert-${block.variant}">${block.text}</div>`;
    case 'section':
      return `<div class="card"><div class="card-title">${block.title}</div>${block.body}</div>`;
    case 'kaidah':
      return `<div class="kaidah">
        <div class="kaidah-label">${block.label}</div>
        <div class="kaidah-ar">${block.ar}</div>
        ${block.id ? `<div class="kaidah-id">${block.id}</div>` : ''}
      </div>`;
    case 'compare':
      return renderCompareTable(block);
    case 'two-col':
      return renderTwoCol(block);
    case 'example':
      return renderIstilahiExample(block);
    case 'cards':
      return renderInfoCards(block);
    case 'three-cards':
      return renderThreeCards(block);
    case 'irab-table':
      return renderIrabTable(block);
    default:
      return '';
  }
}

function renderCompareTable(block) {
  const headers = block.headers.map(h => `<th>${h}</th>`).join('');
  const rows = block.rows.map(row =>
    `<tr>${row.map((cell,i) => i===0 ? `<td>${cell}</td>` : `<td>${cell}</td>`).join('')}</tr>`
  ).join('');
  return `<div class="card"><div class="card-title">${block.title}</div>
    <div class="tashrif-wrapper">
      <table class="compare-table">
        <thead><tr>${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div></div>`;
}

function renderTwoCol(block) {
  return `<div class="grid-2">${block.cols.map(col => `
    <div class="card">
      <div class="card-title">${col.title}</div>
      ${col.titleAr ? `<div class="ar" style="font-size:1.1rem;margin-bottom:8px;direction:rtl;">${col.titleAr}</div>` : ''}
      <p style="font-size:.87rem;color:var(--text-muted);margin-bottom:12px;">${col.desc}</p>
      <ul style="padding-left:18px;line-height:2.2;font-size:.85rem;">
        ${col.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>`).join('')}</div>`;
}

function renderIstilahiExample(block) {
  const rows = block.rows.map(r =>
    `<tr><td style="font-size:.85rem;">${r[0]}</td>
     <td class="col-bentuk">${r[1]}</td>
     <td style="font-size:.82rem;">${r[2]}</td></tr>`
  ).join('');
  return `<div class="card">
    <div class="card-title">Contoh: Tashrif Istilahi <span class="ar ar-sm">${block.ar}</span> — ${block.arti}</div>
    <div class="tashrif-wrapper">
      <table class="tashrif-table">
        <thead><tr><th>Bentuk</th><th>Arab</th><th>Arti</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div></div>`;
}

function renderInfoCards(block) {
  return `<div class="fiil-grid">${block.items.map(item =>
    `<div class="card" style="margin-bottom:0;">
      <div class="card-title" style="font-size:.9rem;">${item.title}</div>
      <p style="font-size:.82rem;color:var(--text-muted);">${item.body}</p>
    </div>`
  ).join('')}</div>`;
}

function renderThreeCards(block) {
  return `<div class="grid-3">${block.items.map(item => `
    <div class="card">
      <div class="card-title">${item.title}</div>
      <div class="badge badge-accent" style="margin-bottom:10px;">${item.subtitle}</div>
      <p style="font-size:.83rem;color:var(--text-muted);margin-bottom:10px;">${item.desc}</p>
      <div style="margin-bottom:8px;font-size:.78rem;font-weight:600;color:var(--primary);">Tanda-tanda:</div>
      <ul style="padding-left:16px;font-size:.8rem;line-height:2;color:var(--text-muted);">
        ${item.tanda.map(t=>`<li>${t}</li>`).join('')}
      </ul>
      <div style="margin-top:10px;font-size:.78rem;font-weight:600;color:var(--primary);">Contoh:</div>
      <div style="margin-top:4px;font-family:var(--font-arabic);font-size:1rem;direction:rtl;line-height:2.2;color:var(--primary-dark);">
        ${item.contoh.join(' &nbsp;·&nbsp; ')}
      </div>
    </div>`).join('')}</div>`;
}

function renderIrabTable(block) {
  const rows = block.rows.map(r => `
    <tr>
      <td class="col-bentuk" style="font-size:1.1rem;">${r.irab}</td>
      <td class="col-bentuk">${r.asli}</td>
      <td class="col-bentuk" style="font-size:.95rem;">${r.asliEx}</td>
      <td style="font-size:.8rem;white-space:pre-line;">${r.niyabah}</td>
    </tr>`).join('');
  return `<div class="card">
    <div class="card-title">Tabel Tanda-tanda I'rab</div>
    <div class="tashrif-wrapper">
      <table class="tashrif-table">
        <thead><tr><th>I'rab</th><th>Tanda Asli</th><th>Contoh</th><th>Tanda Pengganti</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div></div>`;
}

/* =====================================================
   HALAMAN SPESIFIK — PENGANTAR
   ===================================================== */
function renderTujuanPage(c) {
  const d = DATA_PENGANTAR.tujuan;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  html += `<div class="kaidah"><div class="kaidah-label">Tujuan Pokok</div>
    <div class="kaidah-ar">صَوْنُ الْقَلَمِ وَاللِّسَانِ عَنِ الْخَطَأِ فِيْ أَبْنِيَةِ الْكَلِمَاتِ</div>
    <div class="kaidah-id">"Menjaga pena dan lisan dari kesalahan dalam pembentukan kata-kata"</div>
  </div>`;
  html += `<div class="fiil-grid">` + d.content[1].items.map(item =>
    `<div class="card" style="margin-bottom:0;">
      <div class="card-title" style="font-size:.9rem;">${item.title}</div>
      <p style="font-size:.82rem;color:var(--text-muted);">${item.body}</p>
    </div>`
  ).join('') + `</div>`;
  c.innerHTML = html;
}

function renderIstilahPage(c) {
  const d = DATA_PENGANTAR.istilah;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  html += d.terms.map(t => `
    <div class="card">
      <div style="display:flex;align-items:flex-start;gap:16px;flex-wrap:wrap;">
        <div style="text-align:center;min-width:120px;">
          <div class="ar" style="font-size:1.5rem;color:var(--primary);">${t.ar}</div>
          <div class="badge badge-muted" style="margin-top:4px;">${t.latin}</div>
        </div>
        <div style="flex:1;min-width:200px;">
          <p style="font-size:.88rem;margin-bottom:6px;">${t.def}</p>
          ${t.note ? `<div class="alert alert-info" style="font-size:.8rem;margin:0;">${t.note}</div>` : ''}
        </div>
      </div>
    </div>`).join('');
  c.innerHTML = html;
}

function renderPembagianFiilPage(c) {
  const d = DATA_PENGANTAR.pembagianFiil;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.sections.forEach(sec => {
    html += `<div class="card"><div class="card-title">${sec.title}</div>
      <div class="tashrif-wrapper"><table class="tashrif-table">
        <thead><tr><th>Jenis</th><th>Contoh Arab</th><th>Keterangan</th></tr></thead>
        <tbody>${sec.items.map(item =>
          `<tr><td style="font-weight:600;">${item.label}</td>
           <td class="col-bentuk">${item.ar}</td>
           <td style="font-size:.82rem;">${item.desc}</td></tr>`
        ).join('')}</tbody>
      </table></div></div>`;
  });
  c.innerHTML = html;
}

function renderTashrifUmumPage(c) {
  const d = DATA_PENGANTAR.tashrifUmum;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  html += renderBlock(d.content[0]); // two-col
  html += renderBlock(d.content[1]); // example table
  c.innerHTML = html;
}

function renderPenerapanPage(c) {
  const d = DATA_PENGANTAR.penerapan;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.examples.forEach(ex => {
    html += `<div class="card">
      <div class="ar" style="font-size:1.6rem;text-align:center;margin-bottom:4px;">${ex.ar}</div>
      ${ex.source ? `<div style="text-align:center;font-size:.75rem;color:var(--accent);margin-bottom:12px;">${ex.source}</div>` : ''}
      <div class="tashrif-wrapper"><table class="tashrif-table">
        <thead><tr><th>Kata</th><th>Wazan / Bentuk</th><th>Asal (Root)</th><th>Makna &amp; Keterangan</th></tr></thead>
        <tbody>${ex.analisis.map(a =>
          `<tr><td class="col-bentuk">${a.kata}</td>
           <td class="col-bentuk" style="font-size:.9rem;">${a.wazan}</td>
           <td class="col-bentuk" style="font-size:.85rem;">${a.asal}</td>
           <td style="font-size:.82rem;">${a.makna}</td></tr>`
        ).join('')}</tbody>
      </table></div>
    </div>`;
  });
  c.innerHTML = html;
}

/* =====================================================
   SEJARAH
   ===================================================== */
function renderSejarahLatarPage(c) {
  const d = DATA_PENGANTAR.sejarahLatar;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.content.forEach(block => { html += renderBlock(block); });
  c.innerHTML = html;
}

function renderSejarahTokohPage(c) {
  const d = DATA_PENGANTAR.sejarahTokoh;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  html += '<div class="timeline">';
  d.tokoh.forEach((t,i) => {
    html += `<div class="tl-item">
      <div class="tl-dot">${i+1}</div>
      <div class="tl-content">
        <div class="tl-year">${t.wafat}</div>
        <div class="tl-title">${t.nama} <span class="ar ar-sm" style="font-size:.9rem;">— ${t.ar}</span></div>
        <div class="tl-body">${t.peran}</div>
        <div style="margin-top:6px;font-size:.75rem;color:var(--accent);">Ref: ${t.ref}</div>
      </div>
    </div>`;
  });
  html += '</div>';
  c.innerHTML = html;
}

function renderSejarahKitabPage(c) {
  const d = DATA_PENGANTAR.sejarahKitab;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.kitab.forEach((k,i) => {
    html += `<div class="ref-card">
      <div class="ref-num">${i+1}</div>
      <div class="ref-body">
        <h4><span class="ar ar-sm">${k.judul}</span> &nbsp;<span class="badge badge-${k.kategori.includes('Shorof') ? 'primary' : 'accent'}">${k.kategori}</span></h4>
        <p><strong>Penulis:</strong> ${k.penulis}</p>
        <p style="margin-top:4px;">${k.isi}</p>
      </div>
    </div>`;
  });
  c.innerHTML = html;
}

function renderSejarahModernPage(c) {
  const d = DATA_PENGANTAR.sejarahModern;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  html += '<div class="timeline">';
  d.timeline.forEach((t,i) => {
    html += `<div class="tl-item">
      <div class="tl-dot" style="font-size:.6rem;width:48px;height:48px;">${i+1}</div>
      <div class="tl-content">
        <div class="tl-year">${t.year}</div>
        <div class="tl-title">${t.title}</div>
        <div class="tl-body">${t.body}</div>
      </div>
    </div>`;
  });
  html += '</div>';
  c.innerHTML = html;
}

/* =====================================================
   NAHWU
   ===================================================== */
function renderNahwuPengertianPage(c) {
  const d = DATA_PENGANTAR.nahwuPengertian;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.content.forEach(block => { html += renderBlock(block); });
  c.innerHTML = html;
}

function renderNahwuKalamPage(c) {
  const d = DATA_PENGANTAR.nahwuKalam;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  html += renderBlock(d.content[0]); // kaidah
  html += renderBlock(d.content[1]); // three-cards
  c.innerHTML = html;
}

function renderNahwuIrabPage(c) {
  const d = DATA_PENGANTAR.nahwuIrab;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.content.forEach(block => { html += renderBlock(block); });
  c.innerHTML = html;
}

function renderNahwuTandaPage(c) {
  const d = DATA_PENGANTAR.nahwuTanda;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.content.forEach(block => { html += renderBlock(block); });
  c.innerHTML = html;
}

function renderNahwuContohPage(c) {
  const d = DATA_PENGANTAR.nahwuContoh;
  let html = pageHeader(d.titleAr, d.title, d.subtitle);
  d.examples.forEach(ex => {
    html += `<div class="card">
      <div class="ar" style="font-size:1.8rem;text-align:center;margin-bottom:6px;">${ex.ar}</div>
      <div style="text-align:center;font-size:.88rem;color:var(--text-muted);margin-bottom:14px;font-style:italic;">"${ex.trans}"</div>
      <div class="tashrif-wrapper"><table class="tashrif-table">
        <thead><tr><th>Kata</th><th>Kedudukan (I'rab)</th><th>Keterangan</th></tr></thead>
        <tbody>${ex.analisis.map(a =>
          `<tr><td class="col-bentuk">${a.kata}</td>
           <td style="font-size:.85rem;font-weight:600;">${a.kedudukan}</td>
           <td style="font-size:.82rem;">${a.irab}</td></tr>`
        ).join('')}</tbody>
      </table></div>
    </div>`;
  });
  c.innerHTML = html;
}

/* =====================================================
   TSULATSI MUJARRAD
   ===================================================== */
function renderTMOverview(c) {
  const d = TSULATSI_MUJARRAD.overview;
  let html = pageHeader('الْفِعْلُ الثُّلَاثِيُّ الْمُجَرَّد', d.title, d.desc);
  html += `<div class="alert alert-success">${d.kaidah}</div>`;
  html += `<div class="tashrif-wrapper"><table class="tashrif-table">
    <thead><tr><th>Bab</th><th>Wazan</th><th>Harakat 'Ain</th><th>Contoh</th><th>Arti</th><th>Aksi</th></tr></thead>
    <tbody>${d.bab.map(b =>
      `<tr>
        <td style="font-weight:700;color:var(--primary);">${b.num}</td>
        <td class="col-bentuk">${b.wazan}</td>
        <td><span class="badge badge-muted">${b.harakat}</span></td>
        <td class="col-bentuk">${b.contoh}</td>
        <td style="font-size:.82rem;">${b.arti}</td>
        <td><button class="btn btn-primary btn-sm" onclick="navigateTo('tm-bab${b.num}')">Buka →</button></td>
      </tr>`
    ).join('')}</tbody>
  </table></div>`;
  c.innerHTML = html;
}

function renderTMBab(page, c) {
  const babKey = page.replace('tm-', ''); // bab1 .. bab6
  const d = TSULATSI_MUJARRAD[babKey];
  if (!d) { c.innerHTML = '<div class="card">Data tidak ditemukan.</div>'; return; }

  let html = pageHeader('', `Bab ${d.num}: ${d.wazan}`, d.penjelasan);
  html += `<div class="wazan-box">
    <div class="wazan-ar">${d.wazan}</div>
    <div class="wazan-id">Harakat 'ain: ${d.harakat}</div>
  </div>`;

  // Tashrif Istilahi
  html += `<div class="card">
    <div class="card-title">Tashrif Istilahi — <span class="ar ar-sm">${d.utama.ar}</span> (${d.utama.arti})</div>
    <div class="tashrif-wrapper"><table class="tashrif-table">
      <thead><tr><th>Bentuk</th><th>Arab</th><th>Arti</th></tr></thead>
      <tbody>${d.tashrif.ushuli.map(u =>
        `<tr><td style="font-size:.85rem;">${u.label}</td>
         <td class="col-bentuk">${u.ar}</td>
         <td style="font-size:.82rem;">${u.arti}</td></tr>`
      ).join('')}</tbody>
    </table></div>
  </div>`;

  // Contoh Fi'il
  html += `<div class="card"><div class="card-title">Contoh Fi'il dalam Bab Ini</div>
    <div class="fiil-grid">${d.contohFiil.map(f =>
      `<div class="fiil-card" onclick="openTashrifModal('${f.ar.split(' ')[0]}','${f.arti}')">
        <div class="fiil-ar">${f.ar}</div>
        <div class="fiil-arti">${f.arti}</div>
        <div class="fiil-badge">${f.root}</div>
      </div>`
    ).join('')}</div>
  </div>`;

  // Tashrif Lughawi — tabs
  html += renderLughawiTabs(d.tashrif.lughawi, d.utama.ar, d.utama.arti);
  c.innerHTML = html;
}

/* =====================================================
   TSULATSI MAZID
   ===================================================== */
function renderTMZOverview(c) {
  const d = TSULATSI_MAZID.overview;
  let html = pageHeader('الْفِعْلُ الثُّلَاثِيُّ الْمَزِيْد', d.title, d.desc);
  d.kelompok.forEach(k => {
    html += `<div class="card"><div class="card-title">Mazid ${k.num}</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${k.wazanList.map(w =>
          `<span class="badge badge-primary" style="font-family:var(--font-arabic);font-size:1rem;">${w}</span>`
        ).join('')}
      </div>
    </div>`;
  });
  c.innerHTML = html;
}

function renderMazid(key, c) {
  const d = TSULATSI_MAZID[key];
  if (!d) { c.innerHTML = '<div class="card">Data tidak ditemukan.</div>'; return; }

  let html = pageHeader('', `Wazan: ${d.wazan}`, d.penjelasan || '');
  html += `<div class="wazan-box">
    <div class="wazan-ar">${d.wazan}</div>
    <div class="wazan-id">Ziyadah: ${d.ziyadah} &nbsp;|&nbsp; Makna: ${d.makna}</div>
  </div>`;
  html += `<div class="card">
    <div class="card-title">Tashrif Istilahi — <span class="ar ar-sm">${d.utama.ar}</span> (${d.utama.arti})</div>
    <div class="tashrif-wrapper"><table class="tashrif-table">
      <thead><tr><th>Bentuk</th><th>Arab</th><th>Arti</th></tr></thead>
      <tbody>${d.tashrif.ushuli.map(u =>
        `<tr><td style="font-size:.85rem;">${u.label}</td>
         <td class="col-bentuk">${u.ar}</td>
         <td style="font-size:.82rem;">${u.arti}</td></tr>`
      ).join('')}</tbody>
    </table></div>
  </div>`;
  html += `<div class="card"><div class="card-title">Contoh Fi'il</div>
    <div class="fiil-grid">${d.contohFiil.map(f =>
      `<div class="fiil-card">
        <div class="fiil-ar">${f.ar}</div>
        <div class="fiil-arti">${f.arti}</div>
        <div class="fiil-badge">${f.root}</div>
        ${f.mutawa ? `<div style="font-size:.72rem;color:var(--text-muted);">← ${f.mutawa}</div>` : ''}
      </div>`
    ).join('')}</div>
  </div>`;
  html += renderLughawiTabs(d.tashrif.lughawi, d.utama.ar, d.utama.arti);
  c.innerHTML = html;
}

/* =====================================================
   RUBA'I
   ===================================================== */
function renderRMOverview(c) {
  const d = RUBAI.overview;
  let html = pageHeader('الرُّبَاعِيُّ الْمُجَرَّدُ وَالْمَزِيْد', d.title, d.desc);
  html += `<div class="tashrif-wrapper"><table class="tashrif-table">
    <thead><tr><th>Wazan</th><th>Jenis</th><th>Contoh</th><th>Aksi</th></tr></thead>
    <tbody>${d.babList.map(b =>
      `<tr><td class="col-bentuk">${b.wazan}</td>
       <td><span class="badge badge-muted">${b.label}</span></td>
       <td class="col-bentuk">${b.contoh}</td>
       <td><button class="btn btn-primary btn-sm" onclick="navigateTo('${b.label.includes('Mujarrad')?'rm-mujarrad':b.label.includes('1 huruf')?'rm-tafa3lal':b.contoh.includes('اِحْ')?'rm-if3anlal':'rm-if3alal'}')">Buka →</button></td>
       </tr>`
    ).join('')}</tbody>
  </table></div>`;
  c.innerHTML = html;
}

function renderRubai(key, c) {
  const d = RUBAI[key];
  if (!d) { c.innerHTML = '<div class="card">Data tidak ditemukan.</div>'; return; }

  let html = pageHeader('', `Wazan: ${d.wazan}`, d.penjelasan || '');
  html += `<div class="wazan-box">
    <div class="wazan-ar">${d.wazan}</div>
    <div class="wazan-id">${d.jenis} &nbsp;|&nbsp; ${d.makna}</div>
  </div>`;
  html += `<div class="card">
    <div class="card-title">Tashrif Istilahi — <span class="ar ar-sm">${d.utama.ar}</span> (${d.utama.arti})</div>
    <div class="tashrif-wrapper"><table class="tashrif-table">
      <thead><tr><th>Bentuk</th><th>Arab</th><th>Arti</th></tr></thead>
      <tbody>${d.tashrif.ushuli.map(u =>
        `<tr><td style="font-size:.85rem;">${u.label}</td>
         <td class="col-bentuk">${u.ar}</td>
         <td style="font-size:.82rem;">${u.arti}</td></tr>`
      ).join('')}</tbody>
    </table></div>
  </div>`;
  html += `<div class="card"><div class="card-title">Contoh Fi'il</div>
    <div class="fiil-grid">${d.contohFiil.map(f =>
      `<div class="fiil-card">
        <div class="fiil-ar">${f.ar}</div>
        <div class="fiil-arti">${f.arti}</div>
        <div class="fiil-badge">${f.root}</div>
      </div>`
    ).join('')}</div>
  </div>`;
  html += renderLughawiTabs(d.tashrif.lughawi, d.utama.ar, d.utama.arti);
  c.innerHTML = html;
}

/* =====================================================
   TASHRIF LUGHAWI — TABS
   ===================================================== */
/* =====================================================
   URUTAN DHAMIR STANDAR (14 baris)
   هو هما هم | هي هما هن | أنتَ أنتما أنتم | أنتِ أنتما أنتن | أنا نحن
   ===================================================== */
/* Mesin & data statis masih memakai urutan lama 13 baris:
   هو هي هما هما هم هن أنت أنتِ أنتما أنتم أنتن أنا نحن
   (dan amr 5 baris: أنتَ أنتِ أنتما أنتم أنتن).
   Permutasi indeks berikut mengubahnya ke urutan 14 baris di atas. */
const DHAMIR_PERM_13 = [0,2,4,1,3,5,6,8,9,7,8,10,11,12];
const DHAMIR_PERM_5  = [0,2,3,1,2,4];

/**
 * Urutkan ulang baris tashrif sesuai urutan dhamir standar.
 * rows = array of [dhamir, bentuk, latin, arti]
 * isAmr = true untuk tabel fi'il amr (6 baris)
 */
function reorderDhamir(rows, isAmr) {
  if (!rows || !rows.length) return rows;
  let perm;
  if (isAmr && rows.length === 5) perm = DHAMIR_PERM_5;
  else if (!isAmr && rows.length === 13) perm = DHAMIR_PERM_13;
  else return rows; // sudah 14/6 baris atau jumlah tak dikenal
  return perm.map(i => rows[i]);
}

function renderLughawiTabs(lughawi, ar, arti) {
  const tabs = [
    { key:'madhi_malum',    label:'Fi\'il Madhi Ma\'lum',    titleAr:'الْفِعْلُ الْمَاضِيْ الْمَعْلُوْم' },
    { key:'mudhari_malum',  label:'Fi\'il Mudhari\' Ma\'lum',titleAr:'الْفِعْلُ الْمُضَارِعُ الْمَعْلُوْم' },
    { key:'amr',            label:'Fi\'il Amr',              titleAr:'فِعْلُ الْأَمْر' },
    { key:'madhi_majhul',   label:'Fi\'il Madhi Majhul',     titleAr:'الْفِعْلُ الْمَاضِيْ الْمَجْهُوْل' },
    { key:'mudhari_majhul', label:'Fi\'il Mudhari\' Majhul', titleAr:'الْفِعْلُ الْمُضَارِعُ الْمَجْهُوْل' }
  ];

  const tabBtns = tabs.map((t,i) =>
    `<button class="tab-btn${i===0?' active':''}" onclick="switchTab(this,'tab-${t.key}')">${t.label}</button>`
  ).join('');

  const tabPanes = tabs.map((t,i) => {
    const raw  = lughawi[t.key] || [];
    const isAmr = t.key === 'amr';
    const rows = reorderDhamir(raw, isAmr);
    if (!rows.length) {
      return `<div class="tab-pane${i===0?' active':''}" id="tab-${t.key}">
        <div class="alert alert-warning">Tashrif ini tidak ada untuk wazan ini (fi'il lazim atau tidak berlaku).</div>
      </div>`;
    }
    // Baris header kelompok
    const tableRows = rows.map((r, idx) => {
      // Sisipkan pemisah kelompok dhamir
      let groupHeader = '';
      if (!isAmr) {
        if (idx === 0)  groupHeader = `<tr class="section-header"><td colspan="4">الْغَائِب — Orang Ketiga (هو / هما / هم)</td></tr>`;
        if (idx === 3)  groupHeader = `<tr class="section-header"><td colspan="4">الْغَائِبَة — Orang Ketiga Perempuan (هي / هما / هن)</td></tr>`;
        if (idx === 6)  groupHeader = `<tr class="section-header"><td colspan="4">الْمُخَاطَب — Orang Kedua Laki-laki (أنتَ / أنتما / أنتم)</td></tr>`;
        if (idx === 9)  groupHeader = `<tr class="section-header"><td colspan="4">الْمُخَاطَبَة — Orang Kedua Perempuan (أنتِ / أنتما / أنتن)</td></tr>`;
        if (idx === 12) groupHeader = `<tr class="section-header"><td colspan="4">الْمُتَكَلِّم — Orang Pertama (أنا / نحن)</td></tr>`;
      } else {
        if (idx === 0) groupHeader = `<tr class="section-header"><td colspan="4">مُخَاطَب مُذَكَّر — Laki-laki (أنتَ / أنتما / أنتم)</td></tr>`;
        if (idx === 3) groupHeader = `<tr class="section-header"><td colspan="4">مُخَاطَب مُؤَنَّث — Perempuan (أنتِ / أنتما / أنتن)</td></tr>`;
      }
      return groupHeader + `<tr>
        <td class="col-dhomir">${r[0]}</td>
        <td class="col-bentuk">${r[1]}</td>
        <td class="col-latin">${r[2]||''}</td>
        <td class="col-arti">${r[3]||''}</td>
      </tr>`;
    }).join('');

    return `<div class="tab-pane${i===0?' active':''}" id="tab-${t.key}">
      <div class="ushuli-box" style="margin-bottom:14px;">
        <div class="ushuli-label">${t.titleAr}</div>
        <div class="ushuli-ar">${rows[0]?rows[0][1]:''}</div>
      </div>
      <div class="tashrif-wrapper"><table class="tashrif-table">
        <thead><tr><th>Dhamir</th><th>Bentuk Arab</th><th>Transliterasi</th><th>Arti</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table></div>
    </div>`;
  }).join('');

  return `<div class="card">
    <div class="card-title">Tashrif Lughawi — <span class="ar ar-sm">${ar}</span> (${arti})</div>
    <div class="tabs">${tabBtns}</div>
    ${tabPanes}
  </div>`;
}

function switchTab(btn, tabId) {
  const container = btn.closest('.card');
  container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const pane = container.querySelector(`#${tabId}`);
  if (pane) pane.classList.add('active');
}

/* =====================================================
   KALKULATOR TASHRIF
   ===================================================== */
function renderKalkulator(c) {
  c.innerHTML = `
  <div class="page-header">
    <h1>Kalkulator Tashrif</h1>
    <p class="subtitle">Pilih fi'il dan wazan untuk melihat seluruh tashrifnya.</p>
  </div>
  <div class="calc-form">
    <div class="form-row">
      <label class="form-label">Pilih Wazan / Bab:</label>
      <select class="form-select" id="calc-wazan" onchange="updateCalcFiil()">
        <optgroup label="Tsulatsi Mujarrad">
          <option value="tm-bab1">Bab I: فَعَلَ - يَفْعُلُ</option>
          <option value="tm-bab2">Bab II: فَعَلَ - يَفْعِلُ</option>
          <option value="tm-bab3">Bab III: فَعَلَ - يَفْعَلُ</option>
          <option value="tm-bab4">Bab IV: فَعِلَ - يَفْعَلُ</option>
          <option value="tm-bab5">Bab V: فَعُلَ - يَفْعُلُ</option>
          <option value="tm-bab6">Bab VI: فَعِلَ - يَفْعِلُ</option>
        </optgroup>
        <optgroup label="Tsulatsi Mazid">
          <option value="tmz-if3al">أَفْعَلَ</option>
          <option value="tmz-faala">فَعَّلَ</option>
          <option value="tmz-faaala">فَاعَلَ</option>
          <option value="tmz-infa3al">اِنْفَعَلَ</option>
          <option value="tmz-ifta3al">اِفْتَعَلَ</option>
          <option value="tmz-tafa3al">تَفَعَّلَ</option>
          <option value="tmz-tafaaal">تَفَاعَلَ</option>
          <option value="tmz-istaf3al">اِسْتَفْعَلَ</option>
        </optgroup>
        <optgroup label="Ruba'i">
          <option value="rm-mujarrad">فَعْلَلَ (Ruba'i Mujarrad)</option>
          <option value="rm-tafa3lal">تَفَعْلَلَ</option>
        </optgroup>
      </select>
    </div>
    <div class="form-row">
      <label class="form-label">Pilih Contoh Fi'il:</label>
      <select class="form-select" id="calc-fiil-select"></select>
    </div>
    <button class="btn btn-primary" onclick="showKalkResult()">Tampilkan Tashrif Lengkap</button>
  </div>
  <div id="kalk-result"></div>`;

  updateCalcFiil();
}

function getDataByPage(page) {
  if (page.startsWith('tm-bab')) {
    const k = page.replace('tm-','');
    return TSULATSI_MUJARRAD[k] || null;
  }
  if (page.startsWith('tmz-')) {
    const k = page.replace('tmz-','');
    return TSULATSI_MAZID[k] || null;
  }
  if (page.startsWith('rm-')) {
    const k = page.replace('rm-','');
    return RUBAI[k] || null;
  }
  return null;
}

function updateCalcFiil() {
  const wazan = document.getElementById('calc-wazan').value;
  const data = getDataByPage(wazan);
  const sel = document.getElementById('calc-fiil-select');
  sel.innerHTML = '';
  if (data && data.contohFiil) {
    data.contohFiil.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f.ar;
      opt.textContent = `${f.ar} — ${f.arti}`;
      sel.appendChild(opt);
    });
  }
}

function showKalkResult() {
  const wazan = document.getElementById('calc-wazan').value;
  const data = getDataByPage(wazan);
  const result = document.getElementById('kalk-result');
  if (!data) { result.innerHTML = '<div class="alert alert-warning">Data tidak tersedia.</div>'; return; }
  result.innerHTML = renderLughawiTabs(data.tashrif.lughawi, data.utama.ar, data.utama.arti);
  result.scrollIntoView({ behavior:'smooth', block:'start' });
}

/* =====================================================
   PENCARIAN
   ===================================================== */
function renderPencarian(c) {
  c.innerHTML = `
  <div class="page-header">
    <h1>Pencarian Fi'il</h1>
    <p class="subtitle">Cari fi'il berdasarkan kata Arab atau terjemahannya.</p>
  </div>
  <div class="calc-form">
    <div class="form-row">
      <label class="form-label">Kata kunci (Arab atau Indonesia):</label>
      <input type="text" class="form-input" id="pencarian-input"
        placeholder="Contoh: نَصَرَ atau menolong atau اجتمع"
        oninput="doSearch(this.value)" autocomplete="off" />
    </div>
  </div>
  <div id="pencarian-result"></div>`;
}

function doSearch(q) {
  const res = document.getElementById('pencarian-result');
  if (!q || q.trim().length < 2) { res.innerHTML = ''; return; }
  const lower = q.toLowerCase().replace(/\s/g,'');
  const hits = SEARCH_INDEX.filter(item =>
    item.ar.replace(/\s/g,'').includes(q.replace(/\s/g,'')) ||
    item.arti.toLowerCase().includes(lower) ||
    item.wazan.includes(q) ||
    item.grup.toLowerCase().includes(lower)
  );
  if (!hits.length) {
    res.innerHTML = `<div class="alert alert-warning">Tidak ditemukan hasil untuk "<strong>${q}</strong>".</div>`;
    return;
  }
  res.innerHTML = `<div class="card">
    <div class="card-title">Hasil pencarian: ${hits.length} fi'il ditemukan</div>
    <div class="tashrif-wrapper"><table class="tashrif-table">
      <thead><tr><th>Fi'il</th><th>Arti</th><th>Wazan</th><th>Kelompok</th><th>Aksi</th></tr></thead>
      <tbody>${hits.map(h =>
        `<tr>
          <td class="col-bentuk">${h.ar}</td>
          <td style="font-size:.82rem;">${h.arti}</td>
          <td class="col-bentuk" style="font-size:.85rem;">${h.wazan}</td>
          <td><span class="badge badge-muted" style="font-size:.7rem;">${h.grup}</span></td>
          <td><button class="btn btn-primary btn-sm" onclick="navigateTo('${h.page}')">Buka</button></td>
        </tr>`
      ).join('')}</tbody>
    </table></div>
  </div>`;
}

/* =====================================================
   REFERENSI
   ===================================================== */
function renderReferensi(c) {
  let html = `<div class="page-header">
    <h1>Referensi &amp; Sumber</h1>
    <p class="subtitle">Kitab-kitab mu'tabar yang menjadi landasan materi aplikasi ini.</p>
  </div>
  <div class="alert alert-info">Materi dalam aplikasi ini disusun berdasarkan kaidah-kaidah yang terdapat dalam kitab-kitab klasik berikut, yang merupakan rujukan utama ilmu Nahwu dan Shorof.</div>`;
  DATA_REFERENSI.forEach((r,i) => {
    html += `<div class="ref-card">
      <div class="ref-num">${i+1}</div>
      <div class="ref-body">
        <h4><span class="ar ar-sm">${r.judul}</span> &nbsp;
          <span class="badge badge-${r.kategori==='Shorof'?'primary':r.kategori==='Nahwu'?'accent':'success'}">${r.kategori}</span>
        </h4>
        <p><strong>Penulis:</strong> ${r.penulis}</p>
        <p style="margin-top:4px;color:var(--text-muted);font-size:.85rem;">${r.isi}</p>
      </div>
    </div>`;
  });
  c.innerHTML = html;
}

/* =====================================================
   MODAL — Tashrif detail dari kartu fi'il
   ===================================================== */
function openTashrifModal(ar, arti) {
  // cari data di SEARCH_INDEX, lalu tampilkan tashrif
  const hit = SEARCH_INDEX.find(s => s.ar.startsWith(ar));
  if (!hit) return;
  const data = getDataByPage(hit.page);
  if (!data) return;

  document.getElementById('modal-title').textContent = `Tashrif: ${ar} (${arti})`;
  document.getElementById('modal-body').innerHTML = renderLughawiTabs(data.tashrif.lughawi, ar, arti);
  document.getElementById('modal').classList.remove('hidden');
}

function setupModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
}
function closeModal() { document.getElementById('modal').classList.add('hidden'); }

/* =====================================================
   SEARCH BAR (topbar)
   ===================================================== */
function setupSearch() {
  const toggle = document.getElementById('search-toggle');
  const bar    = document.getElementById('search-bar');
  const input  = document.getElementById('search-input');
  const results= document.getElementById('search-results');

  toggle.addEventListener('click', () => {
    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) input.focus();
    else results.innerHTML = '';
  });

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 2) { results.innerHTML = ''; return; }
    const lower = q.toLowerCase();
    const hits = SEARCH_INDEX.filter(item =>
      item.ar.includes(q) || item.arti.toLowerCase().includes(lower) ||
      item.wazan.includes(q) || item.grup.toLowerCase().includes(lower)
    ).slice(0, 8);
    results.innerHTML = hits.map(h =>
      `<div class="search-result-item" onclick="navigateTo('${h.page}');document.getElementById('search-bar').classList.add('hidden');">
        <span class="sri-ar">${h.ar.split(' ')[0]}</span>
        <span class="sri-id">${h.arti}</span>
        <span class="sri-badge">${h.grup}</span>
      </div>`
    ).join('') || `<div class="search-result-item"><span class="sri-id">Tidak ditemukan.</span></div>`;
  });

  // sidebar search
  document.getElementById('nav-search-btn').addEventListener('click', () => {
    const q = document.getElementById('nav-search-input').value.trim();
    if (q) { navigateTo('pencarian'); setTimeout(() => { document.getElementById('pencarian-input').value=q; doSearch(q); }, 100); }
  });
  document.getElementById('nav-search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('nav-search-btn').click();
  });
}

/* =====================================================
   DARK MODE
   ===================================================== */
function setupDarkMode() {
  const btn = document.getElementById('dark-toggle');
  const saved = localStorage.getItem('shorof-dark');
  const applyTheme = (dark) => {
    darkMode = dark;
    if (dark) {
      document.documentElement.setAttribute('data-theme','dark');
      btn.setAttribute('aria-label','Mode terang');
    } else {
      document.documentElement.removeAttribute('data-theme');
      btn.setAttribute('aria-label','Mode gelap');
    }
  };
  applyTheme(saved === '1');
  btn.addEventListener('click', () => {
    const next = !darkMode;
    applyTheme(next);
    localStorage.setItem('shorof-dark', next ? '1' : '0');
  });
}

/* =====================================================
   MOBILE MENU
   ===================================================== */
function setupMobileMenu() {
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('visible');
  });
  document.getElementById('sidebar-close').addEventListener('click', closeSidebar);
  document.getElementById('overlay').addEventListener('click', closeSidebar);
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
}

/* =====================================================
   ACCORDION
   ===================================================== */
function toggleAccordion(header) {
  header.classList.toggle('open');
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

/* =====================================================
   HELPER: Page Header HTML
   ===================================================== */
function pageHeader(arTitle, title, subtitle) {
  return `<div class="page-header">
    ${arTitle ? `<span class="ar-title">${arTitle}</span>` : ''}
    <h1>${title}</h1>
    ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
  </div>`;
}


/* =====================================================
   MESIN TASHRIF OTOMATIS
   ===================================================== */

/* ── State mesin ── */
let MT = {
  info:    null,   // hasil TashrifEngine.analyze()
  ushuli:  null,   // hasil generateUshuli()
  lughawi: null,   // hasil generateLughawi()
  step:    1,      // 1=input, 2=konfirmasi, 3=pilih-bentuk, 4=hasil
  mudhari: '',     // input mudhari' dari user
  selectedBentuk: 'ushuli',
};

/* ─────────────────────────────────
   RENDER HALAMAN UTAMA
   ───────────────────────────────── */
function renderMesinTashrif(c) {
  c.innerHTML = `
  <div class="page-header">
    <span class="ar-title">آلَةُ التَّصْرِيْف الْأُوْتُوْمَاتِيْكِيَّة</span>
    <h1>Mesin Tashrif Otomatis</h1>
    <p class="subtitle">Masukkan fi'il madhi apapun — sistem akan mengenali jenisnya secara otomatis dan menghasilkan seluruh tashrifnya.</p>
  </div>

  <!-- Panduan singkat -->
  <div class="mt-info-box">
    <div class="mt-info-grid">
      <div class="mt-info-item"><span>Tsulatsi Mujarrad<br/><small>نَصَرَ، عَلِمَ، كَرُمَ</small></span></div>
      <div class="mt-info-item"><span>Tsulatsi Mazid<br/><small>أَكْرَمَ، تَعَلَّمَ، اِسْتَغْفَرَ</small></span></div>
      <div class="mt-info-item"><span>Ruba'i<br/><small>دَحْرَجَ، تَدَحْرَجَ</small></span></div>
      <div class="mt-info-item"><span>Mu'tal<br/><small>وَعَدَ، قَالَ، دَعَا</small></span></div>
    </div>
  </div>

  <!-- STEP 1: Input fi'il -->
  <div class="mt-card" id="mt-step1">
    <div class="mt-card-header">
      <span class="mt-step-badge">1</span>
      <span>Masukkan Fi'il Madhi</span>
    </div>
    <div class="mt-input-wrap">
      <input
        type="text"
        id="mt-madhi-input"
        class="mt-arabic-input"
        placeholder="اُكْتُبْ هُنَا..."
        dir="rtl"
        autocomplete="off"
        oninput="onMadhiInput(this.value)"
        onkeydown="mtInputKeydown(event)"
      />
      <button class="mt-backspace-btn" type="button" onclick="mtBackspace()" title="Hapus satu karakter" aria-label="Hapus satu karakter">
        <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 5H9l-6 7 6 7h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"/><path d="m17 9-6 6M11 9l6 6"/></svg>
        <span>Hapus</span>
      </button>
      <button class="mt-clear-btn" onclick="mtReset()" title="Bersihkan semua" aria-label="Bersihkan semua">
        <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
      </button>
    </div>

    <!-- Panel keyboard Arab virtual -->
    <div class="mt-kb-panel" id="mt-kb-panel">
      <div class="mt-kb-label">Keyboard Arab Cepat (ketuk huruf):</div>
      <div class="mt-kb-grid" id="mt-kb-grid"></div>
      <div class="mt-har-row" id="mt-har-row"></div>
    </div>

    <!-- Hint live -->
    <div id="mt-live-hint" class="mt-live-hint"></div>

    <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn btn-primary btn-lg" onclick="doAnalyze()">Analisis Fi'il</button>
      <button class="btn btn-outline btn-lg" onclick="mtShowExamples()">Lihat Contoh</button>
    </div>
  </div>

  <!-- STEP 2: Hasil analisis & konfirmasi -->
  <div id="mt-step2" class="hidden"></div>

  <!-- STEP 3: Pilih bentuk tashrif -->
  <div id="mt-step3" class="hidden"></div>

  <!-- STEP 4: Tabel tashrif -->
  <div id="mt-step4" class="hidden"></div>

  <!-- Panel contoh fi'il -->
  <div id="mt-examples" class="hidden"></div>
  `;

  buildVirtualKeyboard();
  MT = { info:null, ushuli:null, lughawi:null, step:1, mudhari:'', selectedBentuk:'ushuli' };
}

/* ─────────────────────────────────
   KEYBOARD ARAB VIRTUAL
   ───────────────────────────────── */
function buildVirtualKeyboard() {
  const huruf = [
    'ا','ب','ت','ث','ج','ح','خ','د','ذ','ر',
    'ز','س','ش','ص','ض','ط','ظ','ع','غ','ف',
    'ق','ك','ل','م','ن','ه','و','ي','أ','إ',
    'ء','آ','ة','ى'
  ];
  const harakatList = [
    { sym:'َ',  code:'\u064E', label:'فَتْحَة' },
    { sym:'ِ',  code:'\u0650', label:'كَسْرَة' },
    { sym:'ُ',  code:'\u064F', label:'ضَمَّة'  },
    { sym:'ْ',  code:'\u0652', label:'سُكُوْن' },
    { sym:'ّ',  code:'\u0651', label:'تَشْدِيْد'},
    { sym:'ً',  code:'\u064B', label:'تنوين فتح'},
    { sym:'ٍ',  code:'\u064D', label:'تنوين كسر'},
    { sym:'ٌ',  code:'\u064C', label:'تنوين ضم'},
    { sym:'⌫',  code:'del',    label:'حذف' },
    { sym:'space', code:' ',   label:'مسافة' },
  ];

  const grid = document.getElementById('mt-kb-grid');
  if (!grid) return;
  grid.innerHTML = huruf.map(h =>
    `<button class="mt-kb-btn" onclick="mtTypeChar('${h}')" title="${h}">${h}</button>`
  ).join('');

  const harRow = document.getElementById('mt-har-row');
  harRow.innerHTML = harakatList.map(h =>
    `<button class="mt-har-btn" onclick="mtTypeHar('${h.code}')" title="${h.label}">
      ${h.sym==='space' ? '⎵' : h.sym}
      <span class="mt-har-label">${h.label}</span>
    </button>`
  ).join('');
}

function mtInsertAtCursor(text) {
  const inp = document.getElementById('mt-madhi-input');
  if (!inp) return;
  const start = inp.selectionStart ?? inp.value.length;
  const end = inp.selectionEnd ?? start;
  inp.value = inp.value.slice(0, start) + text + inp.value.slice(end);
  const pos = start + text.length;
  inp.focus();
  inp.setSelectionRange(pos, pos);
  onMadhiInput(inp.value);
}

function mtTypeChar(ch) {
  mtInsertAtCursor(ch);
}

function mtTypeHar(code) {
  if (code === 'del') {
    mtBackspace();
    return;
  }
  mtInsertAtCursor(code);
}

/* Hapus satu karakter sebelum kursor. Harakat yang menempel pada huruf
   ikut terhapus supaya satu ketukan = satu huruf yang terlihat. */
function mtBackspace() {
  const inp = document.getElementById('mt-madhi-input');
  if (!inp) return;

  const start = inp.selectionStart ?? inp.value.length;
  const end = inp.selectionEnd ?? start;

  if (start !== end) {
    inp.value = inp.value.slice(0, start) + inp.value.slice(end);
    inp.focus();
    inp.setSelectionRange(start, start);
    onMadhiInput(inp.value);
    return;
  }

  if (start > 0) {
    const before = inp.value.slice(0, start);
    const after = inp.value.slice(start);
    let cut = before.length;

    // Lewati harakat/tanda yang menempel di belakang, lalu hapus hurufnya.
    while (cut > 0 && /[\u064B-\u0652\u0670]/.test(before[cut - 1])) cut--;
    if (cut > 0) cut--;

    inp.value = before.slice(0, cut) + after;
    inp.focus();
    inp.setSelectionRange(cut, cut);
    onMadhiInput(inp.value);
  } else {
    inp.focus();
  }
}

function mtInputKeydown(event) {
  if (event.isComposing) return;
  if (event.key === 'Backspace' && !event.ctrlKey && !event.altKey && !event.metaKey) {
    event.preventDefault();
    mtBackspace();
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    doAnalyze();
  }
}

/* ─────────────────────────────────
   LIVE HINT saat mengetik
   ───────────────────────────────── */
function onMadhiInput(val) {
  const hint = document.getElementById('mt-live-hint');
  if (!hint) return;
  const bare = TashrifEngine.stripDiac(val.trim());
  if (!bare || bare.length < 2) { hint.innerHTML = ''; return; }

  // Preview cepat tanpa analisis penuh
  const len = bare.length;
  let preview = '';
  if (len === 3) preview = `<span class="mt-hint-badge mt-hint-blue">Tsulatsi Mujarrad</span> — ${bare.length} huruf asli`;
  else if (len === 4) {
    if (['أ','إ','آ','ء','ؤ','ئ'].includes(bare[0])) preview = `<span class="mt-hint-badge mt-hint-green">أَفْعَلَ</span> Tsulatsi Mazid (mazid 1 huruf: أ)`;
    else if (['ا','و','ي','ى'].includes(bare[1])) preview = `<span class="mt-hint-badge mt-hint-green">فَاعَلَ</span> Tsulatsi Mazid (mazid 1 huruf: ا)`;
    else preview = `<span class="mt-hint-badge mt-hint-purple">فَعْلَلَ</span> Ruba'i Mujarrad — 4 huruf asli`;
  } else if (len === 5) {
    if (bare.startsWith('ان')) preview = `<span class="mt-hint-badge mt-hint-orange">اِنْفَعَلَ</span> Tsulatsi Mazid (mazid 2 huruf)`;
    else if (bare.startsWith('ت') && ['ا','و','ي'].includes(bare[2])) preview = `<span class="mt-hint-badge mt-hint-orange">تَفَاعَلَ</span> Tsulatsi Mazid (mazid 2 huruf)`;
    else if (bare.startsWith('ت')) preview = `<span class="mt-hint-badge mt-hint-orange">تَفَعَّلَ</span> Tsulatsi Mazid (mazid 2 huruf)`;
    else if (bare[2]==='ت') preview = `<span class="mt-hint-badge mt-hint-orange">اِفْتَعَلَ</span> Tsulatsi Mazid (mazid 2 huruf)`;
  } else if (len === 6) {
    if (bare.startsWith('است')) preview = `<span class="mt-hint-badge mt-hint-red">اِسْتَفْعَلَ</span> Tsulatsi Mazid (mazid 3 huruf)`;
    else if (bare.startsWith('ت')) preview = `<span class="mt-hint-badge mt-hint-purple">تَفَعْلَلَ</span> Ruba'i Mazid`;
  }

  hint.innerHTML = preview
    ? `<span style="color:var(--text-muted);font-size:.8rem;">Terdeteksi: </span>${preview}`
    : `<span style="color:var(--text-muted);font-size:.8rem;">${len} huruf — klik Analisis untuk detail</span>`;
}

/* ─────────────────────────────────
   ANALISIS UTAMA
   ───────────────────────────────── */
function doAnalyze() {
  const inp   = document.getElementById('mt-madhi-input');
  const madhi = (inp ? inp.value : '').trim();
  if (!madhi) {
    showStep2Error('Masukkan fi\'il madhi terlebih dahulu.');
    return;
  }

  const info = TashrifEngine.analyze(madhi, '');
  MT.info = info;

  if (!info.valid) {
    showStep2Error(info.error);
    return;
  }

  renderStep2(info, madhi);
}

/* ─────────────────────────────────
   STEP 2: Tampilkan hasil analisis
   ───────────────────────────────── */
function renderStep2(info, madhi) {
  const el = document.getElementById('mt-step2');
  const el3= document.getElementById('mt-step3');
  const el4= document.getElementById('mt-step4');
  el3.classList.add('hidden');
  el4.classList.add('hidden');
  el.classList.remove('hidden');

  const jenisLabel   = TashrifEngine.JENIS_LABEL[info.jenis]   || info.jenis;
  const mutalLabel   = TashrifEngine.MUTAL_LABEL[info.jenisMutal] || info.jenisMutal || '-';
  const rootDisplay  = (info.hurufAsli || []).join(' - ');
  const needsMudhari = (info.jenis === 'tsulatsi_mujarrad' &&
                        (info.bab === 'ambig_fatha' || info.bab === 'ambig_kasra' || info.bab === 'unknown'));

  el.innerHTML = `
  <div class="mt-card mt-card-result">
    <div class="mt-card-header">
      <span class="mt-step-badge mt-step-done"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span>
      <span>Hasil Analisis</span>
    </div>

    <!-- Fi'il display -->
    <div class="mt-fiil-display">
      <div class="mt-fiil-ar">${madhi}</div>
      <div class="mt-fiil-badges">
        <span class="badge badge-primary">${jenisLabel}</span>
        ${info.jenisMutal ? `<span class="badge badge-accent">${(info.jenisMutal||'').replace(/_/g,' ')}</span>` : ''}
      </div>
    </div>

    ${info.assumed ? `
    <div class="alert alert-warning" style="margin-top:12px;">
      Perhatian: Harakat tidak terbaca sepenuhnya. Bab I (<span class="ar ar-sm">فَعَلَ - يَفْعُلُ</span>)
      diasumsikan. Tambahkan harakat pada input agar analisis lebih akurat.
    </div>` : ''}

    <!-- Tabel info -->
    <div class="tashrif-wrapper" style="margin-top:16px;">
      <table class="tashrif-table mt-info-table">
        <tbody>
          <tr><td class="mt-tbl-key">Wazan</td>
              <td class="mt-tbl-val"><span class="ar ar-sm" style="font-size:1.1rem;">${info.wazan || '-'}</span></td></tr>
          <tr><td class="mt-tbl-key">Jenis Fi'il</td>
              <td class="mt-tbl-val">${jenisLabel}</td></tr>
          <tr><td class="mt-tbl-key">Jenis Mu'tal / Shahih</td>
              <td class="mt-tbl-val" style="font-size:.82rem;">${mutalLabel}</td></tr>
          <tr><td class="mt-tbl-key">Huruf Asli (Root)</td>
              <td class="mt-tbl-val"><span class="ar ar-sm">${rootDisplay}</span></td></tr>
          ${info.ziyadah ? `
          <tr><td class="mt-tbl-key">Huruf Ziyadah</td>
              <td class="mt-tbl-val"><span class="ar ar-sm">${info.ziyadahHuruf}</span>
                <span class="badge badge-muted" style="margin-left:6px;">${info.ziyadah} huruf tambahan</span></td></tr>` : ''}
          ${info.bab ? `
          <tr><td class="mt-tbl-key">Bab</td>
              <td class="mt-tbl-val">${info.babLabel || 'Bab ' + info.bab}</td></tr>` : ''}
          <tr><td class="mt-tbl-key">Makna Wazan</td>
              <td class="mt-tbl-val" style="font-size:.85rem;">${info.makna || '-'}</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Input mudhari' jika ambigu -->
    ${needsMudhari ? `
    <div class="mt-mudhari-prompt">
      <div class="mt-mudhari-label">
        Perhatian: Fi'il ini ambigu (bisa beberapa bab). Masukkan bentuk
        <strong>mudhari'</strong>-nya untuk menentukan bab yang tepat:
      </div>
      <div class="mt-input-wrap" style="margin-top:10px;">
        <input type="text" id="mt-mudhari-input" class="mt-arabic-input" placeholder="مثال: يَنْصُرُ أو يَضْرِبُ..." dir="rtl"
          autocomplete="off" style="font-size:1.4rem;" />
      </div>
      <button class="btn btn-primary" style="margin-top:10px;" onclick="doReanalyzeWithMudhari()">
        Konfirmasi Bab
      </button>
    </div>` : ''}

    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
      ${!needsMudhari ? `<button class="btn btn-primary btn-lg" onclick="renderStep3()">Pilih Bentuk Tashrif →</button>` : ''}
      <button class="btn btn-outline" onclick="mtReset()">← Ganti Fi'il</button>
    </div>
  </div>`;
}

function showStep2Error(msg) {
  const el = document.getElementById('mt-step2');
  el.classList.remove('hidden');
  el.innerHTML = `<div class="alert alert-warning" style="font-size:.95rem;">
    <strong>Gagal:</strong> ${msg}
    <br/><small>Contoh fi'il valid: <span class="ar ar-sm">نَصَرَ، أَكْرَمَ، تَعَلَّمَ، اِسْتَغْفَرَ، دَحْرَجَ</span></small>
  </div>`;
}

/* ─────────────────────────────────
   Re-analisis setelah dapat mudhari'
   ───────────────────────────────── */
function doReanalyzeWithMudhari() {
  const madhiInp   = document.getElementById('mt-madhi-input');
  const mudhariInp = document.getElementById('mt-mudhari-input');
  const madhi   = (madhiInp   ? madhiInp.value   : '').trim();
  const mudhari = (mudhariInp ? mudhariInp.value  : '').trim();

  if (!mudhari) { alert('Masukkan bentuk mudhari\' terlebih dahulu.'); return; }

  const info = TashrifEngine.analyze(madhi, mudhari);
  MT.info    = info;
  MT.mudhari = mudhari;

  if (!info.valid) { showStep2Error(info.error); return; }
  renderStep2(info, madhi);
  // Jika bab sudah terpecahkan, langsung tampilkan tombol pilih bentuk
  if (info.bab && typeof info.bab === 'number') {
    // update step2 untuk tambahkan tombol
    const step2 = document.getElementById('mt-step2');
    const existing = step2.querySelector('.btn-primary');
    if (!existing) {
      const btnWrap = step2.querySelector('[style*="margin-top:16px"]');
      if (btnWrap) {
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary btn-lg';
        btn.textContent = 'Pilih Bentuk Tashrif →';
        btn.onclick = renderStep3;
        btnWrap.prepend(btn);
      }
    }
  }
}

/* ─────────────────────────────────
   STEP 3: Pilih bentuk tashrif
   ───────────────────────────────── */
function renderStep3() {
  const el = document.getElementById('mt-step3');
  const el4= document.getElementById('mt-step4');
  el4.classList.add('hidden');
  el.classList.remove('hidden');
  el.scrollIntoView({ behavior:'smooth', block:'start' });

  el.innerHTML = `
  <div class="mt-card">
    <div class="mt-card-header">
      <span class="mt-step-badge">2</span>
      <span>Pilih Bentuk Tashrif</span>
    </div>

    <div class="mt-bentuk-grid">
      <div class="mt-bentuk-card" onclick="selectBentuk('ushuli',this)">
        <div class="mt-bentuk-title">Tashrif Istilahi</div>
        <div class="mt-bentuk-sub">11 bentuk turunan (masdar, isim fa'il, maf'ul, dll)</div>
      </div>
      <div class="mt-bentuk-card" onclick="selectBentuk('lughawi_madhi_malum',this)">
        <div class="mt-bentuk-title">Madhi Ma'lum</div>
        <div class="mt-bentuk-sub">Fi'il madhi aktif - 14 dhamir</div>
        <div class="mt-bentuk-ar">فَعَلَ</div>
      </div>
      <div class="mt-bentuk-card" onclick="selectBentuk('lughawi_mudhari_malum',this)">
        <div class="mt-bentuk-title">Mudhari' Ma'lum</div>
        <div class="mt-bentuk-sub">Fi'il mudhari' aktif - 14 dhamir</div>
        <div class="mt-bentuk-ar">يَفْعَلُ</div>
      </div>
      <div class="mt-bentuk-card" onclick="selectBentuk('lughawi_amr',this)">
        <div class="mt-bentuk-title">Fi'il Amr</div>
        <div class="mt-bentuk-sub">Kata kerja perintah — 6 dhamir</div>
        <div class="mt-bentuk-ar">اِفْعَلْ</div>
      </div>
      <div class="mt-bentuk-card" onclick="selectBentuk('lughawi_madhi_majhul',this)">
        <div class="mt-bentuk-title">Madhi Majhul</div>
        <div class="mt-bentuk-sub">Fi'il madhi pasif - 14 dhamir</div>
        <div class="mt-bentuk-ar">فُعِلَ</div>
      </div>
      <div class="mt-bentuk-card" onclick="selectBentuk('lughawi_mudhari_majhul',this)">
        <div class="mt-bentuk-title">Mudhari' Majhul</div>
        <div class="mt-bentuk-sub">Fi'il mudhari' pasif - 14 dhamir</div>
        <div class="mt-bentuk-ar">يُفْعَلُ</div>
      </div>
      <div class="mt-bentuk-card mt-bentuk-featured" onclick="selectBentuk('semua',this)">
        <div class="mt-bentuk-title">SEMUA (Lengkap)</div>
        <div class="mt-bentuk-sub">Istilahi + seluruh lughawi dalam satu tampilan</div>
      </div>
    </div>

    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;" id="mt-step3-actions">
      <button class="btn btn-primary btn-lg" id="mt-gen-btn" onclick="doGenerate()" disabled>
        Generate Tashrif
      </button>
      <button class="btn btn-outline" onclick="document.getElementById('mt-step3').classList.add('hidden')">
        ← Kembali
      </button>
    </div>
  </div>`;
}

function selectBentuk(key, el) {
  document.querySelectorAll('.mt-bentuk-card').forEach(c => c.classList.remove('mt-bentuk-active'));
  el.classList.add('mt-bentuk-active');
  MT.selectedBentuk = key;
  const btn = document.getElementById('mt-gen-btn');
  if (btn) { btn.disabled = false; btn.textContent = 'Generate Tashrif'; }
}

/* ─────────────────────────────────
   STEP 4: Generate & tampilkan tashrif
   ───────────────────────────────── */
function doGenerate() {
  if (!MT.info || !MT.info.valid) return;

  const el = document.getElementById('mt-step4');
  el.classList.remove('hidden');
  el.scrollIntoView({ behavior:'smooth', block:'start' });

  // Generate data
  MT.ushuli  = TashrifEngine.ushuli(MT.info, MT.mudhari);
  MT.lughawi = TashrifEngine.lughawi(MT.info, MT.mudhari);

  const madhi = MT.info.raw || document.getElementById('mt-madhi-input').value.trim();

  let html = `
  <div class="mt-card" id="mt-result-card">
    <div class="mt-card-header">
      <span class="mt-step-badge mt-step-done"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span>
      <span>Hasil Tashrif — <span class="ar ar-sm">${madhi}</span></span>
      <div style="margin-left:auto;display:flex;gap:8px;">
        <button class="btn btn-sm btn-outline" onclick="window.print()" title="Cetak">Cetak</button>
        <button class="btn btn-sm btn-outline" onclick="mtCopyResult()" title="Salin">Salin</button>
      </div>
    </div>`;

  if (MT.selectedBentuk === 'ushuli' || MT.selectedBentuk === 'semua') {
    html += renderUshuliTable(MT.ushuli, madhi);
  }

  if (MT.selectedBentuk === 'lughawi_madhi_malum' || MT.selectedBentuk === 'semua') {
    html += renderLughawiSection('Fi\'il Madhi Ma\'lum', 'الْمَاضِي الْمَعْلُوْم', 'فَعَلَ', MT.lughawi.madhi_malum);
  }
  if (MT.selectedBentuk === 'lughawi_mudhari_malum' || MT.selectedBentuk === 'semua') {
    html += renderLughawiSection('Fi\'il Mudhari\' Ma\'lum', 'الْمُضَارِع الْمَعْلُوْم', 'يَفْعَلُ', MT.lughawi.mudhari_malum);
  }
  if (MT.selectedBentuk === 'lughawi_amr' || MT.selectedBentuk === 'semua') {
    html += renderLughawiSection('Fi\'il Amr', 'فِعْلُ الْأَمْر', 'اِفْعَلْ', MT.lughawi.amr);
  }
  if (MT.selectedBentuk === 'lughawi_madhi_majhul' || MT.selectedBentuk === 'semua') {
    html += renderLughawiSection('Fi\'il Madhi Majhul', 'الْمَاضِي الْمَجْهُوْل', 'فُعِلَ', MT.lughawi.madhi_majhul);
  }
  if (MT.selectedBentuk === 'lughawi_mudhari_majhul' || MT.selectedBentuk === 'semua') {
    html += renderLughawiSection('Fi\'il Mudhari\' Majhul', 'الْمُضَارِع الْمَجْهُوْل', 'يُفْعَلُ', MT.lughawi.mudhari_majhul);
  }

  html += `
    <div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="renderStep3()">← Pilih Bentuk Lain</button>
      <button class="btn btn-outline" onclick="mtReset()">Tashrif Fi'il Lain</button>
    </div>
  </div>`;

  el.innerHTML = html;
}

/* ─────────────────────────────────
   RENDER TABEL USHULI
   ───────────────────────────────── */
function renderUshuliTable(rows, madhi) {
  if (!rows || !rows.length) return `<div class="alert alert-warning">Data ushuli tidak tersedia.</div>`;

  const tableRows = rows.map(r => {
    const isNA = !r.ar || r.ar === '-';
    return `<tr class="${isNA ? 'mt-row-na' : ''}">
      <td style="font-size:.82rem;font-weight:600;width:34%;">${r.label}</td>
      <td class="col-bentuk" style="font-size:1.3rem;${isNA?'color:var(--text-light)':''}">
        ${isNA ? '<em>—</em>' : r.ar}
      </td>
      <td class="col-latin" style="font-size:.8rem;">${isNA ? '' : (r.latin||'')}</td>
    </tr>`;
  }).join('');

  return `
  <div class="mt-section">
    <div class="mt-section-header">
      <span class="ar ar-sm" style="font-size:1rem;">التَّصْرِيْف الِاصْطِلَاحِيّ</span>
      <span>Tashrif Istilahi</span>
    </div>
    <div class="mt-ushuli-hero">
      <div class="mt-ushuli-ar">${madhi}</div>
      <div class="mt-ushuli-wazan">${MT.info.wazan || ''} &nbsp;·&nbsp; ${TashrifEngine.JENIS_LABEL[MT.info.jenis]||''}</div>
    </div>
    <div class="tashrif-wrapper">
      <table class="tashrif-table">
        <thead>
          <tr><th style="width:34%">Bentuk</th><th>Arab</th><th>Latin</th></tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  </div>`;
}

/* ─────────────────────────────────
   RENDER BAGIAN LUGHAWI
   ───────────────────────────────── */
function renderLughawiSection(label, labelAr, wazanAr, rows) {
  if (!rows || !rows.length) {
    return `<div class="mt-section">
      <div class="mt-section-header"><span>${label}</span></div>
      <div class="alert alert-warning">Bentuk ini tidak berlaku untuk fi'il ini (lazim / tidak memiliki majhul).</div>
    </div>`;
  }

  const isAmr = label.includes('Amr');
  const orderedRows = reorderDhamir(rows, isAmr);

  const tableRows = orderedRows.map((r, idx) => {
    let groupHeader = '';
    if (!isAmr) {
      if (idx === 0)  groupHeader = `<tr class="section-header"><td colspan="4">الْغَائِب (هو / هما / هم)</td></tr>`;
      if (idx === 3)  groupHeader = `<tr class="section-header"><td colspan="4">الْغَائِبَة (هي / هما / هن)</td></tr>`;
      if (idx === 6)  groupHeader = `<tr class="section-header"><td colspan="4">الْمُخَاطَب (أنتَ / أنتما / أنتم)</td></tr>`;
      if (idx === 9)  groupHeader = `<tr class="section-header"><td colspan="4">الْمُخَاطَبَة (أنتِ / أنتما / أنتن)</td></tr>`;
      if (idx === 12) groupHeader = `<tr class="section-header"><td colspan="4">الْمُتَكَلِّم (أنا / نحن)</td></tr>`;
    } else {
      if (idx === 0) groupHeader = `<tr class="section-header"><td colspan="4">مُخَاطَب مُذَكَّر (أنتَ / أنتما / أنتم)</td></tr>`;
      if (idx === 3) groupHeader = `<tr class="section-header"><td colspan="4">مُخَاطَب مُؤَنَّث (أنتِ / أنتما / أنتن)</td></tr>`;
    }
    return groupHeader + `<tr>
      <td class="col-dhomir">${r[0]}</td>
      <td class="col-bentuk" style="font-size:1.2rem;">${r[1]}</td>
      <td class="col-latin" style="font-size:.78rem;">${r[2]||''}</td>
      <td class="col-arti" style="font-size:.78rem;color:var(--text-muted);">${r[3]||''}</td>
    </tr>`;
  }).join('');

  return `
  <div class="mt-section">
    <div class="mt-section-header">
      <span class="ar ar-sm" style="font-size:.95rem;">${labelAr}</span>
      <span>${label}</span>
      <span class="ar ar-sm" style="font-size:1.1rem;margin-left:auto;color:var(--accent);">${orderedRows[0]?.[1]||''}</span>
    </div>
    <div class="tashrif-wrapper">
      <table class="tashrif-table">
        <thead>
          <tr>
            <th>${isAmr ? 'Mukhatab' : 'Dhamir'}</th>
            <th>Bentuk Arab</th>
            <th>Transliterasi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  </div>`;
}

/* ─────────────────────────────────
   PANEL CONTOH FI'IL
   ───────────────────────────────── */
function mtShowExamples() {
  const el = document.getElementById('mt-examples');
  if (!el) return;
  el.classList.toggle('hidden');
  if (el.classList.contains('hidden')) return;

  const examples = [
    // [fi'il, mudhari', jenis, keterangan]
    ['نَصَرَ','يَنْصُرُ','Tsulatsi Mujarrad Bab I','menolong — shahih salim'],
    ['ضَرَبَ','يَضْرِبُ','Tsulatsi Mujarrad Bab II','memukul — shahih salim'],
    ['فَتَحَ','يَفْتَحُ','Tsulatsi Mujarrad Bab III','membuka — mahmuz/shahih'],
    ['عَلِمَ','يَعْلَمُ','Tsulatsi Mujarrad Bab IV','mengetahui — shahih'],
    ['كَرُمَ','','Tsulatsi Mujarrad Bab V','mulia — dhammah di madhi'],
    ['وَعَدَ','يَعِدُ','Mu\'tal Mitsal (waw)','berjanji — fa\' waw'],
    ['قَالَ','يَقُوْلُ','Mu\'tal Ajwaf','berkata — \'ain illah'],
    ['دَعَا','يَدْعُوْ','Mu\'tal Naqish','memanggil — lam waw'],
    ['مَدَّ','يَمُدُّ','Shahih Mudha\'af','memanjangkan'],
    ['أَكْرَمَ','','أَفْعَلَ — Mazid 1 huruf','memuliakan'],
    ['عَلَّمَ','','فَعَّلَ — Mazid 1 huruf','mengajarkan'],
    ['قَاتَلَ','','فَاعَلَ — Mazid 1 huruf','memerangi'],
    ['اِنْكَسَرَ','','اِنْفَعَلَ — Mazid 2 huruf','menjadi patah'],
    ['اِجْتَمَعَ','','اِفْتَعَلَ — Mazid 2 huruf','berkumpul'],
    ['تَعَلَّمَ','','تَفَعَّلَ — Mazid 2 huruf','belajar'],
    ['تَنَاصَرَ','','تَفَاعَلَ — Mazid 2 huruf','saling menolong'],
    ['اِسْتَغْفَرَ','','اِسْتَفْعَلَ — Mazid 3 huruf','meminta ampun'],
    ['دَحْرَجَ','','فَعْلَلَ — Ruba\'i Mujarrad','menggelindingkan'],
    ['تَدَحْرَجَ','','تَفَعْلَلَ — Ruba\'i Mazid','bergelinding'],
  ];

  el.innerHTML = `
  <div class="mt-card">
    <div class="mt-card-header">
      <span class="mt-step-badge">i</span>
      <span>Contoh Fi'il untuk Dicoba</span>
      <button class="btn btn-sm btn-outline" style="margin-left:auto;" onclick="document.getElementById('mt-examples').classList.add('hidden')">Tutup</button>
    </div>
    <p style="font-size:.82rem;color:var(--text-muted);margin-bottom:14px;">Klik salah satu untuk langsung mengisinya ke kolom input.</p>
    <div class="mt-examples-grid">
      ${examples.map(([f, m, j, k]) => `
        <div class="mt-example-item" onclick="mtFillExample('${f}','${m}')">
          <div class="mt-ex-ar">${f}</div>
          <div class="mt-ex-jenis">${j}</div>
          <div class="mt-ex-ket">${k}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

function mtFillExample(madhi, mudhari) {
  const inp = document.getElementById('mt-madhi-input');
  if (inp) { inp.value = madhi; onMadhiInput(madhi); }
  MT.mudhari = mudhari;
  document.getElementById('mt-examples').classList.add('hidden');
  doAnalyze();
  if (mudhari) {
    setTimeout(() => {
      const mInp = document.getElementById('mt-mudhari-input');
      if (mInp) { mInp.value = mudhari; doReanalyzeWithMudhari(); }
    }, 200);
  }
}

/* ─────────────────────────────────
   UTILITIES
   ───────────────────────────────── */
function mtReset() {
  MT = { info:null, ushuli:null, lughawi:null, step:1, mudhari:'', selectedBentuk:'ushuli' };
  const inp = document.getElementById('mt-madhi-input');
  if (inp) { inp.value = ''; }
  ['mt-step2','mt-step3','mt-step4','mt-examples'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.add('hidden'); el.innerHTML = ''; }
  });
  const hint = document.getElementById('mt-live-hint');
  if (hint) hint.innerHTML = '';
}

function mtCopyResult() {
  const card = document.getElementById('mt-result-card');
  if (!card) return;
  const text = card.innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Hasil tashrif telah disalin ke clipboard.');
  });
}
