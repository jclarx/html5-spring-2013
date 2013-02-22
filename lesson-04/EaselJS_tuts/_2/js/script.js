function init() {
	var canvas = document.getElementById("easel");
	var shape = new createjs.Shape();
	
/*	shape.graphics.beginLinearGradientFill(["yellow", "red", "purple"], [0, .5, 1], 50, 50, 50, 150);*/
	shape.graphics.beginRadialGradientFill(["yellow", "purple"], [0, 1], 100, 100, 0, 150, 150, 100)
	shape.graphics.rect(50, 50, 100, 100);

	var stage = new createjs.Stage(canvas);
	stage.addChild(shape);
	stage.update();

}