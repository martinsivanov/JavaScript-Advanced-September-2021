import { register } from '../api/data.js';
import { html } from '../lib.js';

let registerTemplate = (onSubmit) => html`
<section id="registerPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;



export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();
        let repeatPassword = formData.get('conf-pass').trim();

        if (email == '' || password == '' || repeatPassword == '') {
            alert('All fields are required!');
        } else if (password != repeatPassword) {
            alert('Passwords dont match!');
        }
        else {
            await register(email, password);
            ctx.updateUserNav();
            ctx.page.redirect('/');
        }

    }
}