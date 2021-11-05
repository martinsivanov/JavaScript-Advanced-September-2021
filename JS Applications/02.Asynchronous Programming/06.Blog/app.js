function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', displayAllPosts);
}
async function displayAllPosts() {
    let postsSelection = document.getElementById('posts');

    let posts = await loadPosts();
   posts.forEach(p => {
       let option = document.createElement('option');
       option.value = p.id;
       option.textContent = p.title;
       postsSelection.appendChild(option);
   })
   
}
async function loadPosts() {
    let url = `http://localhost:3030/jsonstore/blog/posts`;

    let res = await fetch(url);
    let data = await res.json();
    let posts = Object.values(data);
    return posts;
}

attachEvents();