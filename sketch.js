
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var bg;
var music;
var particles = [];


function preload(){
  bg = loadImage("snow3.jpg");
  music = loadSound("Christmas.mp3")
}

function setup() {
  createCanvas(800,400);
  
  
  engine = Engine.create();
  world = engine.world; 
  music.play();
}



function draw() {
  background(bg);  
  Engine.update(engine);
  drawSprites();
  
  
  
  

  

  if(frameCount%50 === 0){
    particles.push(new part(random(width,width/2-300),-20,50));
    
  }
  if(frameCount%55 === 0){
    particles.push(new part(random(width,width/2-300),-20,50));
    
  }
  if(frameCount%60 === 0){
    particles.push(new part(random(width,width/2-300),-20,50));
    
  }

  if(frameCount%65 === 0){
    particles.push(new part(random(width,width/2-300),-20,50));
    
  }
 //display the divisions
 for (var j = 0; j < particles.length; j++) {
   particles[j].display();
 }

 console.log(particles)
}