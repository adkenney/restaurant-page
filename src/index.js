import {renderPage} from './render';
import {renderMenuPage} from './menu';
import {displayAbout} from './about';

renderPage();

const navSwitch = () => {
    const nav = document.getElementById('right-nav');
    const navBtns = nav.getElementsByTagName('a');
    for(let i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', () => {
            moveTab(i);
        });
    }
}


const moveTab = (i) => {
    switch(i) {
        case 1:
            console.log("Menu Page");
            renderMenuPage();
            break;
        case 2:
            console.log("About Page");
            displayAbout();
            break;
    }
}

navSwitch();