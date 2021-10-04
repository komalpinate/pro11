
function preload(){
  pik = loadImage("beach.jpg");
  
}

function setup(){
 createCanvas(400,400);
 
}
function draw() {
  background(220);
  Image(pic,0,0,400,400)
  
  stroke('red')
  Text(mouseX,200,20)
  Text(mouseY,240,20)
  Fill('brown')
  beginshape()
  vertex(145+x,190)
  vertex(155+x,210)
  vertex(260+x,210)
  vertex(270+x,190)
  vertex(145+x,190)
   endshape()
   //sail1
  stroke('yellow')
  Fill('yellow')
  beginshape()
  vertex(206+x,190)
  vertex(206+x,115)
  vertex(167+x,185)
  vertex(206+x,185)
  endshape()

  stroke('teal')
  Fill('teal')
  beginshape()
  vertex(210+x,123)
  vertex(210+x,185)
  vertex(240+x,185)
  vertex(210+x,123)
  endshape()
  if(x>width){
    x=0
  }else{
  x=x+1

  }














}