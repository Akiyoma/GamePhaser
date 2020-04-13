class StartMenu extends Phaser.Scene {
    constructor() {
        super("startMenu");
    }

    create() {
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.add.bitmapText(80, 250, "pixelFont", "Press Space to start the game", 60);
        this.add.bitmapText(200, 500, "pixelFont", "Game created by TROUVAT Jeremy", 30);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.scene.start("playGame");
        }
    }
}