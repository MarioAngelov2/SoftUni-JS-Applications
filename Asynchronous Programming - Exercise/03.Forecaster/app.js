
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
}

function createToday(data) {
    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('forecasts');

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('forecast-data');
}

attachEvents();