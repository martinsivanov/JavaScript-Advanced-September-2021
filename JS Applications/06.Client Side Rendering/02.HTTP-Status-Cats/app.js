import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

let catCard = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;


let root = document.getElementById('allCats');
let allCats = html`<ul>${cats.map(catCard)}</ul>`;
render(allCats, root);

root.addEventListener('click', (event) => {
    let btn = event.target;
    if (btn.tagName == 'BUTTON') {
        let status = event.target.parentElement.querySelector('.status');

        if (status.style.display == 'none') {
            status.style.display = 'block'
            btn.textContent = 'Hide status code';
        } else {
            status.style.display = 'none'
            btn.textContent = 'Show status code';
        }
    }
})