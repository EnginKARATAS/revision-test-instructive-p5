class Question {
    constructor(questionLine, baloons,locations,baloonsLenght) {

        this.questionLine = questionLine;
        this.baloons = baloons;
        this.locations = locations;
        this.baloonsLenght = baloonsLenght;
    }
    show() {
        console.log(this.baloonsLenght);
        for (let a = 0; a < this.baloonsLenght; a++) {//sorunun balonları
            fill(255)
            text(this.baloons[a],this.locations[0][a],this.locations[1][a])            

        }
    }
}