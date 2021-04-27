  
class part {
    constructor(x, y,r) {
        var options = {
            restitution: 0.4,
            friction: 0,
            density: 0.0001
            
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color("white");
        World.add(world, this.body);
        this.image = loadImage("snow4.webp");
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        image(this.image, 0, 0, this.r, this.r);
        pop();

        
    }

};