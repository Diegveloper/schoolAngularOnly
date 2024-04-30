import { Injectable } from '@angular/core';
import { Course } from './interfaces/course.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Student } from './interfaces/student.interface';
import { environments } from '../../environments/environments';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getStudent(studentId: string):Observable< Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/students/${studentId}`)
    .pipe(catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error && error.error.message) {
      // Server-side error with a message
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Client-side or network error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
