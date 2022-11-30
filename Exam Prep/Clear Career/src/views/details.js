import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, deleteById } from '../api/data.js';

const detailsTemp = (post, isOwner, hasUser, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${post.imageUrl} />
  <p id="details-title">${post.title}</p>
  <p id="details-category">
    Category: <span id="categories">${post.category}</span>
  </p>
  <p id="details-salary">
    Salary: <span id="salary-number">${post.salary}</span>
  </p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Description</h4>
      <span>${post.description}</span
      >
    </div>
    <div id="details-requirements">
      <h4>Requirements</h4>
      <span>${post.requirements}</span
      >
    </div>
  </div>
  <p>Applications: <strong id="applications">1</strong></p>

  ${isOwner ? html `
  <!--Edit and Delete are only for creator-->
  <div id="action-buttons">
    <a href="/edit/${post._id}" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>
  ` : nothing}
  
    ${hasUser && !isOwner ? html `
    <!--Bonus - Only for logged-in users ( not authors )-->
    <a href="" id="apply-btn">Apply</a>
    `: nothing}
    
</div>
</section>
 `

export async function showDetails(ctx) {
    const user = ctx.user

    const id = ctx.params.id;
    const offer = await getDetails(id);
    const isOwner = user ? offer._ownerId == user._id : false;
    const hasUser = user ? true : false;

    ctx.render(detailsTemp(offer, isOwner, hasUser, onDelete));

    async function onDelete() {
        const userConfirm = confirm('Are you sure?');

        if (!userConfirm) {
            return
        }

        await deleteById(id);
        ctx.page.redirect('/dashboard');
    }
}