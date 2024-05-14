export class Monster extends Phaser.Scene {
    constructor() {
        super("Monster");
    }

    create(){
        this.add.image(0,0,'monster').setOrigin(0,0)
    }
    update(){

    }
}