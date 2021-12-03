import { deleteGameById, getGameById, makeComment, getAllCommentsByGameId } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

let detailsTemplate = (game, commentsGame, isUser, isGuest, isOwner, onDelete, addComment) => html`
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
                ${commentsGame.length == 0 
                    ? html`<p class="no-comment">No comments.</p>`
                    : commentsGame.map(commentInfo)}
            </ul>
            <!-- Display paragraph: If there are no games in the database -->

        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${isOwner ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="/" class="button">Delete</a>
        </div>` : null}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${isUser ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${addComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` : null}

</section>`;

let commentInfo = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

export async function detailsPage(ctx) {
    let game = await getGameById(ctx.params.id);
    let userData = getUserData();
    let isOwner = userData && userData.id == game._ownerId;

    let isGuest = false;
    let isUser = false;

    if (!isOwner && userData) {
        isUser = true;
    } else if (!isOwner) {
        isGuest = true;
    }

    let commentsGame = await getAllCommentsByGameId(ctx.params.id);

    ctx.render(detailsTemplate(game, commentsGame, isUser, isGuest, isOwner, onDelete, addComment));

    async function onDelete() {
        let isconfirm = confirm('Are you sure?');
        if (isconfirm) {
            await deleteGameById(ctx.params.id);
        }
    }
    async function addComment(event) {
        event.preventDefault();
        let form = document.querySelector('form');
        let formData = new FormData(form);
        let comment = formData.get('comment').trim();
        if (comment == '') {
            alert('Comment is required!')
        } else {
            await makeComment(ctx.params.id, comment);
            form.reset();
            ctx.page.redirect('/details/' + ctx.params.id);
        }

    }
}