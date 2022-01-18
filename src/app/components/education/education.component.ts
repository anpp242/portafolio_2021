import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map } from 'rxjs/operators';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public customOptions: OwlOptions;
  public education: any;

  constructor(
    private gradesService: GradesService
  ) {
    this.customOptions = {
      loop: true,
      dots: true,
      items: 4,
      autoplay: true,
      mouseDrag: true,
      autoHeight: true,
      touchDrag: true,
      pullDrag: true,
      navSpeed: 2500,
      //stagePadding: 30,
      margin: 15,
      autoplayHoverPause: true,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        400: {
          items: 2,
          dots: true,
        },
        760: {
          items: 2,
          dots: true,
        },
        1000: {
          items: 4,
          dots: true,
        }
      },
      nav: false
    };
  }

  async getGrades(){
    this.gradesService.getGrades().snapshotChanges().pipe(
      map( change =>
       change.map( c =>({
         id: c.payload['key'], ...c.payload.val()
       }))
      )
    ).subscribe( data =>{
     this.education = data;
     console.log('Education: ', data);
    } )
 }

  ngOnInit(): void {
    this.getGrades();
  }

}
