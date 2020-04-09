class Projectile extends Phaser.GameObjects.Sprite {
    constructor(scene, boss, sprite) {
        let x = boss.x;
        let y = boss.y;
        super(scene, x, y, sprite);
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        boss.projectiles.add(this);
    }

    update() {

    }
}