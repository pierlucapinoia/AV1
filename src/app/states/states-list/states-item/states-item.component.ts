import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../state.model';

@Component({
  selector: 'app-states-item',
  templateUrl: './states-item.component.html',
  styleUrls: ['./states-item.component.css']
})
export class StatesItemComponent implements OnInit {
  @Input() state: State;
  @Output() stateToDelete = new EventEmitter<number>();
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  // onSelected() {
  //   // this.stateSelected.emit();
  //   this.stateService.stateSelected.emit(this.state);
  // }

  onDeleteClick() {
    this.stateToDelete.emit(this.state.idState);
  }

}
