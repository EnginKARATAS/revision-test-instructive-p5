class Question {
    constructor(questionLine, answer) {
        this.questionLine = questionLine;
        this.answer = answer;
    }
    show() {
        // text(this.questionLine[0],66,66)
        textSize(windowWidth*0.05);
        fill(255);
        this.questionLine.forEach(element => {
        });
        this.questionLine.forEach(function gerigel(element, index) {
            text(element,windowWidth*0.17,windowHeight*0.4+index*120)

        });
    }
}