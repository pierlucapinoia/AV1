import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css']
})
export class StatesListComponent implements OnInit {
  // @Output() stateWasSelected = new EventEmitter<State>();
  states: State[];
  
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.states = this.stateService.getStates();
  }

  // onStateSelected(state: State) {
  //   this.stateWasSelected.emit(state);
  // }
}
