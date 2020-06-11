const renderPage = () => {
    addNav();
    mainContent();
}

const addNav = () => {
    const content = document.getElementById('content');
    const nav = document.createElement('div');

    nav.appendChild(leftNav());
    nav.appendChild(rightNav());

    nav.setAttribute('id', 'navbar');

    content.appendChild(nav);
}
const leftNav = () => {
    const leftNavDiv = document.createElement('div');
    const restaurantName = document.createElement('a');
    restaurantName.innerHTML = 'Kell\'s Burger Bar';
    leftNavDiv.setAttribute('id','left-nav');
    leftNavDiv.appendChild(restaurantName);

    return leftNavDiv;
}

const rightNav = () => {
    const rightNavDiv = document.createElement('div');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    rightNavDiv.setAttribute('id', 'right-nav');

    rightNavDiv.appendChild(home);
    rightNavDiv.appendChild(menu);
    rightNavDiv.appendChild(contact);

    return rightNavDiv;
}

const mainContent = () => {
    const container = document.getElementById('content');
    const restaurantContent = document.createElement('div');
    restaurantContent.setAttribute('id', 'main-content');
    container.appendChild(restaurantContent);
}

const clearPage = () => {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
} 

export {renderPage, clearPage};