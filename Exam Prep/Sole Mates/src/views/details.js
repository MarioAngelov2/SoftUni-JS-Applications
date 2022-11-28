import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { itemDetailById, deleteItemById } from '../api/data.js'


const detailsTemp = (card, isOwner, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src=${card.imageUrl} />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${card.brand}</span></p>
    <p>
      Model: <span id="details-model">${card.model}</span>
    </p>
    <p>Release date: <span id="details-release">${card.release}</span></p>
    <p>Designer: <span id="details-designer">${card.designer}</span></p>
    <p>Value: <span id="details-value">${card.value}</span></p>
  </div>

  <!--Edit and Delete are only for creator-->

  ${isOwner ? html`
    <div id="action-buttons">
      <a href="edit/${card._id}" id="edit-btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>
</div>` : nothing}
</section>
`

export async function showDetail(ctx) {
  const id = ctx.params.id;
  const card = await itemDetailById(id);
  let isOwner = card._ownerId == ctx.user._id;

  ctx.render(detailsTemp(card, isOwner, onDelete))

  async function onDelete() {
    const userConfirm = confirm('Are you sure?');
    if (!userConfirm) {
      return;
    }

    await deleteItemById(id);
    ctx.page.redirect('/dashboard')
  }
}

