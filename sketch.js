function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    frameRate(.75);
}

function draw() { 
    background(210,75,75);
    //line following mouse
    for (i = -18; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(40,50)) {
  //custom shape 
        stroke(165,29,29);
        strokeWeight(1.5);

            line(i,j+15,i+random(15,25),j);
        }
    }
       for (i = -18; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(40,50)) {
  //custom shape 
        stroke(195,65,65);
        strokeWeight(1.5);

            line(i,j,i+random(10,20),j+20);
        }
    }
    
    for (i = -10; i < width; i+=random(9,11)) {
        for (j = -10; j < height; j+=random(55,57)) {
  //custom shape 
        stroke(252,231,223);
        strokeWeight(1);
            line(i+8,j-random(5,10),i,j+random(35,45));
        }
    }
    for (i = -15; i < width; i+=random(5,7)) {
        for (j = -10; j < height; j+=random(64,65)) {
  //custom shape 
        stroke(252,231,223);
            line(i,j-random(5,25),i+9,j+random(25,35));
        }
    }
}