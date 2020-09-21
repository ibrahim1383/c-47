var a1,s1,s1image,s2,s2image;







function preload(){
s1image=loadImage("b/naruto.png")
s2image=loadImage("b/miste.png")

}











function setup(){
  createCanvas(800,800);

s1=createSprite(100,760,30,30)
s1.addImage("s1",s1image)
s1.scale=0.4


s2=createSprite(700,770,30,30)
s2.addImage("s2",s2image)
s2.scale=0.4




a1= createSprite(400,100,8000,10)
a2= createSprite(5,400,10,8000)
//a1= createSprite(400,5,8000,10)
a3= createSprite(795,400,10,800)
a4= createSprite(400,795,8000,10)

a5=createSprite(45,800,10,120)
a6=createSprite(45,650,80,10)
a7=createSprite(45,380,80,10)
a8=createSprite(90,450,10,150)
a9=createSprite(350,795,10,110)
a10=createSprite(260,740,190,10)
a11=createSprite(290,560,10,360)

a12=createSprite(180,420,10,90)
a13=createSprite(240,560,110,10)
a14=createSprite(180,620,10,130)
a15=createSprite(440,730,10,140)
a16=createSprite(180,620,10,130)
a17=createSprite(580,760,10,100)
a18=createSprite(540,710,90,10)
a19=createSprite(510,655,310,10)
a20=createSprite(350,560,10,200)
a21=createSprite(395,460,100,10)
a22=createSprite(450,500,10,90)
a23=createSprite(500,540,90,10)
a24=createSprite(545,500,10,90)

a25=createSprite(450,380,330,10)
a26=createSprite(620,425,10,100)
a27=createSprite(500,425,10,100)
a28=createSprite(550,310,10,140)
a29=createSprite(500,245,100,10)

a30=createSprite(450,270,10,60)

a31=createSprite(280,300,350,10)
a32=createSprite(235,380,100,10)
a33=createSprite(230,250,10,100)
a34=createSprite(265,205,70,10)
a35=createSprite(340,250,70,10)
a36=createSprite(380,205,10,100)

a37=createSprite(540,160,320,10)

a38=createSprite(170,170,10,130)

a39=createSprite(125,240,100,10)
a40=createSprite(80,210,10,50)
a41=createSprite(650,220,100,10)
a42=createSprite(700,300,10,170)
a43=createSprite(745,385,100,10)
a44=createSprite(760,500,100,10)
a45=createSprite(660,590,10,120)
a46=createSprite(650,655,100,10)
a47=createSprite(695,690,10,70)


}



function draw() {
  background(0);
  s1.collide(a1)

  s1.collide(a2)

  s1.collide(a3)
  s1.collide(a4)

  s1.collide(a5)


  s1.collide(a6)
  s1.collide(a7)
  s1.collide(a8)
  s1.collide(a9)
  s1.collide(a10)

  s1.collide(a11)
  s1.collide(a12)

  s1.collide(a13)
  s1.collide(a14)
  s1.collide(a15)

  s1.collide(a16)
  s1.collide(a17)
  s1.collide(a18)
  s1.collide(a19)

  s1.collide(a20)
  s1.collide(a21)
  s1.collide(a22)
  s1.collide(a23)
  s1.collide(a24)
  s1.collide(a25)
  s1.collide(a26)
  s1.collide(a27)
  s1.collide(a28)
  s1.collide(a29)
  s1.collide(a30)
  s1.collide(a31)
  s1.collide(a32)
  s1.collide(a33)
  s1.collide(a34)
  s1.collide(a35)
  s1.collide(a36)
  s1.collide(a37)
  s1.collide(a38)
  s1.collide(a39)
  s1.collide(a40)
  s1.collide(a41)
  s1.collide(a42)

  s1.collide(a43)
  s1.collide(a44)
  s1.collide(a45)
  s1.collide(a46)
  s1.collide(a47)
  
  
  s1.velocityY=0;
  s1.velocityX=0
  if (keyDown(UP_ARROW)){
    s1.velocityY=-4
  }
  if (keyDown(DOWN_ARROW)){
    s1.velocityY=+4
  }

  if (keyDown(LEFT_ARROW)){
    s1.velocityX=-4
  }

  if (keyDown(RIGHT_ARROW)){
    s1.velocityX=+4
  }





















  text("x:"+mouseX+"  y:"+mouseY,mouseX,mouseY);
  drawSprites();
  }

  
  

 

