(() => {
  const refs = {
    cardButtons: document.querySelectorAll('.products__button'),
  };

  refs.cardButtons.forEach(el =>
    el.addEventListener('click', evt => toggleSpinCard(el))
  );

  function toggleSpinCard(button) {
    const card = button.closest('.products__item');
    if (!card) return;

    const overlay = card.querySelector('.products__overlay');
    if (!overlay) return;

    overlay.classList.toggle('products__overlay--show');
    button.classList.toggle('products__button--spinned');
  }
})();
