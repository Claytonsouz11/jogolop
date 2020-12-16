//  https://youtu.be/pN2ABViKvH0


var tela=1

var soma=parseInt(Math.random()*5)
var soma2=parseInt(Math.random()*5)
var res1=[Math.floor(Math.random()*5)]
var res2=[Math.floor(Math.random()*5)]
var x=150
var x1=150
var x2=65
var y= 65
var y1=126
var y2=187
var largura=200
var altura=50
let img2, img
var img3, img4, img5, img6,img7




var pontos=0

var jog1, jog2, jogr

var obs1 , obs2 , obs3

var obs4 ,obs5 , obs6

var obs7 , obs8, obs9





function preload() {
  img = loadImage('003.jpg');
  img2=loadImage("009.jpg")
  img3=loadImage("9.jpg")
  img4=loadImage("DFSFDGH.jpg")
  img5=loadImage("03.jpg")
  img6=loadImage("02.jpg")
  img7=loadImage("DIGIT_01C.png")
  
}

function setup() {
  createCanvas(500 , 300);
  
   jog1=230
   jog2=230
   jogr=25
  
 obs1=125
 obs2=100
 obs3=45
  
  obs4=250
 obs5=100
 obs6=45
  
   obs7=375
 obs8=100
 obs9=45
}
function keyPressed() {
  if (keyCode === ESCAPE) {
    tela=1;
  }

}


function draw() {
 if(tela==1){
   background(0)
    image(img6,0 ,0)
   

 
  
   
    
  
   if(mouseX >x && mouseX<x+largura && mouseY >y && mouseY<y+altura){     
    stroke(255)
    fill( 15);
    rect(x, y, largura, altura,20);
   
    if (mouseIsPressed) {
   tela=2
  }}
  
   
    
    fill(220)
    noStroke()
    textSize(15);
    text("I N I C I A R" , 210,95);
   

    
    
   
  
 if(mouseX >x && mouseX<x+largura && mouseY >y1 && mouseY<y1+altura){
  
   stroke(255)
  fill( 15);
  rect(x, y1, largura, altura,20);
   
       if (mouseIsPressed) {
    tela=3
  }}
  
   
  
   
  
  fill(220)
  noStroke()
  textSize(15);
  text("I N F O R M A Ç Ã O " , 185,155)
   

   

  

     if(mouseX >x && mouseX<x+largura && mouseY >y2 && mouseY<y2+altura){
    
  stroke(255)
  fill( 15);
  rect(x, y2, largura, altura,20);
     
     if (mouseIsPressed) {
    tela=4
  }}
  
    
  
  fill(220)
  noStroke()
  textSize(15);
  text("C R É D I T O S " ,195,215)
   
   
  
 // --------------
  
  
  
    
  
  fill(220)
  noStroke()
  textSize(6);
  text("DESENVOLVIDO BY CLAYTON SOUZA " ,195,280)
    
}
  
  
  
  
  
  else if(tela==2){
      
     
  background(0)
    image(img5,0 ,0)
    fill(255,255,255)
    
   
    
    
     image(img7,jog1,jog2, 2*jogr, 2*jogr)

    //ellipse(jog1,jog2, 2*jogr, 2*jogr)
   
    
    if(keyIsDown(DOWN_ARROW) ){
      jog2=jog2+4
    }
    if(keyIsDown(UP_ARROW) ){
      jog2=jog2-4
    }
    if(keyIsDown(LEFT_ARROW) ){
      jog1=jog1-4
    }
    if(keyIsDown(RIGHT_ARROW) ){
      jog1=jog1+4
    }
    
    if( dist(obs1,obs2,jog1,jog2)< obs3+jogr){
      fill(225,5,3)
      ellipse(obs1,obs2, 2*obs3, 2*obs3)
      
      
      tela=2  
      
  
   jog1=230
  jog2=230
      
      
      
    } 
    
    else  {
     fill(255,255,255)
      ellipse(obs1,obs2, 2*obs3, 2*obs3)}
    
     if( dist(obs4,obs5,jog1,jog2)< obs6+jogr){
      fill(225,5,3)
      ellipse(obs4,obs5, 2*obs6, 2*obs6)
  
   jog1=230
   jog2=230
       tela=5
    }else{
    
    fill(255,255,255)
      ellipse(obs4,obs5, 2*obs6, 2*obs6)}
    
    if( dist(obs7,obs8,jog1,jog2)< obs9+jogr){
      fill(225,5,3)
      ellipse(obs7,obs8, 2*obs9, 2*obs9)
 
   jog1=230
   jog2=230
     tela=5
    }
    
else{  fill(255,255,255)
      ellipse(obs7,obs8, 2*obs9, 2*obs9)}
    
    
  
    
    
    
    //texto
    

 
    
    
    
    fill(220)
  noStroke()
  textSize(6);
  text("DESENVOLVIDO BY CLAYTON SOUZA " ,195,295)  
    
    
    fill(220)
  noStroke()
  textSize(30);
  text(soma+ " - " +soma2 + " = ?" ,200,35)
    
    
    
    
      if(soma>=soma2){
      res=(soma-soma2)
    } else{
      res=soma+soma2
      
    }
   
    fill(0)
  noStroke()
  textSize(40);
  text(res,113,115)

    
     fill(0)
  noStroke()
  textSize(40);
  text(res1,240,115)
    
    
     fill(0)
  noStroke()
  textSize(40);
  text(res2,365,115)
  
}
  
  else if(tela==3){
     background(15)
     image(img6,0 ,0)
   fill(220)
  noStroke()
  textSize(15);
  text("Esse jogo irá tratar de contas matemáticas" ,120,100)
    fill(220)
  noStroke()
  textSize(15);
  text("na qual o aluno terá que levar a bolinha até " ,120,120)
      fill(220)
  noStroke()
  textSize(15);
  text("a sua respectiva soma e assim terá outras somas " ,100,140)
    fill(220)
  noStroke()
  textSize(15);
  text(" para continuar praticando. " ,170,160)
    
    
  }
  
  else if(tela==4){
     background(0)
     image(img6,0 ,0)
    image(img4,210,40,70,90)
    
    fill(255)
     textSize(9);
  text("P R O G R A M A D O R: " ,195,150)
    
     
    fill(255)
     textSize(12);
    text(" Clayton Souza" ,200,165)
    
    fill(255)
     textSize(12);
    text(" E D U C A D O R:" ,190,245)
    
    fill(255)
     textSize(12);
    text(" N Ã O   L O C A L I Z A D O" ,160,265)
   
   
    
    
  }else if(tela==5){
     background(0)
     image(img6,0 ,0)
    
    
    fill(255)
     textSize(50);
  text("GAME OVER " ,100,150)
    textSize(10);
    
    text("precione ESC para voltar ao menu " ,185,285)
    
     
   
  }
  
  
    
 }
