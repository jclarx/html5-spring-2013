function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
//	shape.graphics.beginStroke("purple");
//	shape.graphics.beginLinearGradientStroke(["yellow", "red"], [0, 1], 50, 50, 250, 250);
	shape.graphics.beginRadialGradientStroke(["yellow", "red"], [0, 1], 50, 250, 0, 50, 250, 250);
	shape.graphics.setStrokeStyle(10, "round", "round");
	
	shape.graphics.moveTo(50, 50);
	shape.graphics.quadraticCurveTo(50, 175, 250, 250);
	shape.graphics.lineTo(50, 250);
	shape.graphics.closePath();
	

	stage.addChild(shape);
	stage.update();
}