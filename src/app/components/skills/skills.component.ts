import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SkillsService } from '../../services/skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills : any;
  public filterSelected : string;

  constructor(
    private skillService: SkillsService
  ) {
    this.filterSelected = 'technologies'
  }

  ngOnInit(): void {
    // this.skills = Object.values(this.skillService.getSkills()).filter(i => i.keyWord === 'technologies');
    this.getExperiencesFire();
    //Object.keys(this.skills).filter(i => i['keyWord'] === 'technologies');
  }

  async getExperiencesFire(){
    this.skillService.getSkills().snapshotChanges().pipe(
      map( change =>
       change.map( c =>({
         id: c.payload['key'], ...c.payload.val()
       }))
      )
    ).subscribe( data =>{
      this.skills = data.filter(i => i.keyWord === 'technologies');
    } )
 }

  filterSkills( filters:string, event ){
    this.filterSelected = filters;
    // this.skills = [];
    if(filters !== 'all'){
      this.skillService.getSkills().snapshotChanges().pipe(
        map( change =>
         change.map( c =>({
           id: c.payload['key'], ...c.payload.val()
         }))
        )
      ).subscribe( data =>{
        this.skills = data.filter(i => i.keyWord === filters);
      } )
      return this.skills;
    }

    if(filters === 'all'){
      this.skillService.getSkills().snapshotChanges().pipe(
        map( change =>
         change.map( c =>({
           id: c.payload['key'], ...c.payload.val()
         }))
        )
      ).subscribe( data =>{
        this.skills = data.filter(i => i.keyWord === 'technologies');
      } )
      return this.skills
    }
  }

}
