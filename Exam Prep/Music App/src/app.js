import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

//import views
import { updateNav } from './views/nav.js'
import { getUserData } from './util.js'

// get main element for render
const main = document.getElementById('main-content');

// attached middle ware
page(decorateContext);

//create page routing
page('/', () => console.log('home'))

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
