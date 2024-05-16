export class Lose extends Phaser.Scene {
    constructor(){
        super('lose')
    }

    create(){
        this.add.image(0,0, 'lose').setOrigin(0,0)
        this.input.on("pointerdown", () => this.scene.start("Game"), this);
    }
}