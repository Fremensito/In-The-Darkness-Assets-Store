import { Scene } from "phaser"
import { Test } from "./Test";

export class InGameScene extends Scene{

    character?: Test;
    
    constructor ()
    {
        super("Game");
    }

    create(){
        this.textures.on("onload", ()=>{
            this.character = new Test(this);
        }, this)
        this.textures.addBase64("test", Test.sprite_64);
    }
}