import { html, render } from "./node_modules/lit-html/lit-html.js";

let studentRow = (student) => html`
<tr class=${student.match ? 'select' : '' }>
   <td>${student.item.firstName} ${student.item.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`

let input = document.getElementById('searchField');
document.getElementById('searchBtn').addEventListener('click', onSearch);
let students;
start();

let tBody = document.querySelector('tbody');

async function start() {
   let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   let data = await response.json();
   students = Object.values(data).map(s => ({ item: s, match: false }));
   update();
}

function update() {
   render(students.map(studentRow), tBody);
}

function onSearch() {
   let value = input.value.trim().toLocaleLowerCase();

   for (let student of students) {
      student.match =
         Object.values(student.item)
            .some(v => value && v.toLocaleLowerCase()
               .includes(value));
   }
   update();
}