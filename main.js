song_1 = "";
song_2 = "";
song_playing = "";
song_2_playing = "";

leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
score_leftWrist = 0;
score_rightWrist = 0;

function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 600);
    fill('#FF0000');
    stroke('#FF0000');
    song_playing = song_1.isPlaying();
    song_2_playing = song_2.isPlaying();

    if(score_rightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);
        song_1.stop();

        if(song_2_playing = false) {
            song_2.play();
            document.getElementById("song_name").innerHTML = "Song Name - Peter Pan ";
        }
    }

    if(score_leftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song_2.stop();

        if(song_playing = false) {
            song_1.play();
            document.getElementById("song_name").innerHTML = "Song Name - Harry Potter Theme Song ";
        }
    }
    
    
}

function modelLoaded() {
    console.log("PoseNet model Initialized!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        score_rightWrist = results[0].pose.keypoints[10].score;
        score_leftWrist = results[0].pose.keypoints[9].score;
        console.log("score of leftWrist = " + score_leftWrist + " score of rightWrist = " + score_rightWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist X = " + leftWristX + "leftWrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist X = " + rightWristX + "rightWrist Y = " + rightWristY)
    }
}