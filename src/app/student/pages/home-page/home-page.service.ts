import { Injectable } from '@angular/core';
import { Image } from './image.interface';
import { Observable, of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class HomePageService {
  constructor() { }

  getImages(): Observable<Image[]>{
    const images: Image[] = [
      {
        itemImageSrc:"/assets/images/landingImages/home.jpg",
        thumbnailImageSrc:"/assets/images/landingImages/home_thumbnail.jpg",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/english.jpg",
        thumbnailImageSrc:"",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/french.jpg",
        thumbnailImageSrc:"",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/spanish.jpg",
        thumbnailImageSrc:"",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/german.jpg",
        thumbnailImageSrc:"",
        alt:"a",
        title:"Welcome",
      },

    ];
    return of(images);
  }


}
