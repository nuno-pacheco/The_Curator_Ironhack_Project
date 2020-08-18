var ctx, items = [], moves= [];
var mouseDownX = null, mouseDownY = null;
var timer;
var moveCount = 0;
var timeCount = 0;
var score = 0;
var imageList = [social, hands, mask, protection, soap, termometro];
var stryAgainBtn = document.getElementById('tryAgainBtn');
var sound = document.getElementById('sound');
var bgm = document.getElementById('bgm');
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

//Splash screen
function setBgImage(){
  ctx.drawImage(bgImage, 135, 30, 335, 300);
  ctx.font = "20px arial";
  ctx.textAlign = "center";
  ctx.fillText("Don't get caught up!", 300, 390 )
  ctx.fillText("Are you fast enought to prevent yourself to get infected?", 300, 440);
  ctx.font = "12px arial";
//ctx.fillText("Score 10'000 point's in 20 moves.", 300, 518);
  ctx.fillText("Score 10'000 point's in 1 minute.", 300, 597);
}

function setJS(fileName) {
  var elm = document.createElement('script');
  elm.type = 'text/javascipt';
  elm.src = fileName;
  document.body.appendChild(elm);

  setTimeout(function(){
  //  document.getElementById('basicBtn').style.display = 'none';
    document.getElementById('timeBtn').style.display = 'none';
    initialize();
  }, 200);
}




  

  