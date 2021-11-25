import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns as townsNames } from "./towns.js";

let listTemplate = (towns) => html`
<ul>
   ${towns.map(t => html`<li class=${t.match ? 'active' : ''}>${t.name}</li>`)}
</ul>`

let towns = townsNames.map(t => ({ name: t, match: false }));

let root = document.getElementById('towns');
let input = document.getElementById('searchText');
let output = document.getElementById('result');
document.querySelector('button').addEventListener('click', onSearch);

update();

function onSearch() {
   let match = input.value.trim().toLocaleLowerCase();
   let matches = 0;

   for (let town of towns) {
      if (match && town.name.toLocaleLowerCase().includes(match)) {
         town.match = true;
         matches++;
      } else {
         town.match = false;
      }
   }

   output.textContent = `${matches} matches found`;

   update();
}

function update() {
   render(listTemplate(towns), root);
}