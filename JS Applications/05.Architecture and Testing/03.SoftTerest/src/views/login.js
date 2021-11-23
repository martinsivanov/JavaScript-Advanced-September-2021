
import { login } from '../api/data.js';

let section = document.getElementById('loginPage');
section.remove();
let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let context = null;

export async function showLoginPage(contextTarget) {
    context = contextTarget;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);

    let email = formData.get('email').trim();
    let password = formData.get('password').trim();


    await login(email, password);
    context.goTo('home');
    form.reset();
    context.updateNav();
}