function windchill() {
    var speed = parseInt(document.getElementById('speed').innerHTML);

    var temp = parseInt(document.getElementById('temp').innerHTML);

    var windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

    document.getElementById("windchill").innerHTML = Math.round(windchill * 10) / 10 + ' &deg;';

    console.log(speed, temp, windchill);
}