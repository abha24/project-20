var bgImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4,;


function preload() {
    //load the images here
    bgImg = loadImage("images\garden.png");
    catImg1 = loadAnimation("images\cat1.png");
    catImg2 = loadAnimation("images\cat2.png");
    catImg3 = loadAnimation("images\cat3.png");
    catImg4 = loadAnimation("images\cat4.png");
    mouseImg1 = loadAnimation("images\mouseImg1");
    mouseImg2 = loadAnimation("images\mouseImg2");
    mouseImg3= loadAnimation("images\mouseImg3");
    mouseImg4 = loadAnimation("images\mouseImg4");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat= createSprite(600,400,100,30);
     mouse = createSprite(400,200,120,40);
}

    

    function draw() {
background(garden.png);
    
     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.changeAnimation("catHappy",catImg1);
      mouse.changeAnimation("mouseHappy",mouseImg2);
     }
          
    
  //For moving and changing animation write code here

    if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg3);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;  

    }   
 if (keyCode===RIGHT_ARROW) {
     
 }
  







}