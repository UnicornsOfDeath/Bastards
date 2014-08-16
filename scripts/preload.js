var BasicGame = {};
BasicGame.Preload = function (game) {
    this.preloadBar = null;
};

BasicGame.Preload.prototype = {
    preload: function () {
        var barBack = this.add.sprite(SCREEN_WIDTH / 2,
                                      SCREEN_HEIGHT / 2,
                                      'bar_back');
        barBack.anchor.setTo(0.5, 0.5);
        this.preloadBar = this.add.sprite(SCREEN_WIDTH / 2,
                                          SCREEN_HEIGHT / 2,
                                          'bar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.game.load.image('placeholder', 'images/placeholder.jpg');
        this.game.load.spritesheet('panda', 'images/Panda_0.png', 32, 32);
        
        //this.game.load.audio('birds', 'sounds/birds.mp3');
    },

    create: function () {
        //this.preloadBar.cropEnabled = false;

        this.state.start('game');
    }
};
