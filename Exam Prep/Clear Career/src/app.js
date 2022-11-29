import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

//import views
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';

// get main element for render
const main = document.querySelector('main');

// attached middle ware
page(decorateContext);

//create page routing
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);


page.start();
updateNav();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next()
}

function renderMain(content) {
    render(content, main)
}
