import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class SettingsComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  backFunc(){
    this.router.navigate(['./employee-dashboard'])
  }

}
