import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private works : object;
  private dbWorks =  '/works';
  private myWorks : AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.myWorks = db.list(this.dbWorks);
  }

  getSkills(){
    return this.myWorks;
  }
}
