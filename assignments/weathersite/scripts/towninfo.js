var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var towndata = request.response;
    populateHeader(towndata);
    showInfo(towndata);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['name'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    /* myPara.textContent = jsonObj['motto '] + 'Year Founded ' + jsonObj['yearFounded'] +
         ' Current Population ' + jsonObj['currentPopulation'] + 'Average Rainfall ' + jsonObj['averageRainfall'];*/
    header.appendChild(myPara);
}

function showInfo(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++)
        if (i == 1 || i == 4 || i == 5) {
            var myArticle = document.createElement('article');
            myArticle.id = 'townArticle';
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var imgPath = 'images/';
            imgPath += towns[i].name.toLowerCase().replace(' ', '');
            imgPath += '.jpg';
            var newImg = document.createElement('IMG');
            newImg.setAttribute("src", imgPath);
            console.log(imgPath);




            myH2.textContent = towns[i].name + ' ';
            myPara1.textContent = towns[i].motto + ' ';
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            newImg.imgPath = imgPath;


            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(newImg);
            section.appendChild(myArticle);
        }
}