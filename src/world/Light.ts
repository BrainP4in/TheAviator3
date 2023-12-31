import {AmbientLight, DirectionalLight, HemisphereLight, Scene} from 'three';

export class Light {
  ambientLight: AmbientLight;
  hemisphereLight: HemisphereLight;
  shadowLight: DirectionalLight;

  constructor(scene: Scene) {
    this.hemisphereLight = new HemisphereLight(0xaaaaaa, 0x000000, 0.9);
    this.ambientLight = new AmbientLight(0xdc8874, 0.5);
    this.shadowLight = new DirectionalLight(0xffffff, 0.9);
    this.shadowLight.position.set(150, 350, 350);
    this.shadowLight.castShadow = true;
    this.shadowLight.shadow.camera.left = -400;
    this.shadowLight.shadow.camera.right = 400;
    this.shadowLight.shadow.camera.top = 400;
    this.shadowLight.shadow.camera.bottom = -400;
    this.shadowLight.shadow.camera.near = 1;
    this.shadowLight.shadow.camera.far = 1000;
    this.shadowLight.shadow.mapSize.width = 4096;
    this.shadowLight.shadow.mapSize.height = 4096;

    scene.add(this.hemisphereLight);
    scene.add(this.shadowLight);
    scene.add(this.ambientLight);
  }
}
