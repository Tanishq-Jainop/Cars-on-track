canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
var image=["map.jpg"]
rover_x=10;
rover_y=10;
background_image=image
rover_image="racing1.png";

function add(){
    background_ABC=new Image();
    background_ABC.onload=uploadBackground;
    background_ABC.src=background_image;

    rover_ABC=new Image();
    rover_ABC.onload=uploadrover;
    rover_ABC.src=rover_image;
};

function uploadrover(){
    ctx.drawImage(rover_ABC,rover_x,rover_y,rover_width,rover_height);
}

function uploadBackground(){
    ctx.drawImage(background_ABC,0,0,canvas.width,canvas.height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='40'){
    down();
        console.log("down");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='39'){
        right();
        console.log("right");
      }
    }
    
