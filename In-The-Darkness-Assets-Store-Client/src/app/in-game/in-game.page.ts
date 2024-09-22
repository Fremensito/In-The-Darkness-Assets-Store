import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { Game, Scale, Types } from 'phaser';
import { InGameScene } from '../phaser/InGameScene';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.page.html',
  styleUrls: ['./in-game.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class InGamePage implements OnInit {

  game:Game | undefined;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.game = this.generateGameScene();
  }

  generateGameScene(){
    const config: Types.Core.GameConfig = {
      type: Phaser.CANVAS,
      width: window.innerWidth,
      height: window.innerHeight,
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
      scene: [
          InGameScene
          //Login
      ],
      pixelArt: true,
      backgroundColor: 0x05358e,
      //transparent:true
    };
    return new Game(config);
  }
}
