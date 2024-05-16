class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
      super(scene, x, y, 'player');
      scene.add.existing(this);
      scene.physics.add.existing(this);
      this.body.gravity.y = 500;
      this.cursors = this.scene.input.keyboard.createCursorKeys();
              this.setSize(90, 100, true);

      
    }
    update(){
        
    if (this.cursors.left.isDown) {
        this.leftWalk()
    } else if (this.cursors.right.isDown) {
        this.rightWalk();
    } else if (this.cursors.down.isDown) {
        this.downWalk();
    } else if (this.cursors.up.isDown) {
        this.upWalk();
    } else {
        this.body.setVelocityX(0);
    }
  }
    leftWalk() {
    this.body.setVelocityX(-250);
  }
    downWalk() {
    this.body.setVelocityY(250);
  }
    upWalk() {
    this.body.setVelocityY(-250);
  }

  rightWalk() {
    this.body.setVelocityX(250);
  }
}

export default Player;