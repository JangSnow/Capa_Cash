import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summ-receipt',
  templateUrl: './summ-receipt.component.html',
  styleUrls: ['./summ-receipt.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SummaryTransactionComponent {

  constructor(private router: Router){}

  merchantName: string = 'Canteen Store #1';
  paymentDate: string = 'Payment on Dec 2, 2020';
  amount: string = '15.00';
  paymentFeeMessage: string = 'Payment fee ₱2 has been applied';
  paymentMethod: string = 'CapaCash';
  paymentDetails: string = 'Dom Rejano #Emp123';

  goBack() {
    console.log('Go back');
    this.router.navigate(['./input-amount'])
  }

  showHelp() {
    console.log('Show help');
    // Implement your help logic here
  }

  proceedToPay() {
    console.log('Proceed to Pay');
    // Implement your payment processing logic here
  }
}