'use strict'

export default class Item{

	constructor()
	{

	}

	init(sketch , obj)
	{
		this.sketch = sketch;
		this.type = 0;
	}


	draw()
	{
		this.sketch.fill(51);
		this.sketch.rect(0,0,100,10);
	}
}