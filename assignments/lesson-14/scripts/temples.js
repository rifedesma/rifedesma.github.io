var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://rifedesma.github.io/assignments/lesson-14/temple.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var templedata = request.response;
    populateHeader(templedata);
    showInfo(templedata);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['name'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');

    header.appendChild(myPara);
}

function showInfo(jsonObj) {
    var temples = jsonObj['temples'];

    for (var i = 0; i < temples.length; i++) {
        var myArticle = document.createElement('article');
        myArticle.id = 'templeArticle';
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');


        var imgPath = 'images/';
        imgPath += temples[i].name.toLowerCase().replace(' ', '');
        imgPath += '.jpg';
        var newImg = document.createElement('IMG');
        newImg.setAttribute("src", imgPath);
        console.log(imgPath);




        myH2.textContent = temples[i].name + ' ';
        myPara1.textContent = 'Date Announced: ' + temples[i].announced + ' ';
        myPara2.textContent = 'Date Dedicated: ' + temples[i].dedicated;
        myPara3.textContent = 'Temple Closures 2019: ';

        var closures = temples[i].TempleClosures;
        for (var j = 0; j < closures.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = closures[j];
            myList.appendChild(listItem);
        }

        newImg.imgPath = imgPath;


        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        myArticle.appendChild(newImg);
        section.appendChild(myArticle);
    }
}