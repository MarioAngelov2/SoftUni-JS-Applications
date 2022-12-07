import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from '../util.js'
import { logout } from '../api/user.js'

const nav = document.querySelector('header');

const navTemplate = (hasUser, onLogout) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

      <nav>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>

        ${hasUser ?
        html`
        <!-- Logged-in users -->
        <div class="user">
          <a href="/create">Add Album</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>
        ` : html`
         <!-- Guest users -->
        <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
        `} 
      </nav>
`

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user, onLogout), nav)
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/')
}