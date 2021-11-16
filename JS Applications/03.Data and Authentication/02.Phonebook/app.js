function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', showData);
    document.getElementById('btnCreate').addEventListener('click', onSubmit);
    phonebook.addEventListener('click', onDelete);
    showData();
}

let phonebook = document.getElementById('phonebook');
let inputPerson = document.getElementById('person');
let inputPhone = document.getElementById('phone');

attachEvents();

async function onDelete(event) {
    let id = event.target.dataset.id;
    if (id != undefined) {
        await deleteData(id);
        event.target.parentElement.remove();
    }
}

async function deleteData(id) {
    let url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    let options = {
        method: 'delete'
    };

    let res = await fetch(url, options);
    let data = await res.json();

    return data;
}

async function onSubmit() {
    let person = inputPerson.value;
    let phone = inputPhone.value;
    let contact = { person, phone };

    await createData(contact);

    inputPerson.value = '';
    inputPhone.value = '';
    await showData();

}
async function createData(contact) {
    let url = `http://localhost:3030/jsonstore/phonebook`;
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    };

    let res = await fetch(url, options);
    let data = await res.json();

    return data;
}
async function showData() {
    let url = `http://localhost:3030/jsonstore/phonebook`;
    let res = await fetch(url);
    let data = await res.json();
    let contacts = Object.values(data);

    phonebook.replaceChildren();
    loadContacts(contacts);

}
function loadContacts(contacts) {
    contacts.forEach(c => {
        let li = document.createElement('li');
        li.innerHTML = `${c.person}: ${c.phone} <button data-id="${c._id}">Delete</button>`;

        phonebook.appendChild(li);
    });
}