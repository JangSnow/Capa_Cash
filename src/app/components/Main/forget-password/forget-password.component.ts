import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonAlert } from "@ionic/angular/standalone";
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  imports:[IonInput, IonItem, IonAlert, CommonModule]
})
export class ForgetPasswordComponent {
  public alertButtons = [
    {
      text: 'Submit',
      handler: (data: any) => {
        this.verifyCode(data.code); // Validate entered code
      }
    }
  ];

  public alertInputs = [
    {
      name: 'code',
      type: 'number',
      placeholder: 'Enter the 6-digit code',
      min: 1,
      max: 999999
    }
  ];

  private correctCode: string = '123456'; // Example verification code

  constructor(private router: Router) {}

  verifyCode(enteredCode: string) {
    if (enteredCode === this.correctCode) {
      console.log('Code authentication successful.');
      this.router.navigate(['/reset-password']); // ✅ Redirect to Reset Password Page
    } else {
      console.log('Invalid code! Please try again.');
    }
  }
}