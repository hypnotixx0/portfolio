// Fade out header, main, and footer on scroll
const elements = [document.getElementById('header'), document.getElementById('main-content'), document.getElementById('footer')];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 200;
  let opacity = 1 - scrollY / maxScroll;
  if(opacity < 0) opacity = 0;
  elements.forEach(el => el.style.opacity = opacity);
});
