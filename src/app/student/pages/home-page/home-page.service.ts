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
        thumbnailImageSrc:"/assets/images/landingImages/english_thumbnail.jpg",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/french.jpg",
        thumbnailImageSrc:"/assets/images/landingImages/french_thumbnail.jpg",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/spanish.jpg",
        thumbnailImageSrc:"/assets/images/landingImages/spanish_thumbnail.jpg",
        alt:"a",
        title:"Welcome",
      },
      {
        itemImageSrc:"/assets/images/landingImages/german.jpg",
        thumbnailImageSrc:"/assets/images/landingImages/german_thumbnail.jpg",
        alt:"a",
        title:"Welcome",
      },

    ];
    return of(images);
  }


}
