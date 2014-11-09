Crafty.sprite(32, 48, "sprite.png", {
	spr_personaje: [0, 0]
});

window.onload = function() {
	Crafty.init(400, 300);
	
	Crafty.background('#AAAAAA');
	
	var personaje = Crafty.e('2D, Canvas, spr_personaje, SpriteAnimation, Fourway')
			.attr({x: 0, y: 0})
			.fourway(5);
			
	personaje.reel("abajo", 500, 0, 0, 3);
	personaje.reel("izquierda", 500, 0, 1, 3);
	personaje.reel("derecha", 500, 0, 2, 3);
	personaje.reel("arriba", 500, 0, 3, 3);
	
	personaje.animate("abajo", -1);
};
