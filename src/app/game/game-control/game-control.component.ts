import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output("onnext") nextEvent = new EventEmitter<string>()
  constructor() { }

  next() {
    this.nextEvent.emit();
  }

  ngOnInit(): void {

  }

}
