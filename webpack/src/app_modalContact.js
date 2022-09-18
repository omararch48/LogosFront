export const appModalContact = () => {


    const socialItems = document.querySelectorAll('.social-section__item'),
          socialButtons = document.querySelectorAll('.modal-button');
    
    socialItems.forEach(function(element, index) {
        element.addEventListener('click', () => {
            socialButtons[index].click();
        });
    });
}