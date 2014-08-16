var GameState = function(game){};

GameState.prototype.preload = function() {
};

GameState.prototype.create = function() {
  this.game.stage.backgroundColor = 0xCCBC50;
  
  this.sounds = {
    //step: this.game.add.audio("step"),
  };

  this.groups = {
    bg: this.game.add.group()
  };

  var placeholder = this.add.sprite(SCREEN_WIDTH / 2,
                                    SCREEN_HEIGHT / 2,
                                    'placeholder');
  this.game.physics.arcade.enable(placeholder);
  placeholder.anchor.setTo(0.5, 0.5);

  // Try to log in
  var authURL = server + 'user';//'user/username/' + username + '/' + password;
  $.ajax({
    crossDomain: true,
    url: authURL
  }).done(function(data) {
    console.log("done");
    console.log(data);
  }).fail(function(data) {
    console.log("u fail");
    console.log(data);
  });
};

GameState.prototype.update = function() {
};