import { Scene } from "phaser"
import { Character } from "./Character";
import { Animation } from "../types/types";

export class InGameScene extends Scene{

    character?: Character;
    walkingTexture  = "";
    walkingSpriteSheet = "";

    animationCallbacks = new Map<string, Function>()
    
    constructor ()
    {
        super();
    }

    preload(){
        
    }

    create(){
        this.generateAnimationCallbacks()

        this.character = new Character(this)
        this.cameras.main.zoom = 3;
        this.cameras.main.centerOn(this.character.x, this.character.y)
        this.animationCallbacks.get((this.scene.settings.data as Animation).animation)!((this.scene.settings.data as Animation).texture, this)
        // this.textures.on("onload", ()=>{
        //     this.character = new Test(this);
        // }, this)
        // this.textures.addBase64("test", Test.sprite_64);
    }

    generateAnimationCallbacks(){
        this.animationCallbacks.set("walk", this.loadWalkingAnimation)
    }

    loadWalkingAnimation(b64: string, scene:Scene){

        scene.textures.on("onload", ()=>{
            scene.textures.on("addtexture", (key:string)=>{
                (scene as InGameScene).character?.generateWalkingAnimation(scene, "walking");
            }, scene)
            scene.textures.addSpriteSheet("", scene.textures.get("walking"), {frameWidth:64, frameHeight:64})
        }, scene)
        scene.textures.addBase64("walking", b64);
    }
}