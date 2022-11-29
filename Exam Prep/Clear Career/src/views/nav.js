import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from '../util.js'
import { logout } from '../api/user.js'

const nav = document.querySelector('nav');

const navTemplate = (hasUser, onLogout) => html`
<div>
<a href="/dashboard">Dashboard</a>
</div>
        <!-- Logged-in users -->
${hasUser ? html`
    <div class="user">
        <a href="/create">Create Offer</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>` :
        html` 
        <!-- Guest users -->
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`
    }`

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user, onLogout), nav)
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}