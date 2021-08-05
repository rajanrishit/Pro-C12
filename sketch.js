var garden,rabbit,apple,leaf,leftBoundry,rightBoundry;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png")

}

function setup(){
  
  createCanvas(400,400);
  

gardenImg=createSprite(200,200);
gardenImg.addImage(gardenImg);



rabbitImg = createSprite(180,340,30,30);
rabbitImg.scale =0.09;
rabbitImg.addImage(rabbitImg);


 appleImg=createSprite(random(180,350),40,10,10);
 appleImg.addImage(appleImg);
 appleImg.scale=0.1;
 

leafImg=createSprite(50,10,10);
leafImg.addImage(leafImg);
leafImg.scale=0.1;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  
  if(gardenImg.y>400){
    gardenImg.y=height/400;
  }

  edges= createEdgeSprites();
  rabbitImg.collide(edges[3]);
  appleImg.collide(rightBoundry);
  appleImg.collide(leftBoundry);
  
  spawnapples();
  var select_sprites=Math.round(random(1,2));
console.log(random);
if(World.framecount%60==0){
  if(select_sprites==1){
  appleImg();
 }
}
if(World.framecount%60==0){
  if(select_sprites==1){
  leafImg();
 }
}
  drawSprites();
}


function spawnapples(){
  if(fameCount%80===0){
    if(select_sprites==1)
  appleImg=createSprite(random(180,350,30,30),40,10,10);
  appleImg.addImage(appleImg);
  appleImg.scale=0.1;
 apple.velocityX=-3;
  Else
leafImg=createSprite(50,10,10);
leafImg.addImage(leaf.png);
leafImg.scale=0.1;
leafImg.velocityX=-2;
 }
}
