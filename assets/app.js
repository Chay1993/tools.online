const TOOLS_DATA = [
  {
    id: 'land-converter',
    url: 'tools/land-converter.html',
    title: 'แปลงหน่วยที่ดิน (ไร่-งาน-วา / ตร.ม.)',
    category: 'อสังหาฯ & งานช่าง',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    icon: 'map-pin',
    iconClass: 'text-emerald-500',
    popular: true,
    desc: 'แปลงหน่วยที่ดินไทยเป็นตารางเมตรและกลับด้าน พร้อมคำนวณคร่าวๆ จากขนาดแปลง'
  },
  {
    id: 'btu-calc',
    url: 'tools/btu-calc.html',
    title: 'คำนวณ BTU แอร์ตามขนาดห้อง',
    category: 'อสังหาฯ & งานช่าง',
    badgeClass: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    icon: 'wind',
    iconClass: 'text-teal-500',
    popular: true,
    desc: 'ประเมิน BTU เครื่องปรับอากาศจากกว้าง × ยาว × สูง ทิศทางแดด และจำนวนคน'
  },
  {
    id: 'tile-cement-calc',
    url: 'tools/tile-cement-calc.html',
    title: 'คำนวณกระเบื้อง & ปูนก่อ/ฉาบ',
    category: 'อสังหาฯ & งานช่าง',
    badgeClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    icon: 'layout-grid',
    iconClass: 'text-orange-500',
    popular: false,
    desc: 'กะจำนวนแผ่นกระเบื้องเผื่อตัดเสีย และปริมาณปูนสำหรับงานพื้น ผนัง ก่อ หรือฉาบ'
  },
  {
    id: 'vat-discount-calc',
    url: 'tools/vat-discount-calc.html',
    title: 'คำนวณ VAT 7% และส่วนลด',
    category: 'การเงิน & ชีวิตประจำวัน',
    badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    icon: 'percent',
    iconClass: 'text-indigo-500',
    popular: true,
    desc: 'บวก VAT 7% ถอด VAT ออกจากราคารวม คิดส่วนลดเปอร์เซ็นต์ และส่วนลดซ้อน'
  },
  {
    id: 'loan-calc',
    url: 'tools/loan-calc.html',
    title: 'คำนวณค่างวดผ่อนบ้านและรถ',
    category: 'การเงิน & ชีวิตประจำวัน',
    badgeClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    icon: 'landmark',
    iconClass: 'text-blue-500',
    popular: true,
    desc: 'จำลองค่างวดรายเดือนและดอกเบี้ยรวม ทั้งแบบลดต้นลดดอกและดอกเบี้ยคงที่'
  },
  {
    id: 'bill-split',
    url: 'tools/bill-split.html',
    title: 'หารบิลค่าอาหารและค่าใช้จ่ายกลุ่ม',
    category: 'การเงิน & ชีวิตประจำวัน',
    badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    icon: 'receipt',
    iconClass: 'text-amber-500',
    popular: false,
    desc: 'แบ่งยอดบิลร่วมกันอย่างยุติธรรม รองรับ Service Charge, VAT และส่วนลด'
  },
  {
    id: 'salary-tax-calc',
    url: 'tools/salary-tax-calc.html',
    title: 'คำนวณเงินเดือนสุทธิ & ภาษีเบื้องต้น',
    category: 'การเงิน & ชีวิตประจำวัน',
    badgeClass: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    icon: 'wallet',
    iconClass: 'text-cyan-500',
    popular: false,
    desc: 'ประมาณการเงินเดือนรับสุทธิหลังหักประกันสังคมและภาษีเงินได้บุคคลธรรมดาเบื้องต้น'
  },
  {
    id: 'word-counter',
    url: 'tools/word-counter.html',
    title: 'นับคำ นับตัวอักษร และเวลาอ่าน',
    category: 'ข้อความ & ยูทิลิตี้',
    badgeClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    icon: 'file-text',
    iconClass: 'text-purple-500',
    popular: false,
    desc: 'นับจำนวนคำ อักขระ (เว้นวรรค/ไม่เว้นวรรค) บรรทัด และเวลาอ่านโดยประมาณ'
  },
  {
    id: 'qr-generator',
    url: 'tools/qr-generator.html',
    title: 'สร้าง QR Code จากลิงก์และข้อความ',
    category: 'ข้อความ & ยูทิลิตี้',
    badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    icon: 'qr-code',
    iconClass: 'text-rose-500',
    popular: true,
    desc: 'สร้าง QR Code สำหรับ URL ข้อความ หรือข้อมูลติดต่อแบบรวดเร็วในเบราว์เซอร์'
  },
  {
    id: 'password-generator',
    url: 'tools/password-generator.html',
    title: 'สุ่มรหัสผ่านปลอดภัย (Password Generator)',
    category: 'ข้อความ & ยูทิลิตี้',
    badgeClass: 'bg-slate-500/10 text-slate-600 dark:text-slate-300',
    icon: 'key-round',
    iconClass: 'text-slate-500',
    popular: false,
    desc: 'สร้างรหัสผ่านแบบสุ่ม เลือกความยาวและชนิดตัวอักษรได้ตามต้องการ'
  }
];

