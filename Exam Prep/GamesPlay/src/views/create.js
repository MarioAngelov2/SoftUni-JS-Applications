import { html } from "../../node_modules/lit-html/lit-html.js";
import { createGames } from '../api/data.js';
import { createSubmitHandler} from '../util.js';

const createTemp = (onCreate) => html`
<section id="create-page" class="auth">
<form @submit=${onCreate} id="create">
    <div class="container">

        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title...">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category...">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game">
    </div>
</form>
</section>`

export function showCreate(ctx) {
    ctx.render(createTemp(createSubmitHandler(onCreate)));

    async function onCreate(data) {
        const {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
          } = data;

          if (!data.title || !data.category || !data.maxLevel || !data.imageUrl || !data.summary) {
            return alert('All fields are required!');
          }

          await createGames(data)
          ctx.page.redirect('/home')
    }
}