import { loadZone } from "../utils";
export class Spaceship extends Phaser.Scene {
    constructor() {
        super("Spaceship");
    }

    create(){
        this.add.image(0,0,'spaceship').setOrigin(0,0)
        loadZone(this, 100, 160, 370, 410, 'Monster');
        loadZone(this, 500, 160, 370, 410, 'Home');
    }
    update(){

    }
}