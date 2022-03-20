songHappier = "";
songBeKind = "";

function preload() {
    songHappier = loadSound("Happier.mp3");
    songBeKind = loadSound("BeKind.mp3");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 450);
}