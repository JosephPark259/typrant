import Phaser from  'phaser';

export default{
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
};

