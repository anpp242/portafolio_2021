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
        keyWord: 'tools'
      },
      {
        name: 'Mongo DB',
        letter: 'M',
        keyWord: 'tools'
      },
      {
        name: 'MySQL',
        letter: 'M',
        keyWord: 'tools'
      },
      {
        name: 'MariaDB',
        letter: 'M',
        keyWord: 'tools'
      },
      {
        name: 'AWS Cloud',
        letter: 'A',
        keyWord: 'tools'
      },
      {
        name: 'GIT',
        letter: 'G',
        keyWord: 'tools'
      },
      {
        name: 'GitHub',
        letter: 'G',
        keyWord: 'tools'
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
    ];
  }

  getSkills(){
    return this.skills;
  }
}
