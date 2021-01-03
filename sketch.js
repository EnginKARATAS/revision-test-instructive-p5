let score = 0;
let squareColor;
let questions = [];
let baloons = [];
let baloonPool =[];
        
let angle1 = 0;
let scalar = 200;//baloons directon and size

let questionCounter = 0;

let numberOfQuestion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baloonPool = [["he/is","she/it","they"],["xx","yy","zz","dd"],["he/is","she/it","they"],["xx","yy","zz","dd"]]
  trueBaloons = [[0,1,0],[0,0,1],[0,1,0],[0,0,1]]
  questionPool = [["What time ___ ?"],["this __ question 2"],["What time ___ ?"],["this __ question 2"]]
  locationPool = [[250,550,850],[100,100,100],[250,550,850],[100,100,100]]
  
  //QUESTİONS INITALİZE
  for (let i = 0; i < questionPool.length;i++) {
    questions.push(new Question(questionPool[i],baloonPool[i],locationPool,baloonPool[i].length,trueBaloons));
  }

}

function draw() {
  background(200)

  

  for (let a = 0; a < questions.length; a++) {
    questions[questionCounter].show();
    questions[questionCounter].update();
  }
}

 