const renderPage = () => {
    addNav();
    mainImg();
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
    leftNavDiv.className = 'left-nav';
    leftNavDiv.appendChild(restaurantName);

    return leftNavDiv;
}

const rightNav = () => {
    const rightNavDiv = document.createElement('div');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    about.innerHTML = 'About';

    home.setAttribute('id', '#home');
    menu.setAttribute('id', '#menu');
    about.setAttribute('id', '#about');
    rightNavDiv.className = 'right-nav';

    rightNavDiv.appendChild(home);
    rightNavDiv.appendChild(menu);
    rightNavDiv.appendChild(about);

    return rightNavDiv;
}

const mainImg = () => {
    const imgDiv = document.createElement('div');
    const restaurantImg = document.createElement('img');
    restaurantImg.src = 'images/table-in-vintage-restaurant.jpg';
    imgDiv.className = 'home-img-div';
    imgDiv.appendChild(restaurantImg);
    content.appendChild(imgDiv);
}

const clearPage = () => {
    content.innerHTML = '';
}

export {renderPage, clearPage};