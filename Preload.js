class Preload extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "./assets/images/background.png");
        this.load.image("scorebackground", "./assets/images/scorebackground.png");
        this.load.image("player", "assets/sprites/player.png");
        this.load.image("shipplayer", "./assets/sprites/shipplayer.png");
        this.load.image("boss", "./assets/sprites/boss.png");
        this.load.image("beam", "./assets/sprites/beam.png");
        this.load.image("projectile", "./assets/sprites/projectile.png");
        this.load.image("keyhelp", "./assets/images/keyhelp.png");
        this.load.bitmapFont("pixelFont", "./assets/font/font.png", "./assets/font/font.xml");
    }

    create() {
        this.add.text(10, 10, "Loading...");
        this.scene.start("startMenu");
    }
}