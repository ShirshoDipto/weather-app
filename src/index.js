
function getDateAndTime(timezone) {
    const x = new Date().getTime();
    const d = new Date(x+timezone*1000);
    const dateTime = new Date(d.toISOString().slice(0, -1));
    const dateString = dateTime.toDateString();
    const timeString = dateTime.toLocaleTimeString();
    return [ dateString, timeString ];
}


function displayWeatherData(data) {

    const logo = document.querySelector('.logo img');
    logo.src = `http://openweathermap.org/img/wn/${data.logo}@2x.png`;

    const temp = document.querySelector('.temp');
    temp.textContent = `${parseInt(data.temp) - 273}℃`;

    const description = document.querySelector('.description');
    description.textContent = `${data.mainDescription} | ${data.detailDescription}`;

    const feelsLike = document.querySelector('.feels-like-temp');
    feelsLike.textContent = `Feels Like: ${parseInt(data.feels_like) - 273}℃`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `Humidity: ${data.humidity}%`;

    const wind = document.querySelector('.wind');
    wind.textContent = `Wind: ${data.wind} km/h`;

    const city = document.querySelector('.city');
    city.textContent = `${data.city}, ${data.countryCode}`;

    const dateAndTimeStrings = getDateAndTime(data.timezone);
    console.log(dateAndTimeStrings);
    const dateAndTime = document.querySelector('.date-and-time');
    dateAndTime.textContent = `${dateAndTimeStrings[0]}, ${dateAndTimeStrings[1]}`;

    // show the html element
    const results = document.querySelectorAll('#hide');
    results.forEach(result => {
        result.removeAttribute('id');
    });
}


function extractData(weatherObject) {
    let necessaryDatas = {};
    necessaryDatas.coord = weatherObject.coord;
    necessaryDatas.temp = weatherObject.main.temp;
    necessaryDatas.feels_like = weatherObject.main.feels_like;
    necessaryDatas.humidity = weatherObject.main.humidity;
    necessaryDatas.wind = weatherObject.wind.speed;
    necessaryDatas.countryCode = weatherObject.sys.country;
    necessaryDatas.city = weatherObject.name;
    necessaryDatas.logo = weatherObject.weather[0].icon;
    necessaryDatas.mainDescription = weatherObject.weather[0].main;
    necessaryDatas.detailDescription = weatherObject.weather[0].description;
    necessaryDatas.timezone = weatherObject.timezone;
    return necessaryDatas;
}



async function getWeatherData(location, lat=null, lon=null) {
    let response;
    if (lat !== null && lon !== null) {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=32de6d105d017e55c7030daf2682885c`, { mode: "cors"});
    }
    else {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=32de6d105d017e55c7030daf2682885c`, { mode: "cors"});
    }
    const data = await response.json();
    console.log(data);
    if (response.ok) {
        const extractedData = extractData(data);
        console.log(extractedData);
        displayWeatherData(extractedData);
    }
    else {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.removeAttribute('id');
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

  
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeatherData(null, lat, lon);
}


// MAIN
getLocation();

const form = document.querySelector('form');
form.onsubmit = (e) => {
    e.preventDefault();
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.setAttribute('id', 'hideMessage');
    const input = document.querySelector('form input');
    getWeatherData(input.value);
};