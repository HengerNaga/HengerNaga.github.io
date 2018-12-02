var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mr-show.jpg') {
      myImage.setAttribute ('src','images/mr-show2.jpg');
    } else {
      myImage.setAttribute ('src','images/mr-show.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('fname', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  //var testName = myName
  localStorage.setItem('fname', myName);
  //myName = 'slurp'
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('fname')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('fname');
  //storedName = 'blarg'
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/