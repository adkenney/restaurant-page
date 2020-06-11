import {renderPage, clearPage} from './render';

//create menu for webpage
const menuList = [];

const renderMenuPage = () => {
    clearPage();
    clearMenuList();
    displayMenu();
}
const displayMenu = () => {
    menuPage();
    addMenuItems();
    renderMenuItems();
}

const menuPage = () => {
    const menuContent = document.getElementById('main-content');
    const menu = document.createElement('div');
    menu.className = 'menu';
    menuContent.appendChild(menu);   
}

const menuItem = (itemName, itemDescription, itemPrice) => {

	const renderItem = () => {
        const menuDiv = document.querySelector('.menu');
        const itemDiv = document.createElement('div');
        const itemNameDiv = document.createElement('div');
        const itemDescriptionDiv = document.createElement('div');
        const itemPriceDiv = document.createElement('div');

        itemDiv.className = 'menu-grid';
        itemNameDiv.className = 'menu-item';
        itemDescriptionDiv.className = 'menu-description';
        itemPriceDiv.className = 'menu-price';

        itemNameDiv.innerHTML = itemName;
        itemDescriptionDiv.innerHTML = itemDescription;
        itemPriceDiv.innerHTML = `$${itemPrice}`;

        itemDiv.appendChild(itemNameDiv);
        itemDiv.appendChild(itemDescriptionDiv);
        itemDiv.appendChild(itemPriceDiv);
        menuDiv.appendChild(itemDiv);
    }

	return {renderItem};
};

const addMenuItems = () => {
    menuList.push(menuItem('Cheeseburger','Good old fashion patty with cheese', 9));
    menuList.push(menuItem('Bacon Cheeseburger','Patty topped with smoked bacon, American cheese, ketchup and mustard', 10));
    menuList.push(menuItem('Cheese Steak Burger','Cheese steak with onions, peppers, and provolone cheese, on top of an angus beef patty', 15));
    menuList.push(menuItem('Founder\'s Favorite','100% angus burger topped with jalapenos, onion rings, American cheese, and specialty sauce', 15));
    menuList.push(menuItem('Turkey Burger','Turkey patty with standard ketchup and mustard toppings', 10));
    menuList.push(menuItem('Veggie Burger','Soybean burger topped with spinach and tomatoes', 10));
}

const clearMenuList = () => {
    menuList.splice(0, menuList.length);
}

const renderMenuItems = () => {
    for(let i = 0; i < menuList.length; i++) {
        menuList[i].renderItem();
    }
}

export {renderMenuPage};