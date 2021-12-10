import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  @Input() id: number;
  @Input() preview: string;
  @Input() title: string;
  @Input() team: string;
  @Input() tools: string;
  @Input() content: string;
  @Input() gallery: any;
  @Input() likes: number;
  public dataEmitter: Object;

  public like: boolean;
  constructor() {
    this.like = false;
  }

  ngOnInit(): void {
    if(localStorage.getItem('works')){
      if(JSON.parse(localStorage.getItem('works'))){
        let items = JSON.parse(localStorage.getItem('works'));
        if(items.find(e => e.id === this.id)){
          this.like = true;
        }
      }
    }
  }

  makeLike(){
    this.like = true;
    this.dataEmitter= {
      id: this.id,
      like: this.like
    }

    let localLikes = []

    if(localStorage.getItem('works')){
      localLikes = JSON.parse(localStorage.getItem('works'));

      let search = localLikes.find(e => e.id === this.id);

      if(!search){
        localLikes.push(this.dataEmitter);
        localStorage.setItem('works', JSON.stringify(localLikes));
      }
    }else{
      localStorage.setItem('works', JSON.stringify([this.dataEmitter]));
    }
  }

  makeUnLike(){
    this.like = false;
    let localLikes = JSON.parse(localStorage.getItem('works')).filter( e => e.id !== this.id);
    localLikes.sort(function (a, b) {
      return a.length - b.length;
    });
    localStorage.setItem('works', JSON.stringify(localLikes));
  }

}
