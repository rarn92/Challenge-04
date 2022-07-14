var highScoreList = document.getElementById("highScoreList");
var initialOne = localStorage.getItem('initialOne');
var initialOne = initialOne.toUpperCase();
var initialTwo = localStorage.getItem('initialTwo');
var initialTwo = initialTwo.toUpperCase();
var initialThree = localStorage.getItem('initialThree');
var initialThree = initialThree.toUpperCase();
var finalUserScore = localStorage.getItem('User Score');


highScoreList.innerHTML = `<li>` + initialOne +  initialTwo + initialThree + "   " + finalUserScore + `</li>`;

