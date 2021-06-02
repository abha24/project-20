var bgImg;
var tom,tomImg1,tomImg2,tomImg3,tomImg4;
var jerry,jerryImg1,jerryImg2,jerryImg3,jerryImg4,;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png");
    tomImg3 = loadAnimation("images/cat3.png");
    tomImg4 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouseImg1");
    jerryImg2 = loadAnimation("images/mouseImg2");
    jerryImg3= loadAnimation("images/mouseImg3");
    jerryImg4 = loadAnimation("images/mouseImg4");
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
      tom.changeAnimation("tomHappy",tomImg1);
      jerry.changeAnimation("jerryHappy",jerryImg2);
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







