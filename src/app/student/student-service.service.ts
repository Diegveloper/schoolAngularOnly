import { Injectable } from '@angular/core';
import { Course } from './interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getCurrentCourseInfo(id: string): Course{
    const c: Course = {
      id: 'ux1',
      listening: 8,
      useOfEnglish: 10,
      speaking: 6,
      reading: 7,
      writing: 9,
      course: 'Advanced 4',
      finalGrade: 80
    }
    return c;
  }
}
