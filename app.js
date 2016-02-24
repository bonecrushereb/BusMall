'use strict';

var imgDataObjectArray = [];

var picObject = function(imgName, path, elementid){
  this.imgName = imgName;
  this.path = path;
  this.timeShown = 0;
  this.timeClicked = 0;
  this.elementid = elementid;
  imgDataObjectArray.push(this);
  //console.log(elementid);
}


var bag = new picObject('bag', 'assets/img/bag.jpg', 'bag');
var bathroom = new picObject('bathroom', 'assets/img/bathroom.jpg', 'bathroom');
var boots = new picObject('boots', 'assets/img/boots.jpg', 'boots');
var breakfast = new picObject('breakfast', 'assets/img/breakfast.jpg', 'breakfast');
var bubblegum = new picObject('bubblegum', 'assets/img/bubblegum.jpg', 'bubblegum');
var cthulhu = new picObject('cthulhu', 'assets/img/cthulhu.jpg', 'cthulhu');
var chair = new picObject('chair', 'assets/img/chair.jpg', 'chair');
var dogDuck = new picObject('dog-duck', 'assets/img/dog-duck.jpg', 'dogDuck');
var banana = new picObject('banana', 'assets/img/banana.jpg', 'banana');
var dragon = new picObject('dragon', 'assets/img/dragon.jpg', 'dragon');
var pen = new picObject('pen', 'assets/img/pen.jpg', 'pen');
var petSweep = new picObject('pet-sweep', 'assets/img/pet-sweep.jpg', 'petSweep');
var scissors = new picObject('scissors', 'assets/img/scissors.jpg', 'scissors');
var shark = new picObject('shark', 'assets/img/shark.jpg', 'shark');
var sweep = new picObject('sweep', 'assets/img/sweep.png', 'sweep');
var tauntaun = new picObject('tauntaun', 'assets/img/tauntaun.jpg', 'tauntaun');
var unicorn = new picObject('unicorn', 'assets/img/unicorn.jpg','unicorn');
var usb = new picObject('usb', 'assets/img/usb.gif', 'usb');
var waterCan = new picObject('water-can', 'assets/img/water-can.jpg', 'waterCan');
var wineGlass = new picObject('wine-glass', 'assets/img/wine-glass.jpg', 'wineGlass');
// var lulwat = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function displayImage(imgDataObject) {
  var imageDisplaySection = document.getElementById('imgDisplay');
  var img1 = document.createElement('img');
  img1.setAttribute('src', imgDataObject.path);
  img1.setAttribute('id', imgDataObject.elementid);
  imageDisplaySection.appendChild(img1);
  imgDataObject.timeShown++;
}

function randomImgDataObjectArrayIndex() {
  return Math.floor((Math.random() * imgDataObjectArray.length));
}

function randomImageIndexs() {
  var randImage1 = randomImgDataObjectArrayIndex();
  var randImage2 = randomImgDataObjectArrayIndex();
  var randImage3 = randomImgDataObjectArrayIndex();

  while (randImage1 === randImage2){
    randImage2 = randomImgDataObjectArrayIndex();
    console.log('Detected Collision')
  }
  while (randImage1 === randImage3 || randImage2 === randImage3){
    randImage3 = randomImgDataObjectArrayIndex();
    console.log('Detected Collision')
  }
  return [randImage1,randImage2,randImage3];
}

function display3Images(){
  var randomIndexArray = randomImageIndexs();
  for(var i = 0; i < randomIndexArray.length; i++) {
    var index = randomIndexArray[i];
    var picObject = imgDataObjectArray[index];
    displayImage(picObject);
  }
}

function threeNewImages() {
  var imageDisplaySection = document.getElementById('imgDisplay');
  //console.log('imageDisplaySection is', imageDisplaySection);
  imageDisplaySection.textContent='';
  display3Images();
  imgEventListener();
}

function imageClicked() {
  var clickedID = this.id;
  console.log('click id is ' , clickedID);
  for(var i=0; i < imgDataObjectArray.length; i++) {
    if (clickedID === imgDataObjectArray[i].elementid) {
      imgDataObjectArray[i].timeClicked++;
      console.log(clickedID);
    }
  }
  threeNewImages();
}

function imgEventListener(){
  var displayedImages = document.getElementsByTagName('img');
  for(var i = 0; i < displayedImages.length; i++){
    displayedImages[i].addEventListener('click', imageClicked);
  }
}
display3Images();
imgEventListener();
