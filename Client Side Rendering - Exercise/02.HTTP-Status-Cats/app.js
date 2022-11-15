import { cats } from './catSeeder.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

const section = document.getElementById('allCats');

const catTemplate = html`
    <ul>
        ${cats.map(cat => createCatCard(cat))}
    </ul?
`;

render(catTemplate, section)

function createCatCard(cat) {
    return html`
    <li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click="${showInfo}" class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: "${cat.statusCode}"</h4>
            <p>Continue</p>
        </div>
    </div>
</li>`
}

function showInfo(ev) {
    const contentContainer = ev.target.parentElement.querySelector('div');
    const currentState = contentContainer.style.display;

    if (currentState === 'none') {
        contentContainer.style.display = 'block';
        ev.target.textContent = 'Hide status code';

    } else {
        contentContainer.style.display = 'none';
        ev.target.textContent = 'Show status code';
    }
}


