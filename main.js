canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_array = ["nasa.mars.jpg","nasa.mars2.jpg","nasa.mars3.jpg","nasa.mars4.jpg","mars.jpg"]

random_number = Math.floor(Math.random()*5);

rover_width = 100;
rover_height = 90;

background_image = nasa_array[random_number];
console.log("Background_ijmage ="+background_image);

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imagetag = new Image();
    background_imagetag.onload = uploadBackground;
    background_imagetag.src = background_image;

    rover_imagetag = new Image();
    rover_imagetag.onload = uploadRover;
    rover_imagetag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if(keyPressed == '38'){
        up();
        console.log("up Press");
    }

    if(keyPressed == '37'){
    left();
        console.log("left Press")

    }if(keyPressed == '40'){
        down();
        console.log("down Press")

    }if(keyPressed == '39'){
        right();
        console.log("right Press")
    }
}

function up()
{
if(rover_y >= 0){
    rover_y = rover_y - 10;
    console.log("when up arrow is pressed, x " + rover_x +"and y = "+ rover_y);
    uploadBackground();
    uploadRover();
}


}

function down()
{
if(rover_y <= 500){
    rover_y = rover_y + 10;
    console.log("when down arrow is pressed, x " + rover_x +"and y = "+ rover_y);
    uploadBackground();
    uploadRover();
}


}

function left()
{
if(rover_x >= 0){
    rover_x = rover_x - 10;
    console.log("when arrow is pressed, x " + rover_x +"and y = "+ rover_y);
    uploadBackground();
    uploadRover();
}


}

function right()
{
if(rover_x >= 0){
    rover_x = rover_x + 10;
    console.log("when right arrow is pressed, x " + rover_x +"and y = "+ rover_y);
    uploadBackground();
    uploadRover();
}


}