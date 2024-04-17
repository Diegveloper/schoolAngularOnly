import { Component } from '@angular/core';

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
  ngOnInit(){
    this.cols = [
      {field:'name', header: 'Skill'},
      {field:'grade', header: 'Grade'},
      {field:'notes', header: 'Notes'}
    ]
    this.rows = [
      {name:'Use of English', grade:3, notes:'Practice Phrasal verbs'},
      {name:'Listening', grade:10, notes:'Well done'},
      {name:'Speaking', grade:8, notes:''},
      {name:'Reading', grade:7, notes:''},
      {name:'Writing', grade:8, notes:'Punctuation'},

    ]
  }
}
