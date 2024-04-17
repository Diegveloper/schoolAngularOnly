import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GradesPageComponent } from './pages/grades-page/grades-page.component';
import { EnrollmentsPageComponent } from './pages/enrollments-page/enrollments-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      {path: '', component: HomePageComponent},
      {path: 'grades', component: GradesPageComponent},
      {path: 'enrollments', component: EnrollmentsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
