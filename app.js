'use strict';


var picObject = function(name, path){
  this.name = name;
  this.path = path;
  this.timeshow = 0;
  this.timechecked = 0;
}

var pic1 = new picObject('bag', 'assets/img/bag.jpg');
var pic2 = new picObject('banana', 'assets/img/banana.jpg');
var pic3 = new picObject('bathroom', 'assets/img/bathroom.jpg');
var pic4 = new picObject('boots', 'assets/img/boots.jpg');
var pic5 = new picObject('breakfast', 'assets/img/breakfast.jpg');
var pic6 = new picObject('bubblegum', 'assets/img/bubblegum.jpg');
var pic7 = new picObject('chair', 'assets/img/chair.jpg');
var pic8 = new picObject('cthulhu', 'assets/img/cthulhu.jpg');
var pic9 = new picObject('dog-duck', 'assets/img/dog-duck.jpg');
var pic10 = new picObject('dragon', 'assets/img/dragon.jpg');
var pic11 = new picObject('pen', 'assets/img/pen.jpg');
var pic12 = new picObject('pet-sweep', 'assets/img/pet-sweep.jpg');
var pic13 = new picObject('scissors', 'assets/img/scissors.jpg');
var pic14 = new picObject('shark', 'assets/img/shark.jpg');
var pic15 = new picObject('sweep', 'assets/img/sweep.png');
var pic16 = new picObject('tauntaun', 'assets/img/tauntaun.jpg');
var pic17 = new picObject('unicorn', 'assets/img/unicorn.jpg');
var pic18 = new picObject('usb', 'assets/img/usb.gif');
var pic19 = new picObject('water-can', 'assets/img/water-can.jpg');
var pic20 = new picObject('win-glass', 'assets/img/win-glass.jpg');

var imgDataObjects = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20];


function displayImage(imgDataObject) {
  var img1 = document.createElement('img');
  img1.setAttribute('src', imgDataObject.path);
  document.body.appendChild(img1);


  //<img src =,
  // for(var i = 0; i <imgDataObjects.length; i++){
  //   var index1 = Math.floor(Math.random() * imgDataObjects.length);
  //     oneEl.textContent = imgDataObjects[i];
  // }
}


 displayImage(pic10);
// displayImage(pic17);
// displayImage(imgDataObjects[3]);





// // var imageGen = function(imageName, clickedImages, images){
// //   this.imageName = imageName;
// //   this.clickedImages = clickedImages;
// //   this.images = [];
// // }
// var baby = 'baby', banana = 'banana', pen = 'pen', shark = 'shark';
//


// var img1 = document.getElementById('one');
//
// var img = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg'];
//
// var img = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png','tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
//
// function showRandImg(){
//   //get random index for array
//   var randIndex = Math.floor(Math.random() * img.length);
//   img1.src = 'assets/img/' + img[randIndex];
//   //use index to concat a file path
// }
// showRandImg();
//
// var oneEl = document.getElementById('one');
//
// var twoEl = document.getElementById('two');
//
// var threeEl = document.getElementById('three');
//
// var stuff = [baby, banana, pen, shark];
//
// function imgGen(){
//   for(var i = 0; i < img.length; i++){
//     img.setAttribute('src',img[i]);
//     console.log(img);
//   }
// }
//
// function randomImages() {
//   for (var i = 0; i < 3; i++) {
//     var index1 = Math.floor(Math.random() * stuff.length);
//     oneEl.textContent = stuff[index1];
//
//     var index2 = Math.floor(Math.random() * stuff.length);
//     if(index1 != index2 || index1 != index3) {
//       twoEl.textContent = stuff[index2];
//     }
//
//     while(index1 === index2){
//       var index2 = Math.floor(Math.random() * stuff.length);
//       if(index2 != index1 || index2 != index3){
//         twoEl.textContent = stuff[index2];
//       }
//     }
//
//     var index3 = Math.floor(Math.random() * stuff.length);
//     if(index3 != index2 || index3 != index1) {
//       threeEl.textContent = stuff[index3];
//     }
//     while(index3 === index2 || index3 === index1) {
//       var index3 = Math.floor(Math.random() * stuff.length);
//       if(index3 != index1 || index3 != index2){
//         threeEl.textContent = stuff[index3];
//       }
//     }
//   }
//   console.log(stuff[index1]);
//   console.log(stuff[index2]);
//   console.log(stuff[index3]);
// // Keep track of stuffSeen by pushing this rounds/forloops stuff and log the all of the stuff seen to the console
//
//   // stuffSeen.push(stuff[index1],stuff[index2],stuff[index3]);
//   // console.log('stuffSeen: ' + '[ ' + stuffSeen + ' ]');
// }
// randomImages();
