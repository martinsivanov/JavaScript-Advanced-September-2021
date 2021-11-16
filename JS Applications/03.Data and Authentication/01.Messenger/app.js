function attachEvents() {
    document.getElementById('refresh').addEventListener('click', loadData)
    document.getElementById('submit').addEventListener('click', onSubmit)
}

let authorInput = document.querySelector('input[name="author"]');
let contentInput = document.querySelector('input[name="content"]');
let list = document.getElementById('messages');

attachEvents();

async function onSubmit() {
    let author = authorInput.value;
    let content = contentInput.value;
    let message = { author, content };

    await createMsg(message);

    authorInput.value = '';
    contentInput.value = '';
    
    list.value += '\n' + `${author}: ${content}`;
}
async function createMsg(message) {
    let url = `http://localhost:3030/jsonstore/messenger`;
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    };

    let res = await fetch(url, options);
    let data = await res.json();

    return data;
}

async function loadData() {
    let url = `http://localhost:3030/jsonstore/messenger`;

    let res = await fetch(url);
    let data = await res.json();
    let comments = Object.values(data);

    list.value = comments.map(c => `${c.author}: ${c.content}`).join('\n');
    return comments;
}