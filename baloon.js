class Baloon {
    constructor(questBaloons) {
        this.entities = questBaloons.entities; //a row {true1: "okey", false1: "he/his"}
        this.locationsX = questBaloons.locations.x; // x:[100,200,300] y:[100,100,100]
        this.locationsY = questBaloons.locations.y; // x:[100,200,300] y:[100,100,100]
        this.counter = 0;
         
    }

    show() {
        

        
        for (const [key, value] of Object.entries(this.entities)) {
            fill(200,15,100);
            ellipse(this.locationsX[this.counter],this.locationsY[0],40,40)
            fill(255);
            text(value,this.locationsX[0],this.locationsY[0])
            if(this.counter==2)
                this.counter = 0;
            this.counter++
        }
    }
}