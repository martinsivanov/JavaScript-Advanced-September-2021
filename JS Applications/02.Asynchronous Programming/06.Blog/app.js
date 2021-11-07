function attachEvents() {

    document.getElementById('btnLoadPosts').addEventListener('click', loadAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', display);
}
async function display() {

    let selectedPostId = document.getElementById('posts').value;
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postCommentsList = document.getElementById('post-comments');

    postTitle.textContent = 'Post Details';
    postBody.textContent = '';
    postCommentsList.replaceChildren();

    let [details, comments] = await Promise.all([
        postDetails(selectedPostId),
        postComments(selectedPostId)
    ])

    postTitle.textContent = details.title;
    postBody.innerHTML = `<p>${details.body}</p>`

    comments.forEach(c => {
        let li = document.createElement('li');
        li.textContent = c.text;
        postCommentsList.appendChild(li);
    })
}
async function loadAllPosts() {
    let url = `http://localhost:3030/jsonstore/blog/posts`;

    let res = await fetch(url);
    let data = await res.json();
    let posts = Object.values(data);

    let selectPosts = document.querySelector('#posts');
    console.log(selectPosts);

    posts.forEach(p => {
        let option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.title;
        selectPosts.appendChild(option);
    })
}
async function postDetails(id) {
    let url = `http://localhost:3030/jsonstore/blog/posts/${id}`;

    let res = await fetch(url);
    let data = await res.json();
    return data;
}
async function postComments(id) {
    let url = `http://localhost:3030/jsonstore/blog/comments`;

    let res = await fetch(url);
    let data = await res.json();
    let allComments = Object.values(data);
    let commentsByPostId = allComments.filter(c => c.postId == id);
    return commentsByPostId;
}

attachEvents();