import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDashboard } from '../api/data.js';

const postTemp = (post) => html`
<div class="offer">
  <img src=${post.imageUrl} alt="example1" />
  <p>
    <strong>Title: </strong><span class="title">${post.title}</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">${post.salary}</span></p>
  <a class="details-btn" href="/details/${post._id}">Details</a>
</div>
`

const dashboardTemp = (post) => html`
<section id="dashboard">
<h2>Job Offers</h2>

<!-- Display a div with information about every post (if any)-->

${post.length > 0 ?
        post.map(x => postTemp(x)) :
        html`<!-- Display an h2 if there are no posts -->
    <h2>No offers yet.</h2>`
    }
</section>`

export async function showDashboard(ctx) {

    const post = await getDashboard();
    ctx.render(dashboardTemp(post));
}