var GameState = function(game){};

GameState.prototype.preload = function() {
};

GameState.prototype.create = function() {
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  this.game.stage.backgroundColor = 0xCCBC50;
  
  this.sounds = {
    //step: this.game.add.audio("step"),
  };

  this.groups = {
    bg: this.game.add.group(),
    sprites: this.game.add.group()
  };

  var placeholder = this.groups.bg.add(new Phaser.Sprite(
      this.game, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, 'placeholder'));
  placeholder.anchor.setTo(0.5, 0.5);

  // Try to log in
  var authURL = server + 'user';//'user/username/' + username + '/' + password;
  $.ajax({
    context: this,
    crossDomain: true,
    url: authURL
  }).done(function(data) {
    console.log("done");
    console.log(data);
    for (var i = 0; i < data.users.length; i++) {
      this.groups.sprites.add(new RoomPlayer(
        this.game,
        this.game.world.randomX,
        this.game.world.randomY,
        data.users[i].username));
    }
  }).fail(function(data) {
    console.log("u fail");
    console.log(data);
  });
};

GameState.prototype.update = function() {
  for (var i = 0; i < this.groups.sprites.total; i++) {
    var sprite1 = this.groups.sprites.getAt(i);
    for (var j = i; j < this.groups.sprites.total; j++) {
      var sprite2 = this.groups.sprites.getAt(j);
      this.game.physics.arcade.collide(sprite1, sprite2);
    }
  }
};