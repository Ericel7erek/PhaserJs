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
        
        this.face0.setInteractive().on('pointerdown', () => this.clickedFace(this.face0));
        this.face1.setInteractive().on('pointerdown', () => this.clickedFace(this.face1));
        this.face2.setInteractive().on('pointerdown', () => this.clickedFace(this.face2));
        
        
        this.spriteSolution = this.add.sprite(470, 190, 'face0');

        this.score = 0;
        this.scoreTXT = this.add.text(90, 120, this.score, {
        fontFamily: 'font1',
        fontSize: 60,
        color: '#00ff00',
        align: 'right'
        });
        this.scoreTXT.setOrigin(.5, 0);
        this.add.text(120, 150, 'pts', {
        fontFamily: 'font1',
        fontSize: 24,
        color: '#00ff00'
        });
        this.timeLimit = 10;
        this.timing= this.timeLimit ;
        this.timeTXT = this.add.text(835, 130, this.timing, {
        fontFamily: 'font1',
        fontSize: 64,
        color: '#00ff00',
        });
        this.timeTXT.rotation = 20*Math.PI/180;
        this.timer();
        
    }
    timer() {
    --this.timing;
    this.timeTXT.setText(this.timing);
    if (this.timing <= 0) {
        this.scene.start("lose");
    } else {
        this.time.delayedCall( 1000, this.timer, [], this);
    }
}
    clickedFace(face) {
    if (face.texture.key === this.spriteSolution.texture.key) {
        this.timing = 10;
        this.newTurn();
        ++this.score;
        this.scoreTXT.setText(this.score);
    } else {
        --this.timing
    }
    }
    newTurn(){
        const numbers = [0, 1, 2];
        this.randomizeArray(numbers );
        
        this.face0.setTexture(`face${numbers [0]}`);
        this.face1.setTexture(`face${numbers [1]}`);
        this.face2.setTexture(`face${numbers [2]}`);
    
        const choosedFace = 'face' + numbers[Math.floor(Math.random() * 3)];
        this.spriteSolution.setTexture(choosedFace);
    }
    
    randomizeArray(array) {
        return array.sort(() => Math.floor(Math.random() * 3) -1);
}
    update()
    {

    }
}
