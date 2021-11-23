import { register } from '../api/data.js';

let section = document.getElementById('registerPage');
section.remove();
let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let context = null;


export async function showRegisterPage(contextTarget) {
    context = contextTarget;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);

    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('repeatPassword').trim();

    if (!email || !password) {
        return alert('All fields is required!')
    }

    if (password != repass) {
        return alert('Passwords dont match!');
    }

    await register(email, password);
    context.goTo('home');
    context.updateNav();
}