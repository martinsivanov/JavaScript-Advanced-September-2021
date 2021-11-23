import { getAllIdeas } from '../api/data.js';
import { e } from '../dom.js';

let section = document.getElementById('dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);

let context = null;

export async function showCatalogPage(contextTarget) {
    context = contextTarget;
    context.showSection(section);
    loadIdeas();
}

async function loadIdeas() {
    let ideas = await getAllIdeas();

    if (ideas.length == 0) {
        section.replaceChildren(e('h1', {}, 'No ideas yet! Be the first one :)'));
    } else {

        let fragment = document.createDocumentFragment();
        ideas.map(createIdeaCard).forEach(idea => fragment.appendChild(idea));

        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {

    let element = e('div', { className: 'card overflow-hidden current-card details' });
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea._id}" class="btn" href="">Details</a>`;

    return element;
}

function onDetails(event) {
    if (event.target.tagName == 'A') {
        let id = event.target.dataset.id;
        event.preventDefault();
        context.goTo('details', id);
    }
}