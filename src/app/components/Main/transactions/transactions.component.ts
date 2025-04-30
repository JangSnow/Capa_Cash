import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Transaction {
  id: number;
  date: string;
  time: string;
  amount: number;
  type: string;
  description: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],  // Ensure FormsModule and IonicModule are imported
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [
    { id: 1, date: '2025-04-03', time: '10:56 AM', amount: 150.00, type: 'Credit', description: 'Payment received from John Doe' },
    { id: 2, date: '2025-04-01', time: '10:56 AM', amount: 150.00, type: 'Credit', description: 'Payment received from John Doe' },
    { id: 3, date: '2025-03-29', time: '1:56 PM', amount: 50.00, type: 'Debit', description: 'Payment to Starbucks' },
    { id: 4, date: '2025-03-28', time: '8:56 AM', amount: 200.00, type: 'Credit', description: 'Salary deposit' },
    { id: 5, date: '2024-12-28', time: '8:56 AM', amount: 200.00, type: 'Credit', description: 'Salary deposit' },
    { id: 6, date: '2024-12-23', time: '8:56 AM', amount: 200.00, type: 'Credit', description: 'Salary deposit' },
  ];

  groupedTransactions: any[] = [];
  filteredTransactions: any[] = [];
  selectedFilter: string = '';
  searchTerm: string = '';
  showFilter = false;

  constructor(private popoverController: PopoverController, private router: Router) {}

  ngOnInit() {
    this.filteredTransactions = [...this.transactions];
    this.groupTransactions();
  }

  backFunc() {
    console.log('Back button clicked!');
    this.router.navigate(['./employee-dashboard']);
  }

  async toggleFilter(event: Event) {
    const popover = await this.popoverController.create({
      component: FilterPopoverContent,  // Use the embedded filter popover component
      event: event,
      translucent: true,
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data) {
      this.selectedFilter = data.selectedFilter;
      this.applyFilter();
    }
  }

  filterTransactions() {
    const term = this.searchTerm.toLowerCase();
    let filteredTransactions = this.transactions;

    if (term) {
      filteredTransactions = this.transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(term) ||
        transaction.type.toLowerCase().includes(term) ||
        transaction.amount.toString().includes(term)
      );
    }

    this.filteredTransactions = filteredTransactions;
    this.groupTransactions();
  }

  applyFilter() {
    const today = new Date();
    let filteredTransactions = this.transactions;

    switch (this.selectedFilter) {
      case 'today':
        filteredTransactions = this.transactions.filter(transaction =>
          new Date(transaction.date).toDateString() === today.toDateString()
        );
        break;
      case 'lastWeek':
        const lastWeek = new Date();
        lastWeek.setDate(today.getDate() - 7);
        filteredTransactions = this.transactions.filter(transaction =>
          new Date(transaction.date) >= lastWeek
        );
        break;
      case 'last30Days':
        const last30Days = new Date();
        last30Days.setDate(today.getDate() - 30);
        filteredTransactions = this.transactions.filter(transaction =>
          new Date(transaction.date) >= last30Days
        );
        break;
      case 'lastYear':
        const lastYear = new Date();
        lastYear.setFullYear(today.getFullYear() - 1);
        filteredTransactions = this.transactions.filter(transaction =>
          new Date(transaction.date) >= lastYear
        );
        break;
    }

    this.filteredTransactions = filteredTransactions;
    this.groupTransactions();
  }

  groupTransactions() {
    const grouped: { [key: string]: any[] } = {};
    this.filteredTransactions.forEach(transaction => {
      if (!grouped[transaction.date]) {
        grouped[transaction.date] = [];
      }
      grouped[transaction.date].push(transaction);
    });

    this.groupedTransactions = Object.keys(grouped).map(date => ({
      date,
      transactions: grouped[date],
    }));

    console.log('Grouped Transactions:', this.groupedTransactions);
  }
}

// Popover content for the filter (inside the same component now)
@Component({
  selector: 'app-filter-popover-content',
  standalone: true,
  imports: [IonicModule, FormsModule],  // Ensure FormsModule is imported here for ngModel
  template: `
    <ion-item>
      <ion-label>Filter</ion-label>
    </ion-item>
    <ion-radio-group [(ngModel)]="selectedFilter">
      <ion-item><ion-radio value="today">Today</ion-radio></ion-item>
      <ion-item><ion-radio value="lastWeek">Last Week</ion-radio></ion-item>
      <ion-item><ion-radio value="last30Days">Last 30 days</ion-radio></ion-item>
      <ion-item><ion-radio value="lastYear">Last year</ion-radio></ion-item>
    </ion-radio-group>
    <div class="applyBtn-container">
      <ion-button class="applyBtn" (click)="applyFilter()">Apply</ion-button>
    </div>
  `,
  styleUrls: ['./transactions.component.scss'],
})
export class FilterPopoverContent {
  selectedFilter: string = '';

  constructor(private popoverController: PopoverController) {}

  applyFilter() {
    this.popoverController.dismiss({
      selectedFilter: this.selectedFilter,
    });
  }
}
