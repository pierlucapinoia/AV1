import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states-list',
  templateUrl: './states-list.component.html',
  styleUrls: ['./states-list.component.css']
})
export class StatesListComponent implements OnInit, OnDestroy {
  // @Output() stateWasSelected = new EventEmitter<State>();
  states: State[];
  
  constructor(private stateService: StateService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.states = this.stateService.getStates();

    this.stateService.needUpdate.subscribe((needUpdate: Boolean) => {
      if(needUpdate) {
        this.states = this.stateService.getStates();
      }   
    })
  }

  // onStateSelected(state: State) {
  //   this.stateWasSelected.emit(state);
  // }

  onNewState() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDeleteState(idState: number) {
    this.stateService.deleteState(idState);
  }

  ngOnDestroy() {
    this.stateService.needUpdate.unsubscribe();
  }
}
