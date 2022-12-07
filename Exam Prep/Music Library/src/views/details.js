import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { albumDetail, deleteAlbum } from '../api/data.js';

const detailTemp = (hasUser, isOwner, album, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src=${album.imageUrl} />
  </div>
  <div id="info-wrapper">
    <p><strong>Band: </strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  
  ${isOwner ? html`
  <!--Edit and Delete are only for creator-->
  <div id="action-buttons">
  <a href="/edit/${album._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
  ` : hasUser ? html`
  <a href="" id="like-btn">Like</a>
  <div id="likes">Likes: <span id="likes-count">0</span></div>
    </div>
  ` : nothing}

</div>
</section>`

export async function showDetail(ctx) {
  const id = ctx.params.id
  const user = ctx.user;
  const hasUser = user ? true : false;
  const album = await albumDetail(id);
  const isOwner = user ? album._ownerId === user._id : false;

  ctx.render(detailTemp(hasUser, isOwner, album, onDelete));

  async function onDelete() {
    const userConfirm = confirm('Are you sure?');
    if (!userConfirm) {
      return;
    }
    await deleteAlbum(id);
    ctx.page.redirect('/dashboard')
  }
}