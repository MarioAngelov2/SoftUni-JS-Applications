import { towns } from './towns.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

const townsSection = document.getElementById('towns');
const resultElement = document.getElementById('result')
const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search)

update()

function searchTemplate(townsName, match) {
   const ul = html`
   <ul>
      ${townsName.map(townName => createLiTemplate(townName, match))}
   </ul>
`
return ul;
}

function createLiTemplate(town, match) {
   return html`<li class="${(match && town.toLowerCase().includes(match)) ? "active" : ""}"> ${town} </li>`
}

function update(text) {
   const ul = searchTemplate(towns, text);
   render(ul, townsSection)
}

function search() {
   const searchField = document.getElementById('searchText');
   const text = searchField.value.toLowerCase();
   searchField.value = ''
   update(text)
   matchCounter();
}

function matchCounter() {
 const count = document.querySelectorAll('.active').length;
 const countElement = count ? html `<p>${count} matches found</p>` : '';
 
 render(countElement, resultElement)
}
