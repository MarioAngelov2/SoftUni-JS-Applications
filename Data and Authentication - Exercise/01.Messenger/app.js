function attachEvents() {
    document.getElementById('refresh').addEventListener('click', getData);
    document.getElementById('submit').addEventListener('click', onSendMsg)
}

function showInfo(data) {
    const textArea = document.getElementById('messages');
    debugger
    const response = Object.values(data).map(entry => 
        `${entry.author}: ${entry.content}`).join('\n');

    textArea.textContent = response;
}

function onSendMsg() {
    let nameInput = document.querySelector("input[name='author']");
    let messageInput = document.querySelector("input[name='content']");

    const body = {
        author: nameInput.value,
        content: messageInput.value
    }
    nameInput.value = '';
    messageInput.value = '';

    createMessage(body);
}

async function getData() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch(url);
    const data = await response.json();
    
    showInfo(data)
}

async function createMessage(body) {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch(url, {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
    const data = await response.json();

    return data;
}

attachEvents()




// function attachEvents() {
//     document.getElementById('refresh').addEventListener('click', getAllMessage);
//     document.getElementById('submit').addEventListener('click', onSendMsg);
// }

// function renderMsg(data) {
//   const textArea = document.getElementById('messages');
//   const response = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n')
//   textArea.textContent = response
// }

// function onSendMsg() {
//     const author = document.querySelector("input[name='author']");
//     const content = document.querySelector("input[name='content']");

//     const body = {
//         author: author.value,
//         content: content.value
//     }
//     author.value = '';
//     content.value = '';
//     createMessage(body)
// }

// async function getAllMessage() {
//     const url = "http://localhost:3030/jsonstore/messenger";
//     const response = await fetch(url);
//     const data = await response.json();

//     renderMsg(data)
// }

// async function createMessage(body) {
//     const url = "http://localhost:3030/jsonstore/messenger";
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body)
//     });
//     const data = await response.json();
//     return data;
// }

// attachEvents();