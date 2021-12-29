import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private dbSkills =  '/skills';
  private mySkills : AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.mySkills = db.list(this.dbSkills);
  }

  getSkills(){
    return this.mySkills;
  }
}
