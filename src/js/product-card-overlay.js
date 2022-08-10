(() => {
  const refs = {
    cardButtons: document.querySelectorAll('.products__button'),
  };

  refs.cardButtons.forEach(el => el.addEventListener('click', toggleSpinCard));

  function toggleSpinCard(evt) {
    const card = evt.target.closest('.products__item');
    if (!card) return;

    const overlay = card.querySelector('.products__overlay');
    if (!overlay) return;

    overlay.classList.toggle('products__overlay--show');
    evt.target.classList.toggle('products__button--spinned');
  }
})();
