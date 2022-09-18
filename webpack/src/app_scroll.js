export const appScroll = () => {

    
    let mainUbication = window.scrollY;
    const desktopMenu = document.querySelector('.desktop-menu__navbar');
    const mobileMenu = document.querySelector('.mobile-menu__navbar ');
    
    
    window.onscroll = function() {
        let displacement = window.scrollY;
        if (mainUbication >= displacement) {
            desktopMenu.style.top = '0';
            mobileMenu.style.top = '0';
        } else {
            desktopMenu.style.top = '-20rem';
            mobileMenu.style.top = '-20rem';
        }
        mainUbication = displacement;        
    }
}