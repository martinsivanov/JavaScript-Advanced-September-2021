import { createBook, html } from "./utility.js";

let createTemplate = (onSuccess) => html`
<form @submit=${ev=> onSubmit(ev, onSuccess)} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

export function showCreate(ctx) {
    if (ctx.book == undefined) {
        return createTemplate(ctx.update);
    } else {
        return null
    }
}

async function onSubmit(event, onSuccess) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let title = formData.get('title').trim();
    let author = formData.get('author').trim();

    await createBook({ title, author });

    event.target.reset();

    onSuccess();
}