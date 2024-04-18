import { Component } from '@angular/core';
import { StudentService } from '../../student-service.service';
import { Course } from '../../interfaces/course.interface';

interface Column{
  field: string;
  header: string;
}
interface Skill{
  name: string;
  grade: number;
  notes: string;
}

@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrl: './grades-page.component.scss'
})
export class GradesPageComponent {
  cols!: Column[];
  rows!: Skill[];
  course: string = "Advanced 5";
  grade: number = 80;

  c!: Course;

  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.c = this.studentService.getCurrentCourseInfo('123');

    this.cols = [
      {field:'name', header: 'Skill'},
      {field:'grade', header: 'Grade'},
      {field:'notes', header: 'Notes'}
    ]
    this.rows = [
      {name:'Use of English', grade: this.c.useOfEnglish, notes:'Practice Phrasal verbs'},
      {name:'Listening', grade:this.c.listening, notes:'Well done'},
      {name:'Speaking', grade:this.c.speaking, notes:''},
      {name:'Reading', grade:this.c.reading, notes:''},
      {name:'Writing', grade:this.c.writing, notes:'Punctuation'},

    ]
  }
}
