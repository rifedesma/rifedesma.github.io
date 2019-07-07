let currentWeatherRequest = new XMLHttpRequest();
currentWeatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
currentWeatherRequest.send();
/*var apiURLstring = "api.openweathermap.org / data / 2.5 / forecast ? id = 5604473 & APPID= 7d408c0a7bc96b2b870cb8d32556f0f6";*/
currentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(currentWeatherRequest.responseText);

    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("description").innerHTML = current;

    // current temperature
    let tempF = convertKtoF(weatherData.main.temp);
    document.getElementById("temp").innerHTML = tempF.toFixed(2);

    // current windchill
    let windspeed = weatherData.wind.speed;
    let windchill = calculateWindChill(tempF, windspeed);
    document.getElementById("windchill").innerHTML = windchill.toFixed(2);

    // current humidity
    document.getElementById("humidity").innerHTML = weatherData.main.humidity + "%";

    // current windspeed
    document.getElementById("windspeed").innerHTML = windspeed + " mph";
}

let forecastWeatherRequest = new XMLHttpRequest();
forecastWeatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
forecastWeatherRequest.send();
/*var apiURLstring = "api.openweathermap.org / data / 2.5 / forecast ? id = 5604473 & APPID= 7d408c0a7bc96b2b870cb8d32556f0f6";*/
forecastWeatherRequest.onload = function() {
    let weatherData = JSON.parse(forecastWeatherRequest.responseText);

    // day one
    let tempOne = convertKtoF(weatherData.list[0].main.temp);
    let descOne = weatherData.list[0].weather[0].icon;
    let icon = "http://openweathermap.org/img/wn/" + descOne + "@2x.png";
    var newImg = document.getElementById("dayOne");
    newImg.setAttribute("src", icon);
    document.getElementById("forecastTemp").innerHTML += tempOne.toFixed(2) + "&deg;";



    // day two
    let tempTwo = convertKtoF(weatherData.list[8].main.temp);
    let descTwo = weatherData.list[8].weather[0].icon;
    let iconTwo = "http://openweathermap.org/img/wn/" + descTwo + "@2x.png";
    var newImg = document.getElementById("dayTwo");
    newImg.setAttribute("src", iconTwo);
    document.getElementById("forecastTempTwo").innerHTML += tempTwo.toFixed(2);


    // day three
    let tempThree = convertKtoF(weatherData.list[16].main.temp);
    let descThree = weatherData.list[16].weather[0].icon;
    let iconThree = "http://openweathermap.org/img/wn/" + descThree + "@2x.png";
    var newImg = document.getElementById("dayThree");
    newImg.setAttribute("src", iconThree);
    document.getElementById("forecastTempThree").innerHTML += tempThree.toFixed(2);


    // day four
    let tempFour = convertKtoF(weatherData.list[24].main.temp);
    let descFour = weatherData.list[24].weather[0].icon;
    let iconFour = "http://openweathermap.org/img/wn/" + descFour + "@2x.png";
    var newImg = document.getElementById("dayFour");
    newImg.setAttribute("src", iconFour);
    document.getElementById("forecastTempFour").innerHTML += tempFour.toFixed(2);


    // day five
    let tempFive = convertKtoF(weatherData.list[32].main.temp);
    let descFive = weatherData.list[32].weather[0].icon;
    let iconFive = "http://openweathermap.org/img/wn/" + descFive + "@2x.png";
    var newImg = document.getElementById("dayFive");
    newImg.setAttribute("src", iconFive);
    document.getElementById("forecastTempFive").innerHTML += tempFive.toFixed(2);
    console.log(descOne + ' ' + descTwo + ' ' + descThree + ' ' + descFour + ' ' + descFive);
}

// ----------------------------------------------
// END OF PRESTON, IDAHO
// ----------------------------------------------

// ----------------------------------------------
// FISH HAVEN - 5585010
// ----------------------------------------------

