export const appConfetti = () => {


    const jsConfetti = new JSConfetti();
    const welcomeButton = document.querySelector('.modal-button.name-modal-welcome');
    
    
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
}


