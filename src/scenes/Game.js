import { Scene } from 'phaser';
import { loadZone } from '../utils';



export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        // this.add.image(0,0,'space').setOrigin(0,0)
        this.add.image(0,0,'back').setOrigin(0,0)

        // loadZone(this, 140, 10, 440, 400, 'Spaceship');
        // loadZone(this, 590, 240, 370, 410, 'Home');
        this.face0 = this.add.sprite(225, 425, 'face0').setScale(0.5, 0.5);
        this.face1 = this.add.sprite(480, 460, 'face1').setScale(0.5, 0.5);
        this.face2 = this.add.sprite(740, 425, 'face2').setScale(0.5, 0.5);
    }
    update()
    {

    }
}
