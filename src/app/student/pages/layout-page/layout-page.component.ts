import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [{
      label: 'Home',
      icon: 'pi pi-home',
      url: './student'
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
      icon: 'pi pi-fw pi-power-off'
    }
    ]
  }
}
