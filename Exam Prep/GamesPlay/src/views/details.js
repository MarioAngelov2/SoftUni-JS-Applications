import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { detailsById, deleteGame } from '../api/data.js';

const detailsTemp = (game, isOnwer, onDelete) => html`
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">

    <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
    </div>

    <p class="text">
       ${game.summary}
    </p>

    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
            <!-- list all comments for current game (If any) -->
            <li class="comment">
                <p>Content: I rate this one quite highly.</p>
            </li>
            <li class="comment">
                <p>Content: The best game.</p>
            </li>
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
        <p class="no-comment">No comments.</p>
    </div>

    ${isOnwer ? html`
    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    <div class="buttons">
        <a href="/edit/${game._id}" class="button">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
    </div>
    ` : nothing}
    
</div>

<!-- Bonus -->
<!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
<article class="create-comment">
    <label>Add new comment:</label>
    <form class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>

</section>
`

export async function showDetail(ctx) {
    const user = ctx.user;

    const id = ctx.params.id;
    const game = await detailsById(id);
    const isOnwer = user ? game._ownerId === user._id : false;
    const hasUser = user ? true : false

    ctx.render(detailsTemp(game, isOnwer, onDelete));

    async function onDelete() {
        const userConfirm = confirm('Are you sure?');

        if (!userConfirm) {
            return;
        }

        await deleteGame(id);
        ctx.page.redirect('/home')
    }
}