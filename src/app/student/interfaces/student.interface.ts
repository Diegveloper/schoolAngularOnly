export interface Student{
  id: number
  currentCourses: Course[],
  previousCourses: Course[],
  firstName: string
  middleName: string
  lastName: string
  mothersLastName: string
  address: string
  phone: string

}

export interface Course{
  id: number
  language: string
  level: string
  teacher: string
  startDate: string
  endDate: string
  grades: Grade[]
  finalGrade: number
  schedule: string
  classRoom: number
}

export interface Grade{
  name: string,
  value: number,
  notes: string

}
