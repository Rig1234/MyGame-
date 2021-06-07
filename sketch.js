var database;
var gameState;
var game1;
var form1;
var bgStart;
var player1;
var playerCount;


function preload(){
bgStart = loadImage("images/titile 3.png")
}

function setup() {

  createCanvas(1200,600);
  database = firebase.database();
  game1 = new Game();
  
}

function draw() {
  background("red");
  game1.start();
  drawSprites();
}