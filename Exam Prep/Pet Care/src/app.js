import { html ,render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/login', showLogin);
page('/register', showRegister);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    next()
}

function renderMain(content) {
    render(content, main)
}
