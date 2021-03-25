const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas,engine,world,p1,p2,ground,pblock,block,block2,block3,block4,block5;
function preload(){
    backImg = loadImage("bg.png");
}
function setup(){
    canvas= createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
  
    ground =  new Ground(width/2,590,width,20);
    p1 = new Ground(700,500,300,20);
    p2 = new Ground(1100,450,300,20);
    pblock = new Polygon(150,450,60,50);
    sling = new Sling(pblock.body,{x:170,y:400});
    block = new Objects(1100,430,30,40);
    block2 = new Objects(745,390,20,40);
    block3 = new Objects(748,370,20,40);
    block4 = new Objects(740,430,20,40);
    block5 = new Objects(745,430,20,40);
    block6 = new Objects(742,410,20,40);
    block7 = new Objects(744,430,20,40);
    block8 = new Objects(745,410,20,40);
    block9 = new Objects(745,390,20,40);
    block10 = new Objects(746,350,20,40);
    block11 = new Objects(1107,330,20,40);
    block12 = new Objects(1105,410,20,40);
    block13 = new Objects(1011,390,20,40);
    block14 = new Objects(1192,370,20,40);
    block15 = new Objects(1015,390,20,40);
    block16 = new Objects(1097,350,20,40);
    block17 = new Objects(1109,330,20,40);
    block18 = new Objects(1111,430,20,40);
    block19 = new Objects(1112,370,20,40);
}

function draw (){
    background(backImg);

    Engine.update(engine);

    ground.display();
    p1.display();
    p2.display();
    pblock.display();
    sling.display();
    block.display();
    fill("pink");
    block2.display();
    block3.display();
    fill("blue");
    block4.display();
    block5.display();
    fill("yellow");
    block6.display();
    fill("yellow");
    block7.display();
    block8.display();
    fill("red");
    block9.display();
    block10.display();
    fill("green");
    block11.display();
    block12.display();
    fill("pink");
    block13.display();
    block14.display();
    block15.display();
    fill("red");
    block16.display();
    fill("blue");
    block17.display();
    block18.display();
    block19.display();
    Matter.Body.setStatic(ground.body,true);
    Matter.Body.setStatic(p2.body,true);
    Matter.Body.setStatic(p1.body,true);
}
function mouseDragged(){
    Matter.Body.setPosition(pblock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(pblock.body);
        Matter.Body.setPosition(pblock.body,{x:150,y:450});
    }
}


