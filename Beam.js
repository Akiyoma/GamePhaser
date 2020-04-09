class Beam extends Phaser.GameObjects.Sprite {
    constructor(scene, player) {
        let x = scene.player.x;
        let y = scene.player.y - 16;
        super(scene, x, y, "beam");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;
        player.beams.add(this);
    }

    update() {
        if (this.y < 50) {
            this.destroy();
        }
    }
}