// Smooth-scroll for in-page navigation.
// CSS `scroll-behavior: smooth` handles most of this; this guards against
// missing targets and keeps the URL hash in sync.
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', link.getAttribute('href'));
  });
});

// Autoplaying muted loops are decorative; pause them when off-screen so a page
// full of videos doesn't keep decoding frames nobody is looking at.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.play().catch(() => {});
        } else {
          target.pause();
        }
      });
    },
    { rootMargin: '200px' }
  );

  document.querySelectorAll('video[autoplay]').forEach((v) => observer.observe(v));
}
