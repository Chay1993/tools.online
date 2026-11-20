const TOOLS_DATA = [
  { id: 'land-converter', url: 'tools/land-converter.html', title: 'แปลงหน่วยที่ดินไทย', category: 'real-estate', categoryLabel: 'อสังหาฯ & งานช่าง', desc: 'คำนวณแปลงหน่วยระหว่าง ตารางเมตร และ ไร่-งาน-ตารางวา อัตโนมัติ', icon: 'map-pin', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', popular: true },
  { id: 'tile-calc', url: 'tools/tile-calc.html', title: 'คำนวณปูน & กระเบื้อง', category: 'real-estate', categoryLabel: 'อสังหาฯ & งานช่าง', desc: 'คำนวณพื้นที่ห้องและจำนวนแผ่นกระเบื้องพร้อมเผื่อเศษเสีย 10%', icon: 'grid', colorClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', popular: false },
  { id: 'btu-calc', url: 'tools/btu-calc.html', title: 'คำนวณ BTU แอร์', category: 'real-estate', categoryLabel: 'อสังหาฯ & งานช่าง', desc: 'หาขนาด BTU แอร์ที่เหมาะสมกับขนาดห้องและปัจจัยความร้อน', icon: 'wind', colorClass: 'bg-teal-500/10 text-teal-600 dark:text-teal-400', popular: true },
  { id: 'loan-calc', url: 'tools/loan-calc.html', title: 'คำนวณค่างวดผ่อนบ้าน/รถ', category: 'finance', categoryLabel: 'การเงิน & ชีวิตประจำวัน', desc: 'คำนวณเงินงวดจ่ายรายเดือน ดอกเบี้ยรวม และยอดกู้ทั้งหมด', icon: 'landmark', colorClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400', popular: true },
  { id: 'vat-discount-calc', url: 'tools/vat-discount-calc.html', title: 'คำนวณส่วนลด & VAT 7%', category: 'finance', categoryLabel: 'การเงิน & ชีวิตประจำวัน', desc: 'คิดส่วนลดสินค้า และบวก/ถอน VAT 7% ได้ในคลิกเดียว', icon: 'percent', colorClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400', popular: true },
  { id: 'split-bill-calc', url: 'tools/split-bill-calc.html', title: 'หารค่าอาหาร / เคลียร์บิล', category: 'finance', categoryLabel: 'การเงิน & ชีวิตประจำวัน', desc: 'คิดเงินหารเท่า คิด Service Charge และ VAT รวมต่อคน', icon: 'receipt', colorClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400', popular: false },
  { id: 'word-counter', url: 'tools/word-counter.html', title: 'นับจำนวนคำ & อักขระ', category: 'text', categoryLabel: 'ข้อความ & คอนเทนต์', desc: 'นับจำนวนคำ ตัวอักษร บรรทัด แบบเรียลไทม์', icon: 'text-cursor-input', colorClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400', popular: true },
  { id: 'text-cleaner', url: 'tools/text-cleaner.html', title: 'จัดระเบียบข้อความ (Text Cleaner)', category: 'text', categoryLabel: 'ข้อความ & คอนเทนต์', desc: 'ลบเว้นวรรคซ้ำ ลบบรรทัดว่าง และตัดอักขระพิเศษ', icon: 'sparkles', colorClass: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400', popular: false },
  { id: 'case-converter', url: 'tools/case-converter.html', title: 'แปลงตัวพิมพ์เล็ก-ใหญ่', category: 'text', categoryLabel: 'ข้อความ & คอนเทนต์', desc: 'แปลงข้อความอังกฤษเป็น UPPERCASE, lowercase, Title Case', icon: 'type', colorClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400', popular: false },
  { id: 'qr-generator', url: 'tools/qr-generator.html', title: 'สร้าง QR Code', category: 'media', categoryLabel: 'ปรับภาพ & สื่อ', desc: 'สร้างภาพ QR Code จากข้อความ หรือ URL พร้อมดาวน์โหลด', icon: 'qr-code', colorClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400', popular: true }
];

function getBasePrefix() {
  const p = window.location.pathname;
  return (p.includes('/tools/') || p.includes('/pages/')) ? '../' : './';
}

function updateThemeIcons(isDark) {
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (sun) sun.style.display = isDark ? 'block' : 'none';
  if (moon) moon.style.display = isDark ? 'none' : 'block';
}

function toggleTheme() {
  const root = document.documentElement;
  const isDark = !root.classList.contains('dark');
  root.classList.toggle('dark', isDark);
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  updateThemeIcons(isDark);
}

function applyRootLinks(container, prefix) {
  if (!container) return;
  container.querySelectorAll('[data-root-href]').forEach((el) => {
    const target = el.getAttribute('data-root-href');
    el.setAttribute('href', prefix + target);
  });
}

async function loadTemplates() {
  const prefix = getBasePrefix();
  try {
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
      headerEl.className = "sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800";
      const resHeader = await fetch(prefix + 'components/header.html');
      if (resHeader.ok) {
        headerEl.innerHTML = await resHeader.text();
        applyRootLinks(headerEl, prefix);
      }
    }

    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
      footerEl.className = "mt-auto bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6";
      const resFooter = await fetch(prefix + 'components/footer.html');
      if (resFooter.ok) {
        footerEl.innerHTML = await resFooter.text();
        applyRootLinks(footerEl, prefix);
      }
    }

    if (window.lucide) lucide.createIcons();
    updateThemeIcons(document.documentElement.classList.contains('dark'));
  } catch (err) {
    console.error('Error loading templates:', err);
  }
}

function openDonateModal() {
  const existing = document.getElementById('donate-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'donate-modal';
  modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4";
  modal.innerHTML = `
    <div class="bg-white dark:bg-slate-900 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-slate-200 dark:border-slate-800 text-center relative">
      <button type="button" onclick="document.getElementById('donate-modal').remove()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-3">
        <i data-lucide="coffee" class="w-6 h-6"></i>
      </div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">สนับสนุนผู้พัฒนา Tools.online</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">ขอบคุณที่ใช้งานเครื่องมือของเราครับ ทุกการสนับสนุนช่วยเป็นกำลังใจให้พัฒนาเครื่องมือฟรีเพิ่มเติม</p>
      <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">QR Code สนับสนุน (PromptPay)</p>
        <div class="w-32 h-32 bg-white mx-auto rounded-lg flex items-center justify-center border border-slate-200 shadow-inner">
          <span class="text-[10px] text-slate-400 text-center px-2">ใส่รูป QR PromptPay<br>ของคุณที่นี่</span>
        </div>
      </div>
      <button type="button" onclick="document.getElementById('donate-modal').remove()" class="w-full py-2.5 text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl">ปิดหน้าต่าง</button>
    </div>
  `;
  document.body.appendChild(modal);
  if (window.lucide) lucide.createIcons();
}

function renderSidebarPopular() {
  const list = document.getElementById('popular-tools-list');
  if (!list) return;
  const prefix = getBasePrefix();
  list.innerHTML = TOOLS_DATA.filter(t => t.popular).map(t => `
    <li>
      <a href="${prefix}${t.url}" class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
        <span class="flex items-center gap-2 truncate">
          <i data-lucide="${t.icon}" class="w-4 h-4 text-slate-400"></i>
          ${t.title}
        </span>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
      </a>
    </li>
  `).join('');
  if (window.lucide) lucide.createIcons();
}

let currentCat = 'all';
function renderHomeCards(searchText = '') {
  const container = document.getElementById('tools-cards-container');
  if (!container) return;

  const filtered = TOOLS_DATA.filter(t => {
    const matchCat = currentCat === 'all' || t.category === currentCat;
    const matchText = t.title.toLowerCase().includes(searchText.toLowerCase()) || t.desc.toLowerCase().includes(searchText.toLowerCase());
    return matchCat && matchText;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"><p>ไม่พบเครื่องมือที่คุณกำลังค้นหา</p></div>`;
    return;
  }

  container.innerHTML = filtered.map(tool => `
    <a href="${tool.url}" class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-brand-500 dark:hover:border-brand-500 hover:shadow-md transition-all group flex flex-col justify-between block">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl ${tool.colorClass} flex items-center justify-center transition-transform group-hover:scale-110">
            <i data-lucide="${tool.icon}" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">${tool.categoryLabel}</span>
        </div>
        <h3 class="font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">${tool.title}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${tool.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-medium text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform">
        <span>เปิดใช้งาน</span>
        <i data-lucide="chevron-right" class="w-4 h-4 ml-0.5"></i>
      </div>
    </a>
  `).join('');
  if (window.lucide) lucide.createIcons();
}

function filterCategory(cat) {
  currentCat = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.className = btn.dataset.cat === cat
      ? "cat-btn active px-4 py-2 text-sm font-medium rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm flex items-center gap-2 whitespace-nowrap"
      : "cat-btn px-4 py-2 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-2 whitespace-nowrap";
  });
  renderHomeCards(document.getElementById('search-input')?.value || '');
}

window.addEventListener('DOMContentLoaded', () => {
  const isDarkNow = document.documentElement.classList.contains('dark');
  updateThemeIcons(isDarkNow);
  loadTemplates();
  renderSidebarPopular();
  renderHomeCards();
  if (window.lucide) lucide.createIcons();
});

function getBasePrefix() {
  const p = window.location.pathname;
  return (
    p.includes('/tools/') ||
    p.includes('/pages/') ||
    p.includes('/guides/')
  ) ? '../' : './';
}