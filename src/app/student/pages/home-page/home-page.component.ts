import { Component } from '@angular/core';
import { StudentService } from '../../student-service.service';
import { HomePageService } from './home-page.service';
import { Image } from './image.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  images: any[] | undefined;
  constructor(
    private studentService: StudentService,
    private homePageService: HomePageService
  ){

  }

  ngOnInit(){
   this.homePageService.getImages().subscribe(
    items => {
      this.images = items;
    }
   )
   console.log(this.images);
  }
}
