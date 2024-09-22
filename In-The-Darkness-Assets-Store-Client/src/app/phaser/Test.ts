import { GameObjects, Scene } from "phaser";

export class Test extends GameObjects.Sprite{
    static sprite_64: string

    constructor(scene: Scene, ){
        super(scene, 50, 50, "test");
        scene.add.existing(this)
    }
}