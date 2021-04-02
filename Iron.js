class Iron{
	constructor(x,y,w,h)
	{
	var options = {
restitution:0.8,
friction:3,
density:30
	}
		this.x=x;
		this.y=y;
		this.width=w
        this.height=h
		this.iron=Bodies.rectangle(this.x, this.y,width,height,options);
        World.add(world, this.iron);

	}
	display()
	{
			var ironPos=this.iron.position;		
			push();
			translate(ironPos.x, ironPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			rect(0,0,this.width,this.height);

			pop();
	}

}