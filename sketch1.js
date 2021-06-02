var bgImg;
var tom,catImg1,catImg2,catImg3,catImg4;
var jerry,mouseImg1,mouseImg2,mouseImg3,mouseImg4,;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png");
    catImg3 = loadAnimation("images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouseImg1");
    mouseImg2 = loadAnimation("images/mouseImg2");
    mouseImg3= loadAnimation("images/mouseImg3");
    mouseImg4 = loadAnimation("images/mouseImg4");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom= createSprite(600,400,100,30);
     jerry = createSprite(400,200,120,40);
}
  
function draw() {
background(garden.png);
    
     if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.changeAnimation("catHappy",catImg1);
      jerry.changeAnimation("mouseHappy",mouseImg2);
     }
          
    
  //For moving and changing animation write code here

 drawSprites();
    }   
 if(keyCode === LEFT_ARROW){ 
tom.velocityX = -5; 
tom.addAnimation("tomRunning", tomImg2); 
tom.changeAnimation("tomRunning"); 
jerry.addAnimation("jerryTeasing", jerryImg2);
 jerry.frameDelay = 25; 
jerry.changeAnimation("jerryTeasing"); } 
  


    
  
}







