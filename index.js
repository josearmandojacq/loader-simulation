/* jshint browserify: true */

///////////// functions /////////////

function progressCallback(percent) {

  divWithProgress.style.width = percent + '%';
}

function finishCallback() {

  divWithProgress.classList.add('finished');
}

function startSimulation() {
  divWithProgress.classList.remove('finished');
  simulateProgress(progressCallback, finishCallback);
}

//////////// Calling the functions////////
var simulateProgress = require('simulate-progress');
var buttons = document.querySelectorAll('button');

buttons.forEach(function (button, index) {

  button.addEventListener('click', function () {
    console.log(this.parentNode);
    divWithProgress = this.parentNode.childNodes[1];

    startSimulation();
  });
});

var divWithProgress;
