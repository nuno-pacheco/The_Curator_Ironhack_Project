# The Curator

## Description

You have to match at least 3 equal symbols to score. The symbols are inspired on actions that we have to take in a account in order to prevent the Coronavirus infetion. 
This game tend's to be educational and is adapted for kid's also.
Try to beat your record.

MVP (DOM - CANVAS)


## MVP (DOM - CANVAS)
- Game has six diferent symbols, once you match three equals you make a line and score.
- Items appear's randomly from the top of the screen.
- Click and drop items to make it match.


## Backlog
- Timer.
- SFX(sound effects).
- Music speed variations.
- Scoreboard.
- Data related with the global situation of Coronavirus.
- Text insight's related with the virus prevention.



## Data structure
main.js

buildSplashScreen(){}
buildGameScreen(){}
buildGameOverScreen(){}
buildWinScreen(){}


game.js

game () {
    constructor()
	init() 
	start ()
	createObstacles ()
	drawBackground () 
	drawMainCharacter ()
	clearCanvas () 
	gameOver () 
	winner () 
}


timeTrial.js

function initialize()

  - (Create items loop)
  - (Get random itemsloop)

function check Item Status()


common.js

function get RandomNum(num)

function Item(x,y)

function gameOver()

function setRemoveFlag()

function checkColor(x,y,c)

function myMouseDown(e)

function mMouseUp(e)

gameOver () 
	
winner () 


script.js

function set js () 

function Set Bg Image ()


## States e States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen


## Task( have to change)
- main - buidDom
- main - buildSplashScreen
- main - addEventListener
- main - builGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- obstacle - draw
- obstacle - move
- game - addObstacle
- player - draw
- player - move
- player - shoot
- game - addPlayer
- game - checkCollision
- game - GameOver
- game - addEventListener 



## Links


### Trello
[Trello] https://trello.com/b/BgaVZ5ca/the-curator-ironhack-project


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)

### Credits
****(credit the item's)