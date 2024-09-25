import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonFab, IonFabButton, IonIcon, IonMenuButton, IonTabs, IonTabBar, IonTabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonTabButton, IonTabBar, IonTabs, IonIcon, IonFabButton, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class AdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
