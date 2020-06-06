import {renderPage} from './render';
import {menuPage} from './menu';

renderPage();

const menuBtn = document.getElementById('#menu');
menuBtn.addEventListener('click', menuPage);