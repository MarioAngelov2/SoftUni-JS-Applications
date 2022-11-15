import {html, render} from '../node_modules/lit-html/lit-html.js';
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'
const root = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', addItem)

getData()
async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    const result = Object.values(data).map(x => createOptionTemplate(x));
    render(result, root)
}

function createOptionTemplate(option) {
    return html `
        <option value=${option._id}>${option.text}</option>
    `
}

async function postData(body) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: body})
    });
    const data = await response.json();
    return data;
}

function addItem(ev) {
    ev.preventDefault();
    const inputTextElement = document.getElementById('itemText').value;
    form.reset();
    inputTextElement && postData(inputTextElement);
}

getData()
