class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        let shipplayer = scene.add.image(0, 0, "shipplayer");
        super(scene, x, y, "player");
        this.speed = 240;
        this.shipplayer = shipplayer;
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.body.setCollideWorldBounds(true);
        this.cursorKey = scene.input.keyboard.createCursorKeys();
        scene.time.addEvent({
            delay: 300,
            callback: this.shootBeam,
            callbackScope: this,
            loop: true
        });
        this.beams = scene.add.group();
    }

    update() {
        this.mapBorder();
        this.movePlayer();
        this.shipplayer.x = this.x;
        this.shipplayer.y = this.y;
        for (let i = 0; i < this.beams.getChildren().length; i++) {
            let beam = this.beams.getChildren()[i];
            beam.update();
        }
    }

    movePlayer() {
        this.hInput = this.cursorKey.right.isDown - this.cursorKey.left.isDown;
        this.vInput = this.cursorKey.down.isDown - this.cursorKey.up.isDown;
        this.body.setVelocityX(0);
        this.body.setVelocityY(0);
        if (this.hInput != 0 || this.vInput != 0) {
            this.body.setVelocityX(this.hInput*this.speed);
            this.body.setVelocityY(this.vInput*this.speed);
        }
    }

    shootBeam() {
        new Beam(this.scene, this);
    }

    mapBorder() {
        if (this.x > 480 - this.body.width/2) {
            this.x = 480 - this.body.width/2;
        }
        if (this.x < 10 + this.body.width/2) {
            this.x = 10 + this.body.width/2;
        }
        if (this.y > 590 - this.body.height/2) {
            this.y = 590 - this.body.height/2;
        }
        if (this.y < 10 + this.body.height/2) {
            this.y = 10 + this.body.height/2;
        }
    }
}