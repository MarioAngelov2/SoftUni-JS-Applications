import { html } from "../../node_modules/lit-html/lit-html.js";
import { albumDetail, editAlbum } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

const editTemp = (albumId, onEdit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form @submit=${onEdit} class="edit-form">
            <input .value=${albumId.singer} type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input .value=${albumId.album} type="text" name="album" id="album-album" placeholder="Album" />
            <input .value=${albumId.imageUrl} type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input .value=${albumId.release} type="text" name="release" id="album-release" placeholder="Release date" />
            <input .value=${albumId.label} type="text" name="label" id="album-label" placeholder="Label" />
            <input .value=${albumId.sales} type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const albumId = await albumDetail(id);

    ctx.render(editTemp(albumId, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        const {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales
        } = data;

        if (!singer || !album || !imageUrl || !release || !label || !sales) {
            return alert('All fields are required!');
        }

        await editAlbum(id, data);
        ctx.page.redirect(`/edit/${id}`)
    }
}