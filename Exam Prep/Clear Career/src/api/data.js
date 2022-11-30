import { get, post, put, del } from "./api.js";

//***************** create application service ****************/

export async function getDashboard() {
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function createOffer(data) {
    return post('/data/offers', data);
}

export async function getDetails(id) {
    return get('/data/offers/' + id);
}

export async function deleteById(id) {
    return del('/data/offers/' + id);
}

export async function editById(id, data) {
    return put('/data/offers/' + id, data)
}