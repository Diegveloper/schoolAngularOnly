import { Injectable } from '@angular/core';
import { Image } from './image.interface';
import { Observable, of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class HomePageService {
  constructor() { }

  getImages(): Observable<Image[]>{
    const images: Image[] = [
      {
        itemImageSrc:"assets/images/landinImages/home.jpg",
        thumbnailImageSrc:"",
        alt:"a",
        title:"Welcome",
      }
    ];
    return of(images);
  }


}
