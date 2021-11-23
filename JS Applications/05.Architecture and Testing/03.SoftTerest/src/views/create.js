import { createIdea } from '../api/data.js';
import { e } from '../dom.js';

let section = document.getElementById('createPage');
section.remove();

let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let context = null;

export async function showCreatePage(contextTarget) {
    context = contextTarget;
    context.showSection(section);
}

function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);

    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let img = formData.get('imageURL').trim();

    if (title.length < 6) {
        alert('Title must be at least 6 characters.');
    }
    if (description.length < 10) {
        alert('Description must be at least 10 characters.');
    }
    if (img.length < 5) {
        alert('Image url must be at least 5 characters.');
    }

    createIdea({ title, description, img });
    //form.reset();
    context.goTo('catalog');
}