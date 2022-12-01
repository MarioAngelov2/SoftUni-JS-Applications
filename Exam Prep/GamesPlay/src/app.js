import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

//import views
import { updateNav } from './views/nav.js';
import { getUserData } from './util.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showAll } from './views/all.js';
import { showHome } from './views/home.js';
import { showCreate } from './views/create.js';
import { showDetail } from './views/details.js';
// import { showCatalog } from './views/catalog.js';
// import { showCreate } from './views/create.js';
// import { showHome } from './views/home.js';
// import { showLogin } from './views/login.js';
// import { showRegister } from './views/register.js';

// get main element for render
const main = document.getElementById('main-content');

// attached middle ware
page(decorateContext);

//create page routing
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/all', showAll);
page('/create', showCreate);
page('/details/:id', showDetail);

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
