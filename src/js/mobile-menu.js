(() => {
  const refs = {
    openNavBtn: document.querySelector('[data-mobile-nav-open]'),
    closeNavBtn: document.querySelector('[data-mobile-nav-close]'),
    nav: document.querySelector('[data-mobile-nav]'),
  };

  refs.openNavBtn.addEventListener('click', toggleModal);
  refs.closeNavBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.nav.classList.toggle('is-hidden');
  }
})();
