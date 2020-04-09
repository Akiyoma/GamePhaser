let gameSettings = {
    playerSpeed: 100,
}

const config = {
    width: 800,
    height: 600,
    backgroundColor: "#363B55",
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

let main = new Phaser.Game(config);
