song_1 = "";
song_2 = "";

function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 600);
}