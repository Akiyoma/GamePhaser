const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#000000",
    scene: [Preload, StartMenu, Game, ScoreBoard],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    fps: {
        target: 60,
        min: 60,
        forceSetTimeOut: true
    },
};

let main = new Phaser.Game(config);
