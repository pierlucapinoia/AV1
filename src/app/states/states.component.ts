import { Component, OnInit } from '@angular/core';
import { State } from './state.model';
import { StateService } from './state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
  providers: [StateService]
})
export class StatesComponent implements OnInit {
  selectedState: State;
  
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.stateSelected
      .subscribe(
        (state: State) => {
          this.selectedState = state;
        }
      )
  }

}
