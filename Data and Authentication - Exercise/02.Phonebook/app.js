function attachEvents() {
    console.log('TODO...');
}

async function onLoadAllRecords() {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const response = await fetch(url);
    const data = response.json();

    return data;
}

async function onCreateRecord(person, phone) {
    const url = "http://localhost:3030/jsonstore/phonebook";
    body = {§
        person,
        phone
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();
    return data;
}

async function onDeleteRecord(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(body)
    })
}

attachEvents();