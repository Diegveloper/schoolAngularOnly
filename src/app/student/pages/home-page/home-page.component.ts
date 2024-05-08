import { Component } from '@angular/core';
import { StudentService } from '../../student-service.service';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(
    private studentService: StudentService,
    private homePageService: HomePageService
  ){

  }

  ngOnInit(){
   
  }
}
