const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#363B55",
    scene: [Scene1, Scene2, ScoreBoard],
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
}

let main = new Phaser.Game(config);
