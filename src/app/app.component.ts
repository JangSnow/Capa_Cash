import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  qrCodeOutline, 
  documentTextOutline, 
  personOutline, 
  mailOutline,
  settingsOutline, 
  homeOutline,
  logOutOutline,
  arrowBackOutline,
  filterOutline,
  searchOutline,
  eyeOutline,
  backspaceOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})

export class AppComponent {
  constructor() {
    addIcons({
      'qr-code-outline': qrCodeOutline,
      'document-text-outline': documentTextOutline,
      'person-outline': personOutline,
      'mail-outline': mailOutline,
      'settings-outline': settingsOutline,
      'home-outline': homeOutline,
      'log-out-outline': logOutOutline,
      'arrow-back-outline': arrowBackOutline,
      'filter-outline': filterOutline,
      'search-outline': searchOutline,
      'eye-outline': eyeOutline,
      'backspace-outline': backspaceOutline
    })
  }
}
