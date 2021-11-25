import { html, render } from "./node_modules/lit-html/lit-html.js";


let root = document.getElementById('root');
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let towns = document.getElementById('towns').value.split(',').map(t => t.trim());
    let result = listTemplate(towns);
    render(result, root);
})

let listTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;