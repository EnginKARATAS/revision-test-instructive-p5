let scorea = 0;
let squareColor;
let questions = [];
let baloons = [];
let baloonPool = [];

let angle1 = 0;
let scalar = 100;//baloons directon and size

let questionCounter = 0;

let numberOfQuestion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  questionPool = [
    ["Jul: Did ___ see me ? Dan: No I ___"],
    ["Dan: What is __ name ? Jul: ___ name is Merve"],
    ["What time ___ ?"],
    ["Are you able __ call me ?"]]

  baloonPool = [
    ["it/do","do/it","you/didn`t"],
    ["like/our", "your/my", "do/was"],
    ["is it", "she/it", "they"],
    ["can`t", "do", "to"]]


  trueBaloons = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1]]

  locationPool = [
    [250, 550, 850],
    [100, 100, 100],
    [250, 550, 850],
    [100, 100, 100]]

  //QUESTİONS INITALİZE
  for (let i = 0; i < questionPool.length; i++) {
    questions.push(new Question(questionPool[i], baloonPool[i], locationPool, baloonPool[i].length, trueBaloons));
  }

}

function draw() {
  background(200, 255, 255, 50)



  for (let a = 0; a < questions.length; a++) {
    questions[questionCounter].show();
    questions[questionCounter].update();
  }
}

