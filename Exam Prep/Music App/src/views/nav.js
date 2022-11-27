import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from '../util.js'
import { logout } from '../api/user.js'


const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
<img src="./images/headphones.png">
<a href="/">Home</a>
<ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    <!--Only guest-->
    ${!hasUser ? html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
    ` : html`
    <li><a href="/create">Create Album</a></li>
    <li @click=${onLogout}><a href="javascript:void(0)">Logout</a></li>
    `}
    
    <!--Only user-->
   
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