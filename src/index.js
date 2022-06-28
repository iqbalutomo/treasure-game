import Phaser from 'phaser';
import PlayScene from './scenes/PlayScene';

const config = {
  name: 'treasure-game',
  type: Phaser.AUTO,
  width: 640,
  height: 320,
  scene: [PlayScene],
};

export const game = new Phaser.Game(config);
