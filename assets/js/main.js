(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle with prefers-color-scheme fallback
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const storeKey = 'theme';
  const saved = localStorage.getItem(storeKey);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (saved === 'light' || (!saved && prefersLight)) root.classList.add('light');
  if (toggle){
    toggle.addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem(storeKey, root.classList.contains('light') ? 'light' : 'dark');
    });
  }
})();

