function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}
  
function showPosition(position) {
    console.log(position);
    lati = position.coords.latitude;
    longi = position.coords.longitude;
    console.log(lati);
    console.log(longi);
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
    console.log(logo);
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
        console.log(data.cod)
        console.log(data.message)
    }
}


// MAIN
let lati = 0;
let longi = 0;
getLocation();
console.log(lati);
console.log(longi);
getWeatherData(null, lati, longi);
console.log('hi there');

const form = document.querySelector('form');
form.onsubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('form input');
    getWeatherData(input.value);
};