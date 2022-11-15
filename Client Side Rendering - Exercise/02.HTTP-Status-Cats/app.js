import {cats} from './catSeeder.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

const section = document.getElementById('allCats');

function renderData(cats) {
    
}

function createElements(cats) {
    const ul = `
        <li>
        <img src="${'./images/cat100.jpg'} width="250" height="250" alt="Card image cap">
        </li>
    `

    return ul
}

createElements()



