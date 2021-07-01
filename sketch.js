var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var distance;
var xVel,yVel;
var xSet;
var gameState;


function preload(){
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
trackImg = loadImage("images/track.jpg");
groundImg = loadImage("images/ground.png");
f2 = loadImage("images/f1.png");
slidingSound = loadSound("sound/sliding.mp3");
carSound = loadSound("sound/car.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obstacles = createGroup();
  for(var i =0 ; i<5 ; i++){
    x = random(200,950);
    y = random(-height*4,height-300);
    f1 = createSprite(x,y);
    f1.addImage("f2");
    obstacles.add(f1);
  }

  gameState = 0;
  distance = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    gameState = game.end();
  }
}
