import Player from "./Player";

export class NewGame extends Phaser.Scene {
    constructor() 
    {
        super('NewGame');
    }
    preload(){
        this.load.tilemapTiledJSON("map","/assets/map/Map.json")
        this.load.image("tilesetPNG", "/assets/map/tiles.png");
    }
    create(){
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('tiles', 'tilesetPNG');
        this.collisionLayer = map.createLayer('CollisionLayer', tileset);
        map.createLayer('NonExistentLayer', tileset)
        this.cameras.main.setZoom(0.9);
        this.player = new Player(this, 72, 566);
        // Hacemos que los tiles que pertenecen a la collisionLayer sean colisionables    
        this.collisionLayer.setCollisionByExclusion([-1]);
        // Establecemos la colisión entre el jugador y la collisionLayer
        this.physics.add.collider(this.player, this.collisionLayer);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setSize(960, 640);
    }
    findObjectsByClassInObjectsLayer(classParam, tilemap) {
  const result = [];
  tilemap.objects.forEach(function (element) {
    if (element.name === 'objectsLayer') {
      element.objects.forEach(function (element2) {
        if (element2.type === classParam) {
          element2.y -= tilemap.tileHeight;
          result.push(element2);
        }
      });
    }
  });
  return result;
}
update(){
    this.player.update();
}
}