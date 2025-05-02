import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kiosk-dashboard',
  templateUrl: './kiosk-dashboard.component.html',
  styleUrls: ['./kiosk-dashboard.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class KioskDashboardComponent  implements OnInit {
  selectedCategory = '';
  selectedCanteen = '';

  getPaymentFunc() {
    console.log('Selected Category:', this.selectedCategory);
    console.log('Selected Canteen:', this.selectedCanteen);
    
    this.router.navigate(['./input-amount']);
  }

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

  onCategoryChange(ev: any) {
    this.selectedCategory = ev.detail.value;
  }

  onCanteenChange(ev: any) {
    this.selectedCanteen = ev.detail.value;
  }
}
