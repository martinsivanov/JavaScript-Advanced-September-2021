async function solution() {

    let main = document.getElementById('main');

    let articles = await getArticles();

    articles.forEach(a => {

        let div = document.createElement('div');
        div.classList.add("accordion");
        div.innerHTML = `<div class="head">
            <span>${a.title}</span>
            <button class="button" id="${a._id}">More</button>
        </div>`
        main.appendChild(div);
    });

    let buttons = document.querySelectorAll('button');
    buttons.forEach(b => b.addEventListener('click', onClick));

}
async function onClick(ev) {

    let isAdded = false;
    let container = ev.target.parentElement.parentElement;

    if (ev.target.textContent == 'More') {
        if (!isAdded) {
            let id = ev.target.id;
            let details = await getArticleDetails(id);
            let parent = ev.target.parentElement.parentElement;
            let divExtra = document.createElement('div');

            divExtra.classList.add('extra');
            divExtra.innerHTML = `<p>${details}</p>`;

            parent.appendChild(divExtra);
            isAdded = true;
        }
        ev.target.textContent = 'Less';
        container.querySelector('.extra').style.display = 'block';
    } else {
        ev.target.textContent = 'More';

        container.querySelector('.extra').style.display = 'none';
    }
}
async function getArticles() {
    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    let res = await fetch(url);
    let data = await res.json();

    let articles = Object.values(data);
    return articles;
}
async function getArticleDetails(id) {

    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

    let response = await fetch(url);
    let data = await response.json();

    return data.content;
}
solution();