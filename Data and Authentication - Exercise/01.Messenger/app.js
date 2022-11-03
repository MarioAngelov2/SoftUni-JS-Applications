function attachEvents() {
    console.log('TODO...');
}

async function getAllMessage() {
    const url = "http://localhost:3030/jsonstore/messenger";
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function createMessage(body) {
    const url = "http://localhost:3030/jsonstore/messenger";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}

attachEvents();