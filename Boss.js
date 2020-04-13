class Boss extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "boss");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.projectiles = scene.add.group();
        this.healthBar = new HealthBar(scene, 10, 10);
        this.attackChoice = 1;
        /*this.group1 = scene.add.group();
        for (let i = 0; i < 16; i++)
        {
            this.group1.add(new Projectile(this.scene, this, "projectile"));
        }
        this.i = 4;
        this.tween = this.scene.tweens.addCounter({
            from: 0,
            to: 600,
            duration: 6000,
            delay: 0,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: false
        });
        this.endPreload = false;*/
        this.attackGr1 = scene.add.group();
        this.scene.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.attackGr1.add(new Projectile(scene, this, "circle", 16, "projectile"));
            },
            loop: true
        })
    }

    update() {
        if (this.attackChoice == 1) {
            for (let i = 0; i < this.attackGr1.getChildren().length; i++) {
                let attack = this.attackGr1.getChildren()[i];
                attack.update();
            }
            /*let group1 = this.scene.add.group();


            let circle1 = Phaser.Actions.PlaceOnCircle(group1.getChildren(), { x: this.x, y: this.y, radius: this.tween.getValue() });

            let endTimer = this.scene.time.addEvent({
                delay: 6000,
                callback: this.attack2,
                callbackScope: this,
                loop: false
            });*/


        }

    }
}