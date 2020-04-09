class Boss extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "boss");
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.projectiles = scene.add.group();
        this.healthBar = new HealthBar(scene, 10, 10);
        this.attackChoice = 1;
        this.group1 = scene.add.group();
        for (let i = 0; i < 16; i++)
        {
            this.group1.add(new Projectile(this.scene, this, "projectile"));
        }
        this.i = 4;
        this.tween = this.scene.tweens.addCounter({
            from: 260,
            to: 0,
            duration: 3000,
            delay: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });
    }

    update() {
        if (this.attackChoice == 1) {
            this.attack1();
        }

        Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), { x: this.x, y: this.y, radius: this.tween.getValue() });
    }

    attack1() {
        this.attackChoice = 2;
        let timer = this.scene.time.addEvent({
            delay: 3000,                // ms
            callback: this.attack2,
            //args: [],
            callbackScope: this,
            repeat: this.i
        });
    }

    attack2() {
        console.log("ok");

    }
}