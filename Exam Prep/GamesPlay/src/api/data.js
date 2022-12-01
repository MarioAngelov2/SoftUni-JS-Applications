import { get, post, put, del } from "./api.js";

//***************** create application service ****************/

export async function getAll() {
    return get('/data/games?sortBy=_createdOn%20desc');
}

export async function getHomePage() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function createGames(data) {
    return post('/data/games', data);
}

export async function detailsById(id) {
    return get('/data/games/' + id)
}