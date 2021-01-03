let questions = [];
let baloons = [];
let baloonPool =[];

let questionCounter = 0;

let numberOfQuestion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baloonPool = [["he/is","she/it","they"],["xx","yy","zz","dd"]]
  questionPool = [["What time ___ ?"],["this __ question 2"]]
  locationPool = [[250,550,850],[100,100,100]]
  
  //QUESTİONS INITALİZE
  for (let i = 0; i < questionPool.length;i++) {
    questions.push(new Question(questionPool[i],baloonPool[i],locationPool,baloonPool[i].length));
  }

}

function draw() {
  background(0)

  

  for (let a = 0; a < questions.length; a++) {
    questions[0].show();
  }
}

 