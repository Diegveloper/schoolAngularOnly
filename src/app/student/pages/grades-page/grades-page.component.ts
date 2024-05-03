import { Component } from '@angular/core';
import { StudentService } from '../../student-service.service';
import { Course } from '../../interfaces/course.interface';
import { Student } from '../../interfaces/student.interface';
import { Grade } from '../../interfaces/student.interface';




interface Column{
  field: string;
  header: string;
}
interface Skill{
  name: string;
  grade: number;
  notes: string
}
interface CourseName{
  name: string;
}

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrl: './grades-page.component.scss'
})
export class GradesPageComponent {
  cols!: Column[];
  rows: Skill[] = [];
  course: string = "Advanced 5";
  grade: number = 80;
  showCourses: boolean = true;

  s!: Student;
  studentCurrentCourses: CourseName[] | undefined;
  selectedCourse?: CourseName;


  constructor(private studentService: StudentService){

  }

  cities!: City[];

  selectedCities!: City[];



  ngOnInit(){

    this.studentCurrentCourses = [
      {name:"german 2"},
      {name:"english 4"},
      {name:"English for businesses"}
    ]
    this.studentService.getStudent("23").subscribe((response) => {
      this.s = response;
      console.log(this.s);
      console.log(this.s.currentCourses[0].grades);
      for(var g of this.s.currentCourses[0].grades){

        this.rows.push({name:g.name, grade:g.value,notes:g.notes })
      }
    });



    this.cols = [
      {field:'name', header: 'Skill'},
      {field:'grade', header: 'Grade'},
      {field:'notes', header: 'Notes'}
    ]



  }
}
