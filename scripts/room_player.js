var ROOM_PLAYER_SPEED = 200;
var RoomPlayer = function(game, x, y, name) {
  Phaser.Sprite.call(this, game, x, y, 'panda');
  var frameRate = 10;
  this.animations.add('down', [0, 1, 2], frameRate);
  this.animations.add('up', [3, 4, 5], frameRate);
  this.animations.add('right', [6, 7, 8], frameRate);
  this.animations.add('left', [9, 10, 11], frameRate);

  game.physics.arcade.enable(this);

  var velX = Math.random() * ROOM_PLAYER_SPEED;
  this.body.velocity.setTo(velX, ROOM_PLAYER_SPEED - velX);
  this.body.collideWorldBounds = true;
  this.body.bounce.set(1);

  var textStyle = { font: "18px Arial", fill: "#000000", align: "center" };
  this.name = game.add.text(0, 0, name, textStyle);
};
RoomPlayer.prototype = Object.create(Phaser.Sprite.prototype);
RoomPlayer.prototype.constructor = RoomPlayer;

RoomPlayer.prototype.update = function() {
  this.name.x = this.x;
  this.name.y = this.y - 16;

  // find the dominant direction
  var dominantDir = null;
  var fastestSpeed = 0;
  if (this.body.velocity.x > fastestSpeed) {
    dominantDir = 'right';
    fastestSpeed = this.body.velocity.x;
  }
  if (-this.body.velocity.x > fastestSpeed) {
    dominantDir = 'left';
    fastestSpeed = -this.body.velocity.x;
  }
  if (this.body.velocity.y > fastestSpeed) {
    dominantDir = 'down';
    fastestSpeed = this.body.velocity.y;
  }
  if (-this.body.velocity.y > fastestSpeed) {
    dominantDir = 'up';
    fastestSpeed = -this.body.velocity.y;
  }
  this.animations.play(dominantDir);
};