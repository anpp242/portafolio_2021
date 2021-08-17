import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  @Input() grade: any;

  constructor() { }

  ngOnInit(): void {
  }

}
