
function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeatherInfo);
}

async function getWeatherInfo() { 
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = response.json();
    
    const forecastConteiner = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const townName = document.getElementById('location').value;

    const info = Object.values(townName).find(x => x.name === townName);
    
    createForeCaster(info.code);
}

async function createForeCaster(code) {
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`

    const responseToday = await fetch(urlToday);
    const dataToday = await responseToday.json();

    const responseThreeDays = await fetch(urlThreeDays);
    const dataThreeDays = await responseThreeDays.json();

    createToday(dataToday);
}

function createToday(data) {
    const {condition, high, low} = data.forecast;
    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('forecasts');

    const conditionSymbol = document.createElement('span');
    conditionSymbol.classList.add('condition');

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition')

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.textContent = `${data.low}/${data.high}`;

    const contitionInfo = document.createElement('span');
    contitionInfo.classList.add('forecast-data');
    contitionInfo.textContent = data.condition; 

    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(tempSpan);
    conditionSpan.appendChild(contitionInfo);
    conditionContainer.appendChild(conditionSymbol);
    conditionContainer.appendChild(conditionSpan);
}

attachEvents();