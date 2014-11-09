window.onload = function() {
	Crafty.init(400, 300);
	
	Crafty.background('#AAAAAA');
	
	Crafty.e('2D, Canvas, Color')
			.attr({x: 0, y: 0, w: 50, h: 50})
			.color('#F00');
};
