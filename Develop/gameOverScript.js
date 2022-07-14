var firstInitial = document.getElementById('initials-1');
var secondInitial = document.getElementById('initials-2');
var thirdInitial = document.getElementById('initials-3');
var initialOne = document.getElementById("initials-1");
var initialTwo = document.getElementById("initials-2");
var initialThree = document.getElementById("initials-3");
var enterListen = document.getElementById("enterListen");

window.onload = function() {
    document.getElementById("initials-1").focus();
};

function movetoNext(current, nextFieldID) {  
    if (current.value.length >= current.maxLength) {  
    document.getElementById(nextFieldID).focus();  
}}

submitButton.addEventListener("click", function() {
    var input = document.getElementById('initials-1').value;
    localStorage.setItem('initialOne', input);
    var input = document.getElementById('initials-2').value;
    localStorage.setItem('initialTwo', input);
    var input = document.getElementById('initials-3').value;
    localStorage.setItem('initialThree', input);
    window.location.href = "leaderboard.html";
});

enterListen.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
  });