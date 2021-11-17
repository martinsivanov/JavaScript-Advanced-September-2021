import { loadTopicById } from './post.js'

export async function loadHomePage() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    let data = await response.json();

    let topic = document.querySelector('.topic-title');
    topic.replaceChildren();
    Object.values(data).forEach(d => {
        let div = createElement(d);
        topic.appendChild(div);
    });

}
function createElement(topic) {
    let div = document.createElement('div');
    div.className = 'topic-container';
    div.innerHTML =
        `<div class="topic-name-wrapper">
            <div class="topic-name">
            <input type="hidden" id="inputId" value="${topic._id}">
                 <a href="#" class="normal">
                    <h2>${topic.title}</h2>
                 </a>
                 <div class="columns">
                    <div>
                         <p>Date: <time>${topic.time}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${topic.username}</span></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>`;

    div.addEventListener('click', (event) => {
        if (event.target.tagName == 'H2') {
            let el = event.target.parentElement.parentElement;
            let id = el.querySelector('#inputId').value;
            
            loadTopicById(id);
        }
    })
    return div;
}