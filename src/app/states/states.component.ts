import { Component, OnDestroy, OnInit } from '@angular/core';
import { JsonReader } from '../JsonReader.service';
import { State } from './state.model';
import { StateService } from './state.service';
import { StateRestService } from './stateRest.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
  providers: [StateService, JsonReader, StateRestService]
})
export class StatesComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.stateService.stateSelected.unsubscribe();
  }

}
