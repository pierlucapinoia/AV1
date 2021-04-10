import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { State } from '../state.model';
import { StateService } from '../state.service';

@Component({
  selector: 'app-states-detail',
  templateUrl: './states-detail.component.html',
  styleUrls: ['./states-detail.component.css']
})
export class StatesDetailComponent implements OnInit, OnDestroy {
  state: State;
  id: number;

  constructor(private stateService: StateService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.state = this.stateService.getState(this.id);
        }
      )
  }

  onEditState() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
   
  }
}
