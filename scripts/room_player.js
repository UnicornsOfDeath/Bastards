var ROOM_PLAYER_SPEED = 200;
var RoomPlayer = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'panda');
  this.animations.add('down', [0, 1, 2], 4);
  this.animations.add('up', [3, 4, 5], 4);
  this.animations.add('right', [6, 7, 8], 4);
  this.animations.add('left', [9, 10, 11], 4);

  game.physics.arcade.enable(this);

  var velX = Math.random() * ROOM_PLAYER_SPEED;
  this.body.velocity.setTo(velX, ROOM_PLAYER_SPEED - velX);
  this.body.collideWorldBounds = true;
  this.body.bounce.set(1);
};
RoomPlayer.prototype = Object.create(Phaser.Sprite.prototype);
RoomPlayer.prototype.constructor = RoomPlayer;
