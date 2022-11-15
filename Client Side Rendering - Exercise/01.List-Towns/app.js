import {html, render} from '../node_modules/lit-html/lit-html.js';

const form = document.querySelector('form')
form.addEventListener('submit', onSubmit)

function onSubmit(ev) {
    ev.preventDefault(); 

    const formData = new FormData(form);
    const {towns} = Object.fromEntries(formData) 
}