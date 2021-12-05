import { page, render } from './lib.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';


let root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage);

updateUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}

function updateUserNav() {
    let userData = getUserData();

    if (userData) {
        document.querySelector('#userCreate').style.display = 'inline-block';
        document.querySelector('#logoutBtn').style.display = 'inline-block';
        document.querySelector('#guestLogin').style.display = 'none';
        document.querySelector('#guestRegister').style.display = 'none';

    } else {
        document.querySelector('#userCreate').style.display = 'none';
        document.querySelector('#logoutBtn').style.display = 'none';
        document.querySelector('#guestLogin').style.display = 'inline-block';
        document.querySelector('#guestRegister').style.display = 'inline-block';
    }
}