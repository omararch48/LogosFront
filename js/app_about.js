const names = document.querySelectorAll('.about__name h2');
let nameIndex = 0;
const leftArrow = document.querySelector('.fa-circle-arrow-left');
const rightArrow = document.querySelector('.fa-circle-arrow-right');



const cardInnerContents = document.querySelectorAll('.about__card-inner');








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