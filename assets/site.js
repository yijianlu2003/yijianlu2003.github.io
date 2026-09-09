/* Photo album lightbox. */
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');
  var shots = [], index = -1, lastFocus = null;

  function collect() {
    shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
  }

  function show(i) {
    if (i < 0) i = shots.length - 1;
    if (i >= shots.length) i = 0;
    index = i;
    var s = shots[index];
    img.src = s.getAttribute('data-src');
    var c = s.getAttribute('data-caption') || '';
    cap.textContent = c;
    cap.hidden = !c;
  }

  function open(i) {
    lastFocus = document.activeElement;
    collect();
    show(i);
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    box.querySelector('.lb-close').focus();
  }

  function close() {
    box.hidden = true;
    img.src = '';
    document.documentElement.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  collect();
  shots.forEach(function (s, i) {
    s.addEventListener('click', function () { open(i); });
  });

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
  });
})();
