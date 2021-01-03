let questions = [];
let baloons = [];
let baloonPool =[];

let questionCounter = 0;

let numberOfQuestion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baloonPool = [["he/is","she/it","they"],["xx","yy","zz","dd"]]
  questionPool = [["What time ___ ?"],["this __ question 2"]]
  locationPool = [[[100,100],[200,100],[300,100]],[[100,100],[200,100],[300,100]]]
  

  //BALOONS INIİALİZE
  for (let a = 0; a < baloonPool.length; a++) {//kaç soru var
    for (let b = 0; b < baloonPool[a].length; b++) {//o soruda kaç soru?
      baloons.push(new Baloon(b*100+100,100,50,baloonPool[a][b]))
    }
  }
  //QUESTİONS INITALİZE
  for (let i = 0; i < questionPool.length;i++) {
    questions.push(new Question(questionPool[i],baloonPool[i],locationPool[i],baloonPool[i].length));
  }
  console.log(questions);

}

function draw() {
  background(0)
  

  for (let a = 0; a < questions.length; a++) {
    questions[0].show();
  }
}

 