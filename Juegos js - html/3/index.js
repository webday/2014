Crafty.sprite(32, 48, "sprite.png", {
	spr_personaje: [0, 0]
});

window.onload = function() {
	Crafty.init(400, 300);
	
	Crafty.background('#AAAAAA');
	
	Crafty.e('2D, Canvas, spr_personaje, Fourway')
			.attr({x: 0, y: 0})
			.fourway(5);
};
