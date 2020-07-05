# The Curator

## Description

Mitch Emhoff is our main character in a game where the player as to move Mitch in order to avoid the contact with the Coronavirus. As a player you must avoid the contact with the virus for 1 minute. If you touch the virus your character will be infected and die instantly and it's game over.

MVP (DOM - CANVAS)


## MVP (DOM - CANVAS)
- Game has one main character "Mitch Emhoff" that moves horizontally and vertically.
- Coronavirus figures appear randomly from the top of the screen.
- If Mitch collides with the virus it's game over.
- If no virus are touched you win.


## Backlog
- Timer.
- SFX(sound effects).
- Scoreboard.
- Virus with different sizes.
- Mask's apearence and work's like a shield.
- Text insight's related with the virus prevention.
- Increasing dificulty.



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

component.js

component{
	constructor ()
	drawComponent ()
}


obstacles.js

class Obstacle extends Component(){
	constructor () {}
	draw ()
	move ()
}


player.js

class Player extends Component(){
	constructor()
	move()
	crashCollision()
}


script.js

window.onload = function () {
	document.getElementById()}
	function startGame(){
		newGame();
		myGame.init()
	}


## States e States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen


## Task
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
****