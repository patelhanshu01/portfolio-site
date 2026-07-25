// Theme toggle — defaults to system preference, remembers choice
const root = document.documentElement, btn = document.getElementById('themeToggle');
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
if (saved === 'dark' || (!saved && prefersDark)) { root.classList.add('dark'); if (btn) btn.textContent = '☀️'; }
if (btn) btn.addEventListener('click', () => {
  const dark = root.classList.toggle('dark');
  btn.textContent = dark ? '☀️' : '🌙';
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});

// Scroll reveal
const obs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); } });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Optional images: if the file exists, show it (used for project card screenshots)
document.querySelectorAll('.pcard .shot img').forEach(img => {
  img.addEventListener('load', () => { img.closest('.shot').style.display = 'block'; });
});
