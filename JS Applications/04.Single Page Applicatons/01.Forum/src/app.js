import { createNewTopic } from './post.js';
import { loadHomePage } from './home.js';

function addEvents() {
    loadHomePage();
    document.querySelector('.public').addEventListener('click', createNewTopic);
    document.querySelector('.cancel').addEventListener('click', (event) => {
        event.preventDefault();
        let form = event.target.parentElement.parentElement;
        form.reset();
    })
}

addEvents();