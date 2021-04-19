var canvas;
var music;

var box
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,400,190,10);
    surface1.shapeColor = "blue";
    surface2 = createSprite(300,400,190,10);
    surface2.shapeColor = "red";
    surface3 = createSprite(500,400,190,10);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(700,400,190,10);
    surface4.shapeColor = "green";
    

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,50,50);
    box.shapeColor = "white";
    box.velocityX = 10;
    box.velocityY = 8;

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    drawSprites();


    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)&& box.bounceOff(surface1)){
        box.shapeColor = "blue";
    }
    if(box.isTouching(surface2)&& box.bounceOff(surface2)){
        box.shapeColor = "red";
    }
    if(box.isTouching(surface3)&& box.bounceOff(surface3)){
        box.shapeColor = "yellow";
    }
    if(box.isTouching(surface4)&& box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

}
