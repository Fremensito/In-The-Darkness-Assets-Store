import { Component, Input, OnInit, afterRender} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, ModalController } from '@ionic/angular/standalone';
import { Game } from 'phaser';
import generateGameScene from '../phaser/sceneconfig';
import { InGameScene } from '../phaser/InGameScene';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PreviewPage implements OnInit {

  game:Game | undefined;
  @Input() spriteSheet?: string
  @Input() function?: string
  element?:HTMLElement|null

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.element = document.getElementById("app")
    console.log(this.element!.getBoundingClientRect().width, this.element!.getBoundingClientRect().height)
    this.game = generateGameScene(this.element!.getBoundingClientRect().width, this.element!.getBoundingClientRect().height);
    this.game.scene.add("Game", InGameScene, true, {animation:"walk", texture: this.spriteSheet});
  }

  close(){
    return this.modalCtrl.dismiss()
  }
}
