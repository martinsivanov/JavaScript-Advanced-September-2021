import { loadHomePage } from './home.js'

export async function createNewTopic(event) {
    event.preventDefault();
    let form = event.target.parentElement.parentElement;
    let formData = new FormData(form);

    let title = formData.get('topicName');
    let username = formData.get('username');
    let post = formData.get('postText')
    let time = new Date().toLocaleString();

    if (title == '' || username == '' || post == '') {
        return alert('All field are required.')
    }

    let res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, username, post, time })
    })
    if (res.ok == false) {
        let error = await res.json();
        return alert(error.message);
    } else {
        loadHomePage();
    }
}
export async function loadTopicById(id) {
    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
    let data = await response.json();
    let topicId = id;
    let title = data.title;
    let username = data.username;
    let post = data.post;
    let time = data.time;

    let main = document.querySelector('main');
    main.innerHTML = '';

    let fragment = document.createDocumentFragment();

    fragment.appendChild(loadTitle(title));
    fragment.appendChild(loadTopicView(id, username, post, time));


    fragment.appendChild(loadFormCommentSection());

    main.appendChild(fragment);

    let section = main.querySelector('.comment');
    let comments = await displayComments(id);

    comments.forEach(c => {
        section.appendChild(c);
    })
}
function loadTitle(title) {
    let a = document.createElement('a');
    a.innerHTML = `<h2>${title}</h2>`;
    return a;
}
function loadTopicView(id, username, post, time) {
    let div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <input type="hidden" id="topicId" value="${id}">
        <p><span>${username}</span> posted on <time>${time}</time></p>

        <p class="post-content">${post}</p>
    </div>`;

    return div;
}
function loadFormCommentSection() {
    const divComment = document.createElement('div');
    divComment.className = 'answer-comment';
    divComment.innerHTML = `
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>`;

    divComment.querySelector('form').addEventListener('submit', onSubmit);

    return divComment;
}
async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let text = formData.get('postText');
    let username = formData.get('username');
    let time = new Date().toLocaleString();
    let id = event.target.parentElement.parentElement.parentElement.querySelector('#topicId').value;

    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ postId: id, text, username, time })
    })

    if (response.ok == false) {
        let error = await response.json();
        return alert(error.message);
    } else {
        let comment = { postId: id, text, username, time };
        createComment(comment);
        loadTopicById(id);
    }
}
async function loadComments(id) {
    let res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    let data = await res.json();

    let comments = Object.values(data).filter(x => x.postId == id);

    return comments;
}
async function displayComments(id) {

    let comments = await loadComments(id);
    let result = [];
    comments.forEach(comment => {
        result.push(createComment(comment));
    });
    return result;
}
function createComment(comment) {
    let div = document.createElement('div');
    div.id = 'user-comment';
    div.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.time}</time></p>
                <div class="post-content">
                    <p>${comment.text}</p>
                </div>
            </div>
        </div>`
    return div;
}
