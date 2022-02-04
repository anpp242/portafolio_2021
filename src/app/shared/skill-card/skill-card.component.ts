import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() letter: string;
  @Input() name: string;
  @Input() percent: string;
  @Input() color: string;
  public stylePercent: string;

  constructor() {

  }

  ngOnInit(): void {
    this.stylePercent = `width: ${this.percent}%`;
  }

}
