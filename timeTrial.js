function initialize(){
    timeCount = 60 * 1000 // 1 minute.
    //timeCount = 30 * 1000 // 30 sec.
    //timeCount = 10 * 1000 // 10 sec.
    score = 0;

    //Create Items
    for(var x = 0; x< 10; x++){
      items[x] =[];
      for (var y = 0; y < 10; y++) {
        items[x][y] = new Item(x, y);
      }
    }

    // Sett color.
    for ( var x = 0; x < 10; x++){
      for (var y = 0; y < 10; y++) {
        while (true) {
          var colorNum = getRandomNum(6);
          if (checkColor(x, y, colorNum)) {
            items[x][y].color = colorNum;
            break;
          }
        }
      }
    }


    // Set mouse events.
    canvas.onmousedown = myMouseDown;
    canvas.onmouseup = myMouseUp;

    // Start timer.
    timer = setInterval(checkItemStatus, 25);
    bgm.play();
}

  function checkItemStatus(){
      //Decrement time count
        timeCount -= 25;

      //Speed up bgm last 5 seconds
      if (bgm.playbackRate == 1 && timeCount < 10000) {
          bgm.pause();
          bgm.playbackRate = 2.0;
          bgm.play();
      }
      


    if (moves.length > 0) {

      // Decrement gapCount.
      for ( var i = 0; i < moves.length; i++){
        moves[i].update();
      }

      // If gapCount ramains,put it back.
      moves = moves.filter(
        function (item) {
          return item.gapCount != 0;
        }
      );

      //Moving done.
      if (moves.length == 0) {
        setRemoveFlag();
        fall();
      }
    }
    paint();

    //Game Over
    if (moves.length == 0 && timeCount <= 0) {
      clearInterval(timer);
      timer = null;
      bgm.pause();
      bgm.currentTime = 0;
      setTimeout("gameOver()", 500)
    }
  }


  function paint() {

    //clear canvas.
    ctx.clearRect(0, 0, 600, 700);


    for (var x = 0; x < 10; x++) {
      for (var y =0; y < 10; y++) {
        //drawImage
        ctx.drawImage(imageList[items[x][y].color], x * 60, items[x][y].getY(), 60, 60);
      }
    }

    //Text
    ctx.font = "bold 20px arial";
    //ctx.textAlign = "center";

    //Time
    var sec = Math.floor(timeCount / 1000);
    var mSec = timeCount % 1000;

    if (sec < 0) {
        sec = '00';
    }else if (sec < 10) {
        sec = '0' + sec;
    }

    if (mSec < 0) mSec = '00';



    ctx.fillText("Time Left: " + sec + ' : ' + mSec, 500, 30);
    ctx.fillText("Score: " + score, 70, 30);
    ctx.font = "italic 20px arial";
    ctx.fillText('"The best medicine is prevention"',300, 75);
  }