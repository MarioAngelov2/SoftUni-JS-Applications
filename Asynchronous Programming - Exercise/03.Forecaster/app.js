const generateIcons = {
    "Sunny": "&#x2600",
    "Partly sunny": "&#x26C5",
    "Overcast": "&#x2601",
    "Rain": "&#x2614"
}

function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeatherInfo);
}

async function getWeatherInfo() { 
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const townName = document.getElementById('location').value;

    const response = await fetch(url);
    const data = await response.json();
    
    // const forecastConteiner = document.getElementById('forecast');
    // const currentDiv = document.getElementById('current');
    // const upcomingDiv = document.getElementById('upcoming');

    const info = data.find(x => x.name === townName);
    createForeCaster(info.code);
}

async function createForeCaster(code) {
    const currentSection = document.getElementById('current');
    const forecastContainer = document.getElementById('forecast');
    const upcomingSection = document.getElementById('upcoming');
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`

    const responseToday = await fetch(urlToday);
    const dataToday = await responseToday.json();

    const responseThreeDays = await fetch(urlThreeDays);
    const dataThreeDays = await responseThreeDays.json();
    
    forecastContainer.style.display = 'block'
    const todayHtml = createToday(dataToday);
    currentSection.appendChild(todayHtml);

    const upcomingHtml = createUpcoming(dataThreeDays);
    upcomingSection.appendChild(upcomingHtml)
}

function createUpcoming(data) {
    const container = document.createElement('div');
    container.classList.add('forecast-info');

    data.forecast.forEach(data => {
        const spanHolder = generateSpan(data);
        container.appendChild(spanHolder)
    })
    return container
}

function generateSpan(data) {
    const {condition, high, low} = data

    const spanHolder = document.createElement('span');
    spanHolder.classList.add('upcoming');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('symbol');
    iconSpan.innerHTML = generateIcons[condition]

    const degreeSpan = document.createElement('span');
    degreeSpan.classList.add('forecast-data');
    degreeSpan.innerHTML = `${low}&#176/${high}&#176`;

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('forecast-data');
    conditionSpan.innerHTML = `${condition}`;

    spanHolder.appendChild(iconSpan);
    spanHolder.appendChild(degreeSpan);
    spanHolder.appendChild(conditionSpan);
    return spanHolder
}

function createToday(data) {
    const {condition, high, low} = data.forecast;
    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('forecasts');

    const conditionSymbol = document.createElement('span');
    conditionSymbol.classList.add('condition', 'symbol');
    conditionSymbol.innerHTML = generateIcons[condition]

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition')

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.innerHTML = `${low}&#176/${high}&#176`;

    const contitionInfo = document.createElement('span');
    contitionInfo.classList.add('forecast-data');
    contitionInfo.textContent = `${condition}`; 

    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(tempSpan);
    conditionSpan.appendChild(contitionInfo);
    conditionContainer.appendChild(conditionSymbol);
    conditionContainer.appendChild(conditionSpan);
    return conditionContainer;
}

attachEvents();