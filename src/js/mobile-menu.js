(() => {
  const refs = {
    openNavBtn: document.querySelector('[data-mobile-nav-open]'),
    closeNavBtn: document.querySelector('[data-mobile-nav-close]'),
    nav: document.querySelector('[data-mobile-nav]'),
  };

  refs.openNavBtn.addEventListener('click', toggleModal);
  refs.closeNavBtn.addEventListener('click', toggleModal);
  document.body.addEventListener('closeSideNav', hideModal);

  function toggleModal() {
    refs.nav.classList.toggle('is-hidden');
  }

  function hideModal() {
    if (!refs.nav.classList.contains('is-hidden')) {
      refs.nav.classList.add('is-hidden');
    }
  }
})();
