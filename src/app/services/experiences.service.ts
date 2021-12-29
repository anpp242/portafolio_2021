import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiences } from '../models/experiences';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  private experiences : object;
  private dbExperiences =  '/experiences';
  private myExperiences : AngularFireList<Experiences>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.myExperiences = db.list(this.dbExperiences);
  }

  getExperiencesFire (){
    //console.log(this.myExperiences)
    return this.myExperiences;
  }

  getExperiences(){
    return this.experiences;
  }
}
