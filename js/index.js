// menu
import {appMenu} from './app_menu.js';
// scroll
import {appScroll} from './app_scroll.js';
// components
import {appModal} from './app_modal.js';
import {appTabs} from './app_tabs.js';
import {appSlider} from './app_slider.js';
// index
import {appConfetti} from './app_confetti.js';
import {appModalWelcome} from './app_modalWelcome.js';
// about
import {appAbout} from './app_about.js';
// contact
import {appModalContact} from './app_modalContact.js';



const pageName = document.querySelector('main');


appMenu();
appScroll();

if (pageName.id == 'index') {
    appConfetti();
    appModalWelcome();
    appModal();
    appTabs();
    appSlider();
} else if (pageName.id == 'about') {
    appAbout();
    appModal();
} else if (pageName.id == 'contact') {
    appModal();
    appModalContact();
}