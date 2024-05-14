export const loadZone = (scene, x, y, width, height, nextScene) => {
  const zone = scene.add.rectangle(x, y, width, height, 0xff0000, 0.5);
  zone.setOrigin(0);
  zone.setInteractive();
  zone.once("pointerdown", () => scene.scene.start(nextScene));
};