const GUIDES_DATA = [
  {
    id: 'loan-guide',
    url: 'guides/loan-calculation-guide.html',
    toolUrl: 'tools/loan-calc.html',
    title: 'วิธีคำนวณค่างวดผ่อนบ้านและรถ เบื้องต้น',
    categoryLabel: 'การเงิน & ชีวิตประจำวัน',
    badgeClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    date: '2026-11-20',
    excerpt: 'เปรียบเทียบดอกเบี้ยลดต้นลดดอกกับดอกเบี้ยคงที่ พร้อมตัวอย่างคำนวณค่างวดและข้อควรรู้'
  },
  {
    id: 'vat-discount-guide',
    url: 'guides/vat-discount-guide.html',
    toolUrl: 'tools/vat-discount-calc.html',
    title: 'วิธีคำนวณ VAT 7% และส่วนลดสินค้า',
    categoryLabel: 'การเงิน & ชีวิตประจำวัน',
    badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    date: '2026-11-19',
    excerpt: 'สูตรบวก VAT 7% ถอด VAT ออกจากราคารวม และวิธีคิดส่วนลดซ้อนแบบไม่สับสน'
  },
  {
    id: 'btu-guide',
    url: 'guides/btu-calculation-guide.html',
    toolUrl: 'tools/btu-calc.html',
    title: 'วิธีคำนวณ BTU แอร์ให้เหมาะกับขนาดห้อง',
    categoryLabel: 'อสังหาฯ & งานช่าง',
    badgeClass: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
    date: '2026-11-18',
    excerpt: 'ตารางเทียบขนาดห้องกับ BTU เบื้องต้น ปัจจัยแดดและจำนวนคน รวมถึงข้อควรระวังในการเลือกแอร์'
  },
  {
    id: 'land-guide',
    url: 'guides/land-measurement-guide.html',
    toolUrl: 'tools/land-converter.html',
    title: 'วิธีแปลงหน่วยที่ดิน ไร่ งาน ตารางวา เป็นตารางเมตร',
    categoryLabel: 'อสังหาฯ & งานช่าง',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    date: '2026-11-17',
    excerpt: 'ทำความเข้าใจหน่วยที่ดินมาตรฐานไทย ตารางเทียบหน่วย และตัวอย่างการคำนวณแปลงที่ดินจริง'
  }
];

function getBasePrefix() {
  const path = window.location.pathname;
  if (/\/(tools|guides|pages)(\/|$)/.test(path)) {
    return '../';
  }
  return './';
}

function applyRootLinks(rootEl = document) {
  const prefix = getBasePrefix();
  rootEl.querySelectorAll('[data-root-href]').forEach(el => {
    const target = el.getAttribute('data-root-href');
    if (target) {
      el.setAttribute('href', prefix + target);
    }
  });
}

function updateThemeIcons(isDark) {
  const sun = document.getElementById('theme-icon-sun');
  const moon = document.getElementById('theme-icon-moon');
  if (sun && moon) {
    sun.classList.toggle('hidden', !isDark);
    moon.classList.toggle('hidden', isDark);
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
}

async function fetchTemplateWithFallback(candidates) {
  for (const url of candidates) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (res.ok) {
        return await res.text();
      }
    } catch (_) {
      // ลอง path ถัดไป
    }
  }
  return null;
}

async function loadTemplates() {
  const prefix = getBasePrefix();
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  const headerCandidates = Array.from(new Set([`${prefix}components/header.html`, 'components/header.html', '../components/header.html']));
  const footerCandidates = Array.from(new Set([`${prefix}components/footer.html`, 'components/footer.html', '../components/footer.html']));

  if (headerEl) {
    const html = await fetchTemplateWithFallback(headerCandidates);
    if (html) {
      headerEl.innerHTML = html;
      applyRootLinks(headerEl);
    }
  }

  if (footerEl) {
    const html = await fetchTemplateWithFallback(footerCandidates);
    if (html) {
      footerEl.innerHTML = html;
      applyRootLinks(footerEl);
    }
  }

  updateThemeIcons(document.documentElement.classList.contains('dark'));
  if (window.lucide) lucide.createIcons();
}

