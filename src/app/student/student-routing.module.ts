import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GradesPageComponent } from './pages/grades-page/grades-page.component';
import { EnrollmentsPageComponent } from './pages/enrollments-page/enrollments-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from '../auth/guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[

      {path: 'home', component: HomePageComponent,canActivate: [authGuard]},
      {path: 'grades', component: GradesPageComponent,canActivate: [authGuard]},
      {path: 'enrollments', component: EnrollmentsPageComponent,canActivate: [authGuard]},
      {path: '', component:HomePageComponent,canActivate: [authGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
