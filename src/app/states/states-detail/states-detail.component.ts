import { Component, Input, OnInit } from '@angular/core';
import { State } from '../state.model';

@Component({
  selector: 'app-states-detail',
  templateUrl: './states-detail.component.html',
  styleUrls: ['./states-detail.component.css']
})
export class StatesDetailComponent implements OnInit {
  @Input() state: State;

  constructor() { }

  ngOnInit(): void {
  }

}
