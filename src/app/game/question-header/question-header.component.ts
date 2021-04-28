import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-question-header',
  templateUrl: './question-header.component.html',
  styleUrls: ['./question-header.component.css']
})
export class QuestionHeaderComponent implements OnInit {
  @Input() question:any
  constructor() { }

  ngOnInit(): void {
  }

}
