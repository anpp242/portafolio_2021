import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private dbGrades =  '/grades';
  private myGrades : AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.myGrades = db.list(this.dbGrades);
  }

  getGrades(){
    return this.myGrades;
  }
}
