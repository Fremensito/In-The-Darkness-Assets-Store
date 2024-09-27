import { Game, Scale, Types } from "phaser";
import { InGameScene } from "./InGameScene";

export default function generateGameScene(width: number, height:number ){
    const config: Types.Core.GameConfig = {
        type: Phaser.CANVAS,
        width: width,
        height: height,
        dom: {  
            createContainer: true
        },
        fps: {
            target: 60
        },
        parent: 'game-container',
        scale: {
            mode: Scale.FIT,
            autoCenter: Scale.CENTER_BOTH,
            autoRound: true
        },
        pixelArt: true,
        backgroundColor: 0x05358e,
        //transparent:true
    };
    return new Game(config);
}

