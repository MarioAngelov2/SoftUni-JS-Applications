import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from '../util.js'
import { logout } from '../api/user.js'

const nav = document.querySelector('header');

const navTemplate = (hasUser, onLogout) => html`
<h1><a class="home" href="/home">GamesPlay</a></h1>
<nav>
<a href="/all">All games</a>
${hasUser ?
        html`
<!-- Logged-in users -->
<div id="user">
    <a href="/create">Create Game</a>
    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
</div>
` :
        html`
<!-- Guest users -->
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`}
</nav>
`
export function updateNav() {
    const user = getUserData();

    render(navTemplate(user, onLogout), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}