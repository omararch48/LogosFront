let modalName;
const modalWindows = document.querySelectorAll('.modal-layout'),
      modalActivateButtons = document.querySelectorAll('.button-modal'),
      modalDictionary = {},
      getModalName = (element) => {
        let modalName = '';
        element.classList.forEach((elementClass) => {
            if (elementClass.substring(0, 3) != 'bg-') {
                if (elementClass != 'button-modal' && elementClass != 'modal-layout') {
                    modalName = elementClass;
                }
            }
        });
        return modalName;
    },
    getModalDictionary = () => {
        modalActivateButtons.forEach((element) => {
            let buttonName = getModalName(element);
            modalWindows.forEach((subelement) => {
                if (buttonName == getModalName(subelement)) {
                    modalDictionary[buttonName] = subelement;
                }
            });
        });
    },
    checkInModal = (outModal) => {
        setTimeout(() => {}, 100);
        return outModal;
    };


modalActivateButtons.forEach((element) => {
    element.addEventListener('click', () => {
        modalName = getModalName(element);
        modalDictionary[modalName].classList.add('modal-active');

        let outModal = true,
            modal = document.querySelector(`.${modalName} .modal`),
            modalClose = document.querySelector(`.${modalName} .modal__close`),
            modalAceptButton = document.querySelector(`.${modalName} .modal__ok`),
            modalCloseButton = document.querySelector(`.${modalName} .modal__cancel`);

        modalClose.addEventListener('click', () => {
            modalDictionary[modalName].classList.remove('modal-active');
        });
        
        modal.addEventListener('click', () => {
            outModal = false;
        });
        
        modalDictionary[modalName].addEventListener('click', () => {
            if (checkInModal(outModal)) {
                if (modalDictionary[modalName].classList.contains('modal-active')) {
                    modalDictionary[modalName].classList.remove('modal-active');
                }
            }
            outModal = true;
        });

        modalAceptButton.addEventListener('click', () => {
            modalDictionary[modalName].classList.remove('modal-active');
        });

        if (modalCloseButton) {
            modalCloseButton.addEventListener('click', () => {
                modalDictionary[modalName].classList.remove('modal-active');
            });
        }
    });
});


document.addEventListener('keydown', ({key}) => {
    if (key === 'Escape' && modalDictionary[modalName].classList.contains('modal-active')) {
        modalDictionary[modalName].classList.remove('modal-active');
    }
});


getModalDictionary();
modalName = getModalName(modalWindows[0]);