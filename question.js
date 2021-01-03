class Question {
    constructor(questionLine, baloons,locations,baloonsLenght) {

        this.questionLine = questionLine;
        this.baloons = baloons;
        this.locations = locations;
        this.baloonsLenght = baloonsLenght;
    }
    show() {
        console.log(this.baloonsLenght);
        for (let a = 0; a < this.baloonsLenght; a++) {
            fill(255)
            text(this.baloons[a],50+a*100,50)            
        }
    }
}