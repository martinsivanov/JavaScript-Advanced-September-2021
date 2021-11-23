import { showCatalogPage } from './views/catalog.js';
import { showCreatePage } from './views/create.js';
import { showHomePage } from './views/home.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';
import { showSection } from './dom.js';
import { showDetailsPage } from './views/details.js';
import { logout } from './api/data.js';

let links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'catalogLink': 'catalog',
    'createLink': 'create',
    'loginLink': 'login',
    'registerLink': 'register'
}

let views = {
    'home': showHomePage,
    'catalog': showCatalogPage,
    'create': showCreatePage,
    'login': showLoginPage,
    'register': showRegisterPage,
    'details': showDetailsPage
}

let nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);
document.getElementById('logoutBtn').addEventListener('click', async (event) => {

    event.preventDefault();

    await logout();
    goTo('login');
    updateNav();
});

let context = {
    goTo,
    showSection,
    updateNav
}

updateNav();
//Start application in home view.
goTo('home');

function onNavigate(event) {
    let name = links[event.target.id];
    if (name) {
        event.preventDefault();
        goTo(name);
    }
}

function goTo(name, ...params) {
    let view = views[name];
    if (typeof view == 'function') {
        view(context, ...params);
    }
}

function updateNav() {
    let userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(x => x.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(x => x.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(x => x.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(x => x.style.display = 'block');
    }
}