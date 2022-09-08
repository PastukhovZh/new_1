const openModal = document.querySelector('[data-open-modal]');
const closeModal = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal)


function toggleModal() {
    modal.classList.toggle("is-hidden")
}