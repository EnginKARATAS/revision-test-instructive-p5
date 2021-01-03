let questions = [];
let baloons = [];
let baloonPool =[];

let questionCounter = 0;

let numberOfQuestion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baloonPool = [["he/is","she/it","they"],["xx","yy","zz","dd"]]
  questionPool = ["What time ___ ?"],["this __ question 2"]


  //BALOONS INIİALİZE
  for (let a = 0; a < baloonPool.length; a++) {//kaç soru var
    for (let b = 0; b < baloonPool[a].length; b++) {//o soruda kaç soru?
      console.log(b);
      baloons.push(new Baloon(b*100+100,100,50,baloonPool[a][b]))
    }
  }


  //QUESTİONS INITALİZE
  for (let i = 0; i < questionPool.length; i++) {
    for (let j = 0; i < baloons.length; j++) {
    questions.push(new Question(questionPool[i],baloonPool[j] ));
    }
  }
  console.log("sa");
}

function draw() {
  // // questions[1].show();

  // background(0);

  // //Baloons1 {size: 50, x: 100, y: 100}
  // for (let i = 0; i <= questionCounter; i++) {
  //   for (let j = 0; j < baloonPool[i].length; j++) {
  //     baloons[i].show();
  //   }
  // }

}


  // baloons1 =
  // {
  //   locations:{
  //     x:[100,200,300],
  //     y:[100,100,100]
  //   },
  //   entities: {
  //     1: "okey",
  //     2: "he/his"
  //   }
  // }
  // baloons2 = {
  //   locations:{
  //     x:[100,200,300],
  //     y:[100,100,100]
  //   },
  //   entities: {
  //     true1: "ipsum",
  //     false1: "dolor",
  //     false2: "sitamet"
  //   }
  // }