function renderHomeCards(filterQuery = '') {
  const grid = document.getElementById('tools-grid');
  const countLabel = document.getElementById('tools-count-label');
  if (!grid) return;

  const prefix = getBasePrefix();
  const q = filterQuery.trim().toLowerCase();

  const filtered = TOOLS_DATA.filter(tool => {
    if (!q) return true;
    return (
      tool.title.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.desc.toLowerCase().includes(q)
    );
  });

  if (countLabel) {
    countLabel.textContent = q ? `พบ ${filtered.length} จาก ${TOOLS_DATA.length} รายการ` : `ทั้งหมด ${TOOLS_DATA.length} รายการ`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-sm text-slate-500 dark:text-slate-400">
        ไม่พบเครื่องมือที่ตรงกับคำค้นหา "${filterQuery}"
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(tool => `
    <a href="${prefix}${tool.url}" class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 p-5 flex flex-col justify-between transition-all group">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-[11px] font-medium px-2.5 py-0.5 ${tool.badgeClass} rounded-full">${tool.category}</span>
          <i data-lucide="${tool.icon}" class="w-4 h-4 ${tool.iconClass}"></i>
        </div>
        <h3 class="font-semibold text-base text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">${tool.title}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">${tool.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-medium text-brand-600 dark:text-brand-400">
        <span>เปิดใช้งาน</span>
        <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-0.5 transition-transform"></i>
      </div>
    </a>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderSidebarPopular() {
  const list = document.getElementById('popular-tools-list');
  if (!list) return;
  const prefix = getBasePrefix();
  const popular = TOOLS_DATA.filter(t => t.popular);

  list.innerHTML = popular.map(tool => `
    <li>
      <a href="${prefix}${tool.url}" class="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors">
        <span class="flex items-center gap-2 truncate">
          <i data-lucide="${tool.icon}" class="w-4 h-4 shrink-0 ${tool.iconClass}"></i>
          <span class="truncate">${tool.title}</span>
        </span>
        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 shrink-0"></i>
      </a>
    </li>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function getSortedGuides() {
  return [...GUIDES_DATA].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderLatestGuides(limit = 3) {
  const container = document.getElementById('latest-guides-list');
  if (!container) return;
  const prefix = getBasePrefix();
  const latest = getSortedGuides().slice(0, limit);

  container.innerHTML = latest.map(guide => `
    <li>
      <a href="${prefix}${guide.url}" class="block p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
        <div class="flex items-center justify-between text-[11px] text-slate-400 mb-0.5">
          <span>${guide.categoryLabel}</span>
          <span>${guide.date}</span>
        </div>
        <div class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 line-clamp-2">
          ${guide.title}
        </div>
      </a>
    </li>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderGuidesCatalog() {
  const container = document.getElementById('guides-catalog-container');
  if (!container) return;
  const prefix = getBasePrefix();
  const sorted = getSortedGuides();

  container.innerHTML = sorted.map(guide => `
    <article class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-[11px] font-medium px-2.5 py-0.5 ${guide.badgeClass} rounded-full">${guide.categoryLabel}</span>
          <span class="text-[11px] text-slate-400">${guide.date}</span>
        </div>
        <h2 class="font-semibold text-base text-slate-900 dark:text-white">${guide.title}</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">${guide.excerpt}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <a href="${prefix}${guide.url}" class="font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1">
          <span>อ่านคู่มือ</span>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </a>
        <a href="${prefix}${guide.toolUrl}" class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">เปิดเครื่องมือ</a>
      </div>
    </article>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function ensureDonateModal() {
  if (document.getElementById('donate-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'donate-modal';
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-sm w-full p-6 space-y-4 shadow-xl">
      <div class="flex items-center justify-between">
        <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i data-lucide="heart" class="w-4 h-4 text-amber-500 fill-current"></i> สนับสนุนเว็บไซต์
        </h3>
        <button type="button" onclick="closeDonateModal()" aria-label="ปิดหน้าต่าง" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        ร่วมสนับสนุนค่าดูแลเซิร์ฟเวอร์และการพัฒนาเครื่องมือใหม่ๆ บน Tools.online ได้ผ่าน PromptPay QR
      </p>
      <div class="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-4 text-center space-y-2">
        <div class="w-36 h-36 mx-auto rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">
          PromptPay QR
        </div>
        <p class="text-[11px] text-slate-400">สแกนด้วยแอปธนาคารหรือ Mobile Banking</p>
      </div>
      <button type="button" onclick="closeDonateModal()" class="w-full py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-colors">
        ปิดหน้าต่าง
      </button>
    </div>
  `;
  modal.addEventListener('click', e => {
    if (e.target === modal) closeDonateModal();
  });
  document.body.appendChild(modal);
  if (window.lucide) lucide.createIcons();
}

function openDonateModal() {
  ensureDonateModal();
  const modal = document.getElementById('donate-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeDonateModal() {
  const modal = document.getElementById('donate-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function bindSearchInput() {
  const input = document.getElementById('tool-search-input');
  if (!input) return;
  input.addEventListener('input', e => {
    renderHomeCards(e.target.value);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  applyRootLinks(document);
  updateThemeIcons(document.documentElement.classList.contains('dark'));
  loadTemplates();
  renderHomeCards();
  renderSidebarPopular();
  renderLatestGuides();
  renderGuidesCatalog();
  bindSearchInput();
  if (window.lucide) lucide.createIcons();
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
