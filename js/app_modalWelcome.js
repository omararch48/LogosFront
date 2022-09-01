const welcomeModal = document.querySelector('.name-modal-welcome.modal-layout'),
      okButton = document.querySelector('.name-modal-welcome.modal-layout .modal__button.modal__ok')


okButton.addEventListener('click', () => {
    welcomeModal.classList.remove('modal-active');
});
