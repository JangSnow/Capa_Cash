import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.page').then((m) => m.HomePage) },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', loadComponent: () => import('./components/Main/login/login.component').then((m) => m.LoginComponent) },
  { path: 'employee-dashboard', loadComponent: () => import('./components/Main/employee-dashboard/employee-dashboard.component').then((m) => m.EmployeeDashboardComponent) },
  { path: 'forget-password', loadComponent: () => import('./components/Main/forget-password/forget-password.component').then((m) => m.ForgetPasswordComponent) },
  { path: 'reset-password', loadComponent: () => import('./components/Main/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent) },
  { path: 'qr-code', loadComponent: () => import('./components/Main/qr-code/qr-code.component').then((m) => m.QrGeneratorComponent) },
  { path: 'transactions', loadComponent: () => import('./components/Main/transactions/transactions.component').then((m) => m.TransactionsComponent)},
  { path: 'settings', loadComponent: ()=> import('./components/Main/settings/settings.component').then((m) => m.SettingsComponent)},
  { path: 'kiosk-dashboard', loadComponent: () => import('./components/KioskInterface/kiosk-dashboard/kiosk-dashboard.component').then((m) => m.KioskDashboardComponent) },
  { path: 'input-amount', loadComponent: () => import('./components/KioskInterface/input-amount/input-amount.component').then((m) => m.InputAmountPage) }
];
