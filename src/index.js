import {renderPage, clearPage} from './render';
import {renderMenuPage} from './menu';
import {displayAbout} from './about';
import {displayContact} from './contact';

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
        case 0:
            clearPage();
            break;
        case 1:
            renderMenuPage();
            break;
        case 2:
            displayContact();
            break;
    }
}

navSwitch();