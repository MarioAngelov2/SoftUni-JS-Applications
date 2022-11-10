
async function getData() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    const response = await fetch(url);
    const data = await response.json();

    return Object.values(data);
}

async function getRecipeId(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/` + id;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createRecipePreview(recipe) {
    const article = generateHtml('article', '');
    article.classList.add('preview');
    article.addEventListener('click', toggleCard);

    const divTitle = generateHtml('div', '', article);
    divTitle.classList.add('title');
    generateHtml('h2', 'Title', divTitle);

    const divSmall = generateHtml('div', '', article);
    divSmall.classList.add('small');
    const img = generateHtml('img', '', divSmall);
    img.setAttribute('src', `${recipe.img}`);

    return article;

    async function toggleCard() {
     
        const fullRecipe = await getRecipeId(recipe._id);
        article.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const article = generateHtml('article', '');
    generateHtml('h2', recipe.name, article);

    const divBand = generateHtml('div', '', article);
    divBand.classList.add('band')

    const divThumb = generateHtml('div', '', divBand);
    divThumb.classList.add('thumb');

    const img = generateHtml('img', '', divThumb);
    img.setAttribute('src', `${recipe.img}`);

    const divIngredients = generateHtml('div', '', divBand);
    divIngredients.classList.add('ingredients');

    generateHtml('h3', 'Ingredients:', divIngredients);
    
    const ul = generateHtml('ul', '', divIngredients);
    recipe.ingredients.map(i => generateHtml('li', `${i}`, ul));

    const divDescription = generateHtml('div', '', article);
    divDescription.classList.add('description');
    
    generateHtml('h3', 'Preparation:', divDescription);

    recipe.steps.map(el => generateHtml('p', `${el}`, divDescription));

    return article;
}

window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getData();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c))
});

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