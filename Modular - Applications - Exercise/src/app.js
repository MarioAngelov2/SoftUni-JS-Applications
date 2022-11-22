import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs";

import { browseView } from './views/browseView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { myTeamView } from './views/myTeamView.js';
import { registerView } from './views/registerView.js';
import { teamHomeView } from './views/teamHomeView.js';


const root = document.getElementsByTagName('main');

page('/', homeView);
page('/index.html', homeView);
page('/login', loginView);
page('/register', registerView);
page('/browse', browseView);
page('/edit/id', editView);
page('/my-team', myTeamView);
page('/team-home', teamHomeView);

page.start();
// updateNav();

// document.getElementById('logoutBtn').addEventListener('click', async () => {
//     await logout();
//     updateNav();
//     page.redirect('/');
// })

// function updateNav() {
//     const userSection = document.getElementById('user');
//     const guestSection = document.getElementById('guest');
//     const userData = sessionStorage.getItem('userData');

//     if (userData) {
//         userSection.style.display = 'inline-block';
//         guestSection.style.display = 'none';
//     } else {
//         userSection.style.display = 'none';
//         guestSection.style.display = 'inline-block';
//     }
// }

// function renderMiddleware(ctx, next) {
//     ctx.render = (content) => render(content, root);
//     //ctx.updateNav = updateNav;
//     next();
// }