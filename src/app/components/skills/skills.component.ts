import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills : object;

  constructor(
    private skillService: SkillsService
  ) {
  }

  ngOnInit(): void {
    this.skills = Object.values(this.skillService.getSkills()).filter(i => i.keyWord === 'technologies');
  }

  filterSkills( filters:string ){
    this.skills = [];
    console.log(Object.values(this.skills).filter(i => i.keyWord === filters));

    if(filters !== 'all'){
      this.skills = this.skillService.getSkills();
      return this.skills = Object.values(this.skills).filter(i => i.keyWord === filters);
    }

    if(filters === 'all'){
      this.skills = this.skillService.getSkills();
    }
  }

}
