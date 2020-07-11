var ctx, items = [], moves= [];
var mouseDownX = null, mouseDownY = null;
var timer;
var moveCount = 0;
var timeCount = 0;
var score = 0;
var imageList = [orange, red, blue, green, grey, purple];
var stryAgainBtn = document.getElementById('tryAgainBtn');
var sound = document.getElementById('sound');
var bgm = document.getElementById('bgm');
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

function setBgImage(){
  ctx.drawImage(bgImage, 0, 0);
}

function setJS(fileName) {
  var elm = document.createElement('script');
  elm.type = 'text/javascipt';
  elm.src = fileName;
  document.body.appendChild(elm);

  setTimeout(function(){
    document.getElementById('basicBtn').style.display = 'none';
    document.getElementById('timeBtn').style.display = 'none';
    initialize();
  }, 200);
}



  

  