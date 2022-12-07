import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDashboard } from '../api/data.js';

const cardTemp = (album) => html`
<li class="card">
    <img src=${album.imageUrl} />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
  </li>`

const dashboardTemp = (album) => html`
<section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
  
  ${album.length > 0 ?
        album.map(x => cardTemp(x)) :
        html`
    <!-- Display an h2 if there are no posts -->
        <h2>There are no albums added yet.</h2>
    `}

</ul>
</section>`

export async function showDashboard(ctx) {
    
    // const user = ctx.user;
    // const hasUser = user ? true : false
    const albums = await getDashboard();
    ctx.render(dashboardTemp(albums));
}