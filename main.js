function add(){
    background_imgTAG=new Image();
    background_imgTAG.onload=uploadBackground;
    background_imgTAG.src=background_image;

    rover_imgTag= new Image();
    rover_imgTAG.onload=uploadrover;
    rover_imgTAG.src=rover_image;
}

function uploadBackground(){
    AudioContext.drawImage(background_imageTag, 0, 0, canvas.widht, canvas.height);
}

function uploadrover(){
    AudioContext.drawImage(rover_imgTAG, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
        if(keypressed=='87'){
            up();
            console.log("up")
        }
        if(keypressed=='83'){
            up();
            console.log("down")
        }
        if(keypressed=='65'){
            up();
            console.log("left")
        }
        if(keypressed=='68'){
            up();
            console.log("right")
        }
}