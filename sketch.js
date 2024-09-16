function setup() {

  createCanvas(400, 400);
  background(100);

  //////////
  // GRID //
  //////////

  // var circleSize = 3;

  // for(var i = circleSize/2; i < width; i = i + circleSize*1.25){
  //   for(var n = circleSize/2; n < height; n = n + circleSize*1.25) {
  //     ellipse(i, n, circleSize);
  //   }
  // }

  /////////////////
  // CONNECTIONS //
  /////////////////

  // scale(0.1);
  // translate(width*4, height*3.5);
  
  // for(var i = 0; i < 100; i++) {
  //   translate(width/2, i*4);
  //   // scale(1+i/1000);
  //   rotate(PI/8);
  //   beginShape();
  //   vertex(width/2, height/2);
  //   vertex(width, height);
  //   vertex(0, height);
  //   endShape();

  //   beginShape();
  //   vertex(0, 0);
  //   vertex(width, height);
  //   endShape();

  //   strokeWeight(i);
  //   // strokeWeight(i*5);


  //   fill(i)

  // }

  //////////////
  // GRADIENT //
  //////////////

  // strokeWeight(10);

  for(var x = 0; x < width+1; x++) {
    line(x, 0, x, height);
    stroke(x);
  }

}

function draw() {

}