let CloudOneX=50;
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background('navy'); //navy background
    frameRate(15);

    //shooting star
    stroke("yellow");
line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  
    //moon
    fill("lightblue");
    stroke(0);
    circle(350, 50, 100);
  
    //overlapping navy circle for crescent moon
    stroke("navy");   
    fill("navy");
    circle(320,50,100);
  
    //big gray mountains
    stroke(0);
    fill("orange");
    triangle(-40,300,75,100, 250,300);
    triangle(100,300,300,100, 500,300);

    
  
    //grass
    fill('rgb(50,76,50)');
    rect(0,300, 400, 100);
  
    //displays the x and y position of the mouse on the canvas
fill(255)
    ellipse(CloudOneX, 50, 80, 40);
    ellipse(CloudOneX - 40, 100, 60, 20);
ellipse(CloudOneX + 20, 150, 40, 10);

fill("rgb(118,80,72)");
rect(40, 270, 15, 50);
fill("green");
triangle(25, 270, 45, 240 - frameCount % 290, 70, 270);

//dislpay second tree
fill("aquamarine")
rect(340,330,15,50)
fill("crimson")
triangle(325, 330, 345, 240 - frameCount % 290, 370, 330);
    


    CloudOneX =  frameCount % width

    lineXone = random(0, width);
lineYone = random(0, height/2);

    fill(255) //white text
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
  }

    
  

