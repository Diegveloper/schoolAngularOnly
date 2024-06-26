import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GradesPageComponent } from './pages/grades-page/grades-page.component';
import { EnrollmentsPageComponent } from './pages/enrollments-page/enrollments-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from 'primeng/overlay';
import { MultiSelectModule } from 'primeng/multiselect';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    LayoutPageComponent,
    GradesPageComponent,
    EnrollmentsPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MenubarModule,
    PanelModule,
    ButtonModule,
    CardModule,
    TableModule,
    DropdownModule,
    FormsModule,
    OverlayModule,
    MultiSelectModule,
    GalleriaModule
  ]
})
export class StudentModule { }
