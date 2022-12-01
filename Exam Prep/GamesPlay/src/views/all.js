import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from '../api/data.js';

const gameTemp = (game) => html`
<div class="allGames">
<div class="allGames-info">
    <img src=${game.imageUrl}>
    <h6>${game.category}</h6>
    <h2>${game.title}</h2>
    <a href="/details/${game._id}" class="details-button">Details</a>
</div>`;

const allTemp = (games) => html`
<section id="catalog-page">
<h1>All Games</h1>
<!-- Display div: with information about every game (if any) -->

${games.length > 0 ?
        games.map(x => gameTemp(x)) :
        html`
    <!-- Display paragraph: If there is no games -->
    <h3 class="no-articles">No articles yet</h3>
    `}
</section>`;

export async function showAll(ctx) {
    const games = await getAll();
    ctx.render(allTemp(games));
}