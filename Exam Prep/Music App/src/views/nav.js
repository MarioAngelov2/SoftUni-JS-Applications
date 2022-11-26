import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from '../util.js'


const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
<img src="./images/headphones.png">
<a href="#">Home</a>
<ul>
    <!--All user-->
    <li><a href="#">Catalog</a></li>
    <li><a href="#">Search</a></li>
    <!--Only guest-->
    <li><a href="#">Login</a></li>
    <li><a href="#">Register</a></li>
    <!--Only user-->
    <li><a href="#">Create Album</a></li>
    <li><a href="#">Logout</a></li>
</ul>
`

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav)
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}