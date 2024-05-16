import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { Spaceship } from './scenes/Spaceship';
import { Home } from './scenes/Home';
import { Monster } from './scenes/Monster';
import { Lose } from './scenes/lose';
import { NewGame } from './scenes/NewGame'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
   physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: {
				y: 0,
			},
		},
	},
    scene: [Boot,Game,Lose, NewGame, Spaceship, Home, Monster]
};

export default new Phaser.Game(config);