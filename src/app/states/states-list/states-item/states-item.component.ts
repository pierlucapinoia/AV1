import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../state.model';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-states-item',
  templateUrl: './states-item.component.html',
  styleUrls: ['./states-item.component.css']
})
export class StatesItemComponent implements OnInit {
  @Input() state: State;
  // @Output() stateSelected = new EventEmitter<void>();

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

  onSelected() {
    // this.stateSelected.emit();
    this.stateService.stateSelected.emit(this.state);
  }

}
