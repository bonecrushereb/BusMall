'use strict';
var imgDataObjectArray = [];

var picObject = function(imgName, path){
  this.imgName = imgName;
  this.path = path;
  this.timeShown = 0;
  this.timeChecked = 0;
  imgDataObjectArray.push(this);
}


var bag = new picObject('bag', 'assets/img/bag.jpg');
var banana = new picObject('banana', 'assets/img/banana.jpg');
var bathroom = new picObject('bathroom', 'assets/img/bathroom.jpg');
var boots = new picObject('boots', 'assets/img/boots.jpg');
var breakfast = new picObject('breakfast', 'assets/img/breakfast.jpg');
var bubblegum = new picObject('bubblegum', 'assets/img/bubblegum.jpg');
var chair = new picObject('chair', 'assets/img/chair.jpg');
var cthulhu = new picObject('cthulhu', 'assets/img/cthulhu.jpg');
var dogDuck = new picObject('dog-duck', 'assets/img/dog-duck.jpg');
var dragon = new picObject('dragon', 'assets/img/dragon.jpg');
var pen = new picObject('pen', 'assets/img/pen.jpg');
var petSweep = new picObject('pet-sweep', 'assets/img/pet-sweep.jpg');
var scissors = new picObject('scissors', 'assets/img/scissors.jpg');
var shark = new picObject('shark', 'assets/img/shark.jpg');
var sweep = new picObject('sweep', 'assets/img/sweep.png');
var tauntaun = new picObject('tauntaun', 'assets/img/tauntaun.jpg');
var unicorn = new picObject('unicorn', 'assets/img/unicorn.jpg');
var usb = new picObject('usb', 'assets/img/usb.gif');
var waterCan = new picObject('water-can', 'assets/img/water-can.jpg');
var wineGlass = new picObject('wine-glass', 'assets/img/wine-glass.jpg');

var imgDataObjects = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function displayImage(imgDataObject) {
  var imageDisplaySection = document.getElementById('imgDisplay');
  var img1 = document.createElement('img');
  img1.setAttribute('src', imgDataObject.path);
  imageDisplaySection.appendChild(img1);
}
// displayImage(usb);
// displayImage(imgDataObjects[3]);
