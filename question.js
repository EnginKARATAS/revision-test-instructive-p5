class Question {
    constructor(questionLine, answer) {
        this.questionLine = questionLine;
        this.answer = answer;
    }
    show() {
        // text(this.questionLine[0],66,66)
        textSize(windowWidth*0.07);
        fill(255);
        this.questionLine.forEach(element => {
        });
        this.questionLine.forEach(function calback(element, index, array) {
            text(element,windowWidth*0.25,windowHeight*0.4+index*100)
            /* çalışan kodlar buraya */

        });
    }
}