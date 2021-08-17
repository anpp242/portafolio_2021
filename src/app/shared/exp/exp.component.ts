import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit, OnChanges {
  @Input() experience;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
