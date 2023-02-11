const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('li');
const bodyburger = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
   bodyburger.classList.toggle('stop-scroll');
   burger?.classList.toggle('burger--active');
   nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
   el.addEventListener('click', () => {
   bodyburger.classList.remove('stop-scroll');
   burger?.classList.remove('burger--active');
   nav?.classList.remove('nav--visible');
   });
});