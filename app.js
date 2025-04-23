const root = document.documentElement;
const toggle = document.querySelector('#color-theme');

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  console.log("Hi");
});