class ScoreBoard extends Phaser.Scene {
    constructor() {
        super("scoreBoard");
    }

    create() {
        var scene = this.scene.get("playGame");
        this.scoreLabel = this.add.bitmapText(200, 250, "pixelFont", "SCORE " + scene.score, 55);
        this.add.bitmapText(160, 500, "pixelFont", "Press Space to restart the game", 40);
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.scene.start("startMenu");
        }
    }
}