class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(10, 10, "background");
        this.background.setOrigin(0,0);
        this.background.setDepth(0);
        this.scorebackground = this.add.image(0, 0, "scorebackground");
        this.scorebackground.setOrigin(0,0);
        this.scorebackground.setDepth(1);
        this.keyhelp = this.add.image(550, 300, "keyhelp").setDepth(1);
        this.keyhelpLabel = this.add.bitmapText(640, 300, "pixelFont", "Movement", 30).setDepth(1);
        this.score = 0;
        this.scoreLabel = this.add.bitmapText(500, 20, "pixelFont", "SCORE " + this.score, 30);
        this.scoreLabel.setDepth(1);
        this.physics.world.setBoundsCollision();
        this.player = new Player(this, 200, 400);
        this.boss = new Boss(this, 200, 100);
        this.life = 4;
        this.lifeLabel = this.add.bitmapText(500, 60, "pixelFont", "LIFE " + this.life, 30);
        this.lifeLabel.setDepth(1);
    }

    update() {
        this.player.update();
        this.boss.update();
        this.physics.add.overlap(this.player.beams, this.boss, this.hitBoss, null, this);
        this.physics.add.overlap(this.boss.projectiles, this.player, this.hitPlayer, null, this);
    }

    hitBoss(beam, boss) {
        beam.destroy();
        boss.healthBar.decrease(1);
        this.increaseScore(1);
    }

    increaseScore(amount) {
        this.score += amount;
        this.scoreLabelUpdate()
    }

    scoreLabelUpdate() {
        this.scoreLabel.setText("SCORE " + this.score);
    }

    hitPlayer(obj1,obj2) {
        if (obj1.alpha == 1) {
            obj1.setAlpha(0);
            this.life -= 1;
            this.lifeLabel.setText("LIFE " + this.life);
        }
    }
}