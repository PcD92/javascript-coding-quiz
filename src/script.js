// modal variables//
const startupButton = document.querySelector('#startup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

startupButton.addEventListener('click', () => {
    modal.classList.add('is-active')
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});