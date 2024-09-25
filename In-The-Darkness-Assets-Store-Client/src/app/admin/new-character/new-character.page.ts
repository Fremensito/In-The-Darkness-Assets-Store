import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.page.html',
  styleUrls: ['./new-character.page.scss'],
  standalone: true,
  imports: [IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class NewCharacterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
