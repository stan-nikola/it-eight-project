(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open-hero]"),
    closeModalBtn: document.querySelector("[data-modal-close-hero]"),
    modal: document.querySelector("[data-modal-hero]"),
  };

  refs.openModalBtn.forEach(el => el.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");

    if (refs.modal.classList.contains("is-hidden")) {
      document.body.dispatchEvent(new Event("closeSideNav"))
    }
  }
})();