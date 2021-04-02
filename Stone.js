class Stone{
	constructor(x,y,w,h)
	{
	var options = {
restitution:0.8,
friction:0.9,
density:12
	}
		this.x=x;
		this.y=y;
		this.width=w
        this.height=h
		this.stone=Bodies.rectangle(this.x, this.y,width,height,options);
        World.add(world, this.stone);

	}
	display()
	{
			var stonePos=this.stone.position;		
			push();
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0,0,this.width,this.height);

			pop();
	}

}