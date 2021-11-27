import { showCatalog } from "./catalog.js"
import { showCreate } from "./create.js";
import { showUpdate } from "./update.js";
import { render } from "./utility.js"

let root = document.body;

let ctx = {
    update
}

update();

function update() {
    render([
        showCatalog(ctx),
        showCreate(ctx),
        showUpdate(ctx)
    ], root);
}