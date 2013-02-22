function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 0, 1);
	
	shape.graphics.drawRoundRectComplex(50, 50, 250, 250, 50, 0, 50, 0);
	
	stage.addChild(shape);
	stage.update();
}