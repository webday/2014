Crafty.sprite(32, 48, "sprite.png", {
	spr_personaje: [0, 0]
});

window.onload = function() {
	Crafty.init(400, 300);
	
	Crafty.background('url(fondo.jpg)');
	
	var personaje = Crafty.e('2D, Canvas, spr_personaje, SpriteAnimation, Fourway, Keyboard')
			.attr({x: 0, y: 0})
			.fourway(5);
	
	var amigo = Crafty.e('2D, Canvas, spr_personaje, SpriteAnimation')
			.attr({x: 200, y: 250});
			
	personaje.reel("abajo", 500, 0, 0, 3);
	personaje.reel("izquierda", 500, 0, 1, 3);
	personaje.reel("derecha", 500, 0, 2, 3);
	personaje.reel("arriba", 500, 0, 3, 3);
	
	amigo.reel("abajo", 500, 3, 0, 3);
	amigo.reel("arriba", 500, 3, 3, 3);
	amigo.animate("abajo", -1);
	
	amigo.caminar = false;
	amigo.bind("EnterFrame", function() {
		if (this.caminar) {
			this.y -= 0.5;
		}
	});
	
	personaje.bind("KeyDown", function() {
		if (this.isDown("LEFT_ARROW")) { this.animate("izquierda", -1); }
		else if (this.isDown("RIGHT_ARROW")) { this.animate("derecha", -1); }
		else if (this.isDown("UP_ARROW")) { this.animate("arriba", -1); }
		else if (this.isDown("DOWN_ARROW")) { this.animate("abajo", -1); }
		else if (this.isDown("SPACE")) { 
			amigo.animate("arriba", -1);
			amigo.caminar = true;
		}
	});
};
