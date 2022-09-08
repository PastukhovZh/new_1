const openModal = document.querySelectorAll('[data-open-modal]');
const closeModal = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openModal.forEach((btnOpenModal) => btnOpenModal.addEventListener("click", toggleModal));
closeModal.addEventListener("click", toggleModal);


function toggleModal() {
    modal.classList.toggle("is-hidden")
}