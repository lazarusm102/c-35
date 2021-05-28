var hypnoticball,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    var hypnoticballposition=database.ref("ball/position");
    hypnoticballposition.on("value",readPosition);
}

function draw(){
    background("white");
    if(position!==undefined){

    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}
}

function writeposition(x,y){
    database.ref(ball/position).set({
        "x":position.x+x,
        "y":position.y+y
    })
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    hypnoticball.x=position.x;
    hypnoticball.y=position.y;
}