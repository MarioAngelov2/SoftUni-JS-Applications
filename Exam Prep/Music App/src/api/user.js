import { clearUserData, setUserData } from "../util.js";
import { get, post} from "./api.js";

// const endpoints = {
//     'login': // add login endpoint,
//     'register': // add register endpoint,
//     'logout': // add logout endpoint
// }

export async function login(email, password) {
    const { _id, email: resultEmail, accessToken } = await post('/users/login', { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function register(email, password) {
    const { _id, email: resultEmail, accessToken } = await post('/users/register', { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}