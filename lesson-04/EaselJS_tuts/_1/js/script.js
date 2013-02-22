function init() {
	var canvas = document.getElementById("easel"),
	graphics = new createjs.Graphics()
	SIZE = 100;
	centerX = canvas.width/2,
	centerY = canvas.height/2;
	
	var shape = new createjs.Shape();
	shape.graphics.beginFill("rgb(162, 216, 255)");
	shape.graphics.drawRect(0, 0, SIZE, SIZE);
	shape.x = centerX;
	shape.y = centerY;
	shape.regX = SIZE/2;
	shape.regY = SIZE/2;
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		shape.rotation += 2;
		stage.update();
	});
	
	var stage = new createjs.Stage(canvas);
	stage.addChild(shape);
}