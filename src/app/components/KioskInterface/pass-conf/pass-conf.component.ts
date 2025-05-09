import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-confirmation',
  templateUrl: './pass-conf.component.html',
  styleUrls: ['./pass-conf.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class PasswordConfirmationComponent {
  
  constructor(private router: Router) { }

  password: string = '';
  passwordVisible: boolean = false;

  goBack() {
    console.log('Go back');
    this.router.navigate(['./summ-receipt'])
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  confirmPassword() {
    console.log('Confirm Password:', this.password);
    // Implement your password confirmation logic here
  }
}