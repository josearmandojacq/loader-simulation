(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"simulate-progress":2}],2:[function(require,module,exports){
module.exports = function simulateProgress(progress, finished) {
  var i = 0;
  var interval;
  interval = setInterval(function() {
    if (i >= 100) {
      clearInterval(interval);
      finished();
    }
    else {
      i += 5;
      progress(i);
    }
  }, 100);
};

},{}]},{},[1]);
