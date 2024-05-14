export class Home extends Phaser.Scene {
    constructor() {
        super("Home");
    }

    create(){
        this.add.image(0,0,'home').setOrigin(0,0)
    }
    update(){

    }
}