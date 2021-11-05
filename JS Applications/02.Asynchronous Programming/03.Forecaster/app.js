function attachEvents() {

    let button = document.getElementById('submit');
    button.addEventListener('click', display);

}


async function display() {


    let divCurrent = document.getElementById('current');
    let divUpcoming = document.getElementById('upcoming');
    let forcastSection = document.getElementById('forecast');

    try {
        let locationCurrent = await getCurrentLocation();

        let [forecastInfo, nextDays] = await Promise.all([
            getForecast(locationCurrent.code),
            getNextDays(locationCurrent.code)
        ])
        // let forecastInfo = await getForecast(locationCurrent.code);
        // let nextDays = await getNextDays(locationCurrent.code);

        forcastSection.style = 'block';

        let divCur = document.createElement('div');
        divCur.classList.add('forecasts');
        let symbolCur = getSymbol(forecastInfo[0].condition);
        divCur.innerHTML =
            `<span class="condition symbol">${symbolCur}</span>
    <span class="condition">
    <span class="forecast-data">${forecastInfo[1]}</span>
    <span class="forecast-data">${forecastInfo[0].low}&#176;/${forecastInfo[0].high}&#176;</span>
    <span class="forecast-data">${forecastInfo[0].condition}</span>
    </span>`;
        divCurrent.appendChild(divCur);


        let divUp = document.createElement('div');
        divUp.classList.add('forecast-info');
        nextDays.forEach(w => {
            let symbolUp = getSymbol(w.condition);
            divUp.innerHTML +=
                `<span class="upcoming">
            <span class="symbol">${symbolUp}</span>
            <span class="forecast-data">${w.low}&#176;/${w.high}&#176;</span>
            <span class="forecast-data">${w.condition}</span>
        </span>`;
            divUpcoming.appendChild(divUp);
        });
    } catch (error) {
        forcastSection.style = 'block';
        divUpcoming.replaceChildren();
        divCurrent.querySelector('div').textContent = 'Error';
    }

    document.getElementById('submit').disabled = true;
}
async function getCurrentLocation() {

    let url = 'http://localhost:3030/jsonstore/forecaster/locations';

    let response = await fetch(url);

    let data = await response.json();

    let input = document.getElementById('location').value;
    let locations = Object.values(data);

    let location = locations.find(x => x.name == input);
    if (location == undefined) {
        return new Error('Error');
    }
    return location;


}
async function getForecast(code) {

    let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    let response = await fetch(url);
    let data = await response.json();
    let forecast = Object.values(data);

    return forecast;
}
async function getNextDays(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    let response = await fetch(url);
    let data = await response.json();

    let forecastNextDays = Object.values(data.forecast);

    return forecastNextDays;
}
function getSymbol(symbol) {
    let result = '';
    if (symbol == 'Sunny') {
        result = `&#x2600;`;
    } else if (symbol == 'Partly sunny') {
        result = `&#x26C5;`;
    } else if (symbol == 'Overcast') {
        result = `&#x2601;`;
    } else if (symbol == 'Rain') {
        result = `&#x2614;`;
    }
    return result;
}
attachEvents();