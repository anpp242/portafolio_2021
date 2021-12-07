import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills : object;

  constructor() {
    this.skills = [
      {
        name: 'HTML',
        letter: 'H',
        keyWord: 'technologies',
        percent: 100
      },
      {
        name: 'CSS',
        letter: 'C',
        keyWord: 'technologies',
        percent: 90
      },
      {
        name: 'SASS',
        letter: 'S',
        keyWord: 'technologies',
        percent: 60
      },
      {
        name: 'JavaScript',
        letter: 'J',
        keyWord: 'technologies',
        percent: 90
      },
      {
        name: 'PHP',
        letter: 'P',
        keyWord: 'technologies',
        percent: 90
      },
      {
        name: 'SQL',
        letter: 'S',
        keyWord: 'technologies',
        percent: 90
      },
      {
        name: 'NodeJs',
        letter: 'N',
        keyWord: 'complementaries',
        percent: 50
      },
      {
        name: 'Mongo DB',
        letter: 'M',
        keyWord: 'complementaries',
        percent: 100
      },
      {
        name: 'MySQL',
        letter: 'M',
        keyWord: 'complementaries',
        percent: 90
      },
      {
        name: 'MariaDB',
        letter: 'M',
        keyWord: 'complementaries',
        percent: 70
      },
      {
        name: 'AWS Cloud',
        letter: 'A',
        keyWord: 'complementaries',
        percent: 60
      },
      {
        name: 'GIT',
        letter: 'G',
        keyWord: 'complementaries',
        percent: 80
      },
      {
        name: 'GitHub',
        letter: 'G',
        keyWord: 'complementaries',
        percent: 90
      },
      {
        name: 'Java',
        letter: 'J',
        keyWord: 'technologies',
        percent: 30
      },
      {
        name: 'Angular 2+',
        letter: 'A',
        keyWord: 'frameworks',
        percent: 90
      },
      {
        name: 'jQuery',
        letter: 'J',
        keyWord: 'frameworks',
        percent: 90
      },
      {
        name: 'Slim',
        letter: 'S',
        keyWord: 'frameworks',
        percent: 40
      },
      {
        name: 'Jasmine',
        letter: 'J',
        keyWord: 'frameworks',
        percent: 70
      },
      {
        name: 'Adobe Illustrator',
        letter: 'I',
        keyWord: 'design',
        percent: 90
      },
      {
        name: 'Adobe Photoshop',
        letter: 'P',
        keyWord: 'design',
        percent: 90
      },
      {
        name: 'Figma',
        letter: 'F',
        keyWord: 'design',
        percent: 80
      },
      {
        name: 'Wordpress',
        letter: 'W',
        keyWord: 'complementaries',
        percent: 90
      },
      {
        name: 'VS Code',
        letter: 'V',
        keyWord: 'tools',
        percent: 90
      },
      {
        name: 'Postman',
        letter: 'P',
        keyWord: 'tools',
        percent: 80
      },
      {
        name: 'MySQL Workbech',
        letter: 'M',
        keyWord: 'tools',
        percent: 80
      },
      {
        name: 'Terminal',
        letter: 'T',
        keyWord: 'tools',
        percent: 100
      },
      {
        name: 'Gulp',
        letter: 'G',
        keyWord: 'tools',
        percent: 50
      },
      {
        name: 'NPM',
        letter: 'N',
        keyWord: 'tools',
        percent: 60
      },
      {
        name: 'Composer',
        letter: 'C',
        keyWord: 'tools',
        percent: 70
      },
    ];
  }

  getSkills(){
    return this.skills;
  }
}
