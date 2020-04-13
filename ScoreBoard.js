class ScoreBoard extends Phaser.Scene {
    constructor() {
        super("scoreBoard");
    }

    create() {
        var scene = this.scene.get("playGame");
        this.scoreLabel = this.add.bitmapText(500, 20, "pixelFont", "SCORE " + scene.score, 30);
        this.scoreLabel.setDepth(1);
    }
}