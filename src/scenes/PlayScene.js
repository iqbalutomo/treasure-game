import Phaser from 'phaser';
import { game } from '..';
import BackgroundImg from '../assets/background.png';
import '../style.css';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PlayScene' });
  }

  preload() {
    this.load.image('bg', BackgroundImg);
  }

  create() {
    const bg = this.add.image(0, 0, 'bg');
    bg.setOrigin(0, 0);
  }
}
