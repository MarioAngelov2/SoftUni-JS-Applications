const ul = document.getElementById('phonebook');

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getData);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

function onLoad(data) {

    Object.values(data).forEach(el => {
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        const li = document.createElement('li');
        li.textContent = `${el.person}: ${el.phone}`;
        li.setAttribute('data-id', el._id);
        li.appendChild(delBtn);
        ul.appendChild(li);
    });

}

function onCreate() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const body = {
        person: personInput.value,
        phone: phoneInput.value
    }

    postData(body);
}

async function getData() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url);
    const data = await response.json();

   return onLoad(data);
}

async function postData(body) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)

    });
    const data = await response.json();

    return data;
}

async function deleteData(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    const response = await fetch(url, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(null)
    });
    const data = response.json();
    return data;
}

attachEvents()












































// function attachEvents() {
//     console.log('TODO...');
// }

// // async function onLoadAllRecords() {
// //     const url = "http://localhost:3030/jsonstore/phonebook";
// //     const response = await fetch(url);
// //     const data = response.json();

// //     return data;
// // }

// // async function onCreateRecord(person, phone) {
// //     const url = "http://localhost:3030/jsonstore/phonebook";
// //     body = {
// //         person,
// //         phone
// //     }
// //     const response = await fetch(url, {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "Application/json"
// //         },
// //         body: JSON.stringify(body)
// //     })
// //     const data = await response.json();
// //     return data;
// // }

// // async function onDeleteRecord(id) {
// //     const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
// //     const response = await fetch(url, {
// //         method: "DELETE",
// //         headers: {
// //             "Content-Type": "Application/json"
// //         },
// //         body: JSON.stringify(body)
// //     })
// // }

// attachEvents();