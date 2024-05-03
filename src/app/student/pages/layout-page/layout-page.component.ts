import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/services/auth.services';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {

  constructor(
    private authService: AuthService
  ){

  }
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [{
      label: 'Home',
      icon: 'pi pi-home',
      url: './student/home'
    },
    {
      label: 'Grades',
      icon: 'pi pi-fw pi-list-check',
      url: './student/grades'
    },
    {
      label: 'Enrollments',
      icon: 'pi pi-fw pi-pencil',
      url: './student/enrollments'
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off',
      url: './auth/login',
      command: () => this.quit()
    }
    ]
  }
  quit(){
    this.authService.logout();
  }

}
