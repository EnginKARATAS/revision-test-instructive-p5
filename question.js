class Question {
    constructor(questionLine, baloons, locations, baloonsLenght, trueBaloons) {

        this.questionLine = questionLine;
        this.baloons = baloons;
        this.locations = locations;
        this.trueBaloons = trueBaloons;
        this.baloonsLenght = baloonsLenght;
        this.sin = 0;
        this.container = true
    }
    show() {
        for (let a = 0; a < this.baloonsLenght; a++) {//sorunun balonları
            noStroke();
            squareColor = color(100 + sin(millis() / 800) * 100, 100, 59);
            squareColor.setAlpha(128 + 44 * sin(millis() / 800));
            fill(squareColor);
            ellipse(this.locations[0][a] + 40, this.locations[1][a] - 8, 200, 100)
            fill(0)
            textSize(25)
            text(this.baloons[a], this.locations[0][a], this.locations[1][a])
            textSize(30)
            text(this.questionLine, 400, windowHeight * 0.7)
            text("score"+scorea,530,35)
        }
    }
    update() {

        let ang1 = radians(angle1) * 0.2;//velocty
        let y1 = height / 2 + scalar * sin(ang1);
        let y2 = height / 2 + -scalar * sin(ang1);
        fill(255, 204, 0);
        angle1 += 2;
        
        this.locations[1][0] = y1
        this.locations[1][1] = y2
        this.locations[1][2] = y1
         
    }
    clicked() {
        for (let y = this.baloonsLenght; y >=0 ; y--) {//sorunun balonları

            this.r = 50;
            let d = dist(mouseX, mouseY, this.locations[0][y], this.locations[1][y]);

            if (d < this.r) { 

                if (this.trueBaloons[questionCounter][y]==1) {
                    questionCounter++;
                    scorea++;
                }
     


            }
 
        }
    }
}