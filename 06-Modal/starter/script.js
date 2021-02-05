'use strict';

const modal_btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// eventListeners
modal_btns.forEach(btn => {
    btn.addEventListener("click", showModal);
})
btnCloseModal.addEventListener('click', closeModal);

// close modal if clicks in ESC key in keyboard
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
});