// mascot.js
(function () {
  // Path to your mascot image (ensure this exists in /assets/)
  var mascotImgSrc = './assets/cybereditor.gif';

  // Create the mascot element
  var mascot = document.createElement('img');
  mascot.src = mascotImgSrc;
  mascot.alt = 'Cybersecurity & Video Editor Mascot';
  mascot.style.position = 'fixed';
  mascot.style.left = '50%';
  mascot.style.top = '50%';
  mascot.style.width = '80px';
  mascot.style.height = '80px';
  mascot.style.zIndex = '99999';
  mascot.style.pointerEvents = 'none';
  mascot.style.userSelect = 'none';
  mascot.style.transition = 'filter 0.2s';
  mascot.style.filter = 'drop-shadow(0 4px 16px rgba(0,0,0,0.25))';
  mascot.style.opacity = '0.95';

  document.body.appendChild(mascot);

  // Initial position (center)
  var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var target = { x: pos.x, y: pos.y };
  var ease = 0.15; // Easing factor (lower = more lag)

  // Mouse move handler
  window.addEventListener('mousemove', function (e) {
    target.x = e.clientX;
    target.y = e.clientY;
  });

  // Animation loop
  function animate() {
    pos.x += (target.x - pos.x) * ease;
    pos.y += (target.y - pos.y) * ease;
    mascot.style.transform = 'translate(-50%, -50%) translate(' + pos.x + 'px,' + pos.y + 'px)';
    requestAnimationFrame(animate);
  }
  animate();

  // Keep mascot on top and visible on resize/scroll
  window.addEventListener('resize', function () {
    // No-op: mascot is fixed, so nothing needed
  });
  window.addEventListener('scroll', function () {
    // No-op: mascot is fixed, so nothing needed
  });
})(); 