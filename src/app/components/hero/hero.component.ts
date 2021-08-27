import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public name : string;
  public title : string;
  public enginner : string;
  public role : string;
  public developer : string;
  public classes : string;
  public classes2 : string;
  public menuStatus : boolean;

  constructor() {
    this.name = 'Pava';
    this.role = 'Omar';
    this.classes = 'pava';
    this.classes2 = 'omar';
    this.menuStatus = false;
  }

  ngOnInit(): void {
    setInterval(()=>{
      setTimeout(()=>{
        switch(this.name){
          case 'Pava':
            this.name = 'Enginner'
            this.classes = 'enginner'
            break;

          case 'Enginner':
            this.name = 'Developer'
            this.classes = 'developer'
            break;

          case 'Developer':
            this.name = 'Pava'
            this.classes = 'pava'
            break;
        }
      },1500);
    }, 4000);

    setInterval(()=>{
      setTimeout(()=>{
        switch(this.role){
          case 'Omar':
            this.role = 'Software'
            this.classes2 = 'software'
            break;

          case 'Software':
            this.role = 'Frontend'
            this.classes2 = 'frontend'
            break;

          case 'Frontend':
            this.role = 'Omar'
            this.classes2 = 'omar'
            break;
        }
      },1500);
    }, 4000);
  }

  openMenu(){
    if(this.menuStatus === false){
      this.menuStatus = true;
    }else{
      this.menuStatus = false;
    }
    console.log(this.menuStatus)
  }

}
