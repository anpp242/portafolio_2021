import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private grades : object;

  constructor() {
    this.grades = [
      {
        id: 0,
        place: 'Manuela Beltrán University',
        grade: 'Software Engineer',
        date: '2015 - 2021'
      },
      {
        id: 1,
        place: 'CIDE',
        grade: 'Tec. Graphic Designer',
        date: '2007 - 2009'
      },
      {
        id: 1,
        place: 'English First (EF)',
        grade: 'Elemental Level (A1)',
        date: '2020 - 2021'
      },
      {
        id: 2,
        place: 'Udemy',
        grade: 'Enhance Angular',
        date: '2021'
      },
      {
        id: 3,
        place: 'Udemy',
        grade: 'Unit Testing with Jasmine and Karma',
        date: '2021'
      },
      {
        id: 3,
        place: 'SCRUMStudy',
        grade: 'Scrum Fundamentals Certified',
        date: '2021'
      },
      {
        id: 4,
        place: 'Udemy',
        grade: 'TypeScript',
        date: '2018'
      },
      {
        id: 5,
        place: 'Udemy',
        grade: 'JavaScript Fundamentals',
        date: '2018'
      },
      {
        id: 6,
        place: 'Udemy',
        grade: 'Angular 2 - Crea webApps desde cero',
        date: '2018'
      },
    ];
  }

  getGrades(){
    return this.grades;
  }
}
