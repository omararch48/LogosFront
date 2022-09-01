// Lateral Menu
let outMenuLateral = true;
const menuIcon = document.querySelector('.desktop-menu__icon'),
      menuLateral = document.querySelector('.desktop-menu__lateral'),
      menuLateralLayout = document.querySelector('.desktop-menu__lateral-layout'),
      menuLateralClose = document.querySelector('.desktop-menu__lateral-close');


menuLateralLayout.addEventListener('click', () => {
    setTimeout(() => {
        if (outMenuLateral) {
            menuLateralLayout.classList.remove('desktop-menu__lateral--active');
            setTimeout(() => {
                menuLateralLayout.style.visibility = 'hidden';
            }, 1000);
        } else {
            outMenuLateral = true;
        }
    }, 100);
});

menuLateral.addEventListener('click', () => {
    outMenuLateral = false;
});

menuIcon.addEventListener('click', () => {
    menuLateralLayout.style.visibility = 'visible';
    setTimeout(() => {
        menuLateralLayout.classList.add('desktop-menu__lateral--active');
    }, 100);
});

menuLateralClose.addEventListener('click', () => {
    menuLateralLayout.classList.remove('desktop-menu__lateral--active');
    setTimeout(() => {
        menuLateralLayout.style.visibility = 'hidden';
    }, 1000);
});


// Medium Menu
let outMenuMedium = true;
const menuMobileIcon = document.querySelector('.mobile-menu__icon'),
      menuMobileMediumClose = document.querySelector('.mobile-menu__medium-close'),
      menuMobileMedium = document.querySelector('.mobile-menu__medium'),
      menuMobileMediumInner = document.querySelector('.mobile-menu__medium-inner');


let outMenuSmall = true;
const menuMobileSmallClose = document.querySelector('.mobile-menu__small-close'),
      menuMobileSmall = document.querySelector('.mobile-menu__small'),
      menuMobileSmallInner = document.querySelector('.mobile-menu__small-inner');


menuMobileIcon.addEventListener('click', () => {
    if (window.innerWidth > 680) {
        menuMobileMedium.style.visibility = 'visible';
        setTimeout(() => {
            menuMobileMedium.classList.add('mobile-menu__medium--active');
        }, 100);
    } else {
        menuMobileSmall.style.visibility = 'visible';
        setTimeout(() => {
            menuMobileSmall.classList.add('mobile-menu__small--active');
        }, 100);
    }
});

// Medium

menuMobileMediumClose.addEventListener('click', () => {
    menuMobileMedium.classList.remove('mobile-menu__medium--active');
    setTimeout(() => {
        menuMobileMedium.style.visibility = 'hidden';
    }, 1000);
});

menuMobileMedium.addEventListener('click', () => {
    setTimeout(() => {
        if (outMenuMedium) {
            menuMobileMedium.classList.remove('mobile-menu__medium--active');
            setTimeout(() => {
                menuMobileMedium.style.visibility = 'hidden';
            }, 1000);
        } else {
            outMenuMedium = true;
        }
    }, 100);
});

menuMobileMediumInner.addEventListener('click', () => {
    outMenuMedium = false;
});

// Small

menuMobileSmallClose.addEventListener('click', () => {
    menuMobileSmall.classList.remove('mobile-menu__small--active');
    setTimeout(() => {
        menuMobileSmall.style.visibility = 'hidden';
    }, 1000);
});

menuMobileSmall.addEventListener('click', () => {
    setTimeout(() => {
        if (outMenuSmall) {
            menuMobileSmall.classList.remove('mobile-menu__small--active');
            setTimeout(() => {
                menuMobileSmall.style.visibility = 'hidden';
            }, 1000);
        } else {
            outMenuSmall = true;
        }
    }, 100);
});

menuMobileSmallInner.addEventListener('click', () => {
    outMenuSmall = false;
});

document.addEventListener('keydown', ({key}) => {
    if (key === 'Escape') {
        if (menuLateralLayout.classList.contains('desktop-menu__lateral--active')) {
            menuLateralLayout.classList.remove('desktop-menu__lateral--active');
            setTimeout(() => {
                menuLateralLayout.style.visibility = 'hidden';
            }, 1000);
        } else if (menuMobileMedium.classList.contains('mobile-menu__medium--active')) {
            menuMobileMedium.classList.remove('mobile-menu__medium--active');
            setTimeout(() => {
                menuMobileMedium.style.visibility = 'hidden';
            }, 1000);
        } else if (menuMobileSmall.classList.contains('mobile-menu__small--active')) {
            menuMobileSmall.classList.remove('mobile-menu__small--active');
            setTimeout(() => {
                menuMobileSmall.style.visibility = 'hidden';
            }, 1000);
        }
    }
});