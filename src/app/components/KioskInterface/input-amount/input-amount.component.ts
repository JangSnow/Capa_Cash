import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input-amount',
  templateUrl: './input-amount.component.html',
  styleUrls: ['./input-amount.component.scss'],
  imports: [IonicModule, FormsModule],
  standalone: true,
})
export class InputAmountPage {
  amount: string = '15.00';

  appendToAmount(value: string) {
    if (this.amount === '0.00') {
      this.amount = value;
    } else {
      this.amount += value;
    }
    if (value === '.' && this.amount.includes('.')) {
      this.amount = this.amount.slice(0, -1);
    }
  }

  clearAmount() {
    this.amount = this.amount.slice(0, -1);
    if (this.amount === '') {
      this.amount = '0.00';
    }
  }

  continuePayment() {
    console.log('Continue with amount:', this.amount);
    // Add your payment logic here
  }
}