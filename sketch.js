let questions = [];
let answers;
function setup() {
  createCanvas(windowWidth,windowHeight);

    answers = {
    ans1: 'his/his',
    ans2: 'her/her',
}


  // questions  = new Question(["What is ___ name ?","___ name is Merve"],answers.ans2);
  questions.push(new Question(["What is ___ name ?","___ name is Merve"],answers.ans1));
}

function draw() {
  background(0);
  questions[0].show();

}