import { deleteById, getIdeaById } from '../api/data.js';
import { e } from '../dom.js';

let section = document.getElementById('detailsPage');
section.remove();

let context = null;

export async function showDetailsPage(contextTarget, id) {
    context = contextTarget;
    context.showSection(section);
    await loadIdea(id);
}

async function loadIdea(id) {
    let idea = await getIdeaById(id);
    section.replaceChildren(createIdea(idea));
}

function createIdea(idea) {
    let fragment = document.createDocumentFragment();

    fragment.appendChild(e('img', { className: 'det-img', src: idea.img }));
    let div = e('div', { className: 'desc' });
    div.innerHTML = `
    <h2 class="display-5">${idea.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${idea.description}</p>`;
    fragment.appendChild(div);

    let userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData && userData.id == idea._ownerId) {
        fragment.appendChild(e('div', { className: 'text-center' },
            e('a', { className: 'btn detb', href: '', onClick: onDelete }, 'Delete')));
    }


    async function onDelete(event) {
        event.preventDefault();
        let confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteById(idea._id);
            context.goTo('catalog');
        }
    }

    return fragment;
}