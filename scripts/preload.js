var BasicGame = {};
BasicGame.Preload = function (game) {
    this.preloadBar = null;
};

BasicGame.Preload.prototype = {
    preload: function () {
        var barBack = this.add.sprite(SCREEN_WIDTH / 2,
                                      SCREEN_HEIGHT / 2,
                                      'bar_back');
        this.game.physics.arcade.enable(barBack);
        barBack.anchor.setTo(0.5, 0.5);
        this.preloadBar = this.add.sprite(SCREEN_WIDTH / 2,
                                          SCREEN_HEIGHT / 2,
                                          'bar');
        this.game.physics.arcade.enable(this.preloadBar);
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.game.load.image('placeholder', 'images/placeholder.jpg');
        //this.game.load.spritesheet('viking', 'images/viking.png', 16, 16);
        
        //this.game.load.audio('birds', 'sounds/birds.mp3');
    },

    create: function () {
        //this.preloadBar.cropEnabled = false;

        this.state.start('game');
    }
};
