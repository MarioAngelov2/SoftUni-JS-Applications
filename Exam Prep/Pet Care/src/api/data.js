import { get, post } from "./api.js";

export async function getAll() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function createPets(data) {
    return post('/data/pets', data);
}

