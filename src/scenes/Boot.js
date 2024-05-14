import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.image('space', '/assets/images/space.jpg');
        this.load.image('home', '/assets/images/home.jpg');
        this.load.image('spaceship', '/assets/images/spaceship.jpg');
        this.load.image('monster', '/assets/images/monster.jpg');
        this.load.image('back', '/assets/images/back.jpg');
        this.load.image('face0', '/assets/images/face0.png');
        this.load.image('face1', '/assets/images/face1.png');
        this.load.image('face2', '/assets/images/face2.png');

    }

    create ()
    {
        this.scene.start('Game');
    }
}
