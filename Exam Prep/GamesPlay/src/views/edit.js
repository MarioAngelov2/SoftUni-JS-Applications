import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editGame, detailsById } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

const editTemp = (game, onEdit) => html`
<section id="edit-page" class="auth">
<form @submit=${onEdit} id="edit">
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" value="">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" value="">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" value="">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" value="">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>`

export async function showEdit(ctx) {
    const id = ctx.params.id
    const game = await detailsById(id)

    ctx.render(editTemp(game, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        const {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
          } = data;
          
          if (!title || !category || !maxLevel || !imageUrl || !summary) {
            return alert('All fields are required!');
          }

          await editGame(id, data);
          ctx.page.redirect(`/details/${id}`)
    }
}