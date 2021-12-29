import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { map } from 'rxjs/operators';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  customOptions: OwlOptions;
  public works: any;

  constructor(
    private worksService: WorksService
  ) {

    this.customOptions = {
      loop: true,
      dots: true,
      items: 3,
      lazyLoad: true,
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      navSpeed: 1500,
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
          items: 3,
          dots: true,
        },
        1000: {
          items: 3,
          dots: true,
        }
      },
      nav: false
    };

  }

  async getExperiencesFire(){
    this.worksService.getSkills().snapshotChanges().pipe(
      map( change =>
       change.map( c =>({
         id: c.payload['key'], ...c.payload.val()
       }))
      )
    ).subscribe( data =>{
     this.works = data;
     console.log('Works: ', data);
    } )
 }

  ngOnInit(): void {
    this.getExperiencesFire();
  }


}
