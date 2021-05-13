import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
  @Input() public list:string[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
