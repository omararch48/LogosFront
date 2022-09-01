let nameIndex = 0;
const names = document.querySelectorAll('.about__name h2'),
      buttons = document.querySelectorAll('.modal-button'),
      modals = document.querySelectorAll('.modal-team'),
      modalsOk = document.querySelectorAll('.modal-team .modal__button.modal__ok'),
      card = document.querySelector('.about__card'),
      leftArrow = document.querySelector('.fa-circle-arrow-left'),
      rightArrow = document.querySelector('.fa-circle-arrow-right'),
      cardInnerContents = document.querySelectorAll('.about__card-inner');


leftArrow.addEventListener('click', () => {
    names[nameIndex].classList.remove('selected');
    cardInnerContents[nameIndex].classList.remove('about__card-inner--selected');
    if (nameIndex == 0) {
        nameIndex = names.length - 1;
    } else {
        nameIndex--;
    }
    names[nameIndex].classList.add('selected');
    cardInnerContents[nameIndex].classList.add('about__card-inner--selected');
});

rightArrow.addEventListener('click', () => {
    names[nameIndex].classList.remove('selected');
    cardInnerContents[nameIndex].classList.remove('about__card-inner--selected');
    if (nameIndex == names.length - 1) {
        nameIndex = 0;
    } else {
        nameIndex++;
    }
    names[nameIndex].classList.add('selected');
    cardInnerContents[nameIndex].classList.add('about__card-inner--selected');
});

card.addEventListener('click', () => {
    setTimeout(() => {
        buttons[nameIndex].click();
    }, 100);
});

modalsOk.forEach((element) => {
    element.addEventListener('click', () => {
        modals[nameIndex].classList.remove('modal-active');
    });
});