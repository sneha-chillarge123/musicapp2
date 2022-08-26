var song_1 = "";
var song_2 = "";
var leftWrist_x=0;
var rightWrist_x =0;
var leftWrist_y=0;
var rightWrist_y=0;

function preload(){
    song_1 = loadSound("worldsSmallestVoilin.mp3");
    song_2 = loadSound("wellerman.mp3");
}

function setup(){
    canvas = createCanvas(450,450);
    canvas = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,450,450);
}

function modelLoaded(){
    console.log("poseNet has been initialized");
}

function gotPoses(results){
    if(results.lenght>0){
        console.log(results);

       leftWrist_x=results[0].pose.leftWrist.x;
       rightWrist_x = results[0].pose.rightWrist.x;
       leftWrist_y =results[0].pose.leftWrist.y;
       rightWrist_y = results[0].pose.rightWrist.y;

       console.log("the x and y coordinates of left wrist are "+ leftWrist_x+" and "+ leftWrist_y);
       console.log("the x and y coordinates of right wrist are "+ rightWrist_x+" and "+ rightWrist_y);
    }
}