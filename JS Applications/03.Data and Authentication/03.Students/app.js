function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit)
    
    showData();
}

let tableBody = document.querySelector('tbody');
let inputFirstName = document.querySelector('input[name="firstName"]');
let inputLastname = document.querySelector('input[name="lastName"]');
let inputFacultyNumber = document.querySelector('input[name="facultyNumber"]');
let inputGrade = document.querySelector('input[name="grade"]');

attachEvents();

function onSubmit(ev) {

    ev.preventDefault();

    let firstName = inputFirstName.value;
    let lastName = inputLastname.value;
    let facultyNumber = inputFacultyNumber.value;
    let grade = inputGrade.value;
    create({ firstName, lastName, facultyNumber, grade });

    inputFirstName.value = '';
    inputLastname.value = '';
    inputFacultyNumber.value = '';
    inputGrade.value = '';
    
    showData();
}

async function showData() {

    let students = await getData();
    tableBody.replaceChildren();
    students.forEach(s => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<tr>
        <td>${s.firstName}</td>
        <td>${s.lastName}</td>
        <td>${s.facultyNumber}</td>
        <td>${s.grade}</td>
      </tr>
    </tr>`
        tableBody.appendChild(tr);
    });
}

async function create(student) {
    let url = `http://localhost:3030/jsonstore/collections/students`;
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    };

    let res = await fetch(url, options);
    let data = await res.json();
}

async function getData() {

    let url = `http://localhost:3030/jsonstore/collections/students`;
    let res = await fetch(url);
    let data = Object.values(await res.json());
    return data;
}