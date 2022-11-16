import { html, render } from '../node_modules/lit-html/lit-html.js';
import {getData} from './api.js';
import {studentsTemplate} from './students.js';
import {solve} from './search.js';

let tBody = document.querySelector('body tbody');
let studentsData = await getData();
let template = studentsTemplate(Object.values(studentsData));

render(template, tBody);

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', solve)