let fhCurrentWeatherRequest = new XMLHttpRequest();
fhCurrentWeatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
fhCurrentWeatherRequest.send();
/*var apiURLstring = "api.openweathermap.org / data / 2.5 / forecast ? id = 5604473 & APPID= 7d408c0a7bc96b2b870cb8d32556f0f6";*/
fhCurrentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(fhCurrentWeatherRequest.responseText);
    console.log(weatherData);
    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("fh-description").innerHTML = current;

    // current temperature
    let tempF = convertKtoF(weatherData.main.temp);
    document.getElementById("fh-temp").innerHTML = tempF.toFixed(2);

    // current windchill
    let windspeed = weatherData.wind.speed;
    let windchill = calculateWindChill(tempF, windspeed);
    document.getElementById("fh-windchill").innerHTML = windchill.toFixed(2);

    // current humidity
    document.getElementById("fh-humidity").innerHTML = weatherData.main.humidity + "%";

    // current windspeed
    document.getElementById("fh-windspeed").innerHTML = windspeed + " mph";
}

let fhForecastWeatherRequest = new XMLHttpRequest();
fhForecastWeatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
fhForecastWeatherRequest.send();
/*var apiURLstring = "api.openweathermap.org / data / 2.5 / forecast ? id = 5604473 & APPID= 7d408c0a7bc96b2b870cb8d32556f0f6";*/
fhForecastWeatherRequest.onload = function() {
    let weatherData = JSON.parse(fhForecastWeatherRequest.responseText);

    // day one
    let tempOne = convertKtoF(weatherData.list[0].main.temp);
    let descOne = weatherData.list[0].weather[0].icon;
    let icon = "http://openweathermap.org/img/wn/" + descOne + "@2x.png";
    var newImg = document.getElementById("fh-dayOne");
    newImg.setAttribute("src", icon);
    document.getElementById("fh-forecastTemp").innerHTML += tempOne.toFixed(2) + "&deg;";



    // day two
    let tempTwo = convertKtoF(weatherData.list[8].main.temp);
    let descTwo = weatherData.list[8].weather[0].icon;
    let iconTwo = "http://openweathermap.org/img/wn/" + descTwo + "@2x.png";
    var newImg = document.getElementById("fh-dayTwo");
    newImg.setAttribute("src", iconTwo);
    document.getElementById("fh-forecastTempTwo").innerHTML += tempTwo.toFixed(2);


    // day three
    let tempThree = convertKtoF(weatherData.list[16].main.temp);
    let descThree = weatherData.list[16].weather[0].icon;
    let iconThree = "http://openweathermap.org/img/wn/" + descThree + "@2x.png";
    var newImg = document.getElementById("fh-dayThree");
    newImg.setAttribute("src", iconThree);
    document.getElementById("fh-forecastTempThree").innerHTML += tempThree.toFixed(2);


    // day four
    let tempFour = convertKtoF(weatherData.list[24].main.temp);
    let descFour = weatherData.list[24].weather[0].icon;
    let iconFour = "http://openweathermap.org/img/wn/" + descFour + "@2x.png";
    var newImg = document.getElementById("fh-dayFour");
    newImg.setAttribute("src", iconFour);
    document.getElementById("fh-forecastTempFour").innerHTML += tempFour.toFixed(2);


    // day five
    let tempFive = convertKtoF(weatherData.list[32].main.temp);
    let descFive = weatherData.list[32].weather[0].icon;
    let iconFive = "http://openweathermap.org/img/wn/" + descFive + "@2x.png";
    var newImg = document.getElementById("fh-dayFive");
    newImg.setAttribute("src", iconFive);
    document.getElementById("fh-forecastTempFive").innerHTML += tempFive.toFixed(2);
    console.log(descOne + ' ' + descTwo + ' ' + descThree + ' ' + descFour + ' ' + descFive);
}

// ----------------------------------------------
// END OF FISH HAVEN, IDAHO
// ----------------------------------------------

// ----------------------------------------------
// SODA SPRINGS - 5607916
// ----------------------------------------------

