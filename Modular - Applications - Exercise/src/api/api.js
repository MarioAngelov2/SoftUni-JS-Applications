const host = 'http://localhost:3030/'

async function reqest(url, options) {

    try {
        const response = await fetch(host + url, options);
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message)
        }
        try {
            if (response.status === 204) {
                return response;
            }

            const data = await response.json();
            return data;
        }
        catch(error) {
            alert(error.message);
            throw new Error (error);
        }
    }
    catch(error){
        alert(error.message);
        throw new Error (error);
    }
}   

function getOption(method, body) {
    const options = {
        method,
        headers: {}
    }

    const user = JSON.parse(sessionStorage.getItem('userData'));

    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body); 
    }

    return options;
}

export async function get(url) {
    return await reqest(url, getOption('GET'));
}

export async function post(url, data) {
    return await reqest(url, getOption('POST', data))
}

export async function put(url, data) {
    return await reqest(url, getOption('PUT', data));
}

export async function del(url) {
    return await reqest(url, getOption('DELETE'));
}