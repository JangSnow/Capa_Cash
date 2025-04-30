import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonItem, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  imports: [IonInput, IonItem]
})
export class ResetPasswordComponent {
  constructor(private router: Router) {}

  resetPassword() {
    // Implement password reset logic here (e.g., API call)
    console.log('Password reset successfully!');
    this.router.navigate(['/login']); // Redirect after reset (change to desired page)
  }
}