let ssCurrentWeatherRequest = new XMLHttpRequest();
ssCurrentWeatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
ssCurrentWeatherRequest.send();
/*var apiURLstring = "api.openweathermap.org / data / 2.5 / forecast ? id = 5604473 & APPID= 7d408c0a7bc96b2b870cb8d32556f0f6";*/
ssCurrentWeatherRequest.onload = function() {
    let weatherData = JSON.parse(ssCurrentWeatherRequest.responseText);

    // current weather description
    let current = weatherData.weather[0].description;
    document.getElementById("ss-description").innerHTML = current;

    // current temperature
    let tempF = convertKtoF(weatherData.main.temp);
    document.getElementById("ss-temp").innerHTML = tempF.toFixed(2);

    // current windchill
    let windspeed = weatherData.wind.speed;
    let windchill = calculateWindChill(tempF, windspeed);
    document.getElementById("ss-windchill").innerHTML = windchill.toFixed(2);

    // current humidity
    document.getElementById("ss-humidity").innerHTML = weatherData.main.humidity + "%";

    // current windspeed
    document.getElementById("ss-windspeed").innerHTML = windspeed + " mph";
}

let ssForecastWeatherRequest = new XMLHttpRequest();
ssForecastWeatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=7d408c0a7bc96b2b870cb8d32556f0f6", true);
ssForecastWeatherRequest.send();
/*var apiURLstring = "api.openweathermap.org / data / 2.5 / forecast ? id = 5604473 & APPID= 7d408c0a7bc96b2b870cb8d32556f0f6";*/
ssForecastWeatherRequest.onload = function() {
    let weatherData = JSON.parse(ssForecastWeatherRequest.responseText);

    // day one
    let tempOne = convertKtoF(weatherData.list[0].main.temp);
    let descOne = weatherData.list[0].weather[0].icon;
    let icon = "http://openweathermap.org/img/wn/" + descOne + "@2x.png";
    var newImg = document.getElementById("ss-dayOne");
    newImg.setAttribute("src", icon);
    document.getElementById("ss-forecastTemp").innerHTML += tempOne.toFixed(2) + "&deg;";



    // day two
    let tempTwo = convertKtoF(weatherData.list[8].main.temp);
    let descTwo = weatherData.list[8].weather[0].icon;
    let iconTwo = "http://openweathermap.org/img/wn/" + descTwo + "@2x.png";
    var newImg = document.getElementById("ss-dayTwo");
    newImg.setAttribute("src", iconTwo);
    document.getElementById("ss-forecastTempTwo").innerHTML += tempTwo.toFixed(2);


    // day three
    let tempThree = convertKtoF(weatherData.list[16].main.temp);
    let descThree = weatherData.list[16].weather[0].icon;
    let iconThree = "http://openweathermap.org/img/wn/" + descThree + "@2x.png";
    var newImg = document.getElementById("ss-dayThree");
    newImg.setAttribute("src", iconThree);
    document.getElementById("ss-forecastTempThree").innerHTML += tempThree.toFixed(2);


    // day four
    let tempFour = convertKtoF(weatherData.list[24].main.temp);
    let descFour = weatherData.list[24].weather[0].icon;
    let iconFour = "http://openweathermap.org/img/wn/" + descFour + "@2x.png";
    var newImg = document.getElementById("ss-dayFour");
    newImg.setAttribute("src", iconFour);
    document.getElementById("ss-forecastTempFour").innerHTML += tempFour.toFixed(2);


    // day five
    let tempFive = convertKtoF(weatherData.list[32].main.temp);
    let descFive = weatherData.list[32].weather[0].icon;
    let iconFive = "http://openweathermap.org/img/wn/" + descFive + "@2x.png";
    var newImg = document.getElementById("ss-dayFive");
    newImg.setAttribute("src", iconFive);
    document.getElementById("ss-forecastTempFive").innerHTML += tempFive.toFixed(2);
    console.log(descOne + ' ' + descTwo + ' ' + descThree + ' ' + descFour + ' ' + descFive);
}

// ----------------------------------------------
// END OF SODA SPRINGS, IDAHO
// ----------------------------------------------


// converts kelvin to fahrenheit
function convertKtoF(kelvin) {
    return (kelvin - 273.15) * (9.0 / 5) + 32;
}

// calculates windchill
function calculateWindChill(temp, windspeed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);
}