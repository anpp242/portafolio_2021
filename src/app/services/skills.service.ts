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
        keyWord: 'technologies'
      },
      {
        name: 'CSS',
        letter: 'C',
        keyWord: 'technologies'
      },
      {
        name: 'SASS',
        letter: 'S',
        keyWord: 'technologies'
      },
      {
        name: 'JavaScript',
        letter: 'J',
        keyWord: 'technologies'
      },
      {
        name: 'PHP',
        letter: 'P',
        keyWord: 'technologies'
      },
      {
        name: 'SQL',
        letter: 'S',
        keyWord: 'technologies'
      },
      {
        name: 'NodeJs',
        letter: 'N',
        keyWord: 'complementaries'
      },
      {
        name: 'Mongo DB',
        letter: 'M',
        keyWord: 'complementaries'
      },
      {
        name: 'MySQL',
        letter: 'M',
        keyWord: 'complementaries'
      },
      {
        name: 'MariaDB',
        letter: 'M',
        keyWord: 'complementaries'
      },
      {
        name: 'AWS Cloud',
        letter: 'A',
        keyWord: 'complementaries'
      },
      {
        name: 'GIT',
        letter: 'G',
        keyWord: 'complementaries'
      },
      {
        name: 'GitHub',
        letter: 'G',
        keyWord: 'complementaries'
      },
      {
        name: 'Java',
        letter: 'J',
        keyWord: 'technologies'
      },
      {
        name: 'Angular 2+',
        letter: 'A',
        keyWord: 'frameworks'
      },
      {
        name: 'jQuery',
        letter: 'J',
        keyWord: 'frameworks'
      },
      {
        name: 'Slim',
        letter: 'S',
        keyWord: 'frameworks'
      },
      {
        name: 'Jasmine',
        letter: 'J',
        keyWord: 'frameworks'
      },
      {
        name: 'Adobe Illustrator',
        letter: 'I',
        keyWord: 'design'
      },
      {
        name: 'Adobe Photoshop',
        letter: 'P',
        keyWord: 'design'
      },
      {
        name: 'Figma',
        letter: 'F',
        keyWord: 'design'
      },
      {
        name: 'Wordpress',
        letter: 'W',
        keyWord: 'complementaries'
      },
      {
        name: 'VS Code',
        letter: 'V',
        keyWord: 'tools'
      },
      {
        name: 'Postman',
        letter: 'P',
        keyWord: 'tools'
      },
      {
        name: 'MySQL Workbech',
        letter: 'M',
        keyWord: 'tools'
      },
      {
        name: 'Terminal',
        letter: 'T',
        keyWord: 'tools'
      },
      {
        name: 'Gulp',
        letter: 'G',
        keyWord: 'tools'
      },
      {
        name: 'NPM',
        letter: 'N',
        keyWord: 'tools'
      },
      {
        name: 'Composer',
        letter: 'C',
        keyWord: 'tools'
      },
    ];
  }

  getSkills(){
    return this.skills;
  }
}
