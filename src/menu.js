import {renderPage, clearPage} from './render';

//create menu for webpage
const menuPage = () => {
    clearPage();
    renderPage();
    const menuContent = document.querySelector('#content');
    const sampleHeader = document.createElement('div');
    sampleHeader.innerHTML = 'Just some test text';
    menuContent.appendChild(sampleHeader);
}

export {menuPage};