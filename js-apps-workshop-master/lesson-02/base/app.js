
async function getData() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const response = await fetch(url);
    const data = await response.json();

    return Object.values(data);
}

async function getRecipeInfo(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/` + id;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createRecipePreview(recipe) {
    const article = generateHtml('article', '');
    article.classList.add('preview');
    article.addEventListener('click', toggleCard);
}

function generateHtml(type, content, parent) {
    const element = document.createElement(type);

    if (type) {
        element.textContent = content;
    }

    if (parent) {
        parent.appendChild(element);
    }
    return element;
}