var mouseImg,cheeseImg,mousetrapImg;

var mouse,cheese,mousetrap,score;

function preload(){
    mouseImg = loadImage("mouse.png");
    cheeseImg = loadImage("cheese.png");
    mousetrapImg = loadImage("mousetrap.png");
    gameOverImg = loadImage("gameOver.png");
}

function setup(){
    var canvas = createCanvas(1000,700);

    score = 0;
    
    mouse = createSprite(random(50,900),random(50,550),100,80);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2;

    cheese = createSprite(random(50,900),random(50,550),80,70);
    cheese.addImage(cheeseImg);
    cheese.scale = 0.05;

    mousetrap = createSprite(500,600,100,80);
    mousetrap.addImage(mousetrapImg);
    mousetrap.scale = 0.2;

    gameOver = createSprite(500,350);
    gameOver.addImage(gameOverImg);
    gameOver.visible = false;
    gameOver.scale = 0.2;

}

function draw(){
    background("black");

    mousetrap.x = mouseX;
    mousetrap.y = mouseY;
    
    if(frameCount % 40 === 0){
        mouse.x = random(9,900);
        mouse.y = random(10,600);
    }

    if(frameCount % 70 === 0){
        cheese.x = random(9,900);
        cheese.y = random(10,600);
    }

    if(mousetrap.isTouching(mouse)){
        score++;
    }

    if(mousetrap.isTouching(cheese)){
        mousetrap.x = 500;
        mousetrap.y = 600;
        gameOver.visible = true;
        cheese.destroy();
        mouse.destroy();
    }

    textSize(40);
    stroke("red");
    text("Score: "+ score, 700,50);

    drawSprites();

}
