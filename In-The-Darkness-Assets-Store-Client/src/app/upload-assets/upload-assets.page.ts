import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonFab, IonFabButton, IonImg } from '@ionic/angular/standalone';
import { Camera, CameraResultType} from '@capacitor/camera';

@Component({
  selector: 'app-upload-assets',
  templateUrl: './upload-assets.page.html',
  styleUrls: ['./upload-assets.page.scss'],
  standalone: true,
  imports: [IonImg, IonFabButton, IonFab, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class UploadAssetsPage implements OnInit {
  imageURL = "";

  constructor() { 
  }

  ngOnInit() {
  }

  async uploadAssets(){
    await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.Base64
    }).then(p=> {
      this.imageURL = `data:${p.format}/;base64,${p.base64String!}`
      //Test.sprite_64 = "data:image/jpeg;base64,"+p.base64String!
    })
  }
}
