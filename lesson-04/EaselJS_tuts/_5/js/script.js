function init() {
	var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	shape = new createjs.Shape();
	
	shape.graphics.f("turquoise").r(-50, -50, 100, 100);
//	shape.regX = 100;
//	shape.regY = 100;
	
	shape.x = 100;
	shape.y = 100;
	shape.skewX = 200;


	stage.addChild(shape);
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		shape.rotation += 8;
		shape.scaleX *= 1.002;
		shape.scaleY *= 1.01;
			shape.alpha *= .97;
shape.skewX += 5;

		shape.x ++;
		shape.y ++;
		stage.update();
	});
//	
//	stage.update();
}