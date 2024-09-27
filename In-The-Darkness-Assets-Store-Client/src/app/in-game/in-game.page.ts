import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { Game, Scale, Types } from 'phaser';
import { InGameScene } from '../phaser/InGameScene';
import generateGameScene from '../phaser/sceneconfig';

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
    //this.game = generateGameScene();
  }
}
