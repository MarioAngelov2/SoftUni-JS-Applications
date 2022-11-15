import { towns } from './towns.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

const townsSection = document.getElementById('towns');
const searchField = document.getElementById('searchText');
const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search)

update()

function search(towns) {
   console.log(townTemplate)
}

function searchTemplate(townsName) {
   const ul = html`
   <ul>
      ${townsName.map(townsName => createLiTemplate(townsName))}
   </ul>
`
return ul;
}

function createLiTemplate(town) {
   return html`
      <li>
         ${town}
      </li>
   `
}

function update() {
   const ul = searchTemplate(towns);
   render(ul, townsSection)
}
