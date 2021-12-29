import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { map } from 'rxjs/operators';
import { Experiences } from 'src/app/models/experiences';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public customOptions: OwlOptions;
  public experiences: any;
  activeSlides: SlidesOutputData;
  slidesStore: any[];
  public contentWatch: any;
  public list: any;
  public experienceIndex = -1;

  constructor(
    private experiencesService: ExperiencesService
  ) {
    //this.experiences = experiencesService.getExperiences();

    this.customOptions = {
      loop: true,
      dots: true,
      items: 1,
      autoplay: false,
      mouseDrag: true,
      autoHeight: true,
      touchDrag: true,
      pullDrag: true,
      //navSpeed: 5000,
      stagePadding: 30,
      margin: -15,
      autoplayHoverPause: true,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        400: {
          items: 1,
          dots: true,
        },
        760: {
          items: 1,
          dots: true,
        },
        1000: {
          items: 1,
          dots: true,
        }
      },
      nav: false
    };
  }

  ngOnInit(): void {
    this.getExperiencesFire();
  }

  getPassedData(data: SlidesOutputData){
    setTimeout(()=>{
      this.activeSlides = data;
      this.contentWatch = this.experiences.filter(e => e.id === this.activeSlides.startPosition)[0];
    }, 300);
  }

  async getExperiencesFire(){
     this.list = this.experiencesService.getExperiencesFire().snapshotChanges().pipe(
       map( change =>
        change.map( c =>({
          id: c.payload['key'], ...c.payload.val()
        }))
       )
     ).subscribe( data =>{
      this.experiences = data;
      this.contentWatch = this.experiences.filter(e => e.id === 0)[0];
      console.log(data);
     } )
  }

  geData(event){
    //console.log('Event: ', event);
  }

}
