import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getUserData } from '../util.js'
import { logout } from '../api/user.js'

const nav = document.querySelector('nav');

const navTemplate = (hasUser) => html`
<section class="logo">
<img src="/images/logo.png" alt="logo">
</section>
<ul>
<!--Users and Guest-->
<li><a href="/">Home</a></li>
<li><a href="/catalog">Dashboard</a></li>
<!--Only Guest-->
${hasUser ?
        html`
    <li><a href="/create">Create Postcard</a></li>
    <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>
    `:
        html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
    `}
<!--Only Users-->

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