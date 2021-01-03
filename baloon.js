class Baloon{
    constructor(X,Y,size)
    {
        this.size = size;
        this.x = X;
        this.y = Y;
    }
    
    show()
    {
        fill(255)
        ellipse(this.x,this.y,50,50)     
        fill(200,100,50)
        text("text alanı",this.x,this.y)
    }
}