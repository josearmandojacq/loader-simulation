/* jshint browserify: true */

///////////// functions /////////////

function progressCallback(percent) {

  divWithProgress.style.width = percent;
}

function finishCallback() {

  divWithLoader.classList.add('finished');
}

function startSimulation() {
  divWithLoader.classList.remove('finished');
  simulateProgress(progressCallback, finishCallback);
}





//////////// Calling the functions////////
var simulateProgress = require('simulate-progress');
var divWithProgress = document.querySelector('.progress');
var divWithLoader = document.querySelector('.loader');

var button = document.querySelector('button');
button.addEventListener('click', startSimulation);
