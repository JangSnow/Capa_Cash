import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonFab, IonFabButton, IonTitle, IonHeader, IonMenu, IonToolbar, IonContent, IonButtons, IonMenuButton, IonApp, IonItem, IonList, IonFooter, IonAvatar, IonButton, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle} from "@ionic/angular/standalone";
import {Router} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
  standalone: true,
  imports:[IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonFab, IonFabButton, IonHeader, IonMenu, IonToolbar, IonContent, IonButtons, IonMenuButton, IonApp, IonItem, IonList, IonFooter, IonAvatar, IonButton, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeDashboardComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  logOutFunc(){
    console.log("User has successfully logged out!")
    this.router.navigate(['./login'])
  }

  generateQR(){
    console.log("Generating QR...");
    this.router.navigate(['./qr-code']);
  }

  fabQRFunc(){
    console.log("Generating QR...");
    this.router.navigate(['./qr-code']);
  }

  fabTransactionsFunc(){
    console.log("Directing to Transactions History");
    this.router.navigate(['./transactions'])
  }

  fabSettingsFunc(){
    console.log("Directing to settings");
    this.router.navigate(['./settings']);
  }

}
