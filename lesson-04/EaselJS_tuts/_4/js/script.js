function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();

	shape.graphics.beginStroke("red");
	shape.graphics.setStrokeStyle(10, 1, 1);
	shape.graphics.drawEllipse(125, 25, 250, 150);
	
	shape.graphics.beginStroke("yellow");
	shape.graphics.setStrokeStyle(10, 1, 1);
	shape.graphics.drawCircle(100, 275, 75);
	
	shape.graphics.beginStroke("green");
	shape.graphics.setStrokeStyle(10, 1, 1);
	shape.graphics.arc(100, 100, 50, 0, -90*(Math.PI/180), 1);

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, 1, 1);
	shape.graphics.drawPolyStar(250, 250, 100, 3, 0, -90);
	
	stage.addChild(shape);
	stage.update();
}