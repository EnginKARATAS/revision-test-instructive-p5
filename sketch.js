let questions = [];
let baloons = [];
let questionCounter = 0;

let numberOfQuestion = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baloons1 =
  {
    locations:{
      x:[100,200,300],
      y:[100,100,100]
    },
    entities: {
      1: "okey",
      2: "he/his"
    }
  }
  baloons2 = {
    locations:{
      x:[100,200,300],
      y:[100,100,100]
    },
    entities: {
      true1: "ipsum",
      false1: "dolor",
      false2: "sitamet"
    }
  }

  //BALOONS INIİALİZE

  baloons.push(new Baloon(baloons1))
  baloons.push(new Baloon(baloons2))


  //QUESTİONS INITALİZE
  // questions  = new Question(["What is ___ name ?","___ name is Merve"],answers.ans2);
  questions.push(new Question(["What is ___ name ?", "___ name is Merve"], baloons1.true1));
  questions.push(new Question(["Are you ___ ?", "Lorem ____ sit amet"], baloons2.true1));
}

function draw() {
  // questions[1].show();

  background(0);
  baloons[0].show();

}