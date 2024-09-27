import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonInput, IonItem, IonButton, IonText, IonImg, IonThumbnail, IonModal, ModalController } from '@ionic/angular/standalone';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Game } from 'phaser';
import generateGameScene from 'src/app/phaser/sceneconfig';
import { InGameScene } from 'src/app/phaser/InGameScene';
import { PreviewPage } from 'src/app/preview/preview.page';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.page.html',
  styleUrls: ['./new-character.page.scss'],
  standalone: true,
  imports: [IonModal, IonText, IonButton, IonItem, IonInput, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonImg, IonThumbnail]
})
export class NewCharacterPage implements OnInit {

  isModalOpen = true

  newCharacter:ICharacter = {
    characterClass:"",
    icon: "",
    defaultIdle: "",
    defaultWalk: "",
    qIcon:"",
    defaultQ:"",
    wIcon: "",
    defaultW: "",
    images: []
  }

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("hello")
  }
  
  async uploadIcon(){
    await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.Base64,
    }).then(p=> {
      this.newCharacter.icon =  `data:${p.format}/;base64,${p.base64String!}`
    })
  }

  async uploadWalking(){
    await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.Base64,
    }).then(p=> {
      this.newCharacter.defaultWalk =  `data:${p.format}/;base64,${p.base64String!}`
    })
  }

  async visualizeWalking(){
    if(this.newCharacter.defaultWalk){
      const modal = await this.modalCtrl.create({
        component: PreviewPage,
        componentProps: {
          spriteSheet: this.newCharacter.defaultWalk
        }
      });
      modal.present();
    }
  }

  setOpen(open: boolean) {
    this.isModalOpen = open
  }
}
