/*
Common Functions:

function get RandomNum(num)
function Item(x,y)
function gameOver()
function setRemoveFlag()
function checkColor(x,y,c)
function myMouseDown(e)
function mMouseUp(e)
*/

function getRandomNum(n) {
    return Math.floor(Math.random() * n);
  }

  function Item(x,y) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
    this.gapCount = 0;

    this.getY = function () {
      //Move ball down gradually.
      return (this.y1 + (this.y2 - this.y1) * (this.gapCount) / 25) * 60 + 100;
    }

    this.moveItem = function (x2, y2, color) {
      this.x2 = x2;
      this.y2 = y2;
      this.color = color;
      this.moving = true;
      this.gapCount = 25;
      moves.push(this)
    }

    this.update = function () {
      this.gapCount--;
      if (this.gapCount <= 0) {
        this.moving = false;
      }
    }
  }


  function gameOver() {
    ctx.clearRect(0, 0, 600, 700);
    tryAgainBtn.style.display = "inline";
    ctx.font = "bold 30 px Open Sans";
    ctx.textAlign = "center";
    ctx.fillText("Score:" + score, 300, 250);
  }

  function setRemoveFlag() {

    for (var x = 0; x < 10; x++) {
      var c0 = items[x][0].color;
      var count =1;
      for ( var y = 1; y < 10; y++) {
        var c1 = items[x][y].color;
        if (c0 == c1) {
          count ++;
          if (count >=3) {
            items[x][y-2].remove = true;
            items[x][y-1].remove = true;
            items[x][y].remove = true;

          }

        } else {
          c0 = c1;
          count = 1;
        }
      }
    }
  
    for (var y = 0; y < 10; y++){
      var c0 = items[0][y].color;
      var count = 1;
      for (var x = 1; x < 10; x++) {
        var c1 = items[x][y].color;
        if (c0 == c1) {
          count++;
          if(count >=3) {
            items[x-2][y].remove = true;
            items[x-1][y].remove = true;
            items[x][y].remove = true;
          }
        } else{
          c0 = c1;
          count = 1;
        }
      }
    }
  }

  function fall(){
    for (var x = 0; x < 10; x++) {
      for (var y = 9, z = 9; y >= 0; y--, z--) {
        while (z >= 0) {
          if (items[x][z].remove) {
            z--;
          }else{
            break;
          }
        }
        if (y !=z) {
          var colorNum = ( z >=0) ? items[x][z].color : getRandomNum(6);
          items[x][y].moveItem(x,z, colorNum);
        }
      }
    }

    //Update remove flag & add score & SFX
    var soundFlag = true;
    for (var x = 0; x < 10; x++) {
      for (var y = 0; y < 10; y++) {
        if (items[x][y].remove) {
            items[x][y].remove = false;
            score += 100;
            // PLay sound.
            if (soundFlag) {
              sound.pause();
              sound.currentTime = 0;
              sound.play();
              soundFlag = false;

            }
        }
      }
    }

  }


  function checkColor(x, y, c) {
    var flag = true;

    if(x > 1) {
      var c0 = items[x-2][y].color;
      var c1 = items[x-1][y].color;
      if (c0 == c1 && c1 == c) {
      flag = false;
      }
    }

    if (y> 1) {
      var c0 = items[x][y-2].color;
      var c1 = items[x][y-1].color;
      if (c0 == c1 && c1 == c) {
        flag = false;
      }
    }
      return flag;
  }  

  function myMouseDown(e) {
    mouseDownX = e.offsetX;
    mouseDownY = e.offsetY;
  }

  function myMouseUp(e) {
    var itemX1 = Math.floor(mouseDownX / 60);
    var itemY1 = Math.floor((mouseDownY - 100) / 60);
    //console.log("itemX:" + itemX1);
    //console.log("itemY:" + itemY1);

    var itemX2 = itemX1;
    var itemY2 = itemY1;
    var mouseUpX = e.offsetX;
    var mouseUpY = e.offsetY;
    
    if ( Math.abs(mouseUpX - mouseDownX) == 0 && Math.abs(mouseUpY - mouseDownY) == 0) {
      return;
    }else if (Math.abs(mouseUpX - mouseDownX) > Math.abs(mouseUpY - mouseDownY)) {
      itemX2 += (mouseUpX - mouseDownX > 0) ? 1 : -1;
    } else {
      itemY2 += (mouseUpY - mouseDownY > 0) ? 1 : -1;
    }

    if (items[itemX1][itemY1].moving || items[itemX2][itemY2].moving || timer == null) {
      return;
    }


    
    //Switch Item.
    var itemColor = items[itemX1][itemY1].color;
    items[itemX1][itemY1].moveItem(itemX2, itemY2, items[itemX2][itemY2].color);
    items[itemX2][itemY2].moveItem(itemX1, itemY1, itemColor);

    //Decrease move count.
    moveCount--;



    paint()
  }