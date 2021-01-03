class Question {
    constructor(questionLine, baloons,locations,baloonsLenght) {

        this.questionLine = questionLine;
        this.baloons = baloons;
        this.locations = locations;
        this.baloonsLenght = baloonsLenght;
    }
    show() {
        console.log(this.locations);
        for (let a = 0; a < this.baloonsLenght; a++) {//sorunun balonları
            noStroke();
            fill(200,140,100)
            ellipse(this.locations[0][a]+25,this.locations[1][a]-8,100,100)
            fill(255)
            textSize(25)
            text(this.baloons[a],this.locations[0][a],this.locations[1][a])            
            textSize(30)
            text(this.questionLine,400,windowHeight*0.7)
        }
    }
}