// Isolated cursor module copied from the main site
(function(){
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorRing = document.querySelector('[data-cursor-ring]');
  if(!cursorDot || !cursorRing) return;

  let cursorX = window.innerWidth/2, cursorY = window.innerHeight/2;
  let ringX = cursorX, ringY = cursorY;
  let cursorLoopActive = false;

  function startCursorLoop(){
    if (cursorLoopActive || window.matchMedia('(pointer: coarse)').matches) return;
    cursorLoopActive = true;
    document.body.classList.add('cursor-ready');

    function tick(){
      ringX += (cursorX - ringX) * 0.16;
      ringY += (cursorY - ringY) * 0.16;
      cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(tick);
    }

    tick();
  }

  const magneticSelector = [
      '.solid-button', '.ghost-button', '.pill-button', '.tab', '.postcode button', '.mobile-order',
      '.solid-button.order-link', '.ghost-mini', '.payment-card', '.menu-item', '.store-card',
      'a', 'button', 'input', 'select', 'textarea', 'img', '.card', '.menu-results article'
  ].join(', ');

  let activeTarget = null;

  function updateMagneticTarget(event) {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const target = event.target.closest(magneticSelector);

    if (activeTarget && activeTarget !== target) {
      activeTarget.style.setProperty('--magnet-x', '0px');
      activeTarget.style.setProperty('--magnet-y', '0px');
    }

    activeTarget = target;
    if (!target) {
      document.body.classList.remove('cursor-active');
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    target.style.setProperty('--magnet-x', `${x * 0.18}px`);
    target.style.setProperty('--magnet-y', `${y * 0.28}px`);
    document.body.classList.add('cursor-active');
  }

  function clearMagneticTarget() {
    if (activeTarget) {
      activeTarget.style.setProperty('--magnet-x', '0px');
      activeTarget.style.setProperty('--magnet-y', '0px');
    }
    activeTarget = null;
    document.body.classList.remove('cursor-active');
  }

  window.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    startCursorLoop();
    updateMagneticTarget(event);
  });

  document.addEventListener('mouseleave', clearMagneticTarget);
  document.addEventListener('focusout', clearMagneticTarget);

  window.addEventListener('resize', () => {
    cursorX = window.innerWidth/2; cursorY = window.innerHeight/2;
    ringX = cursorX; ringY = cursorY;
  });

  // Ensure cursor elements are positioned at the end of <body> and above any dialogs/backdrops
  function ensureCursorOnTop() {
    try {
      if (
        cursorRing.parentElement !== document.body ||
        cursorDot.parentElement !== document.body ||
        cursorRing.nextElementSibling !== cursorDot ||
        cursorDot.nextElementSibling !== null
      ) {
        document.body.appendChild(cursorRing);
        document.body.appendChild(cursorDot);
      }
      cursorDot.style.zIndex = '2147483647';
      cursorRing.style.zIndex = '2147483647';
    } catch (e) {
      // ignore
    }
  }

  ensureCursorOnTop();

  // Watch for dialog openings and re-append cursor elements so they remain on top
  let cursorReorderQueued = false;
  const mo = new MutationObserver((records) => {
    let shouldReorder = false;
    for (const r of records) {
      if (r.type === 'attributes' && r.target.tagName === 'DIALOG') {
        shouldReorder = true;
      }
      if (r.addedNodes && r.addedNodes.length) shouldReorder = true;
    }

    if (!shouldReorder || cursorReorderQueued) return;
    cursorReorderQueued = true;
    requestAnimationFrame(() => {
      cursorReorderQueued = false;
      ensureCursorOnTop();
    });
  });

  mo.observe(document.body, { childList: true, attributes: true, attributeFilter: ['open'] });
})();
