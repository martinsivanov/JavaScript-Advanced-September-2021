
let tableBody = document.querySelector('tbody');
let createFormEl = document.getElementById('createForm');
let editFormEl = document.getElementById('editForm');

document.getElementById('loadBooks').addEventListener('click', loadBooks);
createFormEl.addEventListener('submit', onCreate);
editFormEl.addEventListener('submit', onEditSubmit);
tableBody.addEventListener('click', onTableClick);

loadBooks();

async function onEditSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let id = formData.get('id');
    let author = formData.get('author');
    let title = formData.get('title');

    await editBook(id, { author, title });

    event.target.reset();
    createFormEl.style.display = 'block';
    editFormEl.style.display = 'none';

    loadBooks();
}
function onTableClick(event) {
    if (event.target.className == 'delete') {
        onDelete(event.target);
    } else if (event.target.className == 'edit') {
        onEdit(event.target)
    }
}
async function onEdit(button) {

    let id = button.parentElement.dataset.id;
    let book = await loadBookById(id);

    createFormEl.style.display = 'none';
    editFormEl.style.display = 'block';

    editFormEl.querySelector('input[name="id"]').value = id;
    editFormEl.querySelector('input[name="author"]').value = book.author;
    editFormEl.querySelector('input[name="title"]').value = book.title;

}
async function onDelete(button) {
    let id = button.parentElement.dataset.id;
    await deleteBook(id);
    button.parentElement.parentElement.remove();
}

async function onCreate(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let author = formData.get('author');
    let title = formData.get('title');

    let result = await createBook({ author, title });
    tableBody.appendChild(createRow(result._id, result));
    event.target.reset();
}

function createRow(id, book) {
    let trEl = document.createElement('tr');
    trEl.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td data-id=${id}>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>`;

    return trEl;
}

async function loadBooks() {
    let books = await request('http://localhost:3030/jsonstore/collections/books');
    let result = Object.entries(books).map(([id, book]) => createRow(id, book));
    tableBody.replaceChildren(...result);
}
async function loadBookById(id) {
    let book = await request(`http://localhost:3030/jsonstore/collections/books/${id}`);
    return book;
}
async function createBook(book) {
    let result = await request('http://localhost:3030/jsonstore/collections/books',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    return result;
}
async function editBook(id, book) {
    let result = await request(`http://localhost:3030/jsonstore/collections/books/${id}`,
        {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    return result;
}
async function deleteBook(id) {
    let result = await request(`http://localhost:3030/jsonstore/collections/books/${id}`,
        {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    return result;
}

async function request(url, options) {

    let response = await fetch(url, options);

    if (!response.ok) {
        let error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    let data = await response.json();
    return data;
}