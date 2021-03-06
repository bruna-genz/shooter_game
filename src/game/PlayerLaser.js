import 'phaser';
import Entity from './Entities';

export default class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserPlayer');
    this.body.velocity.y = -200;
    this.body.setMass(1);
  }
}