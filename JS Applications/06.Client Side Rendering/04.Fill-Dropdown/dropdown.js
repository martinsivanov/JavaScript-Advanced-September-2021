import { html, render } from "./node_modules/lit-html/lit-html.js";

let selectTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value=${i._id}>${i.text}</option>`)}
</select>`;

document.querySelector('form').addEventListener('click', addItem);
getData();


let root = document.querySelector('div');

async function getData() {
    let response = await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`);
    let data = await response.json();
    let items = Object.values(data);
    update(items);
}

function update(items) {
    let result = selectTemplate(items);
    render(result, root);
}

async function addItem(event) {
    event.preventDefault();

    let text = document.getElementById('itemText').value;

    let res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    if (res.ok) {
        getData();
    }
}