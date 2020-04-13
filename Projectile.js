class Projectile extends Phaser.GameObjects.Sprite {
    constructor(scene, boss, type, number, projectile) {
        let x = boss.x;
        let y = boss.y;
        super(scene, x, y);
        this.group = scene.add.group();
        for (let i = 0; i < number; i++)
        {
            let projectileS = scene.add.sprite(x, y, projectile);
            scene.add.existing(projectileS);
            scene.physics.world.enableBody(projectileS);
            this.group.add(projectileS);
            boss.projectiles.add(projectileS);
        }

        this.tween = this.scene.tweens.addCounter({
            from: 0,
            to: config.height,
            duration: 6000,
            onComplete: function () {
                for (let i = 0; i < number; i++)
                {
                    let projectileS = this.group.getChildren()[i];
                    boss.projectiles.remove(projectileS);
                }
                this.destroy();
            },
            onCompleteScope: this,
        });
    }

    update() {
        let circle1 = Phaser.Actions.PlaceOnCircle(this.group.getChildren(), { x: this.x, y: this.y, radius: this.tween.getValue() });
    }
}