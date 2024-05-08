import { Component } from '@angular/core';
import { StudentService } from '../../student-service.service';
import { Course } from '../../interfaces/course.interface';
import { Student } from '../../interfaces/student.interface';
import { Grade } from '../../interfaces/student.interface';
import { map } from 'rxjs';





interface Column {
  field: string;
  header: string;
}
interface Skill {
  name: string;
  grade: number;
  notes: string
}
interface CourseName {
  name: string;
  id?: number;
  grades: Skill[];
  finalGrade?: number;
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
  course?: string;
  finalgrade!: number;
  showCourses: boolean = false;

  public student?: Student;

  studentCurrentCourses?: CourseName[] | undefined;
  selectedCourse?: CourseName;
  userId: string = "";


  constructor(private studentService: StudentService) {

  }



  ngOnInit() {


    this.studentService.getStudent(this.getLocalStorageUser()).subscribe(
      student => {
        this.student = student;
        if (student.currentCourses.length > 1) {
          this.showCourses = true;
        }
        console.log(student.currentCourses);
        this.studentCurrentCourses = student.currentCourses.map(
          c => ({
            name: c.language + " " + c.level,
            id: c.id,
            grades: c.grades.map(g => ({
              name: g.name,
              grade: g.value,
              notes: g.notes
            }))
          })
        )
        if(student && student.currentCourses.length == 1){
          let name = student.currentCourses[0].language + " " + student.currentCourses[0].level;
          let grade = student.currentCourses[0].finalGrade
          let skills: Skill[] = student.currentCourses[0].grades.map(
            c => ({
              name: c.name,
              grade: c.value,
              notes: c.notes
            })
          )
          this.selectedCourse = {name:name, finalGrade:grade, grades:skills }
          if (skills) {
            this.rows = skills?.map(x => ({
              name: x.name,
              grade: x.grade,
              notes: x.notes
            }));
          }
          this.finalgrade = grade;


        }





        return;
      }
    )

    this.cols = [
      { field: 'name', header: 'Skill' },
      { field: 'grade', header: 'Grade' },
      { field: 'notes', header: 'Notes' }
    ]



  }

  onItemSelected(course: CourseName) {

    console.log(this.student);
    let c = this.student?.currentCourses.find(c => c.id == course.id)?.grades;
    if (c) {
      this.rows = c?.map(x => ({
        name: x.name,
        grade: x.value,
        notes: x.notes
      }));
    }

    let f = this.student?.currentCourses.find(c => c.id == course.id)?.finalGrade;
    if(f){
      this.finalgrade = f;
    }
    console.log(c)
  }



  private getLocalStorageUser(): string {
    let x: string = "";
    let tmp: string | null | undefined = "";
    const id = localStorage.getItem("userId");
    if (id != null) {
      tmp = id.toString();
      x = tmp;
    }
    return x;
  }



}
