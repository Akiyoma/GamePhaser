class HealthBar extends Phaser.GameObjects.Graphics {
    constructor(scene, x, y) {
        super(scene, x, y);
        scene.add.existing(this);
        this.x = x;
        this.y = y;
        this.value = 100;
        this.draw();
    }

    draw()
    {
        this.clear();
        this.fillStyle(0xffffff);
        this.fillRect(this.x, this.y, this.value, 5);

    }

    decrease (amount)
    {
        this.value -= amount;
        if (this.value < 0)
        {
            this.value = 0;
        }
        this.draw();
    }
}