// Universal pointer tracker — attach to each .cur box. Writes --x/--y/--angle/
// --speed and toggles .is-active (pointer inside) and .is-near (near centre,
// used by the magnetic cursor). Everything else is pure CSS.
function bindCursor(box) {
  let lx = 0, ly = 0, has = false, idle;
  const set = (p, v) => box.style.setProperty(p, v);
  box.addEventListener('pointermove', (e) => {
    const r = box.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (has) {
      const dx = x - lx, dy = y - ly, d = Math.hypot(dx, dy);
      if (d > 0.5) set('--angle', Math.atan2(dy, dx).toFixed(3) + 'rad');
      set('--speed', Math.min(1, d / 32).toFixed(3));
    }
    set('--x', x.toFixed(1) + 'px');
    set('--y', y.toFixed(1) + 'px');
    box.classList.toggle('is-near', Math.hypot(x - r.width / 2, y - r.height / 2) < 60);
    box.classList.add('is-active');
    lx = x; ly = y; has = true;
    clearTimeout(idle);
    idle = setTimeout(() => set('--speed', '0'), 120); // relax when the pointer stops
  });
  box.addEventListener('pointerleave', () => {
    box.classList.remove('is-active', 'is-near');
    set('--speed', '0');
    has = false;
  });
}
document.querySelectorAll('.cur').forEach(bindCursor);
