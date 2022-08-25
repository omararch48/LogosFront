const jsConfetti = new JSConfetti();
const welcomeButton = document.querySelector('.button-modal.modal-welcome');


setTimeout(() => {
    jsConfetti.addConfetti();
    setTimeout(() => {
        jsConfetti.addConfetti();
        setTimeout(() => {
            jsConfetti.addConfetti();
            welcomeButton.click();
        }, 700);
    }, 700);
}, 700);




