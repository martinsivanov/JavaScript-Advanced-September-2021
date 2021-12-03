import * as api from './api.js';

export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function getMostRecentGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function createGame(game) {
    return api.post('/data/games', game);
}

export async function getGameById(id) {
    return api.get('/data/games/' + id);
}

export async function editGameById(id, data) {
    return api.put('/data/games/' + id, data);
}

export async function deleteGameById(id) {
    return api.del('/data/games/' + id);
}

export async function getAllCommentsByGameId(gameId) {
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function makeComment(gameId, comment) {
    return api.post('/data/comments', { gameId, comment });
}
