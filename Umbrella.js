class Umbrella {
    constructor(x, y){
        var options = {
            isStatic : true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x, y, 125, options);
        this.radius = 125;
        World.add(world, this.umbrella)
        this.batman_Image = loadImage("Walking Frame/batman.png");
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if (frameCount >= 160){
        image(this.batman_Image, pos.x, pos.y - 28, 350, 350);
        fill(255);
        textFont("Chiller");
        textSize(130)
        text("Batman", 40, 120);
        textFont("Blackadder ITC");
        textSize(35);
        text("Rises", 250, 150);
        } else 
        image(this.image,pos.x,pos.y - 20, 350, 350);
    }
}