import * as api from './api.js';

export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export async function getAllCars() {
    return api.get('/data/cars?sortBy=_createdOn%20desc');
}