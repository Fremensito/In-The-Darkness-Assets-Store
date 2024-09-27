import { GameObjects, Scene } from "phaser";
import { CharacterAnimator } from "./CharacterAnimator";

export class Character extends GameObjects.Sprite{
    
    walkingAnimations = {
        front: "scythe girl walking front",
        right: "scythe girl walking right",
        left: "scythe girl walking left",
        back: "scythe girl walking back"
    }

    constructor(scene: Scene, ){
        super(scene, 50, 50, "walking");
        scene.add.existing(this)
    }

    generateWalkingAnimation(scene:Scene, texture:string){
        console.log("xd")
        CharacterAnimator.generateAnimations(scene,this.walkingAnimations.front, texture, 0, 5, 8);
        CharacterAnimator.generateAnimations(scene,this.walkingAnimations.right, texture, 6, 11, 8);
        CharacterAnimator.generateAnimations(scene,this.walkingAnimations.left, texture, 12, 17, 8);
        CharacterAnimator.generateAnimations(scene,this.walkingAnimations.back, texture, 18, 23, 8);
        this.anims.play({
            key: this.walkingAnimations.front,
            repeat: -1
        })
    }
}