'use strict'
var baby = 'baby', banana = 'banana', pen = 'pen', shark = 'shark';

var oneEl = document.getElementById('one');

var twoEl = document.getElementById('two');

var threeEl = document.getElementById('three');

var stuff = [baby, banana, pen, shark];

function randomImages() {
  for (var i = 0; i < 3; i++) {
    var index1 = Math.floor(Math.random() * stuff.length);
    oneEl.textContent = stuff[index1];

    var index2 = Math.floor(Math.random() * stuff.length);
    if(index1 != index2 || index1 != index3) {
      twoEl.textContent = stuff[index2];
    }

    while(index1 === index2){
      var index2 = Math.floor(Math.random() * stuff.length);
      if(index2 != index1 || index2 != index3){
        twoEl.textContent = stuff[index2];
      }
    }

    var index3 = Math.floor(Math.random() * stuff.length);
    if(index3 != index2 || index3 != index1) {
      threeEl.textContent = stuff[index3];
    }
    while(index3 === index2 || index3 === index1) {
      var index3 = Math.floor(Math.random() * stuff.length);
      if(index3 != index1 || index3 != index2){
        threeEl.textContent = stuff[index3];
      }
    }
  }
  console.log(stuff[index1]);
  console.log(stuff[index2]);
  console.log(stuff[index3]);
// Keep track of stuffSeen by pushing this rounds/forloops stuff and log the all of the stuff seen to the console

  // stuffSeen.push(stuff[index1],stuff[index2],stuff[index3]);
  // console.log('stuffSeen: ' + '[ ' + stuffSeen + ' ]');
}
randomImages();
