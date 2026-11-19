(() => {
  window.accountManager = { storageKey: key => key, queueSave: () => {} };
  window.accountReady = Promise.resolve();
  const open = document.getElementById('openAccount');
  const close = document.getElementById('closeAccount');
  const overlay = document.getElementById('accountOverlay');
  if (open && overlay) open.addEventListener('click', () => { overlay.style.display = 'grid'; });
  if (close && overlay) close.addEventListener('click', () => { overlay.style.display = 'none'; });
})();
