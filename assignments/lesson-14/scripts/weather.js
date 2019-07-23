let currentWeatherRequest = new XMLHttpRequest();
currentWeatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=02478,us&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
currentWeatherRequest.send();
currentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(currentWeatherRequest.responseText);
    console.log(weatherData);
    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("bostonDescription").innerHTML = current;
}

let londoncurrentWeatherRequest = new XMLHttpRequest();
londoncurrentWeatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=london,gb&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
londoncurrentWeatherRequest.send();
londoncurrentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(londoncurrentWeatherRequest.responseText);
    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("londonDescription").innerHTML = current;
}

let columbuscurrentWeatherRequest = new XMLHttpRequest();
currentWeatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=43228,us&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
columbuscurrentWeatherRequest.send();
columbuscurrentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(columbuscurrentWeatherRequest.responseText);
    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("columbusDescription").innerHTML = current;
}

let sanantcurrentWeatherRequest = new XMLHttpRequest();
sanantcurrentWeatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=78258,us&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
sanantcurrentWeatherRequest.send();
sanantcurrentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(sanantcurrentWeatherRequest.responseText);
    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("sanantDescription").innerHTML = current;
}