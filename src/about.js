import {clearPage} from './render';

const displayAbout = () => {
    clearPage();
    renderAbout();
}

//create about us section on the webpage
const renderAbout = () => {
    const content = document.getElementById('main-content');
    const about = document.createElement('div');
    about.className = 'about';
    about.innerHTML = 'Hello';
    content.appendChild(about);
}

export {displayAbout};