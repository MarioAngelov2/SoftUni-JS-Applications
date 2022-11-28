import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from '../api/data.js'

const cardTemp = (card) => html`
<li class="card">
<img src=${card.imageUrl} alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${card.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${card.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
<a class="details-btn" href="/details/${card._id}">Details</a>
</li>
`

const dashboardTemp = (card) => html`
<section id="dashboard">
<h2>Collectibles</h2>
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
  
  ${card.length > 0 ? card.map(card => cardTemp(card)) :
    html`
    <h2>There are no items added yet.</h2>
    `
  }
</ul>
</section>`

export async function showDashboard(ctx) {
  const user = ctx.user;

  const card = await getAll()
  ctx.render(dashboardTemp(card, !!user));
}