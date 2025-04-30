import { Component, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from 'angularx-qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, QRCodeComponent],
  template: `
    <ion-app>
      <ion-content>
        <div class="roundHdr">
          <ion-icon class="backBtn" name="arrow-back-outline" (click)="backFunc()"></ion-icon>
          <div class="logo-container">
            <img src="./assets/capacash-logo.png">
          </div>
        </div>
      </ion-content>
    
      <div class="cardContainer">
        <div class="card">
          <ion-card>        
            <ion-card-content class="qr-code">
              <qrcode *ngIf="qrData()" [qrdata]="qrData() || ''" [width]="300" [errorCorrectionLevel]="'M'"></qrcode>
              <p>QR CODE: {{ qrData() }}</p>
              <p>{{ currentDate() }}</p>
            </ion-card-content>
          
            <div class="btnContainer">
              <ion-button class="qrBtn" shape="round" (click)="generateQR()">Generate New</ion-button>
              <ion-button class="qrBtn" shape="round" (click)="clearQR()">Clear</ion-button>
            </div>
          </ion-card>
        </div>
      </div>
    </ion-app>
  `,
  styleUrl: 'qr-code.component.scss',
})
export class QrGeneratorComponent implements OnInit{
  
  constructor(private router: Router) { }
  ngOnInit() {}
  
  text = signal('hello world');
  qrData = signal<string>('0123200120');
  currentDate = signal<string>('');

  private getFormattedDate(): string {
    const now = new Date();
    return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
  }

  generateQR() {
    if (this.text()) {
      this.qrData.set(this.text());
      this.currentDate.set(this.getFormattedDate());
    }
  }

  clearQR() {
    this.qrData.set('');
    this.currentDate.set('');
  }

  backFunc() {
    console.log('Back button clicked');
    this.router.navigate(['./employee-dashboard'])
  }
}
