import {clearPage} from './render';

const displayContact = () => {
    clearPage();
    createContact();
}

const createContact = () => {
    const mainContent = document.getElementById('main-content');
    const contact = document.createElement('div');
    contact.className = 'contact-page';
    contact.innerHTML = `
        <h2>Kell\'s Burger Bar</h2>
        <p>2020 Some Address St <br> Some City NC, 27613</p>
        <h3>Hours</h3>
        <p>Monday - Friday: 10:00am - 12:00pm <br> Saturday: 12:00pm - 2:00am <br> Sunday: 10:00am - 9:00pm </p>
        <h3>Phone Number</h3>
        <p>(777)777-7777</p>
    `;

    mainContent.appendChild(contact);
}

export {displayContact};