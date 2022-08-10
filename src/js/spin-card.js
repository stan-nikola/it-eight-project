(() => {
    const refs = {
        cardButtons:document.querySelectorAll(".spin-card-button")
  };

  refs.cardButtons.forEach(el => el.addEventListener("click", toggleSpinCard));


  function toggleSpinCard(evt) {
    const card = evt.target.closest(".spin-card");
    if (!card) return;

    if (card.classList.contains("spin-card-back")) {
      card.classList.add("spin-card-front");
      card.classList.remove("spin-card-back");
    }
    else {
      card.classList.remove("spin-card-front");
      card.classList.add("spin-card-back");
    }
  }
})();