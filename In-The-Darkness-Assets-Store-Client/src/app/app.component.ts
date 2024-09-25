import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonTitle, IonContent, IonToolbar, IonButtons, IonHeader, IonMenu, IonMenuButton, IonSplitPane, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, imageOutline, accessibilityOutline} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonSplitPane, IonHeader, IonButtons, IonToolbar, IonContent, IonTitle, IonApp, IonRouterOutlet, IonMenu, IonMenuButton, RouterLink],
})
export class AppComponent {
  constructor() {
    addIcons({add, imageOutline, accessibilityOutline})
  }
}
