function initialize(){
    moveCount = 3;
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
    if (moves.length == 0 && moveCount == 0) {
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
    ctx.font = "bold 20px Open Sans";
    ctx.textAlign = "center";
    ctx.fillText("Moves Left :" + moveCount, 150, 50);
    ctx.fillText("Score :" + score, 450, 50);

  }
