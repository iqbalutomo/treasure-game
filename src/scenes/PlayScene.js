import Phaser from 'phaser';
import { game } from '..';
import LogoPhaser from '../assets/download.png';
import '../style.css';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    this.load.image('logo', LogoPhaser);
  }

  create() {
    this.add.image(game.config.width / 2, game.config.height / 2, 'logo');
  }
}
